import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/es/Snackbar/Snackbar'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/es/IconButton/IconButton'
import green from '@material-ui/core/es/colors/green'
import SnackbarContent from '@material-ui/core/es/SnackbarContent/SnackbarContent'
import classNames from 'classnames'
import connector from './connector'

const styles = theme => ({
  root: {},
  default: {
    backgroundColor: 'inherit',
  },
  success: {
    backgroundColor: green[600],
  },
  danger: {
    backgroundColor: theme.palette.error.dark,
  },
})

class Alert extends React.Component {

  handleClose = () => {
    this.props.actions.alert.hide()
  }

  render() {
    const { classes, isVisible, message, variant } = this.props
    return (
      <Snackbar
        className={classNames(classes[variant], classes.root)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={isVisible}
        autoHideDuration={6000}
        onClose={this.handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}

      >
        <SnackbarContent
          className={classNames(classes[variant])}
          aria-describedby="client-snackbar"
          message={<span id="message-id">{message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Snackbar>
    )
  }
}

Alert.propTypes = {
  message: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  variant: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
}

export default withStyles(styles)(connector(Alert))
