import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-address_detail',
    templateUrl: './address_detail.component.html',
    styleUrls: ['../../assets/css/AddressDetail.css']
})
/** address_detail component*/
export class Address_detailComponent implements OnInit {

    caddline1;
    caddline2;
    caddline3;
    ccountry;
    cstate;
    ccity;
    cpincode;
    caddressproof;
    PinPattern;
    paddline1;
    paddline2;
    paddline3;
    //txtpercon;
    //txtperstate;
    datacountry: any;
    datastate: any;
    pcity;
    ppincode;
    paddressproof;
    selectedCountryId: any;
    dropshow = false;
    for_disable = false;
    pcountry: any;
    pstate: any;
    selectCadd: File;
    selectPadd: File;
    isNextClicked = false;
    Caddproof;
    Paddproof;
    Pdatacountry;
    Pdatastate;
    forSameAdd = false;
    ForPAddProof;
    UploadPath = "C:\\Users\\trainee7\\Desktop\\KYCDocs/";

    /** address_detail ctor */
    @ViewChild('frmRegister', { static: true }) frmRegister;
    constructor(private http: HttpClient, private sanitizer: DomSanitizer, private modalService: NgbModal, private router: Router) { }

    ngOnInit(): void {
        //for pincode pattern
        this.PinPattern = environment.PinPattern;
        this.http.get<any>(`Registration/ShowCountry`).subscribe(result => {
            this.datacountry = JSON.parse(result.data);
        }, error => { });
        //this.http.get<any>(`Home/ShowCountry`).subscribe(result => {
        //    this.Pdatacountry = JSON.parse(result.data);
        //}, error => { });
        /* sessionStorage.setItem("ClientId","1010")*/

        if (sessionStorage.getItem("EditClientValue") == "true") {
            let paramPan = {
                "clientId": sessionStorage.getItem('ClientId')
            }
            this.http.post<any>('Registration/EditClientDetails', { "JsonData": JSON.stringify(paramPan) }).subscribe(data => {
                data = JSON.parse(data.data);
                this.caddline1 = data[0].CAddressLine1
                this.caddline2 = data[0].CAddressLine2
                this.caddline3 = data[0].CAddressLine3
                this.ccountry = data[0].CCountry
                this.cstate = data[0].CState
                this.ccity = data[0].CCity
                this.cpincode = data[0].CPinCode
                this.paddline1 = data[0].PAddressLine1
                this.paddline2 = data[0].PAddressLine2
                this.paddline3 = data[0].PAddressLine3
                this.pcountry = data[0].PCountry
                this.pstate = data[0].PState
                this.pcity = data[0].PCity
                this.ppincode = data[0].PPinCode
                let paramCState = {
                    "countryId": data[0].CCountry
                }
                this.http.post<any>(`Registration/ShowState`, { "JsonData": JSON.stringify(paramCState) }).pipe().subscribe(data => {
                    this.datastate = JSON.parse(data.data);
                }, error => { });
                let paramPState = {
                    "countryId": data[0].PCountry
                }
                this.http.post<any>(`Registration/ShowState`, { "JsonData": JSON.stringify(paramPState) }).pipe().subscribe(data => {
                    this.Pdatastate = JSON.parse(data.data);
                }, error => { });
          


            }, error => console.error(error));
        }
    }

    //AutoFill Checked Permanent Address
    AutoFillAdd() {
        this.paddline1 = this.caddline1;
        this.paddline2 = this.caddline2;
        this.paddline3 = this.caddline3;
        this.pcountry = this.ccountry;
        this.pstate = this.cstate;
        this.pcity = this.ccity;
        this.ppincode = this.cpincode;
        /*this.paddressproof = this.caddressproof;*/
        /*this.dropshow = !this.dropshow;*/
        this.for_disable = !this.for_disable;
        this.forSameAdd = !this.forSameAdd;
        this.onSelectSameCountry();
        this.isNextClicked = false;
        this.ForPAddProof = true;
    }


