import React from 'react'
import badge from "../../assets/google-play.png"

const HowItWorks = () => {
    return (
        <div>
            <div className='text-center space-y-5 mt-10 mb-10'>
                <h2 className='text-5xl font-bold'>How it works</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    {/* 1 */}
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-5">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title font-semibold">1. Download the app and sign up</div>
                        <div className="collapse-content text-sm">
                            Install the Truck Lagbe app from the Google Play store. Then sign up in the app to start the seamless truck hiring process.
                            <a href="#"><img className='w-30 h-10 mt-5' src={badge} alt="" /></a>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-5">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">2. Choose your location</div>
                        <div className="collapse-content text-sm">
                            Now select your load and unload location.</div>
                    </div>
                    {/* 3 */}
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-5">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">3. Choose the appropriate types of trucks</div>
                        <div className="collapse-content text-sm">
                            Select the types of trucks according to your needs.</div>
                    </div>
                    {/* 4 */}
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-5">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">4. Choose date, time and other specifications</div>
                        <div className="collapse-content text-sm">Select the date and time that work best for you for the delivery of your goods. You can also add additional information if needed.</div>
                    </div>
                    {/* 5 */}
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-5">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">5. Publish your trip</div>
                        <div className="collapse-content text-sm">
                            Finally, publish your trip and get tagged with a truck. Now enjoy our services and have access to other features and special offers.</div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default HowItWorks
