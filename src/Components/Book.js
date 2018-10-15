import React, { Component } from 'react'

class Book extends Component {

	render(){
		const {book, onShelfUpdate} = this.props

		return (

			//HTML Here
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

				      <select>
				        <option value="move" disabled>Move to...</option>
				        <option value="currentlyReading">Currently Reading</option>
				        <option value="wantToRead">Want to Read</option>
				        <option value="read">Read</option>
				        <option value="none">None</option>
				      </select>

				    </div>

				  </div>
				  <div className="book-title">{book.title}</div>
				  <div className="book-authors">{book.publishedDate.substring(0, 4)}</div>
				  <div className="book-authors">{book.authors.join(", ")}</div>
				</div>
			</li>

		)
	}

}

export default Book