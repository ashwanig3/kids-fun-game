import React, { Component } from 'react';
import DragElement from './dragElement'
import TargetTable from './targetTable'
import { connect } from 'react-redux'
import { onDropElement } from '../Actions/actions';

class Kids extends Component {
    constructor(props) {
        super(props);
	}
handleDrop = (id) => {
	console.log("dragout: " + id)
	this.props.onDrop(id)
}
	
    render() {
		const { items } = this.props;
		return(
			<div className="main-container">
				<h1>Kinder Joy</h1>
			   <div className="stuff-container">
			   {
				items && items.map(item => <DragElement item={item.item} id={item.id} handleDrop={this.handleDrop} />)	
				}
			   </div>
				
				<TargetTable />
			</div>
		)
    }
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		items: state.data
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onDrop: (id) => dispatch(onDropElement(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Kids);
