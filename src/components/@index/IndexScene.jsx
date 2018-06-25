/* eslint-disable react/forbid-prop-types, function-paren-newline */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Main from './Main'
import Container from '../Container'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.size3,
  },
})

const IndexScene = ({ classes }) =>
  <Container className={classes.root}>
    <Main />
  </Container>

IndexScene.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(IndexScene)
