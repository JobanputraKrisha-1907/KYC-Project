import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin-new-request',
    templateUrl: './admin-new-request.component.html',
    styleUrls: ['../../assets/css/adminNewRequest.css']
   
})
/** adminNewRequest component*/
export class AdminNewRequestComponent {
    /** adminNewRequest ctor */
    clientData;
    searchText;
    constructor(private http: HttpClient, private router: Router) { }
    ngOnInit() {
        this.http.get<any>(`Admin/adminGetClientData`).subscribe(data => {
            this.clientData = JSON.parse(data.data);
         
        }, error => { });
    }
    SearchClient() {
        if (this.searchText == "" || this.searchText == null) {
            alert("Search Input Required")
        }
        else {
            let param = {
                "searchBox": this.searchText
            }
            this.http.post<any>(`Admin/searchClientDetails`, { "JsonData": JSON.stringify(param) }).subscribe(data => {
                this.clientData = JSON.parse(data.data);

            }, error => { });
        }
       
    }
    FocusOutSearch() {
        this.ngOnInit()
    }
    verifyClientKyc(item) {
        sessionStorage.setItem("clientId",item.ClientId)
        sessionStorage.setItem("UserEmail",item.Email)
        this.router.navigate(['/KycAdminVerifyClient']);
    }
}

