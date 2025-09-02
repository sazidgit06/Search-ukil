import React from 'react'
import Banner from '../Banner/Banner'
import SearchView from '../SearchView/SearchView'
import WhyUkilLagbe from '../WhyUkilLagbe/WhyUkilLagbe'
import HowItWorks from '../HowItWorks/HowItWorks'
import Review from '../Review/Review'
import MobileApp from '../MobileApp/MobileApp'
import Trips from '../Trips/Trips'

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <SearchView></SearchView>
      <div className='w-9/12 mx-auto'>
        <WhyUkilLagbe></WhyUkilLagbe>
        <HowItWorks></HowItWorks>
        <Review></Review>
      </div>
      <div className='bg-white w-full px-20 lg:px-50'>
        <MobileApp></MobileApp>
      </div>
      <div className='w-9/12 mx-auto'>
        <Trips></Trips>
      </div>
    </>
  )
}

export default Home
