import React from 'react'
import Header from '../../components/header'
import Search_bar from '../../components/search_Bar'
import Footer from '../../components/footer'
import Livros from '../../components/books'

function Home() {
  return (
    <div>
      <Header/>
      <div>
      <Search_bar/>
      <Livros/>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Home