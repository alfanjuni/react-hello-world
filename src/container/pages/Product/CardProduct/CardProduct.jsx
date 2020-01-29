import React, { Component} from 'react';
import Counter from './Counter';



class CardProduct extends Component {

    render() {
        return (
                <div className="card">
                    <div className="img-thumb-proud">
                        <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/BSL.jpg" alt="product"/>
                    </div>
                    <p className="product-title"> Daging Ayam berbumbu rasa original plus daging kambing [ 1 carton - 10pack]</p>
                    <p className="product-price">Rp 34.000</p>
                    <Counter />
                </div>
        );
    }
}

export default CardProduct;