'use client';

import PropTypes from 'prop-types';
import { Fragment, useMemo, useState } from 'react';

// MATERIAL - UI
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import TableFooter from '@mui/material/TableFooter';
import Typography from '@mui/material/Typography';

// THIRD - PARTY
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import update from 'immutability-helper';

import { NumericFormat } from 'react-number-format';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { isMobile } from 'react-device-detect';

import {
  useColumnOrder,
  useExpanded,
  useFilters,
  useGroupBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable
} from 'react-table';

// PROJECT IMPORTS
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';
import ScrollX from 'components/ScrollX';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';

import makeData from 'data/react-table';
import SyntaxHighlight from 'utils/SyntaxHighlight';

import {
  DraggableHeader,
  DragPreview,
  HidingSelect,
  HeaderSort,
  IndeterminateCheckbox,
  TablePagination,
  TableRowSelection,
  CSVExport,
  EmptyTable
} from 'components/third-party/ReactTable';

import {
  roundedMedian,
  renderFilterTypes,
  filterGreaterThan,
  GlobalFilter,
  DefaultColumnFilter,
  SelectColumnFilter,
  SliderColumnFilter,
  NumberRangeColumnFilter
} from 'utils/react-table';
import { ThemeMode } from 'config';

// ASSETS
import { ArrowDown2, ArrowRight2, Edit, LayoutMaximize, Maximize1, Send } from 'iconsax-react';

const avatarImage = '/assets/images/users';

// ==============================|| REACT TABLE ||============================== //

const EditableRow = ({ value: initialValue, row: { index }, column: { id, dataType }, editableRowIndex }) => {
  const [value, setValue] = useState(initialValue);
  const theme = useTheme();
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const ShowStatus = (value) => {
    switch (value) {
      case 'Complicated':
        return <Chip color="error" label="Complicated" size="small" variant="light" />;
      case 'Relationship':
        return <Chip color="success" label="Relationship" size="small" variant="light" />;
      case 'Single':
      default:
        return <Chip color="info" label="Single" size="small" variant="light" />;
    }
  };

  let element;
  let userInfoSchema;

  switch (id) {
    case 'email':
      userInfoSchema = Yup.object().shape({
        userInfo: Yup.string().email('Enter valid email ').required('Email is a required field')
      });
      break;
    case 'age':
      userInfoSchema = Yup.object().shape({
        userInfo: Yup.number()
          .required('Age is required')
          .typeError('Age must be number')
          .min(18, 'You must be at least 18 years')
          .max(100, 'You must be at most 60 years')
      });
      break;
    case 'visits':
      userInfoSchema = Yup.object().shape({
        userInfo: Yup.number().typeError('Visits must be number').required('Required')
      });
      break;
    default:
      userInfoSchema = Yup.object().shape({
        userInfo: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Name is Required')
      });
      break;
  }

  let IsEditAble = index === editableRowIndex;

  switch (dataType) {
    case 'text':
      element = (
        <>
          {IsEditAble ? (
            <Formik
              initialValues={{
                userInfo: value
              }}
              enableReinitialize
              validationSchema={userInfoSchema}
              onSubmit={() => {}}
            >
              {({ values, handleChange, handleBlur, errors, touched }) => (
                <Form>
                  <TextField
                    value={values.userInfo}
                    id={`${index}-${id}`}
                    name="userInfo"
                    onChange={(e) => {
                      handleChange(e);
                      onChange(e);
                    }}
                    onBlur={handleBlur}
                    error={touched.userInfo && Boolean(errors.userInfo)}
                    helperText={touched.userInfo && errors.userInfo && errors.userInfo}
                    sx={{
                      '& .MuiOutlinedInput-input': {
                        py: 0.75,
                        px: 1,
                        backgroundColor: theme.palette.mode === ThemeMode.DARK ? 'inherit' : 'common.white'
                      }
                    }}
                  />
                </Form>
              )}
            </Formik>
          ) : (
            value
          )}
        </>
      );
      break;
    case 'select':
      element = (
        <>
          {IsEditAble ? (
            <Select
              labelId="demo-simple-select-label"
              sx={{
                '& .MuiOutlinedInput-input': {
                  py: 0.75,
                  px: 1,
                  backgroundColor: theme.palette.mode === ThemeMode.DARK ? 'inherit' : 'common.white'
                }
              }}
              id="demo-simple-select"
              value={value}
              onChange={onChange}
            >
              <MenuItem value={'Complicated'}>
                <Chip color="error" label="Complicated" size="small" variant="light" />
              </MenuItem>
              <MenuItem value={'Relationship'}>
                <Chip color="success" label="Relationship" size="small" variant="light" />
              </MenuItem>
              <MenuItem value={'Single'}>
                <Chip color="info" label="Single" size="small" variant="light" />
              </MenuItem>
            </Select>
          ) : (
            ShowStatus(value)
          )}
        </>
      );
      break;
    case 'progress':
      element = (
        <>
          {IsEditAble ? (
            <Stack direction="row" alignItems="center" spacing={1} sx={{ pl: 1, minWidth: 120 }}>
              <Slider
                value={value}
                min={0}
                max={100}
                step={1}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />
            </Stack>
          ) : (
            <div>
              <LinearWithLabel value={value} sx={{ minWidth: 75 }} />
            </div>
          )}
        </>
      );
      break;
    default:
      element = <span>{value}</span>;
      break;
  }
  return element;
};

