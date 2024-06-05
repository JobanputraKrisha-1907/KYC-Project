import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';

@Component({
    selector: 'app-admin-verify-client',
    templateUrl: './admin-verify-client.component.html',
    styleUrls: ['../../assets/css/adminVerifyClient.css']

})
/** adminVerifyClient component*/
export class AdminVerifyClientComponent {
    /** adminVerifyClient ctor */
    constructor(private http: HttpClient) {
    }
    ClientId = sessionStorage.getItem("clientId")
    ClientData;
    selectedIndex = 0;
    ngOnInit() {
      
        let param = {
            "clientId": this.ClientId,
           
        }
        this.http.post<any>(`Admin/AdminVerifyClientDetails`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
            this.ClientData = JSON.parse(data.data);
            console.log(this.ClientData)

        }, error => { });
    }

    // tab changed

    public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
        this.selectedIndex = tabChangeEvent.index;
    }

    NextTab() {
        this.selectedIndex = this.selectedIndex + 1;

    }

    ApprovedClientRequest() {
        let param = {
            "clientId": this.ClientId,

        }
        this.http.post<any>(`Admin/AdminApprovedClientRequest`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {


            alert("Request Approved")
        }, error => { });
    }

    // for reject indentity
    IdentityReject() {
        let param = {
            "clientId": this.ClientId,
            "RejectedStatus":"IdentityRejected"

        }
        this.http.post<any>(`Admin/AdminRejectClientRequest`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {

           
            let param = {
                "UserEmail": sessionStorage.getItem("UserEmail"),
                "RejectionType":"Identity Details"

            }
            this.http.post<any>(`Admin/SendEmailRejection`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {


                alert("Request Rejected")
            }, error => { });

        }, error => { });
    }

    // for reject Address
    AddressReject() {
        let param = {
            "clientId": this.ClientId,
            "RejectedStatus": "AddressRejected"
        }
        this.http.post<any>(`Admin/AdminRejectClientRequest`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {

            let param = {
                "UserEmail": sessionStorage.getItem("UserEmail"),
                "RejectionType": "Address Details"


            }
            this.http.post<any>(`Admin/SendEmailRejection`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {


                alert("Request Rejected")
            }, error => { });

        }, error => { });
    }

    // for reject Bank
    BankReject() {
        let param = {
            "clientId": this.ClientId,
            "RejectedStatus": "BankRejected"
        }
        this.http.post<any>(`Admin/AdminRejectClientRequest`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {

            let param = {
                "UserEmail": sessionStorage.getItem("UserEmail"),
                "RejectionType": "Bank Details"


            }
            this.http.post<any>(`Admin/SendEmailRejection`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {


                alert("Request Rejected")
            }, error => { });

        }, error => { });
    }

    // for reject IPV
    IPVReject() {
        let param = {
            "clientId": this.ClientId,
            "RejectedStatus": "IPVRejected"
        }
        this.http.post<any>(`Admin/AdminRejectClientRequest`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {

            let param = {
                "UserEmail": sessionStorage.getItem("UserEmail"),
                "RejectionType": "IPV Details"


            }
            this.http.post<any>(`Admin/SendEmailRejection`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {


                alert("Request Rejected")
            }, error => { });

        }, error => { });
    }

    // for reject Esign
    EsignReject() {
        let param = {
            "clientId": this.ClientId,
            "RejectedStatus": "EsignRejected"
        }
        this.http.post<any>(`Admin/AdminRejectClientRequest`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {

            let param = {
                "UserEmail": sessionStorage.getItem("UserEmail"),
                "RejectionType": "Esign Details"


            }
            this.http.post<any>(`Admin/SendEmailRejection`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {


                alert("Request Rejected")
            }, error => { });

        }, error => { });
    }
}