import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as data from './../data.json'
import { connect } from 'react-redux'
import { storeData } from './../Actions/actions'

console.log(data.default)

class GameStart extends Component {
    constructor(props) {
        super(props);
    }

    storeData = (e) => {
    	e.preventDefault();
    	this.props.storeData(data.default)
    	this.props.history.push('/start')
    }
    render() {
        return (
           <div className="start-wrapper">
           	<div className="start-container">
	           	<h1>Kider Joy</h1>
	           	<img src="./../../public/images/1.jpg" />
	           	<button className="start-btn" onClick={this.storeData}>Start Game</button>
           	</div>
           </div> 
        );
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
		storeData: (data) => dispatch(storeData(data))
	}
}

export default connect(null, mapDispatchToProps)(GameStart);
