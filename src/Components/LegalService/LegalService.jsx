import React, { useState } from 'react';
import { Scale, Shield, Building2, Bell, CheckCircle } from 'lucide-react';
import img from "../../assets/legalServicesBannner.png"

const LegalService = () => {
  const [selected, setSelected] = useState('');
  return (
    <>
      <div>
        <div className=''>
          <img src={img} className='relative w-full h-[600px] object-cover' alt="" />
          <div className='absolute top-1/3 left-[350px] transform -translate-x-[200px] -translate-y-1/2'>
            <h1 className='text-6xl font-bold text-white mb-4'>All Legal Services</h1>
            <p className='text-white'>Our legal services cover a broad range of areas, including family law, criminal defense, business law, and more. Whether you're an individual or a business, our experienced attorneys are here to provide expert guidance and representation tailored to your needs.</p>
          </div>
        </div>
      </div>
      <div>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center mt-20">
          {/* card 1 */}

          <div className="w-full max-w-2xl">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">
                <h1 className="text-3xl font-bold text-white">Anti-Corruption Law</h1>
                <p className="text-cyan-50 mt-2">Explore key areas of anti-corruption legislation and enforcement</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button
                    onClick={() => setSelected(selected === 'investigations' ? '' : 'investigations')}
                    className={`bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'investigations' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Scale className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Government Investigations
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'bribery' ? '' : 'bribery')}
                    className={`bg-purple-50 hover:bg-purple-100 border-2 border-purple-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'bribery' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Bribery Cases
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'corporate' ? '' : 'corporate')}
                    className={`bg-cyan-50 hover:bg-cyan-100 border-2 border-cyan-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'corporate' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Corporate Corruption
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'whistleblower' ? '' : 'whistleblower')}
                    className={`bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'whistleblower' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Bell className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Whistleblower Protection
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'compliance' ? '' : 'compliance')}
                    className={`bg-amber-50 hover:bg-amber-100 border-2 border-amber-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'compliance' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Anti-Corruption Compliance
                      </h3>
                    </div>
                  </button>
                </div>

                {selected === 'investigations' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Scale className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Government Investigations
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Federal and state-level investigations into corrupt practices, fraud, and abuse of power.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'bribery' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Bribery Cases
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Legal proceedings related to bribery, kickbacks, and unlawful payments to officials.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'corporate' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Corporate Corruption
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Enforcement of FCPA and corporate compliance with anti-corruption regulations.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'whistleblower' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Bell className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Whistleblower Protection
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Legal protections and incentives for individuals reporting corrupt activities.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'compliance' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Anti-Corruption Compliance
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Best practices and requirements for organizational anti-corruption programs.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {!selected && (
                  <div className="text-center py-8 text-gray-500">
                    <Shield className="w-12 h-12 mx-auto mb-3 opacity-40" />
                    <p className="text-sm">Click on any topic above to learn more</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* card 2 */}

          <div className="w-full max-w-2xl">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">
                <h1 className="text-3xl font-bold text-white">Anti-Corruption Law</h1>
                <p className="text-cyan-50 mt-2">Explore key areas of anti-corruption legislation and enforcement</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button
                    onClick={() => setSelected(selected === 'investigations' ? '' : 'investigations')}
                    className={`bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'investigations' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Scale className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Government Investigations
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'bribery' ? '' : 'bribery')}
                    className={`bg-purple-50 hover:bg-purple-100 border-2 border-purple-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'bribery' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Bribery Cases
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'corporate' ? '' : 'corporate')}
                    className={`bg-cyan-50 hover:bg-cyan-100 border-2 border-cyan-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'corporate' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Corporate Corruption
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'whistleblower' ? '' : 'whistleblower')}
                    className={`bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'whistleblower' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Bell className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Whistleblower Protection
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'compliance' ? '' : 'compliance')}
                    className={`bg-amber-50 hover:bg-amber-100 border-2 border-amber-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'compliance' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Anti-Corruption Compliance
                      </h3>
                    </div>
                  </button>
                </div>

                {selected === 'investigations' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Scale className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Government Investigations
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Federal and state-level investigations into corrupt practices, fraud, and abuse of power.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'bribery' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Bribery Cases
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Legal proceedings related to bribery, kickbacks, and unlawful payments to officials.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'corporate' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Corporate Corruption
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Enforcement of FCPA and corporate compliance with anti-corruption regulations.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'whistleblower' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Bell className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Whistleblower Protection
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Legal protections and incentives for individuals reporting corrupt activities.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'compliance' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Anti-Corruption Compliance
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Best practices and requirements for organizational anti-corruption programs.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {!selected && (
                  <div className="text-center py-8 text-gray-500">
                    <Shield className="w-12 h-12 mx-auto mb-3 opacity-40" />
                    <p className="text-sm">Click on any topic above to learn more</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* card 3 */}

          <div className="w-full max-w-2xl">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">
                <h1 className="text-3xl font-bold text-white">Anti-Corruption Law</h1>
                <p className="text-cyan-50 mt-2">Explore key areas of anti-corruption legislation and enforcement</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button
                    onClick={() => setSelected(selected === 'investigations' ? '' : 'investigations')}
                    className={`bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'investigations' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Scale className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Government Investigations
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'bribery' ? '' : 'bribery')}
                    className={`bg-purple-50 hover:bg-purple-100 border-2 border-purple-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'bribery' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Bribery Cases
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'corporate' ? '' : 'corporate')}
                    className={`bg-cyan-50 hover:bg-cyan-100 border-2 border-cyan-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'corporate' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Corporate Corruption
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'whistleblower' ? '' : 'whistleblower')}
                    className={`bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'whistleblower' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Bell className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Whistleblower Protection
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'compliance' ? '' : 'compliance')}
                    className={`bg-amber-50 hover:bg-amber-100 border-2 border-amber-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'compliance' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Anti-Corruption Compliance
                      </h3>
                    </div>
                  </button>
                </div>

                {selected === 'investigations' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Scale className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Government Investigations
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Federal and state-level investigations into corrupt practices, fraud, and abuse of power.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'bribery' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Bribery Cases
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Legal proceedings related to bribery, kickbacks, and unlawful payments to officials.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'corporate' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Corporate Corruption
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Enforcement of FCPA and corporate compliance with anti-corruption regulations.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'whistleblower' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Bell className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Whistleblower Protection
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Legal protections and incentives for individuals reporting corrupt activities.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'compliance' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Anti-Corruption Compliance
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Best practices and requirements for organizational anti-corruption programs.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {!selected && (
                  <div className="text-center py-8 text-gray-500">
                    <Shield className="w-12 h-12 mx-auto mb-3 opacity-40" />
                    <p className="text-sm">Click on any topic above to learn more</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* card 4 */}

          <div className="w-full max-w-2xl">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">
                <h1 className="text-3xl font-bold text-white">Anti-Corruption Law</h1>
                <p className="text-cyan-50 mt-2">Explore key areas of anti-corruption legislation and enforcement</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button
                    onClick={() => setSelected(selected === 'investigations' ? '' : 'investigations')}
                    className={`bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'investigations' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Scale className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Government Investigations
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'bribery' ? '' : 'bribery')}
                    className={`bg-purple-50 hover:bg-purple-100 border-2 border-purple-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'bribery' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Bribery Cases
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'corporate' ? '' : 'corporate')}
                    className={`bg-cyan-50 hover:bg-cyan-100 border-2 border-cyan-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'corporate' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Corporate Corruption
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'whistleblower' ? '' : 'whistleblower')}
                    className={`bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'whistleblower' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Bell className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Whistleblower Protection
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'compliance' ? '' : 'compliance')}
                    className={`bg-amber-50 hover:bg-amber-100 border-2 border-amber-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'compliance' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Anti-Corruption Compliance
                      </h3>
                    </div>
                  </button>
                </div>

                {selected === 'investigations' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Scale className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Government Investigations
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Federal and state-level investigations into corrupt practices, fraud, and abuse of power.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'bribery' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Bribery Cases
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Legal proceedings related to bribery, kickbacks, and unlawful payments to officials.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'corporate' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Corporate Corruption
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Enforcement of FCPA and corporate compliance with anti-corruption regulations.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'whistleblower' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Bell className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Whistleblower Protection
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Legal protections and incentives for individuals reporting corrupt activities.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'compliance' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Anti-Corruption Compliance
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Best practices and requirements for organizational anti-corruption programs.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {!selected && (
                  <div className="text-center py-8 text-gray-500">
                    <Shield className="w-12 h-12 mx-auto mb-3 opacity-40" />
                    <p className="text-sm">Click on any topic above to learn more</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* card 5 */}

          <div className="w-full max-w-2xl">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">
                <h1 className="text-3xl font-bold text-white">Anti-Corruption Law</h1>
                <p className="text-cyan-50 mt-2">Explore key areas of anti-corruption legislation and enforcement</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button
                    onClick={() => setSelected(selected === 'investigations' ? '' : 'investigations')}
                    className={`bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'investigations' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Scale className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Government Investigations
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'bribery' ? '' : 'bribery')}
                    className={`bg-purple-50 hover:bg-purple-100 border-2 border-purple-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'bribery' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Bribery Cases
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'corporate' ? '' : 'corporate')}
                    className={`bg-cyan-50 hover:bg-cyan-100 border-2 border-cyan-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'corporate' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Corporate Corruption
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'whistleblower' ? '' : 'whistleblower')}
                    className={`bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'whistleblower' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Bell className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Whistleblower Protection
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'compliance' ? '' : 'compliance')}
                    className={`bg-amber-50 hover:bg-amber-100 border-2 border-amber-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'compliance' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Anti-Corruption Compliance
                      </h3>
                    </div>
                  </button>
                </div>

                {selected === 'investigations' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Scale className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Government Investigations
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Federal and state-level investigations into corrupt practices, fraud, and abuse of power.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'bribery' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Bribery Cases
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Legal proceedings related to bribery, kickbacks, and unlawful payments to officials.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'corporate' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Corporate Corruption
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Enforcement of FCPA and corporate compliance with anti-corruption regulations.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'whistleblower' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Bell className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Whistleblower Protection
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Legal protections and incentives for individuals reporting corrupt activities.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'compliance' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Anti-Corruption Compliance
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Best practices and requirements for organizational anti-corruption programs.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {!selected && (
                  <div className="text-center py-8 text-gray-500">
                    <Shield className="w-12 h-12 mx-auto mb-3 opacity-40" />
                    <p className="text-sm">Click on any topic above to learn more</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* card 6 */}

          <div className="w-full max-w-2xl">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">
                <h1 className="text-3xl font-bold text-white">Anti-Corruption Law</h1>
                <p className="text-cyan-50 mt-2">Explore key areas of anti-corruption legislation and enforcement</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button
                    onClick={() => setSelected(selected === 'investigations' ? '' : 'investigations')}
                    className={`bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'investigations' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Scale className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Government Investigations
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'bribery' ? '' : 'bribery')}
                    className={`bg-purple-50 hover:bg-purple-100 border-2 border-purple-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'bribery' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Bribery Cases
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'corporate' ? '' : 'corporate')}
                    className={`bg-cyan-50 hover:bg-cyan-100 border-2 border-cyan-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'corporate' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Corporate Corruption
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'whistleblower' ? '' : 'whistleblower')}
                    className={`bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'whistleblower' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Bell className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Whistleblower Protection
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'compliance' ? '' : 'compliance')}
                    className={`bg-amber-50 hover:bg-amber-100 border-2 border-amber-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'compliance' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Anti-Corruption Compliance
                      </h3>
                    </div>
                  </button>
                </div>

                {selected === 'investigations' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Scale className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Government Investigations
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Federal and state-level investigations into corrupt practices, fraud, and abuse of power.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'bribery' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Bribery Cases
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Legal proceedings related to bribery, kickbacks, and unlawful payments to officials.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'corporate' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Corporate Corruption
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Enforcement of FCPA and corporate compliance with anti-corruption regulations.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'whistleblower' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Bell className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Whistleblower Protection
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Legal protections and incentives for individuals reporting corrupt activities.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'compliance' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Anti-Corruption Compliance
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Best practices and requirements for organizational anti-corruption programs.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {!selected && (
                  <div className="text-center py-8 text-gray-500">
                    <Shield className="w-12 h-12 mx-auto mb-3 opacity-40" />
                    <p className="text-sm">Click on any topic above to learn more</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* card 7 */}

          <div className="w-full max-w-2xl">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">
                <h1 className="text-3xl font-bold text-white">Anti-Corruption Law</h1>
                <p className="text-cyan-50 mt-2">Explore key areas of anti-corruption legislation and enforcement</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button
                    onClick={() => setSelected(selected === 'investigations' ? '' : 'investigations')}
                    className={`bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'investigations' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Scale className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Government Investigations
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'bribery' ? '' : 'bribery')}
                    className={`bg-purple-50 hover:bg-purple-100 border-2 border-purple-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'bribery' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Bribery Cases
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'corporate' ? '' : 'corporate')}
                    className={`bg-cyan-50 hover:bg-cyan-100 border-2 border-cyan-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'corporate' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Corporate Corruption
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'whistleblower' ? '' : 'whistleblower')}
                    className={`bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'whistleblower' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Bell className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Whistleblower Protection
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'compliance' ? '' : 'compliance')}
                    className={`bg-amber-50 hover:bg-amber-100 border-2 border-amber-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'compliance' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Anti-Corruption Compliance
                      </h3>
                    </div>
                  </button>
                </div>

                {selected === 'investigations' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Scale className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Government Investigations
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Federal and state-level investigations into corrupt practices, fraud, and abuse of power.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'bribery' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Bribery Cases
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Legal proceedings related to bribery, kickbacks, and unlawful payments to officials.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'corporate' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Corporate Corruption
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Enforcement of FCPA and corporate compliance with anti-corruption regulations.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'whistleblower' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Bell className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Whistleblower Protection
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Legal protections and incentives for individuals reporting corrupt activities.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'compliance' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Anti-Corruption Compliance
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Best practices and requirements for organizational anti-corruption programs.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {!selected && (
                  <div className="text-center py-8 text-gray-500">
                    <Shield className="w-12 h-12 mx-auto mb-3 opacity-40" />
                    <p className="text-sm">Click on any topic above to learn more</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* card 8 */}

          <div className="w-full max-w-2xl">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">
                <h1 className="text-3xl font-bold text-white">Anti-Corruption Law</h1>
                <p className="text-cyan-50 mt-2">Explore key areas of anti-corruption legislation and enforcement</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button
                    onClick={() => setSelected(selected === 'investigations' ? '' : 'investigations')}
                    className={`bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'investigations' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Scale className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Government Investigations
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'bribery' ? '' : 'bribery')}
                    className={`bg-purple-50 hover:bg-purple-100 border-2 border-purple-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'bribery' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Bribery Cases
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'corporate' ? '' : 'corporate')}
                    className={`bg-cyan-50 hover:bg-cyan-100 border-2 border-cyan-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'corporate' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Corporate Corruption
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'whistleblower' ? '' : 'whistleblower')}
                    className={`bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'whistleblower' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Bell className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Whistleblower Protection
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'compliance' ? '' : 'compliance')}
                    className={`bg-amber-50 hover:bg-amber-100 border-2 border-amber-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'compliance' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Anti-Corruption Compliance
                      </h3>
                    </div>
                  </button>
                </div>

                {selected === 'investigations' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Scale className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Government Investigations
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Federal and state-level investigations into corrupt practices, fraud, and abuse of power.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'bribery' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Bribery Cases
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Legal proceedings related to bribery, kickbacks, and unlawful payments to officials.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'corporate' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Corporate Corruption
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Enforcement of FCPA and corporate compliance with anti-corruption regulations.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'whistleblower' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Bell className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Whistleblower Protection
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Legal protections and incentives for individuals reporting corrupt activities.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'compliance' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Anti-Corruption Compliance
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Best practices and requirements for organizational anti-corruption programs.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {!selected && (
                  <div className="text-center py-8 text-gray-500">
                    <Shield className="w-12 h-12 mx-auto mb-3 opacity-40" />
                    <p className="text-sm">Click on any topic above to learn more</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* card 9 */}

          <div className="w-full max-w-2xl">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">
                <h1 className="text-3xl font-bold text-white">Anti-Corruption Law</h1>
                <p className="text-cyan-50 mt-2">Explore key areas of anti-corruption legislation and enforcement</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button
                    onClick={() => setSelected(selected === 'investigations' ? '' : 'investigations')}
                    className={`bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'investigations' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Scale className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Government Investigations
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'bribery' ? '' : 'bribery')}
                    className={`bg-purple-50 hover:bg-purple-100 border-2 border-purple-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'bribery' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Bribery Cases
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'corporate' ? '' : 'corporate')}
                    className={`bg-cyan-50 hover:bg-cyan-100 border-2 border-cyan-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'corporate' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Corporate Corruption
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'whistleblower' ? '' : 'whistleblower')}
                    className={`bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'whistleblower' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Bell className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Whistleblower Protection
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'compliance' ? '' : 'compliance')}
                    className={`bg-amber-50 hover:bg-amber-100 border-2 border-amber-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'compliance' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Anti-Corruption Compliance
                      </h3>
                    </div>
                  </button>
                </div>

                {selected === 'investigations' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Scale className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Government Investigations
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Federal and state-level investigations into corrupt practices, fraud, and abuse of power.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'bribery' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Bribery Cases
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Legal proceedings related to bribery, kickbacks, and unlawful payments to officials.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'corporate' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Corporate Corruption
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Enforcement of FCPA and corporate compliance with anti-corruption regulations.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'whistleblower' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Bell className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Whistleblower Protection
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Legal protections and incentives for individuals reporting corrupt activities.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'compliance' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Anti-Corruption Compliance
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Best practices and requirements for organizational anti-corruption programs.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {!selected && (
                  <div className="text-center py-8 text-gray-500">
                    <Shield className="w-12 h-12 mx-auto mb-3 opacity-40" />
                    <p className="text-sm">Click on any topic above to learn more</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* card 10 */}
          <div className="w-full max-w-2xl">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">
                <h1 className="text-3xl font-bold text-white">Anti-Corruption Law</h1>
                <p className="text-cyan-50 mt-2">Explore key areas of anti-corruption legislation and enforcement</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button
                    onClick={() => setSelected(selected === 'investigations' ? '' : 'investigations')}
                    className={`bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'investigations' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Scale className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Government Investigations
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'bribery' ? '' : 'bribery')}
                    className={`bg-purple-50 hover:bg-purple-100 border-2 border-purple-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'bribery' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Bribery Cases
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'corporate' ? '' : 'corporate')}
                    className={`bg-cyan-50 hover:bg-cyan-100 border-2 border-cyan-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'corporate' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Corporate Corruption
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'whistleblower' ? '' : 'whistleblower')}
                    className={`bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'whistleblower' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Bell className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Whistleblower Protection
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelected(selected === 'compliance' ? '' : 'compliance')}
                    className={`bg-amber-50 hover:bg-amber-100 border-2 border-amber-200 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 text-left ${selected === 'compliance' ? 'ring-2 ring-blue-400 shadow-lg' : ''
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-6 h-6 text-gray-700" />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        Anti-Corruption Compliance
                      </h3>
                    </div>
                  </button>
                </div>

                {selected === 'investigations' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Scale className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Government Investigations
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Federal and state-level investigations into corrupt practices, fraud, and abuse of power.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'bribery' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Bribery Cases
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Legal proceedings related to bribery, kickbacks, and unlawful payments to officials.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'corporate' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Corporate Corruption
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Enforcement of FCPA and corporate compliance with anti-corruption regulations.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'whistleblower' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Bell className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Whistleblower Protection
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Legal protections and incentives for individuals reporting corrupt activities.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected === 'compliance' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          Anti-Corruption Compliance
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Best practices and requirements for organizational anti-corruption programs.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {!selected && (
                  <div className="text-center py-8 text-gray-500">
                    <Shield className="w-12 h-12 mx-auto mb-3 opacity-40" />
                    <p className="text-sm">Click on any topic above to learn more</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>

  )
}

export default LegalService
