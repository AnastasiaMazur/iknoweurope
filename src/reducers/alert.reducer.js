import {
  SHOW_ALERT, HIDE_ALERT, SHOW_SUCCESS_ALERT, SHOW_DANGER_ALERT,
}
  from '../actions/alert.action'

const initialState = {
  isVisible: false,
  message: 'default message',
  variant: 'default',
}

const alertReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_ALERT: {
      return {
        ...state,
        variant: 'default',
        isVisible: true,
        message: payload,
      }
    }

    case SHOW_SUCCESS_ALERT: {
      return {
        ...state,
        isVisible: true,
        variant: 'success',
        message: payload,
      }
    }

    case SHOW_DANGER_ALERT: {
      return {
        ...state,
        isVisible: true,
        variant: 'danger',
        message: payload,
      }
    }

    case HIDE_ALERT: {
      return {
        ...state,
        isVisible: false,
      }
    }

    default: {
      return state
    }
  }
}

export default alertReducer
