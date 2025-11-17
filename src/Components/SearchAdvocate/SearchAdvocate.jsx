import React, { useState, useEffect, useRef, use } from 'react';
import { Calendar, FileText, MapPin, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchableSelect = ({ icon: Icon, placeholder, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option) => {
    onChange(option);
    setSearchTerm('');
    setIsOpen(false);
  };

  return (
    <div> 
      <div className='relative' ref={dropdownRef}>
        <div 
          className="flex items-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 transition-colors bg-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon className="w-5 h-5 text-red-500" />
          <input
            type="text"
            className="flex-1 outline-none text-gray-700 placeholder-gray-400"
            placeholder={value || placeholder}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsOpen(true);
            }}
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(true);
            }}
          />
          <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>

        {isOpen && (
          <div className="absolute z-10 w-full mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-lg  overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <div
                  key={index}
                  className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </div>
              ))
            ) : (
              <div className="px-4 py-3 text-gray-400 text-center">
                No results found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default function BookingForm() {
  const [district, setDistrict] = useState('');
  const [caseType, setCaseType] = useState('');
  const [bookingType, setBookingType] = useState('');
  const [data, setData] = useState({
    districts: [],
    caseTypes: [],
    bookingTypes: []
  });

  useEffect(() => {
    // Fetch data from public folder
    fetch('public/Booking-data.json')
      .then(response => response.json())
      .then(jsonData => {
        setData(jsonData);
      })
      .catch(error => {
        console.error('Error loading booking data:', error);
        // Fallback sample data if JSON file doesn't exist
        // setData({
        //   districts: ['Dhaka', 'Chittagong', 'Rajshahi', 'Khulna', 'Sylhet', 'Barisal'],
        //   caseTypes: ['Civil', 'Criminal', 'Family', 'Corporate', 'Property'],
        //   bookingTypes: ['Online', 'In-Person', 'Phone', 'Email']
        // });
      });
  }, []);

  const navigate = useNavigate();

  const handleSearch = () => {
    console.log('Search clicked:', { district, caseType, bookingType });
    navigate('/allLawyer', { state: { district, caseType, bookingType } });
  };

  return (
    <div className="absolute top-[500px] left-1/2 transform -translate-x-1/2 -transform-y-1/2 bg-gray-50 w-2/3 rounded-3xl">
      <div className=" bg-white rounded-3xl p-4 md:p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Booking Information Form
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select District
            </label>
            <SearchableSelect
              icon={MapPin}
              placeholder="Select District"
              options={data.districts}
              value={district}
              onChange={setDistrict}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Case Type
            </label>
            <SearchableSelect
              icon={FileText}
              placeholder="Select Case Type"
              options={data.caseTypes}
              value={caseType}
              onChange={setCaseType}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Booking Type
            </label>
            <SearchableSelect
              icon={Calendar}
              placeholder="Select Booking Type"
              options={data.bookingTypes}
              value={bookingType}
              onChange={setBookingType}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleSearch}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-12 py-4 rounded-xl transition-colors shadow-lg cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}