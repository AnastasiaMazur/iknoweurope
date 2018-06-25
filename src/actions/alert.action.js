export const SHOW_ALERT = 'SHOW_ALERT'
export const SHOW_SUCCESS_ALERT = 'SHOW_SUCCESS_ALERT'
export const SHOW_DANGER_ALERT = 'SHOW_DANGER_ALERT'

export const HIDE_ALERT = 'HIDE_ALERT'

// noinspection JSUnusedGlobalSymbols
export const show = (message) => ({
  type: SHOW_ALERT,
  payload: message,
})

// noinspection JSUnusedGlobalSymbols
export const hide = () => ({
  type: HIDE_ALERT,
})

// noinspection JSUnusedGlobalSymbols
export const success = (message) => ({
  type: SHOW_SUCCESS_ALERT,
  payload: message,
})

// noinspection JSUnusedGlobalSymbols
export const danger = (message) => ({
  type: SHOW_DANGER_ALERT,
  payload: message,
})
