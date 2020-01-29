//libraries
import React, { Component, Fragment, createContext } from 'react';
import Product from '../pages/Product/Product';
import GlobalProvider from '../../context/context';

//pages
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import Blogpost from '../pages/BlogPost/Blogpost';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import Hooks from '../pages/Hooks/Hooks';

//styling
import './Home.css';




class Home extends Component {   
    render() {
        return (
            <Router>
            
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">LifeCycle</Link>
                        <Link to="/youtube-component">YoutubeCompPage</Link>
                        <Link to="/hooks">Hooks</Link>
                    </div>
                    <Route path="/" exact component={Blogpost} />
                    <Route path="/detail-post/:postID" component={DetailPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycleComp} />
                    <Route path="/youtube-component" component={YoutubeCompPage} />
                    <Route path="/hooks" component={Hooks} />
                </Fragment>
    
                
            </Router>
        );
    }
}

export default GlobalProvider(Home);