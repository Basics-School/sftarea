import React from 'react'

const VideoBanner = () => {
    return (
        <section className=' overflow-hidden w-full max-w-screen-xl  rounded-lg mx-auto  relative h-[250px]] wf'>
            <div className=' '>
                <video className='transform  absolute -z-10   w-full object-cover' poster='/trailer-frame.png' muted playsInline loop autoPlay preload="none">
                    <source src="/video.mp4" type="video/mp4" />
                    <track
                        src="/path/to/captions.vtt"
                        kind="subtitles"
                        srcLang="en"
                        label="English"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="relative flex w-full text-white justify-between py-10 items-end h-full  backdrop-blur-sm ">
                <div className=" flex flex-col" >
                    <button className=" bg-yellow-500 text-4xl text-black rounded-r-xl py-3 font-bold px-6">
                        Nest Euphoria
                    </button>
                    <div className="text-xl font-semibold px-4 pt-6  space-y-4">

                        <h3 className='font-normal' >3 BHK Flat at Sholinganalur, Chennai</h3>
                        <h1 className="text-2xl font-bold">Starting From $79.9 Lac </h1>
                        <p>Marketed By Nest Buuilder</p>
                    </div>
                </div>
                <button className="bg-brand px-4 py-2 rounded-full mr-8">
                    See Details
                </button>

            </div>
        </section>
    )
}

export default VideoBanner
