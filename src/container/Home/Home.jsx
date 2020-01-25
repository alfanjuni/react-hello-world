import React, { Component } from 'react';
// import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
// import Product from '../Product/Product';
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import Blogpost from '../BlogPost/Blogpost';

class Home extends Component {
    state = {
        showComponent: true
    }
    componentDidMount(){
        // setTimeout(()=>{
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 15000)
        
    }


    render() {
        return (
            <div>
               { /* <p>Youtube Component</p>
                <hr/>
                <YoutubeComp 
                    time="7.11" 
                    title="Judul Video 1"
                    desc="2x ditonton. 4 hari yang lalu"/>
                <YoutubeComp 
                    time="12.12" 
                    title="Judul Video 2"
                    desc="300x ditonton. 10 hari yang lalu"/>
                <YoutubeComp 
                    time="21.21" 
                    title="Judul Video 3"
                    desc="222x ditonton. 15 hari yang lalu"/>
                <YoutubeComp 
                    time="22.32" 
                    title="Judul Video 4"
                    desc="2.211x ditonton. 17 hari yang lalu"/>
               <YoutubeComp /> */}
                {/*<p>Counter</p>
                <hr/>
                <Product />*/}
                {/*<p>LifeCycle Component</p>
                <hr/>
                {
                    this.state.showComponent 
                    ?
                    <LifeCycleComp />
                    : null

                } */}
                <p>Blog Post</p>
                <hr/>
                <Blogpost />


            </div>
        );
    }
}

export default Home;