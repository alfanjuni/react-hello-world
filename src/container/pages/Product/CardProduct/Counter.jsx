import React, { Component } from 'react';
import {connect} from 'react-redux';
import ActionType from '../../../../redux/reducer/globalActionType';
import { GlobalConsumer } from '../../../../context/context';




class Counter extends Component {
    // state = {
    //     order: 4,
    //     name: 'kodingsquad'

    // }

    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue)
    // }

    // handlePlus = () => {
    //     this.setState({
    //         order: this.state.order + 1

    //     }, () => {
    //         this.handleCounterChange(this.state.order);
    //     })

       

    // }

    // handleMinus = () =>{
    //     if(this.state.order) {
    //         this.setState({
    //             order: this.state.order - 1
    //         }, () => {
    //             this.handleCounterChange(this.state.order);
    //         })            
    //     }
    // }

    render() {
        console.log(this);
        return (
           <div className="counter">
            
                <button className="minus" onClick={()=>this.props.dispatch({type: 'MINUS_ORDER'})}>-</button>
                <input type="text" value={this.props.state.totalOrder} className="text-count" />
                 <button className="plus" onClick={()=>this.props.dispatch({type: 'PLUS_ORDER'})}>+</button> 
            </div>
        );
    }
}



/**
 * STATE MANAGEMENT DENGAN REDUX
 */

// const mapStateToProps = (state) => { //nama variable bebas state 
//     return {
//         order: state.totalOrder
//     }
// }

// const mapDispatchToProps = (dispatch) => { //nama variabel dispatch bebas
//     return {
//         handelPlus: () => dispatch({type: ActionType.PLUS_ORDER}) ,
//         handleMinus: () => dispatch({type: ActionType.MINUS_ORDER}),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default GlobalConsumer(Counter);