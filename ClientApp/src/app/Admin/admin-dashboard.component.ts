import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['../../assets/css/AdminDashboard.css']
})
/** AdminDashboard component*/
export class AdminDashboardComponent {
    /** AdminDashboard ctor */
    constructor(private router: Router) {

    }
    //for total request
    viewTotalRequest() {
        this.router.navigate(['/KycAdminTotalRequest']);
    }
    // for underprocess request
    viewUnderProcessRequest() {
        this.router.navigate(['/KycAdminUnderProcess']);
    }
    // for new request
    viewNewRequest() {
        this.router.navigate(['/KycAdminNewRequest']);
    }
    // for kyc approved
    viewKycApproved() {
        this.router.navigate(['/KycAdminKycApproved']);
    }

    // for rejected request
    viewRejectedRequest() {
        this.router.navigate(['/KycAdminRejectedRequest']);
    }
    // for add master data
    addMasterData() {
        this.router.navigate(['/KycAdminMasterDataDashboard']);
    }
}