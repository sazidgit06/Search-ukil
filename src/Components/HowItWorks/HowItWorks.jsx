import React, { useState } from 'react'
import badge from "../../assets/google-play.png"
import poster0 from "../../assets/poster0.webp"
import poster1 from "../../assets/poster1.webp"
import poster2 from "../../assets/poster-2.webp"
import poster3 from "../../assets/poster3.webp"
import poster4 from "../../assets/poster4.webp"

const HowItWorks = () => {

    const[curretnImage, setCurrentImage] = useState(poster0)

    return (
        <div>
            <div className='text-center space-y-5 mt-30 mb-16'>
                <h2 className='text-5xl font-bold'>How it works</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div>
                    {/* 0 */}
                    <div onClick={() => setCurrentImage(poster0)} className="collapse collapse-plus bg-base-100 border border-base-300 mb-5">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title font-semibold">1. Download the app and sign up</div>
                        <div className="collapse-content text-sm">
                            Install the Truck Lagbe app from the Google Play store. Then sign up in the app to start the seamless truck hiring process.
                            <a href="#"><img className='w-30 h-10 mt-5' src={badge} alt="" /></a>
                        </div>
                    </div>
                    {/* 1 */}
                    <div onClick={() => setCurrentImage(poster1)} className="collapse collapse-plus bg-base-100 border border-base-300 mb-5">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">2. Choose your location</div>
                        <div className="collapse-content text-sm">
                            Now select your load and unload location.</div>
                    </div>
                    {/* 2 */}
                    <div onClick={() => setCurrentImage(poster2)} className="collapse collapse-plus bg-base-100 border border-base-300 mb-5">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">3. Choose the appropriate types of trucks</div>
                        <div className="collapse-content text-sm">
                            Select the types of trucks according to your needs.</div>
                    </div>
                    {/* 3 */}
                    <div onClick={() => setCurrentImage(poster3)} className="collapse collapse-plus bg-base-100 border border-base-300 mb-5">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">4. Choose date, time and other specifications</div>
                        <div className="collapse-content text-sm">Select the date and time that work best for you for the delivery of your goods. You can also add additional information if needed.</div>
                    </div>
                    {/* 4 */}
                    <div onClick={() => setCurrentImage(poster4)} className="collapse collapse-plus bg-base-100 border border-base-300 mb-5">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">5. Publish your trip</div>
                        <div className="collapse-content text-sm">
                            Finally, publish your trip and get tagged with a truck. Now enjoy our services and have access to other features and special offers.</div>
                    </div>
                </div>
                <div>
                    <img className='rounded-2xl h-full object-cover' src={curretnImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HowItWorks
