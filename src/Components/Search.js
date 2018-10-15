import React, {Component} from 'react'
import Book from './Book'
import PageTitle from './PageTitle'
import * as BooksAPI from '../BooksAPI'

class Search extends Component {
	state = {}

	componentDidMount() {}

	updateQuery(query) {}

	searchBooks(query) {}

	render() {

		const {books, query} = this.state

		return(

		    <div className="search-page">
				<PageTitle pageTitle={"Search for a Book"} />
				// HTML here
		        <div className="open-search">
		          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
		        </div>
		    </div>
		)
	}

}

export default Search