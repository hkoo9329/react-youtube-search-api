import React from 'react'


class SearchBar extends React.Component{

    constructor(props){
        super(props)
        this.state = {inputQuery : ''}
    }

    render(){
        return(
            <div className = 'search-bar'>
            <input value = {this.state.inputQuery}
            onChange={(event) => this.queryChange(event.target.value)}/>
            </div>
        )
    }

    queryChange(inputQuery){
        this.setState({inputQuery})
        this.props.onSearchInput(inputQuery)
    }
}

export default SearchBar