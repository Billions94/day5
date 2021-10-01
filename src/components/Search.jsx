import React from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

class Search extends React.Component {

    state = {
        movies: [],
        query: ''
    }



       fetchMovie = async(query) => {
        
        try {

            const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=1dcfbf0b&s=${query}`)
            const data = await response.json()
            // console.log(this.props.query)
            if(response.ok){

                console.log(`search data`, data)
                this.setState({
                    movies: data.Search
                })
                console.log(`here is your  search data `, this.state.movies)

            } else {
                console.log(`something went wrong`)
            }

        } catch (e) {
            console.error(`ooops an error occured while fetching`, e)
        }

     }

        componentDidMount(){
            this.fetchMovie()
        }


        render(){
            return (
                <>
                    <div>
                        <div>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" value={this.state.query} 
                                onChange={(e) => this.setState({
                                    query: e.target.value.length > 3 &&
                                    this.fetchMovie(this.state.query)
                                })}
                                placeholder="Search movies" />
                            </Form.Group>
                        </div>
                        {
                        this.state.movies.map(movie => (
                        <div key={movie.imdbID} className="card " >
                            <a href="ho"><img src={movie.Poster} className="movie" alt="..."/></a>
                          </div>
                        ))
                    }
                    </div>
                </>
            )
        }
}

export default Search



