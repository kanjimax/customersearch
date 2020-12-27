/* eslint-disable react/prop-types */
import React from 'react';
import { Grid, TextField, InputAdornment } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const styles = {
  gridRoot: {
    backgroundColor: 'rgb(235, 234, 225)',
    padding: '2rem'
  },
  myLabel: {
    color: 'red',
    '&$focused': { color: 'green' }
  },
  focused: {}
};
class C02searchBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.gridRoot} container justify="center">
        <Grid item xs={3}>
          <TextField
            InputLabelProps={{
              classes: { root: classes.myLabel, focused: classes.focused }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <FontAwesomeIcon icon={faUser} />
                </InputAdornment>
              )
            }}
            label="Suche eingeben"
            fullWidth
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(C02searchBar);
