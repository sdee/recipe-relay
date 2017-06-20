import React, { PropTypes } from 'react'
import { max } from 'underscore'
import {
	createFragmentContainer,
	graphql,
} from 'react-relay';

class PartyApp extends React.Component {

	static propTypes = {
		viewer: PropTypes.object.isRequired,
	}

	constructor(props) {
		super(props);
		const party = props.viewer.allParties.edges[0].node;
		console.log(party);
		console.log(party.menu);
		this.state = { defaultServings: party.guests, guests: party.guests, theme: party.theme };
	}

	_handleIncrement = () => {
		this.setState((prevState, props) => {
			return {guests: prevState.guests + 1 };
		});
	}

	_handleDecrement = () => {
		this.setState((prevState, props) => {
			return {guests: max([prevState.guests - 1, 2])};
		});
	}

	_handleReset = () => {
		this.setState((prevState, props) => {
			return {guests: this.state.defaultServings};
		});
	}

	render () {

		return (
			<div>
				<h1>Party!</h1>
				<h2>{this.state.theme}</h2>
				{this.state.guests} Guests
				<h3><a href='#' onClick={() => this._handleIncrement()}>+</a> <a href='#' onClick={() => this._handleDecrement()}>-</a></h3>
				<h3><a href='#' onClick={() => this._handleReset()}>reset</a></h3>
		</div>
		)
	}
}

export default createFragmentContainer(PartyApp, {
	viewer: graphql`
	fragment PartyApp_viewer on Viewer {
		id
		allParties(last: 1) {
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
