
import React from 'react'
import Card from '../Components/Card'

import mobile from '../assets/mobile.jpg'
import laptop from '../assets/laptop.jpg'
import bag from '../assets/bag.jpg'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        Our Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        <Card tittle="Mobile" price={80000} img={mobile} />

        <Card tittle="Laptop" price={90000} img={laptop} />

        <Card tittle="Bag" price={3000} img={bag} />

      </div>
    </div>
  )
}

export default Home
