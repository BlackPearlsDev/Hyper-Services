import React from "react";
import Header from "./Components/UI/Header/Index";
import Main from "./Components/Pages/Main/Index";
import Footer from "./Components/UI/Footer/Index";
import AboutUs from "./Components/Pages/AboutUs/Index";
import Contact from "./Components/Pages/Contact/Index";

import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <React.Fragment>
            <Header />

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="aboutus" element={<AboutUs />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
            
            <Footer />
        </React.Fragment>
    )
}

export default App;