import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/es/Grid/Grid'
import Card from '@material-ui/core/es/Card/Card'

const styles = theme => ({
  root: {},
  item: {
    flex: 1,
  },
  card: {
    textAlign: 'center',
    padding: theme.spacing.size3,
  },
})

const Board = ({ classes, cityCount, distance }) =>
  <Grid container spacing={16} justify="center">
    <Grid item className={classes.item}>
      <Card className={classes.card}>
        {cityCount} cities found
      </Card>
    </Grid>
    <Grid item className={classes.item}>
      <Card className={classes.card}>
        {distance} kilometers left
      </Card>
    </Grid>
  </Grid>

Board.propTypes = {
  classes: PropTypes.object.isRequired,
  cityCount: PropTypes.number.isRequired,
  distance: PropTypes.string.isRequired,
}

export default withStyles(styles)(Board)
