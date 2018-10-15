import React, { Component } from 'react'

class PageTitle extends Component {

  render(props) {
    return (
    <div className="list-books-title">
      <h1>MyReads: {this.props.pageTitle}</h1>
    </div>
    )
  }
}

export default PageTitle