import { Component } from '@angular/core';
    @Component({
        template: `This is page A.<br>This content was set in page-b: {{someItem}}<br> {{someItem2}}`
    })
    export class PageAComponent {
        someItem: string | undefined | null;
        someItem2!: string | null;
    constructor() {
        if (sessionStorage.getItem("autosave")) {
        this.someItem = sessionStorage.getItem("autosave");
        this.someItem2 = sessionStorage.getItem("autosave2");
    }
}
}