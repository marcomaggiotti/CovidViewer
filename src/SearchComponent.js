// SearchComponent.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchList } from './actions';

class SearchComponent extends Component{
    state = {
        query: ""
    }

    onInputChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    onButtonClick = (e) => {
      console.log('searchButton clicked')
        this.props.searchList(this.state.query);
    }

    render(){
        return (
            <div className="search">
                <input type="text"
                    value={this.state.query}
                    onChange={this.onInputChange}
                />
                <button onClick={this.onButtonClick}>Search</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    searchList,
};

export default connect(null, mapDispatchToProps)(SearchComponent);
