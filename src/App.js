import React from 'react';
import './App.css';
import Header from "./Header"
import Footer from "./Footer"



function App() {

  console.log("App")

  return (
    <div>
      <Header />
        <main>
        <p>text</p>

          {/* https://upload.wikimedia.org/wikipedia/commons/d/da/Trousers-colourisolated.jpg */}

          {/* C:\Users\Pete\Documents\ReactApps\react-ecommerce-website\src\images\unsplash1.jpg */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Trousers-colourisolated.jpg" height={"500vh"}/>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>

        </main>

      <Footer />

    </div>
  );
}

export default App;
