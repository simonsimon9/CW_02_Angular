import { Component } from '@angular/core';
    @Component({
        template: `This is page b. {{retrievedFromStorage}}
        <input type="input" (ngModelChange)="mychange($event)" [ngModel]="mymodel">
        `
    })
    export class PageBComponent {
        //for interpolation
        //requires the types, needed null because string has no null value. this sets type of null or string
        retrievedFromStorage : string | null = sessionStorage.getItem('autosave'); 
         //property binding to ngModel
        mymodel:any = "hey";
        constructor() {
        }

        //event binding
        mychange(val:string) {
            sessionStorage.setItem("autosave", val);
            console.log(sessionStorage.getItem("autosave")); // updated value in the storage
            console.log(val); //value 

            // uncomment below code and retrievedFromStorage will change in the html as well 
            //this.retrievedFromStorage = sessionStorage.getItem('autosave');
        }
}