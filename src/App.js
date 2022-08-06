function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src="img/logo.png" alt="" width={40} height={40}/>
          
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Shop of the best sneakers</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-20">
            <img src="img/cart.svg" alt="" width={18} height={18}/>
            <span>$300</span>
          </li>

          <li>
            <img src="img/user.svg" alt="" width={18} height={18}/>
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <h1 className="mb-40">All sneakers</h1>

        <div className="d-flex justify-between">
          <div className="card">
            <img src="img/sneakers/1.jpg" alt="" width={133} height={112}/>
            <p>Male Sneakers Nike Blazer Mid Suede</p>

            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>$279</b>
              </div>

              <button className="button">
                <img src="img/plus.svg" alt="" width={11} height={11}/>
              </button>
            </div>
          </div>

          <div className="card">
            <img src="img/sneakers/2.jpg" alt="" width={133} height={112}/>
            <p>Male Sneakers Nike Blazer Mid Suede</p>

            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>$279</b>
              </div>

              <button className="button">
                <img src="img/plus.svg" alt="" width={11} height={11}/>
              </button>
            </div>
          </div>

          <div className="card">
            <img src="img/sneakers/3.jpg" alt="" width={133} height={112}/>
            <p>Male Sneakers Nike Blazer Mid Suede</p>

            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>$279</b>
              </div>

              <button className="button">
                <img src="img/plus.svg" alt="" width={11} height={11}/>
              </button>
            </div>
          </div>

          <div className="card">
            <img src="img/sneakers/4.jpg" alt="" width={133} height={112}/>
            <p>Male Sneakers Nike Blazer Mid Suede</p>

            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>$279</b>
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
