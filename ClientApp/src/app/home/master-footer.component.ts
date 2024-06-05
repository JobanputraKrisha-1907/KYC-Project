import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-master-footer',
    templateUrl: './master-footer.component.html',
    styleUrls: ['../../assets/css/MasterPages.css']

})
/** Master-Footer component*/
export class MasterFooterComponent {
    /** Master-Footer ctor */
    LastLoginTime;
    constructor(private http: HttpClient) {

    }
    ngOnInit() {
        let param = {
            "clientEmail": sessionStorage.getItem("clientEmail")
           
        }
        this.http.post<any>(`LogIn/GetLastLoginTime`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
            data = JSON.parse(data.data)
             
            this.LastLoginTime = formatDate(data[0].LastLoginTime, 'dd/MM/yyyy | hh:mm a', 'en-us')
            
        }, error => { });
    }
}