import { Component } from '@angular/core';

@Component({
    selector: 'app-master-nav',
    templateUrl: './master-nav.component.html',
    styleUrls: ['../../assets/css/MasterPages.css']
})
/** Master-Nav component*/
export class MasterNavComponent {
    /** Master-Nav ctor */
    constructor() {

    }
    forSession() {
        sessionStorage.clear()
    }
}