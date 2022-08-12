import Card from "./components/Card";
import Cart from "./components/Cart";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper clear">
      <Cart />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Всі кросівки</h1>
          
          <div className="searchBlock d-flex">
            <img src="img/search.svg" alt="" />
            <input type="text" placeholder="Search..." />
          </div>  
        </div>

        <div className="d-flex justify-between">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
