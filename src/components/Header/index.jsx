/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import { Link } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '../Container'

const styles = theme => ({
  root: {
    background: theme.palette.primary.main,
    flexGrow: 1,
  },

  flex: {
    flex: 1,
  },
})

const Header = ({ classes }) =>
  <div className={classes.root}>
    <Container>
      <AppBar position="static">
        <Toolbar disableGutters>
          <Typography variant="title" color="inherit" className={classes.flex}>
            <Link to="/">I know Europe</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  </div>

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
