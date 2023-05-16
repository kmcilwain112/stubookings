import React from 'react'
import "./EngineerList.css"

const EngineerList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
        <img
          src="https://live.staticflickr.com/65535/47930989377_4f3b7331b6_b.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Yungin</h1>
          <h2>Los Angeles, CA</h2>
        </div>
        </div>
        <div className="pListItem">
        <img
          src="https://live.staticflickr.com/65535/52112383980_5b178cedca_b.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>MixedByAli</h1>
          <h2>TDE Studios</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://live.staticflickr.com/6106/6218539064_b7d0e09eb0_b.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Young Guru</h1>
          <h2>Bassline Studios</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Mike Snell</h1>
          <h2>Philadelphia, PA</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Chris Angle</h1>
          <h2>Austin, TX</h2>
        </div>
      </div>
    </div>
  )
}

export default EngineerList