function ReactTable({ columns, data }) {
  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  const filterTypes = useMemo(() => renderFilterTypes, []);
  const [editableRowIndex, setEditableRowIndex] = useState(null);

  const defaultColumn = useMemo(
    () => ({
      Filter: DefaultColumnFilter,
      Cell: EditableRow
    }),
    []
  );

  const initialState = useMemo(
    () => ({
      filters: [{ id: 'status', value: '' }],
      hiddenColumns: ['id', 'role', 'contact', 'country', 'fatherName'],
      columnOrder: ['selection', 'avatar', 'lastName', 'firstName', 'email', 'age', 'visits', 'status', 'progress'],
      pageIndex: 0,
      pageSize: 10
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    page,
    prepareRow,
    setColumnOrder,
    gotoPage,
    setPageSize,
    setHiddenColumns,
    allColumns,
    state: { globalFilter, hiddenColumns, pageIndex, pageSize, columnOrder, selectedRowIds },
    preGlobalFilteredRows,
    setGlobalFilter,
    selectedFlatRows
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState,
      filterTypes,
      editableRowIndex,
      setEditableRowIndex
    },
    useGlobalFilter,
    useFilters,
    useColumnOrder,
    useGroupBy,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.allColumns.push((columns) => [
        ...columns,
        {
          accessor: 'edit',
          id: 'edit',
          Footer: 'Edit',
          Header: 'Edit',
          disableFilters: true,
          disableSortBy: true,
          disableGroupBy: true,
          groupByBoundary: true,
          className: 'cell-center',
          Cell: ({ row, setEditableRowIndex, editableRowIndex }) => (
            <Tooltip title={editableRowIndex !== row.index ? 'Edit' : 'Save'}>
              <IconButton
                color={editableRowIndex !== row.index ? 'primary' : 'success'}
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = row.index;
                  if (editableRowIndex !== currentIndex) {
                    // row requested for edit access
                    setEditableRowIndex(currentIndex);
                  } else {
                    // request for saving the updated row
                    setEditableRowIndex(null);
                  }
                }}
              >
                {editableRowIndex !== row.index ? <Edit /> : <Send />}
              </IconButton>
            </Tooltip>
          )
        }
      ]);
    }
  );

  const reorder = (item, newIndex) => {
    const { index: currentIndex } = item;

    let dragRecord = columnOrder[currentIndex];
    if (!columnOrder.includes(item.id)) {
      dragRecord = item.id;
    }

    setColumnOrder(
      update(columnOrder, {
        $splice: [
          [currentIndex, 1],
          [newIndex, 0, dragRecord]
        ]
      })
    );
  };

  let headers = [];
  allColumns.map((item) => {
    if (!hiddenColumns?.includes(item.id) && item.id !== 'selection' && item.id !== 'edit') {
      headers.push({ label: typeof item.Header === 'string' ? item.Header : '#', key: item.id });
    }
    return item;
  });

  return (
    <>
      <TableRowSelection selected={Object.keys(selectedRowIds).length} />
      <Stack spacing={2}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
          sx={{ padding: 2, ...(downSM && { '& .MuiOutlinedInput-root, & .MuiFormControl-root': { width: '100%' } }) }}
        >
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
            size="small"
          />
          <Stack direction="row" spacing={2} alignItems="center" sx={{ width: { xs: '100%', sm: 'auto' } }}>
            <HidingSelect hiddenColumns={hiddenColumns} setHiddenColumns={setHiddenColumns} allColumns={allColumns} />
            <CSVExport
              data={selectedFlatRows.length > 0 ? selectedFlatRows.map((d) => d.original) : data}
              filename={'umbrella-table.csv'}
              headers={headers}
            />
          </Stack>
        </Stack>

        <Box sx={{ width: '100%', overflowX: 'auto', display: 'block' }}>
          <Table {...getTableProps()}>
            <TableHead sx={{ borderTopWidth: 2 }}>
              {headerGroups.map((headerGroup) => (
                <Fragment key={headerGroup.id}>
                  <TableRow {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column, index) => {
                      const groupIcon = column.isGrouped ? <Maximize1 size={18} /> : <LayoutMaximize size={18} />;
                      return (
                        <Fragment key={index}>
                          <TableCell {...column.getHeaderProps([{ className: column.className }])}>
                            <DraggableHeader reorder={reorder} key={column.id} column={column} index={index}>
                              <Stack direction="row" spacing={1.15} alignItems="center" sx={{ display: 'inline-flex' }}>
                                {column.canGroupBy ? (
                                  <Box
                                    sx={{ color: column.isGrouped ? 'error.main' : 'primary.main', fontSize: '1rem' }}
                                    {...column.getGroupByToggleProps()}
                                  >
                                    {groupIcon}
                                  </Box>
                                ) : null}
                                <HeaderSort column={column} sort />
                              </Stack>
                            </DraggableHeader>
                          </TableCell>
                        </Fragment>
                      );
                    })}
                  </TableRow>
                </Fragment>
              ))}
            </TableHead>

            {/* striped table -> add class 'striped' */}
            <TableBody {...getTableBodyProps()} className="striped">
              {headerGroups.map((group, index) => (
                <Fragment key={index}>
                  <TableRow {...group.getHeaderGroupProps()}>
                    {group.headers.map((column, i) => (
                      <Fragment key={i}>
                        <TableCell {...column.getHeaderProps([{ className: column.className }])}>
                          {column.canFilter ? column.render('Filter') : null}
                        </TableCell>
                      </Fragment>
                    ))}
                  </TableRow>
                </Fragment>
              ))}
              {page.length > 0 ? (
                page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <Fragment key={i}>
                      <TableRow
                        {...row.getRowProps()}
                        {...(editableRowIndex !== row.index && {
                          onClick: () => {
                            row.toggleRowSelected();
                          }
                        })}
                        sx={{ cursor: 'pointer', bgcolor: row.isSelected ? alpha(theme.palette.primary.lighter, 0.35) : 'inherit' }}
                      >
                        {row.cells.map((cell, index) => {
                          let bgcolor = 'inherit';
                          if (cell.isGrouped) bgcolor = 'success.lighter';
                          if (cell.isAggregated) bgcolor = 'warning.lighter';
                          if (cell.isPlaceholder) bgcolor = 'error.lighter';
                          if (cell.isPlaceholder) bgcolor = 'error.lighter';
                          if (row.isSelected) bgcolor = alpha(theme.palette.primary.lighter, 0.35);
                          const collapseIcon = row.isExpanded ? <ArrowDown2 /> : <ArrowRight2 />;

                          return (
                            <TableCell key={index} {...cell.getCellProps([{ className: cell.column.className }])} sx={{ bgcolor }}>
                              {cell.isGrouped ? (
                                <Stack direction="row" spacing={1} alignItems="center" sx={{ display: 'inline-flex' }}>
                                  <Box
                                    sx={{ pr: 1.25, fontSize: '0.75rem', color: 'text.secondary' }}
                                    onClick={(e) => {
                                      row.toggleRowExpanded();
                                      e.stopPropagation();
                                    }}
                                  >
                                    {collapseIcon}
                                  </Box>
                                  {cell.render('Cell')} ({row.subRows.length})
                                </Stack>
                              ) : cell.isAggregated ? (
                                cell.render('Aggregated')
                              ) : cell.isPlaceholder ? null : (
                                cell.render('Cell')
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    </Fragment>
                  );
                })
              ) : (
                <EmptyTable msg="No Data" colSpan={9} />
              )}
            </TableBody>

            {/* footer table */}
            <TableFooter sx={{ borderBottomWidth: 2 }}>
              {footerGroups.map((group, index) => (
                <Fragment key={index}>
                  <TableRow {...group.getFooterGroupProps()}>
                    {group.headers.map((column, i) => (
                      <Fragment key={i}>
                        <TableCell {...column.getFooterProps([{ className: column.className }])}>{column.render('Footer')}</TableCell>
                      </Fragment>
                    ))}
                  </TableRow>
                </Fragment>
              ))}
            </TableFooter>
          </Table>
        </Box>
        <Box sx={{ p: 2, py: 0 }}>
          <TablePagination gotoPage={gotoPage} rows={rows} setPageSize={setPageSize} pageIndex={pageIndex} pageSize={pageSize} />
        </Box>

        <SyntaxHighlight>
          {JSON.stringify(
            {
              selectedRowIndices: selectedRowIds,
              'selectedFlatRows[].original': selectedFlatRows.map((d) => d.original)
            },
            null,
            2
          )}
        </SyntaxHighlight>
      </Stack>
    </>
  );
}

ReactTable.propTypes = {
  column: PropTypes.object,
  data: PropTypes.array,
  columns: PropTypes.array,
  row: PropTypes.object,
  editableRowIndex: PropTypes.number,
  setEditableRowIndex: PropTypes.func,
  getToggleAllPageRowsSelectedProps: PropTypes.func,
  value: PropTypes.string
};

// ==============================|| REACT TABLE - UMBRELLA ||============================== //

const UmbrellaTable = () => {
  const data = useMemo(() => makeData(200), []);
  const columns = useMemo(
    () => [
      {
        title: 'Row Selection',
        id: 'selection',
        Header: ({ getToggleAllPageRowsSelectedProps }) => <IndeterminateCheckbox indeterminate {...getToggleAllPageRowsSelectedProps()} />,
        Footer: '#',
        accessor: 'selection',
        groupByBoundary: true,
        Cell: ({ row }) => <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />,
        disableSortBy: true,
        disableFilters: true,
        disableGroupBy: true,
        Aggregated: () => null
      },
      {
        Header: '#',
        Footer: '#',
        accessor: 'id',
        className: 'cell-center',
        disableFilters: true,
        disableGroupBy: true
      },
      {
        Header: 'Avatar',
        Footer: 'Avatar',
        accessor: 'avatar',
        className: 'cell-center',
        disableSortBy: true,
        disableFilters: true,
        disableGroupBy: true,
        Cell: ({ value }) => <Avatar alt="Avatar 1" size="sm" src={`${avatarImage}/avatar-${!value ? 1 : value}.png`} />
      },
      {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'firstName',
        dataType: 'text',
        disableGroupBy: true,
        aggregate: 'count',
        Aggregated: ({ value }) => `${value} Person`
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'lastName',
        dataType: 'text',
        filter: 'fuzzyText',
        disableGroupBy: true
      },
      {
        Header: 'Father Name',
        Footer: 'Father Name',
        accessor: 'fatherName',
        dataType: 'text',
        disableGroupBy: true
      },
      {
        Header: 'Email',
        Footer: 'Email',
        accessor: 'email',
        dataType: 'text',
        disableGroupBy: true
      },
      {
        Header: 'Age',
        Footer: 'Age',
        accessor: 'age',
        dataType: 'text',

        className: 'cell-right',
        Filter: SliderColumnFilter,
        filter: 'equals',
        aggregate: 'average',
        Aggregated: ({ value }) => `${Math.round(value * 100) / 100} (avg)`
      },
      {
        Header: 'Role',
        Footer: 'Role',
        dataType: 'text',
        accessor: 'role',
        disableGroupBy: true
      },
      {
        Header: 'Contact',
        dataType: 'text',
        Footer: 'Contact',
        accessor: 'contact',
        disableGroupBy: true
      },
      {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country',
        dataType: 'text',
        disableGroupBy: true
      },
      {
        Header: 'Visits',
        accessor: 'visits',
        dataType: 'text',
        className: 'cell-right',
        Filter: NumberRangeColumnFilter,
        filter: 'between',
        disableGroupBy: true,
        aggregate: 'sum',
        Aggregated: ({ value }) => `${value} (total)`,
        Footer: (info) => {
          const { rows } = info;
          // only calculate total visits if rows change
          const total = useMemo(() => rows.reduce((sum, row) => row.values.visits + sum, 0), [rows]);

          return (
            <Typography variant="subtitle1">
              <NumericFormat value={total} displayType="text" thousandSeparator />
            </Typography>
          );
        }
      },
      {
        Header: 'Status',
        Footer: 'Status',
        accessor: 'status',
        dataType: 'select',
        Filter: SelectColumnFilter,
        filter: 'includes'
      },
      {
        Header: 'Profile Progress',
        Footer: 'Profile Progress',
        accessor: 'progress',
        Filter: SliderColumnFilter,
        dataType: 'progress',
        filter: filterGreaterThan,
        disableGroupBy: true,
        aggregate: roundedMedian,
        Aggregated: ({ value }) => `${value} (med)`
      }
    ],
    []
  );

  return (
    <MainCard
      title="Umbrella Table"
      subheader="This page consist combination of most possible features of react-table in to one table. Sorting, grouping, row selection, hidden row, filter, search, pagination, footer row available in below table."
      content={false}
    >
      <ScrollX>
        <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
          <ReactTable columns={columns} data={data} />
          <DragPreview />
        </DndProvider>
      </ScrollX>
    </MainCard>
  );
};

UmbrellaTable.propTypes = {
  row: PropTypes.object,
  editableRowIndex: PropTypes.number,
  setEditableRowIndex: PropTypes.func,
  getToggleAllPageRowsSelectedProps: PropTypes.func,
  value: PropTypes.string
};

export default UmbrellaTable;
