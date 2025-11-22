import React, { useState } from 'react';
import { Search, Star, MapPin, Briefcase } from 'lucide-react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import allLawyerBanner from '../../assets/allLawyerBanner.jpg'

const allLawyer = () => {
  const [filters, setFilters] = useState({
    city: '',
    district: '',
    courtComplex: '',
    practicingCourt: '',
    yearOfEnrollment: '',
    lawyerType: '',
    rating: ''
  });

  const [searchQuery, setSearchQuery] = useState('');

  const data = useLoaderData();
  console.log(data)

  // Sample lawyer data
//   const allLawyers = [
//     {
//       id: 1,
//       name: 'Barrister Opon',
//       title: 'Advocate',
//       rating: 4.5,
//       experience: '5 Yrs+',
//       city: 'Dhaka',
//       district: 'Dhaka',
//       courtComplex: 'Supreme Court',
//       practicingCourt: 'High Court',
//       yearOfEnrollment: '2018',
//       lawyerType: 'Senior',
//       image: '👨‍⚖️',
//       services: ['Civil Cases', 'Criminal Cases', 'Family Law'],
//       languages: ['Bangla', 'English']
//     },
//     {
//       id: 2,
//       name: 'Barrister Opon Biswas',
//       title: 'Advocate',
//       rating: 4.8,
//       experience: '5 Yrs+',
//       city: 'Dhaka',
//       district: 'Dhaka',
//       courtComplex: 'Supreme Court',
//       practicingCourt: 'High Court',
//       yearOfEnrollment: '2017',
//       lawyerType: 'Senior',
//       image: '👨‍⚖️',
//       services: ['Corporate Law', 'Contract Law'],
//       languages: ['Bangla', 'English']
//     },
//     {
//       id: 3,
//       name: 'Advocate Rahman',
//       title: 'Advocate',
//       rating: 4.3,
//       experience: '3 Yrs+',
//       city: 'Chittagong',
//       district: 'Chittagong',
//       courtComplex: 'District Court',
//       practicingCourt: 'Civil Court',
//       yearOfEnrollment: '2020',
//       lawyerType: 'Junior',
//       image: '👨‍⚖️',
//       services: ['Civil Cases', 'Property Law'],
//       languages: ['Bangla']
//     },
//     {
//       id: 4,
//       name: 'Advocate Sultana',
//       title: 'Advocate',
//       rating: 4.7,
//       experience: '7 Yrs+',
//       city: 'Dhaka',
//       district: 'Dhaka',
//       courtComplex: 'Supreme Court',
//       practicingCourt: 'Supreme Court',
//       yearOfEnrollment: '2016',
//       lawyerType: 'Senior',
//       image: '👩‍⚖️',
//       services: ['Family Law', 'Women Rights'],
//       languages: ['Bangla', 'English', 'Hindi']
//     },
//     {
//       id: 5,
//       name: 'Advocate Karim',
//       title: 'Advocate',
//       rating: 4.2,
//       experience: '2 Yrs+',
//       city: 'Sylhet',
//       district: 'Sylhet',
//       courtComplex: 'District Court',
//       practicingCourt: 'Civil Court',
//       yearOfEnrollment: '2021',
//       lawyerType: 'Junior',
//       image: '👨‍⚖️',
//       services: ['Criminal Cases', 'Civil Cases'],
//       languages: ['Bangla', 'English']
//     }
//   ];

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      city: '',
      district: '',
      courtComplex: '',
      practicingCourt: '',
      yearOfEnrollment: '',
      lawyerType: '',
      rating: ''
    });
    setSearchQuery('');
  };

  // Filter lawyers based on selected filters
  const filteredLawyers = data.filter(lawyer => {
    const matchesSearch = searchQuery === '' || 
      lawyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lawyer.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCity = filters.city === '' || lawyer.city === filters.city;
    const matchesDistrict = filters.district === '' || lawyer.district === filters.district;
    const matchesCourtComplex = filters.courtComplex === '' || lawyer.courtComplex === filters.courtComplex;
    const matchesPracticingCourt = filters.practicingCourt === '' || lawyer.practicingCourt === filters.practicingCourt;
    const matchesYear = filters.yearOfEnrollment === '' || lawyer.yearOfEnrollment === filters.yearOfEnrollment;
    const matchesType = filters.lawyerType === '' || lawyer.lawyerType === filters.lawyerType;
    const matchesRating = filters.rating === '' || lawyer.rating >= parseFloat(filters.rating);

    return matchesSearch && matchesCity && matchesDistrict && matchesCourtComplex && 
           matchesPracticingCourt && matchesYear && matchesType && matchesRating;
  });

  const navigate = useNavigate();

  const handleViewProfileBtn = () => {
    navigate("/lawyerProfile")
  }

  const handleHireBtn = () => {
    navigate("/hire")
  }

  return (


    
    <div className="relative min-h-screen bg-gray-50 pt-20">
      <img className='absolute mx-auto top-0 w-full h-[80px] object-cover' src={allLawyerBanner} alt="" />

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Search Bar */}
        <div className="bg-blue-800 p-4 rounded-lg mb-6">
          <div className="flex gap-2 text-white">
            <input
              type="text"
              placeholder="Name or Concern"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 rounded border-none outline-none"
            />
            <button className="bg-white text-black cursor-pointer px-6 py-2 rounded font-semibold">
              Search
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filter Sidebar */}
          <div className="w-64 bg-white p-4 rounded-lg shadow h-fit">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Filter</h3>
              <button 
                onClick={clearFilters}
                className="text-sm text-blue-600 hover:underline"
              >
                Clear All
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">City</label>
                <select 
                  value={filters.city}
                  onChange={(e) => handleFilterChange('city', e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="">All Cities</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Sylhet">Sylhet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">District</label>
                <select 
                  value={filters.district}
                  onChange={(e) => handleFilterChange('district', e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="">All Districts</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Sylhet">Sylhet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Court Complex</label>
                <select 
                  value={filters.courtComplex}
                  onChange={(e) => handleFilterChange('courtComplex', e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="">All Courts</option>
                  <option value="Supreme Court">Supreme Court</option>
                  <option value="District Court">District Court</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Practicing Court</label>
                <select 
                  value={filters.practicingCourt}
                  onChange={(e) => handleFilterChange('practicingCourt', e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="">All Courts</option>
                  <option value="Supreme Court">Supreme Court</option>
                  <option value="High Court">High Court</option>
                  <option value="Civil Court">Civil Court</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Year of Enrollment</label>
                <select 
                  value={filters.yearOfEnrollment}
                  onChange={(e) => handleFilterChange('yearOfEnrollment', e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="">All Years</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Lawyer Type</label>
                <select 
                  value={filters.lawyerType}
                  onChange={(e) => handleFilterChange('lawyerType', e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="">All Types</option>
                  <option value="Senior">Senior</option>
                  <option value="Junior">Junior</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Minimum Rating</label>
                <select 
                  value={filters.rating}
                  onChange={(e) => handleFilterChange('rating', e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="">All Ratings</option>
                  <option value="4.5">4.5+</option>
                  <option value="4.0">4.0+</option>
                  <option value="3.5">3.5+</option>
                </select>
              </div>
            </div>
          </div>

          {/* Lawyer Cards */}
          <div className="flex-1">
            <div className="mb-4 text-gray-600">
              Showing {filteredLawyers.length} lawyer{filteredLawyers.length !== 1 ? 's' : ''}
            </div>
            
            {filteredLawyers.length === 0 ? (
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <p className="text-gray-500">No lawyers found matching your filters.</p>
                <button 
                  onClick={clearFilters}
                  className="mt-4 text-blue-600 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
              
            ) : (
              <div className="space-y-4">
                {filteredLawyers.map(lawyer => (
                  <div key={lawyer.id} className="bg-white p-6 rounded-lg shadow">
                    <div className="flex gap-4">
                      <div className="text-6xl">{lawyer.image}</div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-bold text-xl">{lawyer.name}</h3>
                            <p className="text-gray-600">{lawyer.title}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <div className="flex items-center">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="ml-1 font-semibold">{lawyer.rating}</span>
                              </div>
                              <span className="text-gray-400">|</span>
                              <span className="text-gray-600">{lawyer.experience} Experience</span>
                            </div>
                            <div className="flex items-center gap-1 mt-1 text-sm text-gray-600">
                              <MapPin className="w-4 h-4" />
                              <span>{lawyer.city}, {lawyer.district}</span>
                            </div>
                            <div className="flex items-center gap-1 mt-1 text-sm text-gray-600">
                              <Briefcase className="w-4 h-4" />
                              <span>{lawyer.courtComplex}</span>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2">
                              {lawyer.rating} ★
                            </div>
                            <button onClick={handleViewProfileBtn} className="border border-blue-600 text-blue-600 px-4 py-1 rounded mb-2 w-full cursor-pointer">
                              View Profile
                            </button>
                            <button onClick={handleHireBtn} className="bg-blue-600 text-white px-4 py-1 rounded w-full cursor-pointer">
                              Hire
                            </button>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <h4 className="font-semibold mb-2">Legal Services</h4>
                          <div className="flex gap-2 flex-wrap">
                            {lawyer.services.map((service, idx) => (
                              <span key={idx} className="text-blue-600 text-sm">
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default allLawyer;