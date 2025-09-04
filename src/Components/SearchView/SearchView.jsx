import React, { useEffect, useState } from 'react'
import { BiColor } from 'react-icons/bi'
import District from '../District/District';

const SearchView = () => {

  const [districts, setDistricts] = useState([]);
  const [law, setLaw] = useState([]);
  const [booking, setBooking] = useState([{"name":"consultation"},{"name":"court hearing"}]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCaseType, setSelectedCaseType] = useState("");
  const [selectedBookingType, setSelectedBookingType] = useState("");


  useEffect(() => {
    fetch('https://bdapi.vercel.app/api/v.1/district')
      .then(res => res.json())
      .then(data => setDistricts(data.data))
  }, []);

  useEffect(() => {
    fetch('./CaseType.json')
      .then(res => res.json())
      .then(data => setLaw(data))
  }, []);

  return (
    <div className='relative'>
      <div className='absolute top-30 sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-white text-black w-[300px] sm:w-[650px] lg:w-[800px] p-5 rounded-lg'>
        <h2 className='text-3xl font-bold mb-5'>Search Advocate</h2>
       
          <hr className='text-gray-300' />
        
        <div className='flex flex-col sm:flex-row mt-10 justify-evenly cursor-pointer space-y-2'>
          <div>
            {/* select district */}
            <select
              className='text-black border rounded p-2' name="" id=""
              value={selectedDistrict}
              onChange={(e) => {
                setSelectedDistrict(e.target.value)
              }}
            >
              <option value="">Select a district</option>
              {
                districts.map((district) => (
                  <option key={district.id} value={district.name}>
                    {district.name} </option>

                ))
              }


            </select>
            {/* Show selected value */}

           


          </div>

          {/* select case type */}

          <div>
            <select className='p-2 border rounded '
            value={selectedCaseType}
            onChange={(e) => {
              setSelectedCaseType(e.target.value)
            }}
            name="" id="">
              <option value="">Select case type</option>
              {
                law.map((law) =>(
                  <option key={law.id} value={law.name}>{law.name}</option>
                ))
              }
            </select>
            
          </div>

          {/* select booking type */}
          <div>
            <select className='p-2 border rounded'
            value = {selectedBookingType}
            onChange={(e)=>{
              setSelectedBookingType(e.target.value)
            }}
            name="" id="">
              <option value="">Select booking type</option>
              {
                booking.map(book=>(
                  <option>{book.name}</option>
                ))
              }
            </select>
           
          </div>
          <div>
            <button className='btn btn-error text-white mb-8' type='search'>Search</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SearchView
