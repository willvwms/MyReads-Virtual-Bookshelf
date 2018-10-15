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

		{books, query} = this.state

		return(

			<PageTitle pageTitle={"Search for a Book"} />
			// HTML
			<div> This is a placeholder DIV for the Search feature </div>
		)
	}

}


