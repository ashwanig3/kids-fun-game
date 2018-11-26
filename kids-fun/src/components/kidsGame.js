import React, { Component } from 'react';
import DragElement from './dragElement'
import AnimalTable from './animalTable'
import { connect } from 'react-redux'
import { onDropElement, storeData} from '../Actions/actions';
import NumbersTable from './numberTarget'
import FruitsTable from './fruitTarget'
import ColoursTable from './colourTarget'
import {Redirect} from 'react-router-dom'


class Kids extends Component {
    constructor(props) {
        super(props);
	}
handleDrop = (value) => {
	console.log("dragout: " + value)
	this.props.onDrop(value)
}

	
    render() {
		const { items, attemptsLeft, score } = this.props;
		// if(!items.length) return <Redirect to="/"/>
		if(attemptsLeft === 0) {
			alert('Game Over');
			this.props.history.push('/');
			return <div>''</div>
		}
		if(items.length === 0) {
			alert(`well done! your score is ${score}`)
			this.props.history.push('/')
			return <div>''</div>
		}
		return(
			<div className="main-container">
				<h1 className="red">Ki<span className="green">nd</span><span className="yellow">er</span> <span className="red">J</span><span className="green">o</span><span className="yellow">y</span></h1>
				<p>Put these words in thier appropriate box:</p>
				<p>Attempts Left: {attemptsLeft}</p>
				<p>Score: {score}</p>
			   <div className="stuff-container">
			   {
				items && items.map(item => <DragElement attempt item={item.value} id={item.id} handleDrop={this.handleDrop} type={item.type} />)	
				}
			   </div>
			   <div className="category">
				<AnimalTable />
				<ColoursTable />
				<FruitsTable />
				<NumbersTable />

			   </div>
				
				
			</div>
		)
    }
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		items: state.data,
		attemptsLeft: state.attemptsLeft,
		score: state.correctAns
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onDrop: (id) => dispatch(onDropElement(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Kids);
