'use client';

import PropTypes from 'prop-types';
import { useCallback, useMemo, Fragment } from 'react';

// NEXT
import { useRouter } from 'next/navigation';

// MATERIAL - UI
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import capitalize from '@mui/utils/capitalize';

// THIRD - PARTY
import { NumericFormat } from 'react-number-format';
import { useFilters, useExpanded, useGlobalFilter, useRowSelect, useSortBy, useTable, usePagination } from 'react-table';

// PROJECT IMPORTS
import { useGetProducts } from 'api/products';
import ScrollX from 'components/ScrollX';
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';
import { HeaderSort, IndeterminateCheckbox, SortingSelect, TablePagination, TableRowSelection } from 'components/third-party/ReactTable';
import ProductView from 'sections/apps/e-commerce/product-list/ProductView';
import EmptyTables from 'views/forms-tables/tables/react-table/EmptyTable';

import { renderFilterTypes, GlobalFilter } from 'utils/react-table';

// ASSETS
import { Add, Edit, Eye, Trash } from 'iconsax-react';

const productImage = '/assets/images/e-commerce';

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data, renderRowSubComponent }) {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  const filterTypes = useMemo(() => renderFilterTypes, []);
  const sortBy = { id: 'name', desc: false };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setHiddenColumns,
    allColumns,
    visibleColumns,
    rows,
    page,
    gotoPage,
    setPageSize,
    state: { globalFilter, selectedRowIds, pageIndex, pageSize, expanded },
    preGlobalFilteredRows,
    setGlobalFilter,
    setSortBy
  } = useTable(
    {
      columns,
      data,
      filterTypes,
      initialState: { pageIndex: 0, pageSize: 10, hiddenColumns: ['image', 'description'], sortBy: [sortBy] }
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
  );

  useMemo(() => {
    if (matchDownSM) {
      setHiddenColumns(['id', 'image', 'description', 'categories', 'offerPrice', 'quantity', 'isStock']);
    } else {
      setHiddenColumns(['image', 'description']);
    }
    // eslint-disable-next-line
  }, [matchDownSM]);

  const router = useRouter();

  const handleAddProduct = () => {
    router.push(`/apps/e-commerce/add-new-product`);
  };

  return (
    <>
      <TableRowSelection selected={Object.keys(selectedRowIds).length} />
      <Stack spacing={3}>
        <Stack direction={{ sm: 'row', xs: 'column' }} justifyContent="space-between" spacing={1} alignItems="center" sx={{ p: 3, pb: 0 }}>
          <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
          <Stack direction={{ sm: 'row', xs: 'column' }} alignItems="center" spacing={1}>
            <SortingSelect sortBy={sortBy.id} setSortBy={setSortBy} allColumns={allColumns} />
            <Button variant="contained" startIcon={<Add />} onClick={handleAddProduct} size="large">
              Add Product
            </Button>
          </Stack>
        </Stack>

        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup, index) => (
              <TableRow {...headerGroup.getHeaderGroupProps()} sx={{ '& > th:first-of-type': { width: '58px' } }} key={index}>
                {headerGroup.headers.map((column, i) => (
                  <TableCell {...column.getHeaderProps([{ className: column.className }])} key={i}>
                    <HeaderSort column={column} sort={true} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              const rowProps = row.getRowProps();

              return (
                <Fragment key={i}>
                  <TableRow
                    {...rowProps}
                    onClick={() => {
                      row.toggleRowSelected();
                    }}
                    sx={{ cursor: 'pointer', bgcolor: row.isSelected ? alpha(theme.palette.primary.lighter, 0.35) : 'inherit' }}
                    key={rowProps.key}
                  >
                    {row.cells.map((cell, index) => (
                      <TableCell {...cell.getCellProps([{ className: cell.column.className }])} key={index}>
                        {cell.render('Cell')}
                      </TableCell>
                    ))}
                  </TableRow>
                  {row.isExpanded && renderRowSubComponent({ row, rowProps, visibleColumns, expanded })}
                </Fragment>
              );
            })}
            <TableRow sx={{ '&:hover': { bgcolor: 'transparent !important' } }}>
              <TableCell sx={{ p: 2, py: 3 }} colSpan={9}>
                <TablePagination gotoPage={gotoPage} rows={rows} setPageSize={setPageSize} pageSize={pageSize} pageIndex={pageIndex} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Stack>
    </>
  );
}

ReactTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  renderRowSubComponent: PropTypes.func
};

// ==============================|| ECOMMERCE - PRODUCT LIST ||============================== //

const ProductList = () => {
  const theme = useTheme();

  const { productsLoading, products: lists } = useGetProducts();

  const columns = useMemo(
    () => [
      {
        title: 'Row Selection',
        Header: ({ getToggleAllPageRowsSelectedProps }) => <IndeterminateCheckbox indeterminate {...getToggleAllPageRowsSelectedProps()} />,
        accessor: 'selection',
        Cell: ({ row }) => <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />,
        disableSortBy: true
      },
      {
        Header: '#',
        accessor: 'id',
        className: 'cell-center'
      },
      {
        Header: 'Product Detail',
        accessor: 'name',
        Cell: ({ row }) => {
          const { values } = row;
          return (
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Avatar
                variant="rounded"
                alt={values.name}
                color="secondary"
                size="sm"
                src={`${productImage}/thumbs/${!values.image ? 'prod-11.png' : values.image}`}
              />
              <Stack spacing={0}>
                <Typography variant="subtitle1">{values.name}</Typography>
                <Typography variant="caption" color="textSecondary">
                  {values.description}
                </Typography>
              </Stack>
            </Stack>
          );
        }
      },
      {
        Header: 'Image',
        accessor: 'image',
        disableSortBy: true
      },
      {
        Header: 'Description',
        accessor: 'description'
      },
      {
        Header: 'Categories',
        accessor: 'categories',
        Cell: ({ value }) => (
          <Stack direction="row" spacing={0.25}>
            {value.map((item, index) => (
              <Typography variant="h6" key={index}>
                {capitalize(item)}
                {value.length > index + 1 ? ',' : ''}
              </Typography>
            ))}
          </Stack>
        )
      },
      {
        Header: 'Price',
        accessor: 'offerPrice',
        className: 'cell-right',
        Cell: ({ value }) => <NumericFormat value={value} displayType="text" thousandSeparator prefix="$" />
      },
      {
        Header: 'Qty',
        accessor: 'quantity',
        className: 'cell-right'
      },
      {
        Header: 'Status',
        accessor: 'isStock',
        Cell: ({ value }) => (
          <Chip color={value ? 'success' : 'error'} label={value ? 'In Stock' : 'Out of Stock'} size="small" variant="light" />
        )
      },
      {
        Header: 'Actions',
        className: 'cell-center',
        disableSortBy: true,
        Cell: ({ row }) => {
          const collapseIcon = row.isExpanded ? <Add style={{ color: theme.palette.error.main, transform: 'rotate(45deg)' }} /> : <Eye />;
          return (
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={0}>
              <Tooltip title="View">
                <IconButton
                  color="secondary"
                  onClick={(e) => {
                    e.stopPropagation();
                    row.toggleRowExpanded();
                  }}
                >
                  {collapseIcon}
                </IconButton>
              </Tooltip>
              <Tooltip title="Edit">
                <IconButton
                  color="primary"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton
                  color="error"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Trash />
                </IconButton>
              </Tooltip>
            </Stack>
          );
        }
      }
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme]
  );

  const renderRowSubComponent = useCallback(({ row }) => <ProductView data={lists[Number(row.id)]} />, [lists]);

  if (productsLoading) return <EmptyTables />;

  return (
    <MainCard content={false}>
      <ScrollX>
        <ReactTable columns={columns} data={lists} renderRowSubComponent={renderRowSubComponent} />
      </ScrollX>
    </MainCard>
  );
};

ProductList.propTypes = {
  row: PropTypes.object,
  getToggleAllPageRowsSelectedProps: PropTypes.func,
  value: PropTypes.string
};

export default ProductList;
