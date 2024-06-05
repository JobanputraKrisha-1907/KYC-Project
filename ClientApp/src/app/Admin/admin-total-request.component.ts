import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';


@Component({
    selector: 'app-admin-total-request',
    templateUrl: './admin-total-request.component.html',
    styleUrls: ['../../assets/css/adminTotalRequest.css']
})
/** adminTotalRequest component*/
export class AdminTotalRequestComponent {
    /** adminTotalRequest ctor */
    searchText;
    data: any = [];
    NewRequestdata: any = [];
    UnderProcess = true;
    NewRequest = true;

    //Sorting function for Table Data
    order: string = 'ClientId';
    reverse: boolean = false;
    caseInsensitive: boolean = false;
   
    KycStatus;
    /** Admin ctor */
    constructor(private http: HttpClient, private orderPipe: OrderPipe) {
    }

    setOrder(value: string) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    }

    ngOnInit(): void {
        /*this.http.get<any>(`Admin/TotalRequest_New`).subscribe(result => {
            this.NewRequestdata = JSON.parse(result.data);
            console.log(this.orderPipe.transform(this.NewRequestdata, this.order))
            //console.log(this.NewRequestdata);
            if (this.NewRequestdata[0].MSG == 2) {
                this.NewRequest = false;
            }
        }, error => { });*/

        this.http.get<any>(`Admin/adminTotalRequest`).subscribe(result => {
            this.data = JSON.parse(result.data);
            this.orderPipe.transform(this.data, this.order)
            //console.log(this.data);



        }, error => { });
    }
}
