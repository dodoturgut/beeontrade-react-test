import './App.css';
import React, { useState } from "react";
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import commerce from './img/commerce_1.svg'; 
import box1 from './img/box_1.svg'; 
import box2 from './img/box_2.svg'; 
import box3 from './img/retail_1.svg'; 

function App() {
  const [game, setGame] = useState()

  const handleClick = (gameState) => {
    setGame(gameState)
  }

  return (
    <div className="App">
       <section>
        <div class="section-box">
            <div class="boxes">
                <div class="svg-style">
                    <div onClick={ () => handleClick('case1')}>
                        <img src={commerce}  alt="img"></img>
                    </div>
                </div>
                <h3>E-Ticaret</h3>
                <h4>Sipariş Karşılama</h4>
            </div>
            <div class="boxes">
                <div class="svg-style">
                    <div onClick={ () => handleClick('case1')}>
                        <img src={box1}  alt="img"></img>
                    </div>
                </div>
                <h3>Kutu Abonelik</h3>
                <h4>Sipariş Karşılama</h4>
            </div>
            <div class="boxes">
                <div class="svg-style">
                    <div onClick={ () => handleClick('case2')}>
                        <img src={box2}  alt="img"></img>
                    </div>
                </div>
                <h3>Parekende</h3>
                <h4>Sipariş Karşılama</h4>
            </div>
            <div class="boxes">
                <div class="svg-style">
                    <div onClick={ () => handleClick('case2')}>
                        <img src={box3}  alt="img"></img>
                    </div>
                </div>
                <h3>Amazon</h3>
                <h4>FBA ve FBM çözümleri</h4>
            </div>
        </div>
    </section>
      {(() => {
        switch (game) {
          case 'case1':
            return <ComponentB/>
          case 'case2':
            return <ComponentA />
          default: 
            return <ComponentA/>
        }
      })()}

    </div>
  )
}

export default App;
