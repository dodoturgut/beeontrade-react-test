import '../App.css';
import React, { Component } from "react";
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class ComponentB extends Component {
        constructor(props) {
          super(props);
      
          this.state = {
            isShowing:false,
            isShowing2:false,
            value: 5,
            valuebir:"$2.50",
            valueiki:"$0.50",
            valueuc:"$0.20",
            value2: 10,
            value3: 10,
            value4: {
              min: 5,
              max: 10,
            },
            value5: {
              min: 3,
              max: 7,
            },
          };
        }
        handleChange(event) {    
            this.setState({valuebir: "$" + parseFloat((this.state.value/2)+2)}); 
            this.setState({valueiki: "$" + parseFloat((this.state.value*1.5)+1)}); 
            this.setState({valueuc: "$" + parseFloat((this.state.value/10)+40)}); 
      }

        satis(value){ 
              
            if(value > 999){
                this.setState({isShowing : true})
            }
            else{
                this.setState({isShowing : false})
            }
        }
        özel(value){ 
              
            if(value > 4999){
                this.setState({isShowing2 : true})
            }
            else{
                this.setState({isShowing2 : false})
            }
        }

        render() {

          return (
              
            <form className="form">
                
    <section>
                <div class="section-two">
                    <h2>2. Adım</h2>
                    <h3>Kit ücretlerinizi belirlemek için ayda kaç tane abonelik kutusu toplamanız gerektiğini belirleyin.</h3>

                    <br/>
    <div class="ebond">
              <InputRange
                maxValue={10000}
                minValue={0}
                value={this.state.value}
                onChange={value => {this.setState({ value }); this.satis(value);this.özel(value); this.handleChange();}} /></div>

<br/>
                        <div class="1"style={{display: this.state.isShowing2 ? "none" : "block"}}>
                        <div class="borderIn">
                            <div class="box1">
                                <h3>{this.state.value}</h3>
                                <p>Aylık sipariş</p>
                            </div>
                            <div class="boxHR">
                                <hr/>
                            </div>
                            <div class="box2">
                                <h4>{this.state.valuebir}</h4>
                                <p> İlk ürün toplama ücreti</p>
                            </div>
                            
                            <div class="boxHR">
                                <hr/>
                            </div>
                            <div class="box3">
                                <h4>{this.state.valueiki}</h4>
                                <p> İlk ürün toplama ücreti</p>
                            </div>
                            
                            <div class="boxHR">
                                <hr/>
                            </div>
                            <div class="box4">
                                <h4>{this.state.valueuc}</h4>
                                <p> İlk ürün toplama ücreti</p>
                            </div>
                            <div class="boxHR">
                                <hr/>
                            </div>
                            <div class="box5">
                                <h4>$2.00 + .50/ ek ürün</h4>
                                <p> İlk ürün toplama ücreti</p>
                            </div>
                        </div>
                        </div>

                        <div class="2"style={{display: this.state.isShowing2 ? "block" : "none"}}>
                        <div class="borderIn">
                            <div class="box1">
                                <h3>{this.state.value}</h3>
                                <p>Aylık sipariş</p>
                            </div>
                            <div class="boxHR">
                                <hr/>
                            </div>
                            <div class="box2">
                                <h4>Size özel</h4>
                                <p> İlk ürün toplama ücreti</p>
                            </div>
                            
                            <div class="boxHR">
                                <hr/>
                            </div>
                            <div class="box3">
                                <h4>Size özel</h4>
                                <p> İlk ürün toplama ücreti</p>
                            </div>
                            
                            <div class="boxHR">
                                <hr/>
                            </div>
                            <div class="box4">
                                <h4>Size özel</h4>
                                <p> İlk ürün toplama ücreti</p>
                            </div>
                            <div class="boxHR">
                                <hr/>
                            </div>
                            <div class="box5">
                                <h4>Size özel</h4>
                                <p> İlk ürün toplama ücreti</p>
                            </div>
                        </div>
                        </div>
                        <div class="isShowing" style={{display: this.state.isShowing ? "block" : "none"}}>
                            <button >Satış Ekibimize Bağlan!</button>
                            <p>* Kırılabilir ve 2.5 kg’dan daha ağır ürünler ekstra ücretlere tabi olabilir. Size özel fiyat verebilmemiz için satış ekibimizle bağlantıya geçin.</p>
                        </div>
        </div>
    </section>
            </form>

          );
        }
      }
    export default ComponentB;