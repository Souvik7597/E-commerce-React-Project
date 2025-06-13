import React from 'react'
import Maincontent from './components/Maincontent'
import Offer from './components/Offer'
import Specialproducts from './components/Specialproducts'
import Joinus from './components/Joinus'
import Furniture from './components/Furniture'
import Trendingproduct from './components/Trendingproduct'
import Blog from './components/Blog'
import Topproducts from './components/Topproducts'
import Companyname from './components/Companyname'

export default function Home() {
  return (
    <>
      <Topproducts />

      <Maincontent />

      <Specialproducts />

      <Offer />


      <Furniture />

      <Trendingproduct />

      <Joinus />


      <Blog />

      <Companyname />
    </>
  )
}
