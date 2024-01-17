import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ExpanderQuestions from './Components/ExpanderQuestions';

function App(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
            <Route exac path = "/exp" element = {
                <ExpanderQuestions/>
            }
            ></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;