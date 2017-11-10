//@flow
import React from 'react'
import pt from 'prop-types'

export default class Dashboard extends React.Component {
  static propTypes = {
    getStarWars: pt.func.isRequired,
  }

  componentDidMount() {
    this.props.getStarWars()
  }

  render() {
    return (
      <div style={{ marginLeft: 20 }}>
        <h1>Star Wars</h1>
      </div>
    )
  }
}
