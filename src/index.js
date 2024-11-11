import React from "react";
import ReactDOM from "react-dom/client";
// import "./style.css";
import "./index.css"
import pizzas from "./data.js"

function App() {
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return <h1>Sonia's Pizza Co.</h1>;
}

function Pizza(props) {
    return (
        <div className="pizza">
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
            <p>{props.ingredients}</p>
            <p>{props.price}</p>
        </div>
    );
}

function Menu() {
    return (
        <div className='menu'>
            <h1>Our Menu</h1>
            <div className='card'>
                {pizzas.map((pizza) => (
                    <Pizza
                        image={pizza.image}
                        name={pizza.name}
                        ingredients={pizza.ingredients}
                        price={pizza.price}
                    />
                ))}
                </div>
        </div>
    );
}


function Order() {
    return (
        <>
        <p>We're currently open!</p>
        <button class="btn">Order</button>
        </>
    )
}

function Footer() {
    const date = new Date();
    const hours = date.getHours();
    const isOpen = hours >= 10 && hours < 22;
    
    return (
        <footer className='footer'>
            {isOpen ? <Order /> : "Sorry we're closed"}
        </footer>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);