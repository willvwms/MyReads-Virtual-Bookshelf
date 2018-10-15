import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {

	render() {

		const {title, books, onShelfUpdate} = this.props

	  	return(

	  		<div className="bookshelf">
              <h2 className="bookshelf-title">{title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                	{

                		books.length > 0

                		? (books.map((book, index) => ( <Book key={index} book={book} onShelfUpdate={onShelfUpdate} /> ) ) )

              			: ( <p> You don't have any books on this shelf! </p> )

                	}

                </ol>
              </div>
            </div>

	  	)

	}
}

export default Shelf
