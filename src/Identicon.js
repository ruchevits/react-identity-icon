var React = require('react')
var identicon = require('identicon-browserify')

var Identicon = React.createClass({
	render () {
		var uri = identicon.generateSync({
			id: this.props.hash, 
			size: this.props.size
		})
		return (
			<img src={uri} className={this.props.className} />
		)
	}
});

export default Identicon;
