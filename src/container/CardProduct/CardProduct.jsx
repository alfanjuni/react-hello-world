import React, { Component} from 'react';



class CardProduct extends Component {
    state = {
        order: 4,
        name: 'kodingsquad'

    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1

        }, () => {
            this.handleCounterChange(this.state.order);
        })

       

    }

    handleMinus = () =>{
        if(this.state.order) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })            
        }
    }

    render() {
        return (
                <div className="card">
                    <div className="img-thumb-proud">
                        <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/BSL.jpg" alt="product"/>
                    </div>
                    <p className="product-title"> Daging Ayam berbumbu rasa original plus daging kambing [ 1 carton - 10pack]</p>
                    <p className="product-price">Rp 34.000</p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order} className="text-count"/>
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
        );
    }
}

export default CardProduct;