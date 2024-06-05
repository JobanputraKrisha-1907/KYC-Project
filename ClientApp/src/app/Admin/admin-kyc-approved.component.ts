import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
@Component({
    selector: 'app-admin-kyc-approved',
    templateUrl: './admin-kyc-approved.component.html',
    styleUrls: ['../../assets/css/adminKycApprovedRequest.css']
})
/** adminKycApproved component*/
export class AdminKycApprovedComponent {
    /** adminKycApproved ctor */
    ClientData: any;
    searchText;

    //Sorting function for Table Data
    order: string = 'ClientId';
    reverse: boolean = false;
    caseInsensitive: boolean = false;
    /** RqstUnderProcessAdmin ctor */
    constructor(private http: HttpClient, private orderPipe: OrderPipe) {

    }
    setOrder(value: string) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    }
    ngOnInit(): void {
        this.http.get<any>('Admin/GetClientDataForApprovedReq').subscribe(result => {
            this.ClientData = JSON.parse(result.data);
        }, error => { });
    }
}