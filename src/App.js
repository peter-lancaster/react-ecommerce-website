import React from 'react';
import './App.css';
import Header from "./Header"



function App() {

  console.log("App")

  return (
    <div>
      <Header />
      <p>text</p>



      {/* https://upload.wikimedia.org/wikipedia/commons/d/da/Trousers-colourisolated.jpg */}

      {/* C:\Users\Pete\Documents\ReactApps\react-ecommerce-website\src\images\unsplash1.jpg */}
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Trousers-colourisolated.jpg" height={"500vh"}/>

    </div>
  );
}

export default App;
