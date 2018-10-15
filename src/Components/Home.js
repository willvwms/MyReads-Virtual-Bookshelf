import React from 'react'
import BookCase from './BookCase'
import PageTitle from './PageTitle'

// import AddBook from './AddBook'
// import Title from './Title'

const Home = (props) => {
  return (
    <div className="main-page">
	<PageTitle pageTitle={"Home (My Bookcase)"} />
    <BookCase />
{/*      <AddBook />*/}
    </div>
  )
}

export default Home
