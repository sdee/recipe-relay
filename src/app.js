import React from 'react'
import ReactDOM from 'react-dom'
import PartyApp from './components/PartyApp'
import {
  QueryRenderer,
  graphql,
} from 'react-relay'
import environment from './createRelayEnvironment'
import './style.css'

const root = <QueryRenderer
  environment={environment}
  query={graphql`
    query appQuery {
      viewer {
        ...PartyApp_viewer
      }
    }
  `}
  render={({error, props}) => {
    if (props) {
      return <PartyApp viewer={props.viewer} />
    } else {
      return <div>Loading</div>
    }
  }}
/>

ReactDOM.render(
  root,
  document.getElementById('root')
)
