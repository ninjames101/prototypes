import React from 'react'
import './index.css'

class Postcards extends React.Component {

  render() {
    return (
      <main className="postcards">

        <figure className="postcard ridges">
          <img src="https://farm5.staticflickr.com/4205/35382100091_43a893d4dc_c.jpg" width="800" height="486" alt="Ridges in Rifle, CO" className="poster" />
          <figcaption className="title">Ridges <span>in</span> Rifle, CO</figcaption>
        </figure>

        <figure className="postcard editorial">
          <img src="https://farm5.staticflickr.com/4203/34961490322_a5aedefcb6_c.jpg" width="800" height="428" alt="Arapaho National Forest, CO" />
          <figcaption className="title">Arapaho National Forest, CO</figcaption>
        </figure>

        <figure className="postcard stoic">
          <img src="https://farm5.staticflickr.com/4281/35354764461_056c764755_c.jpg" width="800" height="426" alt="Moraine Park Valley in Rocky Mountain National Park, CO" />
          <figcaption className="title">Moraine Park Valley</figcaption>
        </figure>

        <figure className="postcard riverfront-retro">
          <img src="https://farm5.staticflickr.com/4159/34544333765_7f877a7b27_b.jpg" width={1024*.75} height={768*.75} alt="Spring at Riverfront Park in Denver, CO" />
          <figcaption className="title">Riverfront Park</figcaption>
        </figure>

        <figure className="postcard retro">
          <img src="https://farm5.staticflickr.com/4214/35495560005_b1475a49af_c.jpg" width="800" height="408" alt="Phantogram Crowds at RiNo in Denver, CO" />
          <figcaption className="title">RiNo <small>Arts District</small></figcaption>
        </figure>

        <figure className="postcard classic-retro">
          <img src="https://farm2.staticflickr.com/1950/31428771368_1e56f7b257_b.jpg" alt="Skyline in Denver, CO" width={1024*.75} height={768*.75} />
          <figcaption className="title">Denver</figcaption>
        </figure>

        {/*
        <figure className="postcard proto">
          <img src="https://farm5.staticflickr.com/4273/34484249943_f18c8d2627_c.jpg" width="800" height="600" alt="Road Curves at Moraine Park Valley in Rocky Mountain National Park, CO" />
          <figcaption className="title">Rocky Mountain National Park, CO</figcaption>
        </figure>

        <figure className="postcard proto">
          <img src="https://farm5.staticflickr.com/4213/35288215526_7a5c65cc0d_c.jpg" width="800" height="600" alt="Rainbow Curves at Trail Ridge Road in Rocky Mountain National Park, CO" />
          <figcaption className="title">Trail Ridge Road</figcaption>
        </figure>
        */}

      </main>
    )
  }

}

export default Postcards
