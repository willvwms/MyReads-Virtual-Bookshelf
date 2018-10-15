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

      .then(books => {

        this.setState({ allBooks: books })

      })
  }

  onShelfUpdate(book, shelfName) {

    const { allBooks } = this.state

    const index = allBooks.findIndex ( param => param.id === book.id )

    const updateBook = allBooks[index]

    updateBook.shelf = shelfName

    BooksAPI.update(book, shelfName)

  }

  render() {

    const { allBooks } = this.state

    const shelves = [
      {
        name: "Finished reading",
        books: allBooks.filter(book => book.shelf ==='read' )
      },
      {
        name: "Currently Reading",
        books: allBooks.filter(book => book.shelf ==='currentlyReading' )
      },
      {
        name: "Want to Read",
        books: allBooks.filter(book => book.shelf ==='wantToRead' )
      }
    ]

    return (

      <div className="list-books">
        <div className="list-books-content">

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