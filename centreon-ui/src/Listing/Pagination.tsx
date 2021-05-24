import React from 'react';

import TablePagination from '@material-ui/core/TablePagination';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  toolbar: {
    height: '32px',
    minHeight: 'auto',
    overflow: 'hidden',
    paddingLeft: 5,
  },
};

const Pagination = (props): JSX.Element => (
  <TablePagination component="div" {...props} />
);

export default withStyles(styles)(Pagination);
