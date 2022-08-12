import React from 'react'

function Header() {
  return (
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
  )
}

export default Header
