import React, { Component } from 'react'
import { DragSource } from 'react-dnd';
import { compose } from 'redux';

const itemSource = {
    beginDrag(props) {
        console.log("dragging")
        const itemVal = {
            item: props.item
        }
        return itemVal

    },
    endDrag(props, monitor) {
        if(!monitor.didDrop()) {
            return;
        }

       return props.handleDrop(props.id)
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

class DragElement extends Component {
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
    DragSource("fruits", itemSource, collect),
    DragSource("item", itemSource, collect))(DragElement)
