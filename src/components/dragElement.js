import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { compose } from 'redux';
import {connect} from 'react-redux';
import { decreaseAttempt } from '../Actions/actions';

let scoreCount = 0; 

const itemSource = {
    beginDrag(props) {
        const itemVal = {
            item: props.item
        }
        return itemVal

    },
    endDrag(props, monitor) {
        if(!monitor.didDrop()) {
            props.dispatch(decreaseAttempt())
            return;
        }

       return props.handleDrop(props.item)
    }
}



function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}
function forType(props) {
    return props.type;
}

class DragElement extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    const { items, isDragging, connectDragSource } = this.props;
    const opacity = isDragging ? 0 : 1;
        return connectDragSource(
           <div className="main-container">		
           	<div>
                <div className="stuff" style={{opacity}}>{this.props.item}</div>
           	</div>
           </div> 
    )
  }
}


export default compose(
    connect(),
    DragSource(forType, itemSource, collect)
    
)(DragElement)
