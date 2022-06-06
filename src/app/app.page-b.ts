import { Component } from '@angular/core';
    @Component({
        template: `This is page b. {{retrievedFromStorage}}
        <input type="input" (ngModelChange)="mychange($event)" [ngModel]="mymodel">
        <input type="input" (ngModelChange)="mychange2($event)" [ngModel]="mymodel2">
        `
    })
    export class PageBComponent {
        //for interpolation
        //requires the types, needed null because string has no null value. this sets type of null or string
        retrievedFromStorage : string | null = sessionStorage.getItem('autosave'); 
         //property binding to ngModel
        mymodel!: string;
        mymodel2!: string;
        constructor() {
        }

        //event binding
        mychange(val:string) {
            sessionStorage.setItem("autosave", val);
            console.log("This is from sessionStorage "+ sessionStorage.getItem("autosave")); // updated value in the storage
            console.log("this is val: "+val); //value 

            // uncomment below code and retrievedFromStorage will change in the html as well 
            //this.retrievedFromStorage = sessionStorage.getItem('autosave');
        }

        mychange2(val2:string){
            sessionStorage.setItem("autosave2", val2);
            console.log("This is mychange2: " + val2);
            console.log("this is from storage autosave2: " + sessionStorage.getItem("autosave2"));
        }
}


