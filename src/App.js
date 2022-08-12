function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
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

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src="img/logo.png" alt="" width={40} height={40}/>
          
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин найкращих кросівок</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-20">
            <img src="img/cart.svg" alt="" width={18} height={18}/>
            <span>4 333 грн.</span>
          </li>

          <li>
            <img src="img/user.svg" alt="" width={18} height={18}/>
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Всі кросівки</h1>
          
          <div className="searchBlock d-flex">
            <img src="img/search.svg" alt="" />
            <input type="text" placeholder="Search..." />
          </div>  
        </div>

        <div className="d-flex justify-between">
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

          <div className="card">
            <img src="img/sneakers/2.jpg" alt="" width={133} height={112}/>
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

          <div className="card">
            <img src="img/sneakers/3.jpg" alt="" width={133} height={112}/>
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

          <div className="card">
            <img src="img/sneakers/4.jpg" alt="" width={133} height={112}/>
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
        </div>
      </div>
    </div>
  );
}

export default App;
