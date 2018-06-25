/* eslint-disable react/sort-comp,react/no-unused-state,object-shorthand,no-shadow,max-len */
import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/es/Button/Button'
import Typography from '@material-ui/core/es/Typography/Typography'
import { withStyles } from '@material-ui/core/styles'
import { Map, Marker } from 'react-leaflet'
import TileLayer from 'react-leaflet/es/TileLayer'
import * as constants from './contstants'
import { calculateDistance, randomInteger } from './utils'
import connector from './connector'
import Board from '../Board'
import cities from './cities.json'

const styles = theme => ({
  root: {},
  margins: {
    margin: `${theme.spacing.size3} 0`,
  },
})

class Main extends React.Component {

  initial = {
    lat: 54.525961,
    lng: 15.255119,
    zoom: 4,
    city: cities[randomInteger(0, cities.length - 1)],
    cities: cities,
    count: 0,
    status: constants.START,
    distance: 0,
    maxDistance: constants.MAX_DISTANCE,
  }
  state = this.initial

  createMarker = (e) => {
    if (this.state.status === constants.START ||
      this.state.status === constants.SELECTED) {

      this.setState({
        lat: e.latlng.lat,
        lng: e.latlng.lng,
        status: constants.SELECTED,
      })
    }
  }
  updateViewPort = (viewport) => {
    if (viewport.zoom !== this.state.zoom) {
      this.setState({ zoom: viewport.zoom })
    }
  }
  showMarkers = () => {
    const latLng = [this.state.lat, this.state.lng]

    switch (this.state.status) {
      case constants.START:
        return null
      case constants.END:
        return null
      case constants.SELECTED:
        return <Marker position={latLng} icon={constants.icon} />
      case constants.PLACED:
        return (
          <React.Fragment>
            <Marker position={latLng} icon={constants.icon} />
            <Marker position={this.state.city.position} icon={constants.iconSuccess} />
          </React.Fragment>
        )
      default:
        return null
    }
  }

  generateRandomCitiesArray = () =>
    this.state.cities[randomInteger(0, this.state.cities.length - 1)]

  startAgain = () => {
    const city = this.generateRandomCitiesArray()
    const startingPoint = { status: constants.START, city, lat: 54.525961, lng: 15.255119, zoom: 4 }
    setTimeout(() => this.setState(startingPoint), constants.TIMER)
  }

  updateLeftDistance = (distance) =>
    this.state.maxDistance - distance

  filterCities = () =>
    this.state.cities.filter(city => city.name !== this.state.city.name)

  looserMessage = (count) => {
    this.props.actions.alert.danger(`Game over! You've found only - ${count} cities`)
  }
  winnerMessage = (count) =>
    this.props.actions.alert.success(`Congratulations! You've found - ${count} cities`)

  handlePlaceMarker = () => {
    const distance = calculateDistance({ lat: this.state.lat, lng: this.state.lng }, this.state.city.position)
    const cities = this.filterCities()
    const maxDistance = this.updateLeftDistance(distance)
    let { count } = this.state

    if (distance <= constants.MIN_DISTANCE) {
      count = ++this.state.count
    }

    if (!cities.length && maxDistance > 0) {
      this.setState({ status: constants.WIN, count, maxDistance }, () => {
        setTimeout(() => this.setState(this.init), constants.TIMER)
      })
      if (count > 0) {
        this.winnerMessage(count)
        return
      }
      this.looserMessage(count)
      return
    }

    if (distance <= constants.MIN_DISTANCE) {
      this.props.actions.alert.success(`Correct! Distance - ${distance.toFixed(2)} km.`)
      this.setState({ count, cities, status: constants.PLACED }, this.startAgain)
      return
    }

    if (maxDistance <= 0) {
      this.looserMessage(count)
      this.setState({ status: constants.END, maxDistance: 0 }, () => {
        setTimeout(() => {
          this.setState(this.init)
        }, constants.TIMER)
      })
      return
    }

    this.props.actions.alert.danger(`You've missed! Distance - ${distance.toFixed(2)} km left`)
    this.setState({ cities, status: constants.PLACED, maxDistance }, this.startAgain)
  }

  render() {
    const { classes } = this.props
    const { url, city, maxDistance, count } = this.state
    const position = [this.state.lat, this.state.lng]

    return (
      <div className={classes.root}>
        <Board cityCount={count} distance={maxDistance.toFixed(2)} />
        <div className={classes.margins}>
          <Typography align="center">{`Select location of ${city.name}`}</Typography>
        </div>
        <Map
          center={position}
          zoom={this.state.zoom}
          style={{ height: 500 }}
          onClick={this.createMarker}
          onViewportChanged={this.updateViewPort}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'}
          />
          {this.showMarkers()}
        </Map>
        <div className={classes.margins}>
          <Button
            fullWidth
            color="primary"
            size="large"
            variant="raised"
            onClick={this.handlePlaceMarker}
          >
            Place
          </Button>
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}

export default withStyles(styles)(connector(Main))
