import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Noteslistpages from "./pages/Noteslistpages";
import NotePage from "./pages/NotePage";

function App() {
  return (

   <Router>
     <div className="container dark">
       <div className="app">
          <Header />
          <Route path="/" exact component={Noteslistpages} />
          <Route path="/note/:id" exact component={NotePage} />
       </div>
      </div>
   </Router>
  );
}

export default App;
