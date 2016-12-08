var React = require('react')
var identicon = require('identicon-browserify')

var Identicon = React.createClass({
	render () {
		var uri = identicon.generateSync({
			id: this.props.hash, size: this.props.size
		})
		console.log(123)
		console.log()
		return (
			<img src={uri}/>
		)
	}
});

export default Identicon;
