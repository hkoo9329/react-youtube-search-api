import React from 'react'


const VideoDetail = ({video}) =>{
    if(!video){
        return(
            <div>loading</div>
        )
    }


    return(
        <div className ='video-detail'>
            <div className = 'embed-responsive embed-responsive-16by9'>
                <iframe className='embeded-responsive-item' src= {'https://youtube.com/embed/'+ video.id.videoId }></iframe>
            </div>
            <div className = 'details'>
             <small>By <span className="channel-title">{video.snippet.channelTitle}</span> on <time>{video.snippet.publishedAt}</time></small>
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>

            </div>
        </div>
    )
}
export default VideoDetail