import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter';
  counter:number=0;
  isEven="Even";
  isDisabled=false;
  isZero=false;
  incr(){ if(this.counter>=20) {this.isDisabled=true}
    else {this.counter++; 
      this.checkEven(); 
      this.isZero=false;}
  }
  decr(){ if(this.counter<=0) {this.isZero=true}
    else {this.counter--; 
      this.checkEven();
      this.isDisabled=false;}
  }
  reset(){this.counter=0;}

  checkEven(){
    if(this.counter%2==1){this.isEven="Odd";}
    else{this.isEven="Even";}
  }
}
