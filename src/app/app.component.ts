import { Component } from '@angular/core';
import { MyDataService } from './myDataService';
@Component({
  selector: 'app-root',
  template: `<h1>Hello world! {{title}}</h1>
              <second-directive [firstName]="author"></second-directive>
             
              `,
  //'providers' allow you to create and pass an instance 
  //of the class tot he constructor header
  providers: [MyDataService]
})
export class AppComponent {
  public title = 'This is Angular!';
  public author = "Joyce.";
 
}