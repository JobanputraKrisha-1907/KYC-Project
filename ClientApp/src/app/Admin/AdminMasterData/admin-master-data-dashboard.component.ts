import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin-master-data-dashboard',
    templateUrl: './admin-master-data-dashboard.component.html',
   styleUrls: ['../../../assets/css/adminMasterDataDashboard.css']
})
/** adminMasterDataDashboard component*/
export class AdminMasterDataDashboardComponent {
    /** adminMasterDataDashboard ctor */
    constructor(private router: Router) {

    }

    /*To Add Data in database*/

    bankAdd() {
        sessionStorage.setItem("action", "bank");
        this.router.navigate(['KycAdminAddMasterData']);
    }

    ifscAdd() {
        sessionStorage.setItem("action", "ifsc");
        this.router.navigate(['KycAdminAddMasterData']);
    }

    countryAdd() {
        sessionStorage.setItem("action", "country");
        this.router.navigate(['KycAdminAddMasterData']);
    }

    stateAdd() {
        sessionStorage.setItem("action", "state");
        this.router.navigate(['KycAdminAddMasterData']);
    }

    addressTypeAdd() {
        sessionStorage.setItem("action", "addressType");
        this.router.navigate(['KycAdminAddMasterData']);
    }

    annualIncomeAdd() {
        sessionStorage.setItem("action", "annualIncome");
        this.router.navigate(['KycAdminAddMasterData']);
    }

    occupationAdd() {
        sessionStorage.setItem("action", "occupation");
        this.router.navigate(['KycAdminAddMasterData']);
    }

    sourceOfWealthAdd() {
        sessionStorage.setItem("action", "sourceOfWealth");
        this.router.navigate(['KycAdminAddMasterData']);
    }

    /*To Delete Data in database*/

    bankDelete() {
        sessionStorage.setItem("action", "bank");
        this.router.navigate(['KycAdminDeleteMasterData']);
    }

    ifscDelete() {
        sessionStorage.setItem("action", "ifsc");
        this.router.navigate(['KycAdminDeleteMasterData']);
    }

    countryDelete() {
        sessionStorage.setItem("action", "country");
        this.router.navigate(['KycAdminDeleteMasterData']);
    }

    stateDelete() {
        sessionStorage.setItem("action", "state");
        this.router.navigate(['KycAdminDeleteMasterData']);
    }

    addressTypeDelete() {
        sessionStorage.setItem("action", "DeleteaddressType");
        this.router.navigate(['KycAdminDeleteMasterData']);
    }

    annualIncomeDelete() {
        sessionStorage.setItem("action", "annualIncome");
        this.router.navigate(['KycAdminDeleteMasterData']);
    }

    occupationDelete() {
        sessionStorage.setItem("action", "occupation");
        this.router.navigate(['KycAdminDeleteMasterData']);
    }

    sourceOfWealthDelete() {
        sessionStorage.setItem("action", "sourceOfWealth");
        this.router.navigate(['KycAdminDeleteMasterData']);
    }


    /*To Update Data in database*/

    bankUpdate() {
        sessionStorage.setItem("action", "bank");
        this.router.navigate(['KycAdminUpdateMasterData']);
    }

    ifscUpdate() {
        sessionStorage.setItem("action", "ifsc");
        this.router.navigate(['KycAdminUpdateMasterData']);
    }

    countryUpdate() {
        sessionStorage.setItem("action", "country");
        this.router.navigate(['KycAdminUpdateMasterData']);
    }

    stateUpdate() {
        sessionStorage.setItem("action", "state");
        this.router.navigate(['KycAdminUpdateMasterData']);
    }

    addressTypeUpdate() {
        sessionStorage.setItem("action", "UpdataddressType");
        this.router.navigate(['KycAdminUpdateMasterData']);
    }

    annualIncomeUpdate() {
        sessionStorage.setItem("action", "annualIncome");
        this.router.navigate(['KycAdminUpdateMasterData']);
    }

    occupationUpdate() {
        sessionStorage.setItem("action", "occupation");
        this.router.navigate(['KycAdminUpdateMasterData']);
    }

    sourceOfWealthUpdate() {
        sessionStorage.setItem("action", "sourceOfWealth");
        this.router.navigate(['KycAdminUpdateMasterData']);
    }
}