import PropTypes from 'prop-types';
import { Fragment, useMemo } from 'react';

// MATERIAL - UI
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Stack from '@mui/material/Stack';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

// THIRD - PARTY
import { useTable, useGroupBy, useExpanded } from 'react-table';

// PROJECT IMPORTS
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import { CSVExport } from 'components/third-party/ReactTable';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import { roundedMedian, useControlledState } from 'utils/react-table';

// ASSETS
import { ArrowDown2, ArrowRight2, LayoutMaximize, Maximize1 } from 'iconsax-react';

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      initialState: { groupBy: ['status'] }
    },
    useGroupBy,
    useExpanded,
    (hooks) => {
      hooks.useControlledState.push(useControlledState);
      hooks.visibleColumns.push((columns, { instance }) => {
        if (!instance.state.groupBy.length) {
          return columns;
        }
        return [
          {
            id: 'expander',
            Header: ({ allColumns, state: { groupBy } }) =>
              groupBy.map((columnId, index) => {
                const column = allColumns.find((d) => d.id === columnId);
                const groupIcon = column.isGrouped ? <Maximize1 size={18} /> : <LayoutMaximize size={18} />;

                return (
                  <Fragment key={index}>
                    <Stack
                      direction="row"
                      spacing={1.25}
                      alignItems="center"
                      {...column.getHeaderProps()}
                      sx={{ display: 'inline-flex', '&:not(:last-of-type)': { mr: 1.5 } }}
                    >
                      {column.canGroupBy ? (
                        <Box
                          sx={{ color: column.isGrouped ? 'error.main' : 'primary.main', fontSize: '1rem' }}
                          {...column.getGroupByToggleProps()}
                        >
                          {groupIcon}
                        </Box>
                      ) : null}
                      <Typography variant="subtitle1">{column.render('Header')}</Typography>
                    </Stack>
                  </Fragment>
                );
              }),
            Cell: ({ row }) => {
              if (row.canExpand) {
                const groupedCell = row.allCells.find((d) => d.isGrouped);
                const collapseIcon = row.isExpanded ? <ArrowDown2 size={16} /> : <ArrowRight2 size={16} />;

                return (
                  <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-start">
                    <Box
                      sx={{ pl: row.depth * 2, pr: 0.5, fontSize: '0.75rem', color: 'text.secondary' }}
                      {...row.getToggleRowExpandedProps()}
                    >
                      {collapseIcon}
                    </Box>
                    <Box>{groupedCell.render('Cell')}</Box>
                    <Box>({row.subRows.length})</Box>
                  </Stack>
                );
              }
              return null;
            }
          },
          ...columns
        ];
      });
    }
  );

  const firstPageRows = rows.slice(0, rows.length);
  let groupedData = [];
  if (rows.filter((row) => row.original).length) {
    groupedData = rows.map((row) => row.original).filter((row) => row !== undefined);
  } else {
    groupedData = [];
    rows.forEach((row) => {
      if (row.subRows.length) {
        groupedData.push({ ...row.values });
        row.subRows.forEach((subRow) => {
          if (subRow.subRows.length) {
            groupedData.push({ ...subRow.values });
            subRow.subRows.forEach((innerRow) => {
              groupedData.push({
                ...innerRow.values,
                age: undefined,
                status: undefined
              });
            });
          } else {
            groupedData.push({
              ...subRow.values,
              age: undefined
            });
          }
        });
      } else {
        groupedData.push({ ...row.values });
      }
    });
  }

  return (
    <MainCard
      content={false}
      title="Grouping With Single Column"
      secondary={
        <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Legend /> <CSVExport data={groupedData} filename={'grouping-single-column-table.csv'} />
        </Stack>
      }
    >
      <Stack direction="row" spacing={2} sx={{ p: 2.5, display: { xs: 'flex', sm: 'none' } }} justifyContent="flex-end">
        <Legend /> <CSVExport data={groupedData} filename={'grouping-single-column-table.csv'} />
      </Stack>
      <ScrollX sx={{ maxHeight: 600 }}>
        <Table {...getTableProps()}>
          <TableHead sx={{ position: 'sticky', top: -1, zIndex: 1199 }}>
            {headerGroups.map((headerGroup, i) => (
              <Fragment key={i}>
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, index) => {
                    const groupIcon = column.isGrouped ? <Maximize1 /> : <LayoutMaximize />;
                    return (
                      <Fragment key={index}>
                        <TableCell {...column.getHeaderProps([{ className: column.className }])}>
                          <Stack direction="row" spacing={1.15} alignItems="center" sx={{ display: 'inline-flex' }}>
                            {column.canGroupBy ? (
                              <Box
                                sx={{ color: column.isGrouped ? 'error.main' : 'primary.main', fontSize: '1rem' }}
                                {...column.getGroupByToggleProps()}
                              >
                                {groupIcon}
                              </Box>
                            ) : null}
                            <Box>{column.render('Header')}</Box>
                          </Stack>
                        </TableCell>
                      </Fragment>
                    );
                  })}
                </TableRow>
              </Fragment>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {firstPageRows.map((row, index) => {
              prepareRow(row);
              return (
                <Fragment key={index}>
                  <TableRow {...row.getRowProps()}>
                    {row.cells.map((cell, i) => {
                      let bgcolor = 'background.paper';
                      if (cell.isAggregated) bgcolor = 'warning.lighter';
                      if (cell.isGrouped) bgcolor = 'success.lighter';
                      if (cell.isPlaceholder) bgcolor = 'error.lighter';

                      return (
                        <Fragment key={i}>
                          <TableCell {...cell.getCellProps([{ className: cell.column.className }])} sx={{ bgcolor }}>
                            {cell.isAggregated ? cell.render('Aggregated') : cell.isPlaceholder ? null : cell.render('Cell')}
                          </TableCell>
                        </Fragment>
                      );
                    })}
                  </TableRow>
                </Fragment>
              );
            })}
          </TableBody>
        </Table>
      </ScrollX>
    </MainCard>
  );
}

ReactTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  row: PropTypes.object,
  value: PropTypes.string
};

// ==============================|| LEGEND ||============================== //

function Legend() {
  return (
    <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-end">
      <Chip color="warning" variant="light" label="Aggregated" />
    </Stack>
  );
}

// ==============================|| REACT TABLE - GROUPING COLUMN ||============================== //

function GroupingColumnTable({ data }) {
  const columns = useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
        aggregate: 'count',
        Aggregated: ({ value }) => `${value} Person`,
        disableGroupBy: true
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
        disableGroupBy: true
      },
      {
        Header: 'Email',
        accessor: 'email',
        disableGroupBy: true
      },
      {
        Header: 'Age',
        accessor: 'age',
        className: 'cell-right',
        aggregate: 'average',
        Aggregated: ({ value }) => `${value} (avg)`
      },
      {
        Header: 'Visits',
        accessor: 'visits',
        className: 'cell-right',
        aggregate: 'sum',
        Aggregated: ({ value }) => `${value} (total)`,
        disableGroupBy: true
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => {
          switch (value) {
            case 'Complicated':
              return <Chip color="error" label="Complicated" size="small" variant="light" />;
            case 'Relationship':
              return <Chip color="success" label="Relationship" size="small" variant="light" />;
            case 'Single':
            default:
              return <Chip color="info" label="Single" size="small" variant="light" />;
          }
        }
      },
      {
        Header: 'Profile Progress',
        accessor: 'progress',
        aggregate: roundedMedian,
        Aggregated: ({ value }) => `${value} (med)`,
        disableGroupBy: true,
        Cell: ({ value }) => <LinearWithLabel value={value} sx={{ minWidth: 75 }} />
      }
    ],
    []
  );

  return <ReactTable columns={columns} data={data} />;
}

GroupingColumnTable.propTypes = {
  data: PropTypes.array,
  value: PropTypes.string
};

export default GroupingColumnTable;
