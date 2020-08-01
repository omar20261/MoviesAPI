import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Home.css'
import { getMovies} from '../../Actions/index';

class Home extends Component {
  constructor(props) {

    super(props);
    this.state = {
      
    }
  }   
  
  componentDidMount(){
    this.props.getMovies(false);
  }
   

  renderItem(movie,index){
    return (
      <div>
        <img src={movie.Poster}  className="poster" />
            <div className="movie-info">
              <p className="movie-title">{movie.Title} <span className="movie-year">{"("+movie.Year+")"}</span> </p> 
              <div>
                <span className="movie-rating">{movie.imdbRating}</span> 
                <span className="movie-runtime">{'Runtime : '+movie.Runtime}</span> 
              </div>
              <div className="movie-genre">{movie.Genre.join(", ")}</div> 
              <div className="movie-Plot">{movie.Plot}</div>
            </div>
      </div>
    )
  }
  renderList(movie,index){
    return (
      <div className="Movies-list" > 
        <h1>Movies List  </h1>
        
        {this.props.movies.moviesList.map( (v,i)=>(
          <div className="Movie-item" key={'Sources-'+i}>
            {this.renderItem(v,i)}
          </div>) 
        )} 
      </div> 
    )
  }


  render() {
    return (
      <div className="Home">
        {this.renderList()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {movies:state.moviesList}
}
export default connect(mapStateToProps,{getMovies})(Home)
