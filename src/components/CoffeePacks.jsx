import React from 'react'
import './CoffeePacks.css'

const CoffeePacks = () => {
  return (
    <div>
      <div id="main-container-coffee-packs">
        <div id="title-and-button-container">
          <h1>New Releases</h1>
          <button id="button-container-view-all">View all</button>
        </div>

        <div id="coffee-packs-cards">
            <div className="card-coffee-packs-1">
              <img src="/src/assets/Coffee-packs-1.jpg" alt="" />
              <p>Triple combo Coffee <br />
              ₹ 799.00</p>
            </div>

            <div className="card-coffee-packs-1">
              <img src="/src/assets/Coffee-packs-2.jpg" alt="" />
              <p>Arabic Coffee <br />
              ₹ 899.00</p>
            </div>

            <div className="card-coffee-packs-1">
              <img src="/src/assets/Coffee-packs-3.jpg" alt="" />
              <p>Robusta Coffee <br />
              ₹ 999.00</p>
            </div>

            <div className="card-coffee-packs-1">
              <img src="/src/assets/Coffee-packs-4.jpg" alt="" />
              <p>Premium Arabic Coffee <br />
              ₹ 1999.00</p>
            </div>


        </div>
      </div>
    </div>
  )
}

export default CoffeePacks
