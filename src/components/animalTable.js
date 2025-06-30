import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { compose } from 'redux';
import { connect } from 'react-redux';

function collect(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		hovered: monitor.isOver(),
		item: monitor.getItem()
	};
}

class AnimalTable extends Component {
	render() {
		const { connectDropTarget, correctAns } = this.props;
		return connectDropTarget(
			<div className="target-container">
				<div className="category-heading red">Animal</div>
				{
					correctAns && correctAns.map(answer => 
						<div className="stuff correct-ans">{answer.value}</div>)
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		correctAns: state.dropObj.animals
	};
};

export default compose(
	DropTarget('animals', {}, collect),
	connect(mapStateToProps)
) (AnimalTable);
