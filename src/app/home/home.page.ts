import { Component } from '@angular/core';
import { NumericValueAccessor } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

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
  valNumber:number;
  smessage:string;
  //let smessage: string|number = '${integer}${fraction}';


  constructor(public alertController: AlertController) {
    this.setQuestion();

  }

  setQuestion(){
    this.factor1=this.getRandomInt(1,1000);
    this.factor2=this.getRandomInt(1,1000);
    this.operation=this.getRandomInt(1,5);
    //this.result=this.toFixed(3);
    this.smessage="";
    switch(this.operation){
      case 1: this.soperation="+";
              this.result=this.factor1+this.factor2;
              break;
      case 2: this.soperation="-";
              this.result=this.factor1-this.factor2;
              break;
      case 3: this.soperation="X";
              this.result=this.factor1*this.factor2;
              break;
      case 4: this.soperation="/";
              this.result=this.factor1/ this.factor2;
              this.result.toFixed(2);
              break;

    }

  }
  toFixed(arg0: number): number {
    throw new Error('Method not implemented.');
  }
  
  getRandomInt(min: number,max: number){
    return Math.floor(Math.random()*(max-min))+min;
  }

  validateNumber(){
    if (this.valNumber = this.result){
      this.valNumber = this.valNumber;
      this.valNumber.toFixed(2);
      this.smessage='Correcta';
    }else{
      this.smessage='Incorrecta';
    };
    
  }
  
  

  async presentAlert() {
      const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Tu Respuesta es:',
      //subHeader: 'Subtitle',
      message: ` ${this.smessage}` ,
      buttons: ['OK']
      });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }



}
