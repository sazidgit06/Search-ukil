import React, { useState, useEffect } from 'react';
import { SlidersHorizontal, Search, Star, MapPin, Briefcase } from 'lucide-react';
import { useSearchParams, useLoaderData, useNavigate } from 'react-router-dom';
import allLawyerBanner from '../../assets/allLawyerBanner.jpg';

const allLawyer = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    city: '',
    district: searchParams.get('district') || '',
    caseType: searchParams.get('caseType') || '',
    bookingType: searchParams.get('bookingType') || '',
    courtComplex: '',
    practicingCourt: '',
    yearOfEnrollment: '',
    lawyerType: '',
    rating: ''
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const data = useLoaderData(); // assuming this is your array of lawyers

  // Sync filters when URL params change (optional - in case of browser back/forward)
  useEffect(() => {
    setFilters(prev => ({
      ...prev,
      district: searchParams.get('district') || '',
      caseType: searchParams.get('caseType') || '',
      bookingType: searchParams.get('bookingType') || ''
    }));
  }, [searchParams]);

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => {
      const newFilters = { ...prev, [filterName]: value };
      
      // Also update URL when user changes these specific filters
      if (['district', 'caseType', 'bookingType'].includes(filterName)) {
        setSearchParams(prevParams => {
          const newParams = new URLSearchParams(prevParams);
          if (value) {
            newParams.set(filterName, value);
          } else {
            newParams.delete(filterName);
          }
          return newParams;
        });
      }
      
      return newFilters;
    });
  };

  const clearFilters = () => {
    setFilters({
      city: '',
      district: '',
      caseType: '',
      bookingType: '',
      courtComplex: '',
      practicingCourt: '',
      yearOfEnrollment: '',
      lawyerType: '',
      rating: ''
    });
    setSearchQuery('');
    setSearchParams({}); // clear all query params
  };

  const filteredLawyers = data.filter(lawyer => {
    const matchesSearch =
      !searchQuery ||
      lawyer.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lawyer.services?.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCity = !filters.city || lawyer.city === filters.city;
    const matchesDistrict = !filters.district || lawyer.district === filters.district;

    // caseType filter matches any service
    const matchesCaseType =
      !filters.caseType ||
      lawyer.services?.some(service =>
        service.toLowerCase().includes(filters.caseType.toLowerCase())
      );

    const matchesCourtComplex = !filters.courtComplex || lawyer.courtComplex === filters.courtComplex;
    const matchesPracticingCourt = !filters.practicingCourt || lawyer.practicingCourt === filters.practicingCourt;
    const matchesYear = !filters.yearOfEnrollment || lawyer.yearOfEnrollment === filters.yearOfEnrollment;
    const matchesType = !filters.lawyerType || lawyer.lawyerType === filters.lawyerType;
    const matchesRating = !filters.rating || lawyer.rating >= Number(filters.rating);

    return (
      matchesSearch &&
      matchesCity &&
      matchesDistrict &&
      matchesCaseType &&
      matchesCourtComplex &&
      matchesPracticingCourt &&
      matchesYear &&
      matchesType &&
      matchesRating
    );
  });

  const navigate = useNavigate();

  // const handleViewProfile = (lawyerId) => {
  //   navigate(`/lawyerProfile/${lawyerId}`); // better to pass ID
  // };

  const handleViewProfile = (lawyer) => {
    navigate("/LawyerProfile", { state: { lawyer } });
  };

  const handleHire = (lawyer) => {
    navigate("/hire", { state: { lawyer } });
  };

  return (
    <div className="relative min-h-screen bg-gray-50 pt-20">
      <img
        className="absolute mx-auto top-0 w-full h-[80px] object-cover"
        src={allLawyerBanner}
        alt="Lawyers banner"
      />

      {/* Mobile floating filter button */}
      <button
        onClick={() => setIsFilterOpen(true)}
        className="md:hidden fixed right-4 bottom-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg active:scale-95 transition"
      >
        <SlidersHorizontal className="w-6 h-6" />
      </button>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Search Bar */}
        <div className="bg-blue-800 p-4 rounded-lg mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search by name or concern..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 rounded border-none outline-none text-black"
            />
            <button className="bg-white text-black px-6 py-2 rounded font-semibold cursor-pointer">
              Search
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filter Sidebar */}
          {isFilterOpen && (
            <div
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={() => setIsFilterOpen(false)}
            />
          )}

          <div
            className={`
              fixed md:static top-0 left-0 z-50 h-full md:h-auto w-72 md:w-64
              bg-white p-5 shadow-lg overflow-y-auto
              transform transition-transform duration-300
              ${isFilterOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}
          >
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-bold text-lg">Filters</h3>
              <button
                onClick={clearFilters}
                className="text-sm text-blue-600 hover:underline"
              >
                Clear All
              </button>
            </div>

            <div className="space-y-5">
              {/* City */}
              <div>
                <label className="block text-sm font-semibold mb-1.5">City</label>
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

              {/* District */}
              <div>
                <label className="block text-sm font-semibold mb-1.5">District</label>
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

              {/* Case Type */}
              <div>
                <label className="block text-sm font-semibold mb-1.5">Case Type</label>
                <select
                  value={filters.caseType}
                  onChange={(e) => handleFilterChange('caseType', e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="">All Case Types</option>
                  <option value="Civil">Civil</option>
                  <option value="Criminal">Criminal</option>
                  <option value="Family">Family</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Property">Property</option>
                </select>
              </div>

              {/* Booking Type */}
              <div>
                <label className="block text-sm font-semibold mb-1.5">Booking Type</label>
                <select
                  value={filters.bookingType}
                  onChange={(e) => handleFilterChange('bookingType', e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="">All Booking Types</option>
                  <option value="Online">Online</option>
                  <option value="In person">In person</option>
                  <option value="Phone">Phone</option>
                  <option value="Email">Email</option>
                </select>
              </div>

              {/* ... other filters remain the same ... */}

              <div>
                <label className="block text-sm font-semibold mb-1.5">Court Complex</label>
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

              {/* Add remaining filters similarly if needed */}
            </div>
          </div>

          {/* Lawyer List */}
          <div className="flex-1">
            <div className="mb-4 text-gray-600">
              Showing {filteredLawyers.length} lawyer{filteredLawyers.length !== 1 ? 's' : ''}
            </div>

            {filteredLawyers.length === 0 ? (
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <p className="text-gray-500">No lawyers found matching your criteria.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-blue-600 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredLawyers.map(lawyer => (
                  <div key={lawyer.id} className="bg-white p-5 rounded-lg shadow">
                    <div className="flex gap-5">
                      <div className="text-6xl flex-shrink-0">{lawyer.image || '👨‍⚖️'}</div>

                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-xl">{lawyer.name}</h3>
                            <p className="text-gray-600">{lawyer.title || 'Advocate'}</p>
                            <div className="flex items-center gap-3 mt-2">
                              <div className="flex items-center">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="ml-1 font-semibold">{lawyer.rating}</span>
                              </div>
                              <span className="text-gray-400">•</span>
                              <span className="text-gray-600">{lawyer.experience}</span>
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

                          <div className="text-right min-w-[140px]">
                            <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium mb-3 inline-block">
                              {lawyer.rating} ★
                            </div>
                            <button
                              onClick={() => handleViewProfile(lawyer)}
                              className="border border-blue-600 text-blue-600 px-4 py-2 rounded mb-2 w-full hover:bg-blue-50 transition"
                            >
                              View Profile
                            </button>
                            <button
                              onClick={() => handleHire(lawyer)}
                              className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition cursor-pointer"
                            >
                              Hire Now
                            </button>
                          </div>
                        </div>

                        <div className="mt-4">
                          <h4 className="font-semibold mb-2">Services</h4>
                          <div className="flex flex-wrap gap-2">
                            {lawyer.services?.map((service, idx) => (
                              <span
                                key={idx}
                                className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded"
                              >
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