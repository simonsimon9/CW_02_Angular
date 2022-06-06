import { Component } from '@angular/core';
import { MyDataService } from './myDataService';
@Component({
    selector: 'app-root',
    template: `<h1>Hello world! {{title}}</h1>
    <ul><li *ngFor="let name of names">{{name}}</li></ul>`,
    // 'providers' allows you to create and pass an instance
    // of the class to the constructor header.
    providers: [MyDataService]
})
export class AppComponent {
    public title = 'This is Angular!';
    names: Array<any>;
    // Create instance of 'MyDataService' right in the constructor
    // header.
    constructor(myDataService: MyDataService) {
    // Use service to call getNames() method.
    this.names = myDataService.getNames();
    }
}