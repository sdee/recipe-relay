import React, { PropTypes } from 'react'
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';

class PartyApp extends React.Component {

  static propTypes = {
    viewer: PropTypes.object.isRequired,
  }

  render () {
    return (
      <div>
			<h1>Party!</h1>
      </div>
    )
  }
}

export default createFragmentContainer(PartyApp, {
  viewer: graphql`
    fragment PartyApp_viewer on Viewer {
      id
      allParties(last: 1000) {
        edges {
          node {
            id,
            theme,
						guests
          }
        }
      },
    }
  `,
})
