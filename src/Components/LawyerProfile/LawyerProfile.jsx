import React, { useState } from 'react';
import ukil1 from "../../assets/ukil-1.webp";
import { Star, MapPin, Briefcase, Award, Users, ChevronDown, ChevronUp } from 'lucide-react';

export default function LawyerProfile() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    { question: "Do you offer online consultations?", answer: "Yes, I offer virtual consultations via video conferencing for your convenience." },
    { question: "What documents are required for the divorce?", answer: "Required documents include marriage certificate, ID proofs, address proofs, and income statements." },
    { question: "Do you handle land or property disputes?", answer: "Yes, I have extensive experience handling property and land dispute cases." },
    { question: "What is included in the initial consultation?", answer: "The initial consultation includes case assessment, legal strategy discussion, and fee structure explanation." }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-blue-800 h-60"></div>

      <div className="max-w-6xl mx-auto px-4 -mt-20">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-52 h-52 bg-white border-4 border-white rounded shadow-lg overflow-hidden">
                <img src={ukil1} alt="Lawyer" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Lawyer Test</h1>
                  <p className="text-gray-600">BA, LL.B, LL.M</p>
                  <p className="text-gray-600">20 years experience</p>
                  <p className="text-sm text-gray-500">Real Expert Law</p>
                  <p className="text-sm text-gray-500">District & Sessional Judge Court, Sitanagar</p>
                  <p className="text-sm text-gray-500">Sitanagar, Ctg, Bangladesh</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
                    Message
                  </button>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Hire
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">72 Reviews</span>
                </div>
              </div>

              <div className="flex gap-4 mt-4 text-sm">
                <button className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">About</button>
                <button className="text-gray-600 hover:text-blue-600">Posts</button>
                <button className="text-gray-600 hover:text-blue-600">Photos</button>
                <button className="text-gray-600 hover:text-blue-600">Videos</button>
                <button className="text-gray-600 hover:text-blue-600">Stats</button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Sidebar */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <MapPin className="w-6 h-6 mx-auto text-blue-600 mb-1" />
                  <div className="text-xl font-bold">5</div>
                  <div className="text-xs text-gray-600">Cities of Practice</div>
                </div>
                <div>
                  <Briefcase className="w-6 h-6 mx-auto text-blue-600 mb-1" />
                  <div className="text-xl font-bold">2</div>
                  <div className="text-xs text-gray-600">Courts Practiced</div>
                </div>
                <div>
                  <Users className="w-6 h-6 mx-auto text-blue-600 mb-1" />
                  <div className="text-xl font-bold">1</div>
                  <div className="text-xs text-gray-600">Completed Cases</div>
                </div>
              </div>
            </div>

            {/* Available Status */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-semibold mb-3">Available Status</h3>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-2">
                Online Appointment
              </button>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-3">
                Client Correspondence Agreement
              </button>
              {/* <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-4">
                Book Now
              </button> */}

              <div className="border-t pt-3">
                <h4 className="font-semibold mb-2">Consult Fees</h4>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Fixed consultation</span>
                  </div>
                  <div className="text-sm text-gray-500">66 Nitrated - USD 1,200</div>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-3">
                Book Now
              </button>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-semibold mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-sm rounded">BENGALI</span>
                <span className="px-3 py-1 bg-gray-100 text-sm rounded">ENGLISH / FLUENT</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* About Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">About</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">LLB Certified</h3>
                  <p className="text-sm text-gray-600">
                    Spent 3 years in the courts. Been Lawyer in the same city. Been Lawyer for real need. Been Lawyer with the criminal/civil law courts. Based in the Court Sitanagar. Been Lawyer for the central gov't. Been Lawyer Chakaria, Bade-bazar in the courts. This to research the city national office.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Courts Practiced in</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-sm">District & Sessional Judge Court, Sitanagar</h4>
                        <span className="text-xs text-blue-600">CURRENT</span>
                      </div>
                      <p className="text-xs text-gray-600">Years of Experience: 0</p>
                      <p className="text-xs text-gray-600">Courts Jurisdiction:</p>
                      <p className="text-xs text-gray-500">Go there to see which one a code. | go there to see a code. | go there to see a code. | go there to see a case. | go there to see a case.</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm">District & Sessional Judge Court, Dhaka</h4>
                      <p className="text-xs text-gray-600">Years of Experience: 0</p>
                      <p className="text-xs text-gray-600">Courts Jurisdiction:</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Legal Services Expertise</h3>
                  <div className="space-y-2">
                    <div>
                      <h4 className="font-semibold text-sm">Real Estate Law</h4>
                      <span className="text-xs text-blue-600">• 10 Cases</span>
                      <p className="text-xs text-gray-600">Fighting For Their Cases</p>
                      <p className="text-xs text-gray-500">
                        File a petition for property dispute was settled back in five of 18 billion separated fees. Filed or received certificates
                        the cases in past city civil court.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm">Military Court</h4>
                      <p className="text-xs text-gray-500">
                        I came in CAR | MAN | RAW | MAC | RAW | EDD | CAM | LAR | CAM | CAMR | LAST | MAR | CAME | LAR | EWA | 
                        CAME | LAR | MAC | LAR | Sec cases
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Honors</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm">Lawyer of the year 2019</h4>
                      <p className="text-xs text-gray-600">Location: Dhaka</p>
                      <p className="text-xs text-gray-600">Year: 2019</p>
                      <p className="text-xs text-gray-500">Profession: Client, Super Award</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Lawyer of the year 2019</h4>
                      <p className="text-xs text-gray-600">Location: Dhaka</p>
                      <p className="text-xs text-gray-600">Year: 2019</p>
                      <p className="text-xs text-gray-500">Profession: Client, Super Award</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Associations</h3>
                  <div>
                    <h4 className="font-semibold text-sm">Bangladesh bar association</h4>
                    <p className="text-xs text-gray-600">Position: Member</p>
                    <p className="text-xs text-gray-500">Start date: 01 - Present</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Speaking Engagements</h3>
                  <div>
                    <h4 className="font-semibold text-sm">Lawyers Summit Bangladesh</h4>
                    <p className="text-xs text-gray-600">Topic: Statement of lecture</p>
                    <p className="text-xs text-gray-600">Date: November 19, 2019</p>
                    <p className="text-xs text-blue-600">Indian lawyer skills.com</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Publications</h3>
                  <div>
                    <h4 className="font-semibold text-sm">Master Law</h4>
                    <p className="text-xs text-gray-600">Published: Hindu counsel</p>
                    <p className="text-xs text-blue-600">July 2012 https://www.wikipedia.com/wiki/Law%law/Deed</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Notable Cases</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm">Land-Mortgage Case</h4>
                      <p className="text-xs text-gray-600">Court: সাহিবাটি কোম নিম্ন আদালত</p>
                      <p className="text-xs text-gray-600">Year: 2023</p>
                      <p className="text-xs text-gray-500">
                        রেজিস্ট্রি ডিড দাগে বিবাদ অথবা কাগজী কাজ অনুপস্থিতিতে বিষয়ক আইনিত কীর্তি জমি মাঠ আদালতে কৃত প্রয়োগ সম্পূর্ণ হইয়েছে ।
                      </p>
                      <span className="text-xs text-blue-600">See cases</span>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm">Land Mortgage</h4>
                      <p className="text-xs text-gray-600">Court: সাহিবাটি কোম নিম্ন আদালত</p>
                      <p className="text-xs text-gray-600">July 1926</p>
                      <p className="text-xs text-gray-500">
                        মহালত বাবুর নিজ মাঠ তাহকারী মাধ্যা হনতান মাঠ আদানতে মাসে তাহকিষ্টে মাটি হীনকিস্তে মন খেয়ান. তাজকে মাসে মাছ হানতে মন মাটি হান
                      </p>
                      <span className="text-xs text-blue-600">See cases</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Media Appearances</h3>
                  <div>
                    <h4 className="font-semibold text-sm">Appear Now 6</h4>
                    <p className="text-xs text-gray-600">Location: 01-Oct-17</p>
                    <p className="text-xs text-gray-600">Topic: Civil Court</p>
                    <p className="text-xs text-blue-600">https://www.linkedin.com</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Community Involvement</h3>
                  <div>
                    <h4 className="font-semibold text-sm">Community Legal Enforcement 2</h4>
                    <p className="text-xs text-gray-600">February 1991 - Present</p>
                    <p className="text-xs text-gray-500">
                      Community Legal Enforcement আইনসবা Legal Enforcement Community Legal Enforcement Community Legal
                      Enforcement Community Legal Enforcement Community Legal Enforcement বি
                    </p>
                    <span className="text-xs text-blue-600">See cases</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Frequently Asked <span className="text-blue-600">Questions</span></h2>
              <p className="text-sm text-gray-600 mb-4">
                Choose a question for more information about my practice areas or expertise. I aim to address common queries addressing
                my careers area. I truly give explanations over more areas and with it answers all appearing legal situations.
              </p>
              <div className="space-y-2">
                {faqs.map((faq, index) => (
                  <div key={index} className="border rounded">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                    >
                      <span className="font-medium text-sm">{faq.question}</span>
                      {expandedFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    {expandedFAQ === index && (
                      <div className="px-4 pb-4 text-sm text-gray-600">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex gap-4 mb-6">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                  Client Reviews
                </button>
                <button className="flex-1 border border-gray-300 py-2 rounded hover:bg-gray-50">
                  Lawyer Endorsements
                </button>
              </div>

              {/* Rating Overview */}
              <div className="flex items-center gap-8 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">4.5</div>
                  <div className="flex items-center justify-center my-2">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-5 h-5 fill-gray-300 text-gray-300" />
                  </div>
                  <div className="text-sm text-gray-600">123 Client Reviews</div>
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold mb-3">Client Rating</h3>
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center gap-2 mb-1">
                      <span className="text-sm w-8">{rating} star</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${rating === 5 ? 'bg-blue-600' : rating === 4 ? 'bg-blue-400' : 'bg-gray-300'}`}
                          style={{ width: rating === 5 ? '70%' : rating === 4 ? '20%' : '0%' }}
                        ></div>
                      </div>
                      <span className="text-sm w-8 text-right">{rating === 5 ? '70%' : rating === 4 ? '20%' : '0%'}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Individual Reviews */}
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Atikur Rahman Munna</h4>
                  <div className="flex items-center gap-2 mb-2">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-4 h-4 fill-gray-300 text-gray-300" />
                  </div>
                  <p className="text-xs text-gray-600 mb-2">Seeking Type: Court Proceeding</p>
                  <p className="text-xs text-gray-600 mb-2">Date: October 28, 2023</p>
                  <p className="text-sm text-gray-700">
                    I came greatly which are sent successfully advocating my. fortunately sentenced successfully delayedmy
                    malyappilam malayappilam anabadham apillan it. malafightan and the human to successfully sending
                    advocate edition and advance. Maine Malayalam.
                  </p>
                  <button className="text-blue-600 text-sm mt-2">See more</button>
                </div>

                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Anonymous User</h4>
                  <div className="flex items-center gap-2 mb-2">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-4 h-4 fill-gray-300 text-gray-300" />
                  </div>
                  <p className="text-xs text-gray-600 mb-2">Seeking Type: Court Proceeding</p>
                  <p className="text-xs text-gray-600 mb-2">Date: October 28, 2023</p>
                  <p className="text-sm text-gray-700">
                    I came greatly which are sent successfully advocating affl. Completely sentenced in Advocade Millennium
                    Indian separately seendum anushil are afzion in implement afzheque around and advocade afzuanum anushoom
                    advocate edition and advocade. Maine Mailanyanum.
                  </p>
                  <button className="text-blue-600 text-sm mt-2">See more</button>
                </div>

                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Anonymous User</h4>
                  <div className="flex items-center gap-2 mb-2">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-4 h-4 fill-gray-300 text-gray-300" />
                  </div>
                  <p className="text-xs text-gray-600 mb-2">Seeking Type: Initial Court Consultation</p>
                  <p className="text-xs text-gray-600 mb-2">Date: October 28, 2023</p>
                  <p className="text-sm text-gray-700">
                    I came greatly which are sent successfully advocating affl. Completely sentenced in Advocade Millennium
                    Indian separately seendum anushil are afzion in implement afzheque around and advocade afzuanum anushoom
                    advocate edition and advocade. Maine Mailanyanum.
                  </p>
                  <button className="text-blue-600 text-sm mt-2">See more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}