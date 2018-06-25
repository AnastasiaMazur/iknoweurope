import L from 'leaflet'
import flagSuccess from './img/flag-success.png'
import flagIcon from './img/flags-icon.png'

export const icon = new L.Icon({
  iconUrl: flagIcon,
  iconRetinaUrl: flagIcon,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 45),
})
export const iconSuccess = new L.Icon({
  iconUrl: flagSuccess,
  iconRetinaUrl: flagSuccess,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 45),
})
export const START = 'START'
export const SELECTED = 'SELECTED'
export const PLACED = 'PLACED'
export const END = 'END'
export const WIN = 'WIN'
export const MAX_DISTANCE = 1500
export const MIN_DISTANCE = 50
export const TIMER = 2000
