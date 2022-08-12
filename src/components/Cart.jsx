import React from 'react'

function Cart() {
  return (
    <div style={{ display: "none" }} className="overlay">
        <div className="drawer">
          <h2 className="mb-30">Корзина</h2>

          <div className="items">
            <div className="cartItem mb-20 d-flex align-center">
              <div className="cartItemImg"
                  style={{backgroundImage: "url('img/sneakers/1.jpg')"}}></div>

              <div className="mr-20">
                <p className="mb-5">Чоловічі кросівки Nike Blazer Mid Suede</p>
                <b>4 333 грн.</b>
              </div>

              <img className="removeBtn" src="img/remove.svg" alt="" />
            </div>

            <div className="cartItem mb-20 d-flex align-center">
              <div className="cartItemImg"
                  style={{backgroundImage: "url('img/sneakers/1.jpg')"}}></div>

              <div className="mr-20">
                <p className="mb-5">Чоловічі кросівки Nike Blazer Mid Suede</p>
                <b>4 333 грн.</b>
              </div>

              <img className="removeBtn" src="img/remove.svg" alt="" />
            </div>
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Всього: </span>
                <div></div>
                <b>10 000 грн.</b>
              </li>

              <li>
                <span>Податок 20%: </span>
                <div></div>
                <b>2000 грн.</b>
              </li>
            </ul>

            <button>
              Створити замовлення
              <img src="img/arrow.svg" alt="" />
            </button>
          </div>
        </div>
    </div>
  )
}

export default Cart
