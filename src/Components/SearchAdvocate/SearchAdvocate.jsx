import { useState, useRef, useEffect } from 'react';
import { ChevronDown, MapPin, FileText, Calendar } from 'lucide-react';

export default function SearchAdvocate() {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCaseType, setSelectedCaseType] = useState('');
  const [selectedBookingType, setSelectedBookingType] = useState('');
  
  const [isDistrictOpen, setIsDistrictOpen] = useState(false);
  const [isCaseTypeOpen, setIsCaseTypeOpen] = useState(false);
  const [isBookingTypeOpen, setIsBookingTypeOpen] = useState(false);
  
  // New state for focus behavior
  const [isFocused, setIsFocused] = useState(false);
  const formRef = useRef(null);

  const districts = [
    'Dhaka', 'Chattogram', 'Rajshahi', 'Khulna', 'Barishal', 'Sylhet', 'Rangpur', 'Mymensingh',
    'Cumilla', 'Faridpur', 'Gazipur', 'Kishoreganj', 'Manikganj', 'Munshiganj', 'Narayanganj',
    'Narsingdi', 'Tangail', 'Gopalganj', 'Kishoreganj', 'Lakshmipur', 'Madaripur', 'Rajbari', 'Shariatpur'
  ];

  const caseTypes = [
    'Civil Case', 'Criminal Case', 'Family Case', 'Land Dispute Case', 
    'Business Case', 'Labor Court', 'Tax Case', 'Cyber Crime'
  ];

  const bookingTypes = [
    'Emergency Booking', 'Regular Booking', 'Advance Booking', 'Group Booking', 
    'Corporate Booking', 'Government Booking'
  ];

  // Handle focus behavior
  const handleFocus = () => {
    setIsFocused(true);
    // Scroll the form to center
    if (formRef.current) {
      formRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // Handle clicks outside the form
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsFocused(false);
        // Close all dropdowns when clicking outside
        setIsDistrictOpen(false);
        setIsCaseTypeOpen(false);
        setIsBookingTypeOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const CustomSelect = ({ 
    label, 
    placeholder, 
    value, 
    setValue, 
    options, 
    isOpen, 
    setIsOpen,
    icon: Icon 
  }) => {
    return (
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
              handleFocus();
            }}
            className="w-full px-4 py-2 sm:py-3 text-left bg-white border border-red-300 rounded-lg shadow-sm hover:border-red-600 cursor-pointer"
          >
            <div className="flex items-center">
              <Icon className="h-5 w-5 text-red-500 mr-3" />
              <span className={value ? "text-gray-900" : "text-gray-400"}>
                {value || placeholder}
              </span>
            </div>
            <ChevronDown className={`absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`} />
          </button>
          
          {isOpen && (
            <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
              {options.map((option, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    setValue(option);
                    setIsOpen(false);
                  }}
                  className="w-full px-4 py-3 text-left hover:bg-red-50 hover:text-red-600 transition-colors duration-170 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center">
                    <Icon className="h-4 w-4 text-red-400 mr-3" />
                    {option}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="">
      {/* Background overlay when focused */}
      {isFocused && (
        <div 
          className=""
          onClick={handleBlur}
        />
      )}
      
      <div 
        ref={formRef}
        className={`relative transition-all duration-500 ease-in-out ${
          isFocused 
            ? 'left-1/2 -translate-x-1/2  -translate-y-[60px] sm:-translate-y-1/2 z-20 shadow-2xl' 
            : 'left-1/2 -translate-x-1/2  -translate-y-[60px] sm:-translate-y-1/2 z-20 shadow-2xl'
        } bg-white text-black w-[400px] sm:w-[650px] lg:w-[1100px] px-4 sm:px-8 py-4 sm:py-5 cursor-pointer rounded-lg`}
      >
        <h2 className="text-2xl font-bold text-gray-800">
          Booking Information Form
          <hr className='mt-2 sm:mt-5 text-gray-300 mb-2 sm:mb-5' />
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <CustomSelect
            label="Select District"
            placeholder="Select District"
            value={selectedDistrict}
            setValue={setSelectedDistrict}
            options={districts}
            isOpen={isDistrictOpen}
            setIsOpen={setIsDistrictOpen}
            icon={MapPin}
          />
          
          <CustomSelect
            label="Select Case Type"
            placeholder="Select Case Type"
            value={selectedCaseType}
            setValue={setSelectedCaseType}
            options={caseTypes}
            isOpen={isCaseTypeOpen}
            setIsOpen={setIsCaseTypeOpen}
            icon={FileText}
          />
          
          <CustomSelect
            label="Select Booking Type"
            placeholder="Select Booking Type"
            value={selectedBookingType}
            setValue={setSelectedBookingType}
            options={bookingTypes}
            isOpen={isBookingTypeOpen}
            setIsOpen={setIsBookingTypeOpen}
            icon={Calendar}
          />
        </div>
        
        <div className="mt-4 sm:mt-8 text-center">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 cursor-pointer rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
            Search
          </button>
        </div>
      </div>
      </div>
  );
}
