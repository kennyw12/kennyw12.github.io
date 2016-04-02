require('../stylesheets/application.css');

const React = require('react');
const ReactDOM = require('react-dom');

const Application = React.createClass({
	render: function() {
		console.log("rendering")
		return (
			<div>
				<p>Hello World.</p>
			</div>
		);
	}
});

ReactDOM.render(
	<Application/>,
	document.getElementById("root")
);