import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import _ from 'lodash';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import style from './index.css';
const API_KEY = 'YOUR API KEY';
class App extends Component {
  constructor(props){
    super(props)
    this.state = {videos : [], firstVideo : null}
    this.searching('riotgames')
  }

  searching(query){
    const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q="
    +query+"&key="+API_KEY;
    fetch(url)
      .then(response => response.json())
      .then(contents => this.setState({ videos:contents.items, firstVideo:contents.items[0]}))
  }


  render() {
    const videoSearch = (query)=> this.searching(query)
    return (
        <div className='mainBox'>
          <img className='logoImage' src ='logo.png'/>
          <SearchBar onSearchInput ={videoSearch}/>
          <VideoDetail video= {this.state.firstVideo} />
          <VideoList selectVideo={ (firstVideo) => this.setState({firstVideo})} videos = {this.state.videos}/>
        </div>
    );
  }
}
export default App
