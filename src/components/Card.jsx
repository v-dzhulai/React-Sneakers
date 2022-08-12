import React from 'react'

function Card() {
  return (
    <div className="card">
        <div className="favorite">
            <img src="img/unliked.svg" alt="" />
        </div>
        
        <img src="img/sneakers/1.jpg" alt="" width={133} height={112}/>
        <p>Чоловічі кросівки Nike Blazer Mid Suede</p>

        <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
            <span>Ціна: </span>
            <b>4 333 грн.</b>
            </div>

            <button className="button">
            <img src="img/plus.svg" alt="" width={11} height={11}/>
            </button>
        </div>
    </div>
  )
}

export default Card
