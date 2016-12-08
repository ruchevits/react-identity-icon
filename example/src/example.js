var React = require('react');
var ReactDOM = require('react-dom');
var Identicon = require('react-identity-icon');

var App = React.createClass({
	render () {
		return (
			<div>
				<Identicon hash="safasfds" size="40" />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
