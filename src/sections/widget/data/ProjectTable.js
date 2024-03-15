// NEXT
import Link from 'next/link';

// MATERIAL - UI
import Grid from '@mui/material/Grid';
import Links from '@mui/material/Link';
import Table from '@mui/material/Table';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import TableContainer from '@mui/material/TableContainer';

// PROJECT IMPORTS
import MainCard from 'components/MainCard';

// ASSETS
const Avatar1 = '/assets/images/users/avatar-1.png';
const Avatar2 = '/assets/images/users/avatar-2.png';
const Avatar3 = '/assets/images/users/avatar-3.png';
const Avatar4 = '/assets/images/users/avatar-4.png';
const Avatar6 = '/assets/images/users/avatar-6.png';

// TABLE DATA
const createData = (avtar, name, designation, product, date, badgeText, badgeType) => ({
  avtar,
  name,
  designation,
  product,
  date,
  badgeText,
  badgeType
});

const rows = [
  createData(Avatar1, 'John Deo', 'Graphics Designer', 'Materially', 'Jun, 26', 'Low', 'warning'),
  createData(Avatar2, 'Jenifer Vintage', 'Web Designer', 'Mashable', 'March, 31', 'Lower', 'error'),
  createData(Avatar3, 'William Jem', 'Developer', 'Flatable', 'Aug, 02', 'Medium', 'primary'),
  createData(Avatar4, 'David Jones', 'Developer', 'Guruable', 'Sep, 22', 'High', 'info'),
  createData(Avatar6, 'Stebin Ben', 'Leader', 'Able Pro', 'Sep, 22', 'Higher', 'success')
];

// ===========================|| DATA WIDGET - PROJECT TABLE ||=========================== //

const ProjectTable = () => (
  <MainCard
    title="Projects"
    content={false}
    secondary={
      <Links component={Link} href="#" color="primary">
        View all
      </Links>
    }
  >
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ pl: 3 }}>Assigned</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell align="right" sx={{ pr: 3 }}>
              Priority
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow hover key={index}>
              <TableCell sx={{ pl: 3 }}>
                <Grid container spacing={2} alignItems="center" sx={{ flexWrap: 'nowrap' }}>
                  <Grid item>
                    <Avatar alt="User 1" src={row.avtar} />
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography align="left" variant="subtitle1">
                      {row.name}
                    </Typography>
                    <Typography align="left" variant="caption" color="secondary">
                      {row.designation}
                    </Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell align="right" sx={{ pr: 3 }}>
                <Chip color={row.badgeType} label={row.badgeText} size="small" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </MainCard>
);

export default ProjectTable;
