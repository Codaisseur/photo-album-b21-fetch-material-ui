import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
});

const Header = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="title" color="inherit" noWrap>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
