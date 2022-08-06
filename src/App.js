function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src="img/logo.png" alt="" width={40} height={40}/>
          
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>The shop of the best sneakers!</p>
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
    </div>
  );
}

export default App;
