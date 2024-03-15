'use client';

import PropTypes from 'prop-types';
import { Fragment } from 'react';

// NEXT
import dynamic from 'next/dynamic';

// MATERIAL - UI
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// PROJECT IMPORTS
import Card from 'sections/charts/org-chart/Card';
import { data } from 'data/org-chart';
import DataCard from 'sections/charts/org-chart/DataCard';
import MainCard from 'components/MainCard';

const Tree = dynamic(() => import('react-organizational-chart').then((mod) => mod.Tree), {
  ssr: false
});

const TreeNode = dynamic(() => import('react-organizational-chart').then((mod) => mod.TreeNode), {
  ssr: false
});

// ==============================|| ORGANIZATION CHARTS ||============================== //

function SimpleTree({ name }) {
  const theme = useTheme();

  return (
    <Typography
      sx={{
        p: 1.25,
        border: `1px solid ${theme.palette.primary.light}`,
        width: 'max-content',
        m: 'auto',
        color: theme.palette.primary.main,
        bgcolor: theme.palette.secondary.lighter + 60,
        borderRadius: 1
      }}
    >
      {name}
    </Typography>
  );
}

SimpleTree.propTypes = {
  name: PropTypes.string
};

function TreeCard({ items }) {
  return (
    <>
      {items.map((item, id) => (
        <Fragment key={id}>
          {item.children ? (
            <TreeNode label={<SimpleTree name={item.name} />}>
              <TreeCard items={item.children} />
            </TreeNode>
          ) : (
            <TreeNode label={<SimpleTree name={item.name} />} />
          )}
        </Fragment>
      ))}
    </>
  );
}

TreeCard.propTypes = {
  items: PropTypes.array
};

const OrgChartPage = () => {
  const theme = useTheme();

  return (
    <Grid container rowSpacing={2} justifyContent="center">
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MainCard title="Simple Chart" contentSX={{ overflow: 'auto', direction: theme.direction }}>
              <Tree
                lineWidth="1px"
                lineColor={theme.palette.primary.main}
                lineBorderRadius="4px"
                label={<SimpleTree name={data[0].name} />}
              >
                <TreeCard items={data[0].children} />
              </Tree>
            </MainCard>
          </Grid>
          <Grid item xs={12}>
            <MainCard title="Styled Chart" contentSX={{ overflow: 'auto', direction: theme.direction }}>
              <Tree
                lineWidth="1px"
                lineColor={theme.palette.primary.main}
                lineBorderRadius="4px"
                label={
                  <DataCard
                    name={data[0].name}
                    role={data[0].role}
                    avatar={data[0].avatar}
                    linkedin={data[0].linkedin}
                    facebook={data[0].facebook}
                    skype={data[0].skype}
                    root
                  />
                }
              >
                <Card items={data[0].children} />
              </Tree>
            </MainCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OrgChartPage;
