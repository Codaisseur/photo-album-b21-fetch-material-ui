import * as React from 'react'
import PropTypes from 'prop-types';
import * as request from 'superagent'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AlbumsList from './AlbumsList'
import Loading from './Loading'

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

class AlbumsListContainer extends React.PureComponent {
  state = {}

  componentDidMount() {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => this.setState({ albums: response.body }))
  }

  render() {
    if (!this.state.albums) return <Loading />

    const { classes } = this.props;

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
        <AlbumsList albums={this.state.albums} />
      </React.Fragment>
    );
  }
}



AlbumsListContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlbumsListContainer);
