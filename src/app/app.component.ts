import { Component } from '@angular/core';
import { MyDataService } from './myDataService';
@Component({
    selector: 'app-root',
    template: `<h1>Hello world! {{title}}</h1>
    <ul>{{myname}}</ul>`,
    // 'providers' allows you to create and pass an instance
    // of the class to the constructor header.
    providers: [MyDataService]
})
export class AppComponent {
    public title = 'This is Angular!';
    myname: string; //if this is not assigned at constructor. it will scream to be intialized. 
    
    //Create instance of 'MyDataService' right in the constructor
    //header.
    constructor(myDataService: MyDataService){
      this.myname = myDataService.getmyNames();
    }
   
    
}