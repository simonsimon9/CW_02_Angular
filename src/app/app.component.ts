import { Component } from '@angular/core';
import { ConversionCtoF} from './ConversionCtoFService';

import { MyDataService } from './myDataService';

@Component({
    selector: 'app-root',
    template: `<h1>Hello world! {{title}}</h1>
    <ul>{{f}}</ul>`,
    // 'providers' allows you to create and pass an instance
    // of the class to the constructor header.
    providers: [MyDataService , ConversionCtoF ]
})
export class AppComponent {
    public title = 'This is Angular!';
    f: number;
    //Create instance of 'ConversionService' right in the constructor
    //header.
    constructor(conversionCtoF: ConversionCtoF){
      this.f = conversionCtoF.getConversion();
    }
   
    
}