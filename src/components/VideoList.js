import React from 'react'
import VideoListItem from './VideoListItem'

const VideoList = (props) =>{

    const VideoMapper = props.videos.map(video => 
        {return (<VideoListItem selectVideo = {props.selectVideo}
        key = {video.etag} video ={video}/>)})

    return(
        <ul className = 'col-md-4 list-group'>
            {VideoMapper}
        </ul>
    )
}

export default VideoList