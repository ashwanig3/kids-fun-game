import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import { compose } from 'redux';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem()
}
}

 class TargetTable extends Component {
  render() {
    const { connectDropTarget, hovered, item } = this.props;
    return connectDropTarget(
      <div>
        <table>
           	  <tr>
           	  	<th>Animals</th>
           	  	<th>Fruits</th>
           	  	<th>Numbers</th>
           	  	<th>Colours</th>
           	  </tr>
           	</table>
      </div>
    )
  }
}

export default compose(
  DropTarget("fruits", {}, collect),
  DropTarget("item", {}, collect))(TargetTable)
