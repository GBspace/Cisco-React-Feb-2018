import React, {Component} from 'react';

class Spinner extends Component{
	onIncrementClick(){
		this.props.increment(this.refs.txtDelta.valueAsNumber);
	}
	onDecrementClick(){
		this.props.decrement(this.refs.txtDelta.valueAsNumber);
	}
	render(){
		var { value } = this.props;
		return(
			<div>
				<div>
					<input type="number" ref="txtDelta" />
				</div>
				<input type="button" value="DECREMENT" onClick={this.onDecrementClick.bind(this)}/>
				<span> [ {value} ] </span>
				<input type="button" value="INCREMENT" onClick={this.onIncrementClick.bind(this)}/>
			</div>
		)
	}
}
export default Spinner;