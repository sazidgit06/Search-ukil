import React from 'react'
import poster6 from "../../assets/poster-6.webp"
import poster7 from "../../assets/poster-7.webp"
import badge from "../../assets/google-play.png"

const Trips = () => {
    return (
        <div className='my-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className="card card-side bg-base-100 shadow-sm">

                    <div className="space-y-5 p-5">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="">
                            <img className='w-30 h-10' src={badge} alt="" />
                            
                        </div>
                    </div>
                    <figure>
                        <img
                            src={poster6}
                            alt="Movie" />
                    </figure>

                </div>
                <div className="card card-side bg-base-100 shadow-sm">

                    <div className="space-y-5 p-5">
                        <h2 className="card-title">Earn more with Your Truck Today</h2>
                        <p>Install the Truck Lagbe Owner app and start earning by getting trips.</p>
                        <div className="">
                            <button>
                                <button className="btn btn-outline">Learn more</button>
                            </button>
                        </div>
                    </div>
                    <figure>
                        <img
                            src={poster7}
                            alt="Movie" />
                    </figure>

                </div>
            </div>
        </div>
    )
}

export default Trips
