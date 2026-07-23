
import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Global css
//import './style.css'

import Home from "./pages/home.jsx"
import NotFound from "./pages/notfound.jsx"
import Banner from "./components/banner.jsx"

// Manages the rendering of the root object
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <>
            <BrowserRouter>
                {/* Every page will have a banner */}
                <Banner />

                {/* Where your sub routes go, ie elderwilds.net/fanart etcetc */}
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                {/* Every page will have a footer */}
                {/*<Footer />*/}
            </BrowserRouter>
        </>
    </StrictMode>
);
