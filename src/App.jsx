import { useState } from 'react'
import Card from './Card'
import Footer from './Footer'
import Header from './Header'
import './App.css'
import './Card.css'

function App() {

  return (
    <>
   <Card title={'shoes'} price={50} />
   <Card title={'BOND'} price={60} />
   <Card  price={60} />


   <Footer />
   <Header />
    </>
  )
}

export default App;
