import React, { Component } from 'react'
import Shelf from './Shelf'
import * as BooksAPI from '../BooksAPI'

class BookCase extends Component {

  constructor(props) {

    super(props);

    this.state = {allBooks: []};

  }

  // state = {
  //   allBooks: []
  // }

  componentDidMount() {

    BooksAPI.getAll()

      .then(bookData => {

        this.setState({ allBooks: bookData })

      })
  }

  onShelfUpdate(book, shelfName) {

    const { allBooks } = this.state

    const index = allBooks.findIndex ( item => item.id === book.id )

    const updateBook = allBooks[index]

    updateBook.shelf = shelfName

    this.setState({ // Need to update local state here! Figure out how to update the shelf immediately
    })

    BooksAPI.update(book, shelfName)

  }

  render() {

    const { allBooks } = this.state

    const shelves = [
      {
        name: "Currently Reading",
        books: allBooks.filter(book => book.shelf ==='currentlyReading' )
      },
      {
        name: "Want to Read",
        books: allBooks.filter(book => book.shelf ==='wantToRead' )
      },
      {
        name: "Finished reading",
        books: allBooks.filter(book => book.shelf ==='read' )
      }
    ]

    return (

      <div className="list-books">
        <div className="list-books-content">

          {allBooks.forEach(element => {console.log(JSON.stringify(element, null, 2))} ) }

          {shelves && shelves.map(
            (shelf, index) => (
              <Shelf key={index}  title={shelf.name} books={shelf.books} onShelfUpdate={this.onShelfUpdate}/>
              )
            )
          }

        </div>
      </div>

    )
  }
}

export default BookCase