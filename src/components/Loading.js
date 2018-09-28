import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  layout: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    alignItems: 'center',
  },
  progress: {
    flex: 1,
    textAlign: 'center'
  },
});

const Loading = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <div className={classes.layout}>
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      </div>
    </React.Fragment>
  );
}

Loading.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loading);
