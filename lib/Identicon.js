'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var React = require('react');
var identicon = require('identicon-browserify');

var Identicon = React.createClass({
	displayName: 'Identicon',

	render: function render() {
		var uri = identicon.generateSync({
			id: this.props.hash,
			size: this.props.size
		});
		return React.createElement('img', { src: uri, className: this.props.className });
	}
});

exports['default'] = Identicon;
module.exports = exports['default'];