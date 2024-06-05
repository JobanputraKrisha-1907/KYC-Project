import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-client-dashboard',
    templateUrl: './client-dashboard.component.html',
    styleUrls: ['../../assets/css/clientDashboard.css']
})
/** clientDashboard component*/
export class ClientDashboardComponent {
    /** clientDashboard ctor */
    constructor(private router: Router, private http: HttpClient) {

    }
    clientName;
    KycProcess;
    kycRejected;
    kyc;
    ngOnInit() {
        this.clientName = sessionStorage.getItem("ClientName");

        let param = {
            "clientID": sessionStorage.getItem("ClientId")
        }

        this.http.post<any>(`Registration/GetRegisterClientInfo`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
            data = JSON.parse(data.data)
          
            switch (data[0].KycStatus) {
                case "NewRequest":
                    this.KycProcess = "NewRequest"
                    this.kyc = true;

                    break;
                
                case "Approved":
                    this.KycProcess = "Approved"
                    this.kyc = true;

                    break;
            }
            if (data[0].KycStatus === "Rejected" && data[0].KycRejectedStatus === "IdentityRejected") {
                this.KycProcess = "IdentityRejected";
                this.kycRejected = true;
                this.kyc = false;

            }
            else if (data[0].KycStatus === "Rejected" && data[0].KycRejectedStatus === "AddressRejected") {
                this.KycProcess = "AddressRejected";
                this.kycRejected = true;
                this.kyc = false;

            }
            else if (data[0].KycStatus === "Rejected" && data[0].KycRejectedStatus === "BankRejected") {
                this.KycProcess = "BankRejected";
                this.kycRejected = true;
                this.kyc = false;

            }
            else if (data[0].KycStatus === "Rejected" && data[0].KycRejectedStatus === "IPVRejected") {
                this.KycProcess = "IPVRejected";
                this.kycRejected = true;
                this.kyc = false;

            }
            else if (data[0].KycStatus === "Rejected" && data[0].KycRejectedStatus === "EsignRejected") {
                this.KycProcess = "EsignRejected";
                this.kycRejected = true;
                this.kyc = false;

            }
        }, error => { });
    }
    EditClientData() {
        this.router.navigate(['/KycConfirm']);
        sessionStorage.setItem("EditClientValue", "true")
    }
}