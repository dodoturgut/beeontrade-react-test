/* eslint-disable react/style-prop-object */
import '../App.css';
import React, { Component } from "react";

class ComponentA extends Component {
    constructor(props) {
        super(props);
        this.state = {value: "$2.50", value2: "$0.75",value3: "$1.75",isShowing:false};
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
      }
    
      handleChange(event) {    
          this.setState({value: "$" + parseFloat((event.target.value/2)+2)});  
          this.setState({value2:"$" +  parseFloat((event.target.value/2))});
          if(event.target.value > 39){
              this.setState({isShowing : true})
          }
          else{
              this.setState({isShowing : false})
          }
    }
    handleChange2(event) {    
        this.setState({value3: "$" + parseFloat((event.target.value*2)+0.25)});  
  }
      handleSubmit(event) {
        event.preventDefault();
      }

    render(){
    return (
    <div>
        <div class="section-two">
            <h2>2. Adım</h2>
            <h3>SKU'ların ve işleme birimlerinin sayısına göre maliyetlerinizi hesaplayın.</h3>
                <br></br>
                <div class="col-12 secoBox">
                    <div class="col-md-6 box6">
                        <div class="col-12 col12">
                            <p> Kutunun Ağırlığı : </p> <input type="text"onChange={this.handleChange} placeholder="0"></input> <p> &nbsp;kg</p>
                        </div>
                        <div class="col-12 col12">
                            <p> Kutu Sayısı : </p> <input type="text"onChange={this.handleChange2} placeholder="0"></input> <p> &nbsp;adet</p>
                        </div>
                        <div class="col-12 col12">
                            <p> Özel talimatlar gerekli mi ?</p>
                        </div>
                        <div class="col-12 col12">
                            <p> Toplam:</p><p> Sipariş Başına : </p><p>{this.state.value3}</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                    <div class="1"style={{display: this.state.isShowing ? "none" : "block"}}>
                    <div class="dikKutu">
                        <div class="col-12 yeniKutu"><h4>{this.state.value}</h4><br/><p>İlk SKU Seçim Ücreti</p></div>
                        <div class="col-12 yeniKutu"><h4>{this.state.value2}</h4><br/><p>İlk SKU Seçim Ücreti</p></div>
                        <div class="col-12 yeniKutu"><h4>$2.50</h4><br/><p>İlk SKU Seçim Ücreti</p></div>
                        <div class="col-12 yeniKutu"><h4>$2.50</h4><br/><p>İlk SKU Seçim Ücreti</p></div>
                    </div>
                    </div>
                    <div class="2"style={{display: this.state.isShowing ? "block" : "none"}}>
                    <div class="dikKutu">
                        <div class="col-12 yeniKutu"><h4>Custom</h4><br/><p>İlk SKU Seçim Ücreti</p></div>
                        <div class="col-12 yeniKutu"><h4>Custom</h4><br/><p>İlk SKU Seçim Ücreti</p></div>
                        <div class="col-12 yeniKutu"><h4>Custom</h4><br/><p>İlk SKU Seçim Ücreti</p></div>
                        <div class="col-12 yeniKutu"><h4>Custom</h4><br/><p>İlk SKU Seçim Ücreti</p></div>
                    </div>
                    </div>
                    </div>
                </div>
        </div>
    </div>
    );
        }
    }
    export default ComponentA;