    forSameCountry() {
        if (this.forSameAdd == true) {

            this.pcountry = this.ccountry;
        }
    }
    forSameState() {
        if (this.forSameAdd == true) {
            this.onSelectSameCountry();

            this.pstate = this.cstate;
        }
    }
    //For Correspondence Address
    onSelectCorCountry() {
        let param = {
            "countryId": this.ccountry
        }
        this.http.post<any>(`Registration/ShowState`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
            this.datastate = JSON.parse(data.data);
        }, error => { });
    }

    //For Permanent Address
    onSelectPerCountry() {
        let param = {
            "countryId": this.pcountry
        }
        this.http.post<any>(`Registration/ShowState`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
            this.Pdatastate = JSON.parse(data.data);
        }, error => { });
    }

    onSelectSameCountry() {
        if (this.forSameAdd == true) {

            let param = {
                "countryId": this.ccountry
            }
            this.http.post<any>(`Registration/ShowState`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                this.Pdatastate = JSON.parse(data.data);
            }, error => { });
        }
    }
    // for Preview IMG

    // for Cadd
    urlForCadd = "";

    onUploadCadd(e) {
        if (e.target.files) {

            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (event: any) => {
                this.urlForCadd = event.target.result;
            }
            return this.sanitizer.bypassSecurityTrustResourceUrl(this.urlForCadd);
        }
    }
    openCadd(content) {
        this.modalService.open(content, { centered: true });
    }

    // for Padd
    urlForPadd = "";

    onUploadPadd(e) {
        if (e.target.files) {

            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (event: any) => {
                this.urlForPadd = event.target.result;
            }
            return this.sanitizer.bypassSecurityTrustResourceUrl(this.urlForPadd);
        }
    }
    openPadd(content) {
        this.modalService.open(content, { centered: true });
    }


    // save file img
    uploadCadd(files) {



        let date = formatDate(new Date(), 'dd-MM-yyyy_HH-mm-ss-MS', 'en-us')
        let cID = sessionStorage.getItem("ClientId")

        this.Caddproof = this.UploadPath + cID + "_" + 1 + "_" + date + ".png"
        let file = <File>files[0];
        const formData = new FormData();
        formData.append('file', file, this.Caddproof);
        this.http.post<any>(`Registration/uploadCadd`, formData, { reportProgress: true, observe: 'events' }).pipe().subscribe(data => {

            console.log("Cadd", this.Caddproof);
        }, error => { });
    }
    uploadPadd(files) {

        if (this.forSameAdd == false) {

            let date = formatDate(new Date(), 'dd-MM-yyyy_HH-mm-ss-MS', 'en-us')
            let cID = sessionStorage.getItem("ClientId")

            this.Paddproof = this.UploadPath + cID + "_" + 2 + "_" + date + ".png"
            let file = <File>files[0];
            const formData = new FormData();
            formData.append('file', file, this.Paddproof);
            this.http.post<any>(`Registration/uploadPadd`, formData, { reportProgress: true, observe: 'events' }).pipe().subscribe(data => {

                console.log("Padd", this.Paddproof);
            }, error => { });
        }
    }

    // for same add
    uploadSameAdd(files) {

        if (this.forSameAdd == true) {

            let date = formatDate(new Date(), 'dd-MM-yyyy_HH-mm-ss-MS', 'en-us')
            let cID = sessionStorage.getItem("ClientId")

            this.Paddproof = this.UploadPath + cID + "_" + 2 + "_" + date + ".png"
            let file = <File>files[0];
            const formData = new FormData();
            formData.append('file', file, this.Paddproof);
            this.http.post<any>(`Registration/uploadPadd`, formData, { reportProgress: true, observe: 'events' }).pipe().subscribe(data => {

                console.log("Padd", this.Paddproof);
            }, error => { });
        }


    }
    AdditionalInfo(frmRegister: NgForm) {
        this.isNextClicked = true;
        if (!this.selectCadd) {
            console.log("Error")
        }
        if (!this.selectPadd) {
            console.log("Error")
        }
        this.frmRegister.submitted = true;
        if (this.caddline1 == null || this.caddline1 == " " || this.caddline2 == null || this.caddline2 == " " ||
            this.caddline3 == null || this.caddline3 == " " || this.ccountry == null || this.ccountry == " " ||
            this.cstate == null || this.cstate == " " || this.ccity == null || this.ccity == " " ||
            this.cpincode == null || this.cpincode == " " || this.paddline1 == null || this.paddline1 == " " ||
            this.paddline2 == null || this.paddline2 == " " || this.paddline3 == null || this.paddline3 == " " ||
            this.pcountry == null || this.pcountry == " " || this.pstate == null || this.pstate == " " ||
            this.pcity == null || this.pcity == " " || this.ppincode == null || this.ppincode == " ") {
            this.frmRegister.form.setErrors({ invalid: true });
        }
        else {
            if (sessionStorage.getItem("EditClientValue") == "true") {
                let param = {
                    //For Correspondence Address
                    "clientId": sessionStorage.getItem("ClientId"),
                    "cAdd1": this.caddline1,
                    "cAdd2": this.caddline2,
                    "cAdd3": this.caddline3,
                    "cCon": this.ccountry,
                    "cStat": this.cstate,
                    "cCity": this.ccity,
                    "cPin": this.cpincode,
                    "cAddressProof": this.Caddproof,

                    //For Permanent Address
                    "pAdd1": this.paddline1,
                    "pAdd2": this.paddline2,
                    "pAdd3": this.paddline3,
                    "pCon": this.pcountry,
                    "pStat": this.pstate,
                    "pCity": this.pcity,
                    "pPin": this.ppincode,
                    "pAddressProof": this.Paddproof,
                    "status": "8"

                }
                this.http.post<any>(`Registration/SubmitAddressDetail`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                    data = JSON.parse(data.data);
                    alert("Data Inserted Successfully");
                    this.router.navigate(['/KycFatcaDetails']);
                }, error => { });
            }
            else {
                let param = {
                    //For Correspondence Address
                    "clientId": sessionStorage.getItem("ClientId"),
                    "cAdd1": this.caddline1,
                    "cAdd2": this.caddline2,
                    "cAdd3": this.caddline3,
                    "cCon": this.ccountry,
                    "cStat": this.cstate,
                    "cCity": this.ccity,
                    "cPin": this.cpincode,
                    "cAddressProof": this.Caddproof,

                    //For Permanent Address
                    "pAdd1": this.paddline1,
                    "pAdd2": this.paddline2,
                    "pAdd3": this.paddline3,
                    "pCon": this.pcountry,
                    "pStat": this.pstate,
                    "pCity": this.pcity,
                    "pPin": this.ppincode,
                    "pAddressProof": this.Paddproof,
                    "status": "4"

                }
                this.http.post<any>(`Registration/SubmitAddressDetail`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                    data = JSON.parse(data.data);
                    alert("Data Inserted Successfully");
                    this.router.navigate(['/KycFatcaDetails']);
                }, error => { });
            }
            
            
        }
    }
}