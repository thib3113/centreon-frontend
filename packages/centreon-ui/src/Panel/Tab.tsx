import * as React from 'react';

import { Tab as MuiTab, TabProps } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

const minTabHeight = 40;

const useStyles = makeStyles(() => ({
  tab: {
    minHeight: minTabHeight,
    minWidth: 'unset',
    paddingBottom: 0,
    paddingTop: 0,
  },
}));

const Tab = (props: TabProps): JSX.Element => {
  const classes = useStyles();

  return <MuiTab className={classes.tab} {...props} />;
};

export default Tab;
export { minTabHeight };
