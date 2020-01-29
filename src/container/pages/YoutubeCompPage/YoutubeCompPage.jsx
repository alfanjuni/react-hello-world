import React, { Component, Fragment } from 'react';
import YoutubeComp from '../../../component/YoutubeComp/YoutubeComp';

class YoutubeCompPage extends Component {
    render() {
        return (
            <Fragment>
                <p>Youtube Component</p>
                <hr/>
                <YoutubeComp 
                    time="7.12"
                    title="tutorial nonton netflix di android 1"
                    desc="2x ditonton. 2 hari yang lalu"
                />
                <YoutubeComp 
                    time="7.12"
                    title="tutorial nonton netflix di android 1"
                    desc="2x ditonton. 2 hari yang lalu"
                />
                <YoutubeComp 
                    time="7.12"
                    title="tutorial nonton netflix di android 1"
                    desc="2x ditonton. 2 hari yang lalu"
                />
                <YoutubeComp 
                    time="7.12"
                    title="tutorial nonton netflix di android 1"
                    desc="2x ditonton. 2 hari yang lalu"
                />
                <YoutubeComp 
                    time="7.12"
                    title="tutorial nonton netflix di android 1"
                    desc="2x ditonton. 2 hari yang lalu"
                />
            </Fragment>
        );
    }
}

export default YoutubeCompPage;