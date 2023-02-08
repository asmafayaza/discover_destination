import React from "react";
import "../App.css";
import SearchForm from "./SearchForm";
import FlightList from "./FlightList";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="Content">
                <SearchForm />
                <FlightList />
            </div>
            <Footer />
        </div>
    );
}

export default App;
