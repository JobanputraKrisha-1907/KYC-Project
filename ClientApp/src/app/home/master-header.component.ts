import { Component } from '@angular/core';

@Component({
    selector: 'app-master-header',
    templateUrl: './master-header.component.html',
    styleUrls: ['../../assets/css/MasterPages.css']

})
/** Master-Header component*/
export class MasterHeaderComponent {
    /** Master-Header ctor */
    constructor() {

    }
    forSession() {
        sessionStorage.clear()
    }
}