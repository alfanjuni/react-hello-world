import React from 'react';
import './YoutubeComp.css'

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/EpWXAPOHqys/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA_xmvGlvHMcj9gCwQfNYirFFQt6g"  alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}
       

YoutubeComp.defaultProps = {
    time: '00.00',
    title: 'Judul video',
    desc: '0 ditonton. x hari yang lalu'
}

export default YoutubeComp;