'use client';

import PropTypes from 'prop-types';
import { useMemo, Fragment } from 'react';

// MATERIAL - UI
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// THIRD - PARTY
import { useTable, useResizeColumns, useBlockLayout } from 'react-table';

// PROJECT IMPORTS
import ScrollX from 'components/ScrollX';
import makeData from 'data/react-table';
import MainCard from 'components/MainCard';
import { CSVExport } from 'components/third-party/ReactTable';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';

// ASSETS
import { Minus } from 'iconsax-react';

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data }) {
  const defaultColumn = useMemo(
    () => ({
      minWidth: 120,
      width: 155,
      maxWidth: 400
    }),
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useBlockLayout,
    useResizeColumns
  );

  const sortingRow = rows.slice(0, 9);
  let sortedData = sortingRow.map((d) => d.original);
  Object.keys(sortedData).forEach((key) => sortedData[Number(key)] === undefined && delete sortedData[Number(key)]);

  return (
    <Table {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup, index) => (
          <Fragment key={index}>
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <Fragment key={i}>
                  <TableCell
                    {...column.getHeaderProps([{ className: column.className }])}
                    sx={{ '&:hover::after': { bgcolor: 'primary.main', width: 2 } }}
                  >
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                      {column.render('Header')}
                      <Box {...column.getResizerProps()} sx={{ position: 'absolute', right: -6, opacity: 0, zIndex: 1 }}>
                        <Minus style={{ transform: 'rotate(90deg)' }} />
                      </Box>
                    </Stack>
                  </TableCell>
                </Fragment>
              ))}
            </TableRow>
          </Fragment>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {sortingRow.map((row, i) => {
          prepareRow(row);
          return (
            <Fragment key={i}>
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell, index) => (
                  <Fragment key={index}>
                    <TableCell {...cell.getCellProps([{ className: cell.column.className }])}>{cell.render('Cell')}</TableCell>
                  </Fragment>
                ))}
              </TableRow>
            </Fragment>
          );
        })}
      </TableBody>
    </Table>
  );
}

ReactTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array
};

// ==============================|| REACT TABLE - COLUMN RESIZING ||============================== //

const ColumnResizingTable = () => {
  const data = useMemo(() => makeData(40), []);

  const columns = useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName'
      },
      {
        Header: 'Last Name',
        accessor: 'lastName'
      },
      {
        Header: 'Email',
        accessor: 'email'
      },
      {
        Header: 'Age',
        accessor: 'age',
        className: 'cell-center'
      },
      {
        Header: 'Role',
        accessor: 'role'
      },
      {
        Header: 'Visits',
        accessor: 'visits',
        className: 'cell-right'
      },
      {
        Header: 'country',
        accessor: 'country'
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
        Header: 'Progress',
        Footer: 'Progress',
        accessor: 'progress',
        Cell: ({ value }) => <LinearWithLabel value={value} sx={{ minWidth: 120 }} />
      }
    ],
    []
  );

  return (
    <MainCard title="Column Resizing" content={false} secondary={<CSVExport data={data} filename={'resizing-column-table.csv'} />}>
      <ScrollX>
        <ReactTable columns={columns} data={data} />
      </ScrollX>
    </MainCard>
  );
};

ColumnResizingTable.propTypes = {
  value: PropTypes.string
};

export default ColumnResizingTable;
