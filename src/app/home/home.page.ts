import { Component } from '@angular/core';
import { NumericValueAccessor } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  factor1:number;
  factor2:number;
  operation:number;
  soperation:string;
  result:number;
  validateNumber:number;

  constructor() {
    this.setQuestion();

  }

  setQuestion(){
    this.factor1=this.getRandomInt(1,1000);
    this.factor2=this.getRandomInt(1,1000);
    this.operation=this.getRandomInt(1,5);
    switch(this.operation){
      case 1: this.soperation="+";
              this.result=this.factor1+this.factor2;
              break;
      case 2: this.soperation="-";
              this.result=this.factor1-this.factor2;
              break;
      case 3: this.soperation="*";
              this.result=this.factor1*this.factor2;
              break;
      case 4: this.soperation="/";
              this.result=this.factor1/this.factor2;
              break;

    }

  }
  
  getRandomInt(min,max){
    return Math.floor(Math.random()*(max-min))+min;
  }


}
