import React from 'react'

const VideoBanner = () => {
    return (
        <section className=''>
            <video className='transform absolute -z-10 h-full w-full object-cover' poster='/trailer-frame.png' muted playsInline loop autoPlay preload="none">
                <source src="/video.mp4" type="video/mp4" />
                <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                />
                Your browser does not support the video tag.
            </video>
        </section>
    )
}

export default VideoBanner
