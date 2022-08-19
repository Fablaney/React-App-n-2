// import react
import React from "react";
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

// import perso
import Header from './components/Header'
import Home from './pages/Home'
import Freelances from "./pages/Freelances";
import Results from "./pages/Results";
import Survey from './pages/Survey'
import Contact from "./pages/Contact";

import Error from "./components/Error";

import { StyledComponent } from "styled-components";

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <Router>

       

        <Header />

        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/survey" element={<Survey />} />
                
            <Route path="/survey/:questionNumber" element={<Survey />} />
            {/* <Route path="/survey/:questionnaire" element={<Survey />} /> */}

            <Route path="/freelances" element={<Freelances />} />

            <Route path="/results" element={<Results />} />

            <Route path="/contact" element={<Contact />} />

            {/* page d'erreur */}
            <Route path="/*" element={<Error />} />

        </Routes>

    </Router>
)