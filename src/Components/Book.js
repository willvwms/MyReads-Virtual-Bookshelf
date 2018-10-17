import React, { Component } from 'react'

class Book extends Component {

	render(){
		const {book, onShelfUpdate} = this.props

		// console.log(JSON.stringify(book))
		// console.log(JSON.stringify(onChange))

		return (

			<li>
				<div className="book">
				  <div className="book-top">
				    <div
				    	className="book-cover"
				    	style={{
				    		width: 128,
				    		height: 193,
				    		backgroundImage: `url(${book.imageLinks.thumbnail})` }}
				    >
				   	</div>

				    <div className="book-shelf-changer">

				      <select value={book.shelf} onShelfUpdate={ event => onShelfUpdate(book, event.target.value) } >

				        <option value="move" disabled>Move to...</option>
				        <option value="currentlyReading">Currently Reading</option>
				        <option value="wantToRead">Want to Read</option>
				        <option value="read">Read</option>
				        <option value="none">Remove from bookcase</option>

				      </select>

				    </div>

				  </div>

				  <div className="book-title">{book.title}</div>
				  <div className="book-year">{book.publishedDate.substring(0, 4)}</div>
				  <div className="book-authors">{book.authors.join(", ")}</div>

				</div>
			</li>

		)
	}

}

export default Book