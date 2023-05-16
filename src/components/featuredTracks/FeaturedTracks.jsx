import React from 'react'
import "./featuredTracks.css"
const FeaturedTracks = () => {
  return (
    <div className='fp'>
        <div className="fpItem">
      <iframe className='custom' width="335" height="205" src="https://www.youtube.com/embed/xyo7CcKJvB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <span className='fpName'>Producer: Fuelz </span>
      </div>
      <div className="fpItem">
      <iframe className='custom' width="335" height="205" src="https://www.youtube.com/embed/CaxXRyNdcFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <span className='fpName'>Producer: BeatsBySav </span>
      </div>
      <div className="fpItem">
      <iframe className='custom' width="335" height="205" src="https://www.youtube.com/embed/BWgziB7gqG8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <span className='fpName'>Producer: BeatsBySav </span>
      </div>
    </div>
  )
}

export default FeaturedTracks
