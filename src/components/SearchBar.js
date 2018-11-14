import React, {Component} from 'react'
import Restaurants from './Restaurants'

class SearchBar extends Component{
//taken and modified from myReads project
 state = {
 query: '',
 searchResults: [],
 updateSearch: ''
}
componentWillReceiveProps = props => {
    console.log(props);
    const searchResults = props; 
  };

	updateSearch = (query) => {
	  	this.setState({query: query})
	  	
	  }

    //searchResultFunc(query){
      //this.markers.forEach(marker=>{
        //marker
      //})
      //this.setState({ query })
    //}

	render() {
       this.state.searchResults.filter(//.name- change to point to name of place
        (searchResult)=> {return searchResult.venue.name.indexOf(this.state.search) !==-1});
		return (
          <div className="search-locations">
              <div className="search-location-input-wrapper">
              {/*{JSON.stringify(this.state.query)}*/}
               <input //update state and value of input field
               className="search-text"
               	type="text" //user enters text
               	placeholder="Search location"
               	value={this.state.value} 
               	onChange={(e) => this.updateSearch(e.target.value)} //not a function
               	/>
              </div>
            <div className="search-locations-results">
             <Restaurants foursquareData={this.props.foursquareData}/>
              <ol className="location-list">
              		{this.state.searchResults.map(searchResult => {
                    console.log(searchResult)
                    return(
                          <li key={searchResult.name}> 
                            <Restaurants
                           />
                          </li>) 
                        } )} 
              	</ol> 

              {/* if (e.target.value == 0){
                         <Restaurants foursquareData={this.props.foursquareData}/>}
            else {  
                     
                            <Restaurants searchResult= {this.state.searchResult}
                           />
                          
            }*/}
            </div>
          </div>
        );
	}
} 

export default SearchBar;