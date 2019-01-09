import React, { Component } from 'react'
import Feed from '../components/Feed/Feed';

class Home extends Component {
  state={
    videos:[
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ]
  }
  render () {
    return (
      <div style={{minHeight:"100%"}}>
          <Feed videos={this.state.videos} />
      </div>
    )
  }
}

export default Home