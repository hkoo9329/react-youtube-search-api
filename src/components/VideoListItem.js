import React from 'react'


const VideoListItem = (props) => {
    return (
        <li onClick = {() => props.selectVideo(props.video)} className = 'list-group-item'>
            <div>
                <div>
                    <img className = 'thumbnail' src = {props.video.snippet.thumbnails.default.url}/>
                    <div>
                        <div>{props.video.snippet.title}</div>
                     </div>
                </div>
            </div>

            
        </li>
    )
}

export default VideoListItem