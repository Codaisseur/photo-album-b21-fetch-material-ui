import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AlbumsList from './AlbumsList'
import Loading from './Loading'
import { fetchAlbums } from '../actions/albums';

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
});

const mapStateToProps = ({ albums }) => ({ albums })
const mapDispatchToProps = { fetchAlbums }

const AlbumsListContainer = connect(mapStateToProps, mapDispatchToProps)(
  class extends React.PureComponent {

  componentDidMount() {
    this.props.fetchAlbums()
  }

  render() {
    const { classes, albums } = this.props;

    if (!albums) return <Loading />

    return (
      <React.Fragment>
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="title" align="center" color="textSecondary" paragraph>
              Welcome to my React Photo Album! Not that we see any photos.. but hey!
              Cool nonetheless.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <AlbumsList albums={albums} />
      </React.Fragment>
    );
  }
})

AlbumsListContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlbumsListContainer);
