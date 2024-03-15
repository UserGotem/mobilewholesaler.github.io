'use client';

import PropTypes from 'prop-types';
import { useMemo } from 'react';

// MATERIAL - UI
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';

// PROJECT IMPORTS
import makeData from 'data/react-table';
import Avatar from 'components/@extended/Avatar';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import StickyTable from 'sections/tables/react-table/StickyTable';

const avatarImage = '/assets/images/users';

// ==============================|| REACT TABLE - STICKY ||============================== //

const Sticky = () => {
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
        Cell: ({ value }) => <LinearWithLabel value={value} sx={{ minWidth: 75 }} />
      }
    ],
    []
  );

  const NewColumns = useMemo(
    () => [
      {
        Header: '#',
        Footer: '#',
        accessor: 'id',
        sticky: 'left',
        width: 50
      },
      {
        Header: 'Avatar',
        accessor: 'avatar',
        sticky: 'left',
        Cell: ({ value }) => <Avatar alt="Avatar 1" size="sm" src={`${avatarImage}/avatar-${!value ? 1 : value}.png`} />,
        width: 50
      },
      {
        Header: 'First Name',
        accessor: 'firstName',
        sticky: 'left',
        width: 120,
        defaultCanSort: true
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
        width: 120
      },
      {
        Header: 'Father Name',
        accessor: 'fatherName',
        width: 150
      },
      {
        Header: 'Email',
        accessor: 'email',
        width: 200
      },
      {
        Header: 'Age',
        accessor: 'age',
        className: 'cell-center'
      },
      {
        Header: 'Role',
        accessor: 'role',
        width: 120
      },
      {
        Header: 'Contact',
        accessor: 'contact'
      },
      {
        Header: 'Location',
        accessor: 'address',
        Cell: ({ value }) => <Box sx={{ minWidth: 200 }}>{value}</Box>,
        width: 200
      },
      {
        Header: 'Visits',
        accessor: 'visits',
        className: 'cell-right'
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
        },
        width: 200
      },
      {
        Header: 'Profile Progress',
        accessor: 'progress',
        Cell: ({ value }) => <LinearWithLabel value={value} sx={{ minWidth: 75 }} />,
        width: 200
      }
    ],
    []
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <StickyTable title="Sticky Header" columns={columns} data={data.slice(0, 20)} />
      </Grid>
      <Grid item xs={12}>
        <StickyTable title="Sticky Column" columns={NewColumns} data={data.slice(0, 20)} />
      </Grid>
    </Grid>
  );
};

Sticky.propTypes = {
  value: PropTypes.string
};

export default Sticky;
