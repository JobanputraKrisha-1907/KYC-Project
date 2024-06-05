import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
@Component({
    selector: 'app-admin-rejected-request',
    templateUrl: './admin-rejected-request.component.html',
    styleUrls: ['../../assets/css/adminKycRejectedRequest.css']
})
/** adminRejectedRequest component*/
export class AdminRejectedRequestComponent {
    /** adminRejectedRequest ctor */
    ClientData: any;
    searchText;
    /** RqstUnderProcessAdmin ctor */

    //Sorting function for Table Data
    order: string = 'ClientId';
    reverse: boolean = false;
    caseInsensitive: boolean = false;
    constructor(private http: HttpClient, private orderPipe: OrderPipe) {

    }
    setOrder(value: string) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    }
    ngOnInit(): void {
        this.http.get<any>('Admin/GetClientDataForRejectedReq').subscribe(result => {
            this.ClientData = JSON.parse(result.data);
        }, error => { });
    }
}