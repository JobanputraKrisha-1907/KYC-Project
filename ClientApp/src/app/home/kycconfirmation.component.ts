import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';


@Component({
    selector: 'app-kycconfirmation',
    templateUrl: './kycconfirmation.component.html',
})
/** KYC Confirmation component*/
export class KycconfirmationComponent implements OnInit {
    /** KYC Confirmation ctor */
    @ViewChild('KycVerificationFrm', { static: true }) KycVerificationFrm;
    @ViewChild('KycRegistrationFrm', { static: true }) KycRegistrationFrm;
    PAN;
    DOB: any;
    UploadImgPan: any;
    viewdata: any;
    frmKycReg = true;
    ClientName: any;
    frmPanKyc = false;
    AnnunalIncomeList: any;
    OccpationList: any;
    submitted = false;
    MaritalStatus: any;
    AnnunalIncome: any;
    Occupation: any;
    MotherName: any;
    ClientId: any;
    CaptchaCode: any;
    randomChars;
    captcha;
    captchaShow;
    forPanImgRequired;
    selectPan: File;
    isNextClicked = false;
    PanProof;
    isExpanded: boolean = false;
    Expanded: boolean = false;
    Expand = true;
    Collapse = false;
    Details_Expand = true;
    Details_Collapse = false;
    UploadPath = "C:\\Users\\trainee7\\Desktop\\KYCDocs/";
    constructor(private http: HttpClient, private router: Router, private sanitizer: DomSanitizer, private modalService: NgbModal, private toast: ToastrService) {

    }
    ClientNamePattern;
    PanPattern;
    KycConfirmation() {
        this.Expanded = !this.Expanded;
        this.Collapse = !this.Collapse;
        this.Expand = !this.Expand;
    }
    KycDeatails() {
        this.isExpanded = !this.isExpanded;
        this.Details_Expand = !this.Details_Expand;
        this.Details_Collapse = !this.Details_Collapse;
    }

    ngOnInit(): void {
        /*this.reloadBtn();*/


        this.reloadBtn();
        if (sessionStorage.getItem('ClientId') > "0") {
            let paramPan = {
                "clientId": sessionStorage.getItem('ClientId')
            }
            if (sessionStorage.getItem("EditClientValue") == "true") {
                this.http.post<any>('Registration/EditClientDetails', { "JsonData": JSON.stringify(paramPan) }).subscribe(data => {
                    data = JSON.parse(data.data);
                    console.log(data)
                    this.PAN = data[0].PanNo
                    this.DOB = data[0].DOB
                    this.ClientName = data[0].Name
                    this.AnnunalIncome = data[0].AnnualIncome
                    this.MotherName = data[0].MotherName
                    this.MaritalStatus = data[0].MaritalStatus
                    this.Occupation = data[0].Occupation


                    console.log(data)


                }, error => console.error(error));
            }
            if (sessionStorage.getItem("ForStatusValue") == "true") {
                this.http.post<any>('Registration/GetExistClientPanData', { "JsonData": JSON.stringify(paramPan) }).subscribe(data => {
                    data = JSON.parse(data.data);
                    if (data[0].Status > 1) {
                        this.DOB = data[0].DOB
                        this.PAN = data[0].PanNo
                        this.frmPanKyc = true;
                        this.frmKycReg = false;
                    }
                }, error => console.error(error));
            }

        }

        this.PanPattern = environment.PanPattern;
        this.ClientNamePattern = environment.ClientNamePattern;

        let param = {
            "clientEmail": sessionStorage.getItem('clientEmail'),

        }
        this.http.post<any>(`Registration/toGet_ClientId`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
            data = JSON.parse(data.data);
            this.ClientId = data[0].ClientId
            this.ClientName = data[0].Name
            sessionStorage.setItem('ClientName', this.ClientName);
            sessionStorage.setItem('ClientId', this.ClientId)
        }, error => { });
        this.http.get<any>('Registration/GetAnnualIncome').subscribe(result => {
            this.AnnunalIncomeList = JSON.parse(result.data);
        }, error => console.error(error));
        this.http.get<any>('Registration/GetOccupationList').subscribe(result => {
            this.OccpationList = JSON.parse(result.data);
        }, error => console.error(error));
    }

    // for Pan Preview
    urlForPan = "";

    onUploadPan(e) {

        if (e.target.files.length == 1) {

            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);

            reader.onload = (event: any) => {
                this.urlForPan = event.target.result;
            }
            return this.sanitizer.bypassSecurityTrustResourceUrl(this.urlForPan);
        }



    }
    openPan(content) {
        this.modalService.open(content, { centered: true });
    }

    //for pan img save
    uploadPan(files) {



        let date = formatDate(new Date(), 'dd-MM-yyyy_HH-mm-ss-MS', 'en-us')
        let cID = sessionStorage.getItem("ClientId")

        this.PanProof = this.UploadPath + cID + "_" + 3 + "_" + date + ".png"
        let fileaadhar = <File>files[0];
        const formData = new FormData();
        formData.append('file', fileaadhar, this.PanProof);
        this.http.post<any>(`Registration/uploadPan`, formData, { reportProgress: true, observe: 'events' }).pipe().subscribe(data => {

            console.log("Pan", this.PanProof);
        }, error => { });
    }


    Verify_PanKyc(KycVerificationFrm: NgForm) {
        this.KycVerificationFrm.submitted = true;
        this.isNextClicked = true;
        if (!this.selectPan) {
            console.log("Error")
        }
        if (this.KycVerificationFrm.valid) {
            if (this.captcha == this.CaptchaCode) {

                this.toast.success("Captcha Match Succesfully", '', {
                    positionClass: 'toast-center-center',
                    timeOut: 2000,
                });
                let param = {
                    "ClientPanNo": this.PAN,
                    "ClientDOB": this.DOB,
                    "ClientPanImg": this.UploadImgPan,
                }
                this.http.post<any>(`Registration/CheckPanKyc`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                    data = JSON.parse(data.data);
                    if (data[0].MSG == "1") {
                        alert("KYC Not Completed !!!");
                        this.frmKycReg = false;
                        this.frmPanKyc = true;
                        if (sessionStorage.getItem("EditClientValue") == "true") {
                            let param = {
                                "clientId": this.ClientId,
                                "ClientPanNo": this.PAN,
                                "ClientDOB": this.DOB,
                                "ClientPanProof": this.PanProof,
                                "status": "8"

                            }
                            this.http.post<any>(`Registration/GetClientPanDetails`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                                data = JSON.parse(data.data);
                                alert("Client Details Upload Successfully !!!");

                            }, error => { });
                        }
                        else {
                            let param = {
                                "clientId": this.ClientId,
                                "ClientPanNo": this.PAN,
                                "ClientDOB": this.DOB,
                                "ClientPanProof": this.PanProof,
                                "status": "2"

                            }
                            this.http.post<any>(`Registration/GetClientPanDetails`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                                data = JSON.parse(data.data);
                                alert("Client Details Upload Successfully !!!");

                            }, error => { });
                        }

                    }
                    else {
                        this.frmKycReg = true;
                        this.viewdata = data;
                        alert("KYC Already Existed !!!");

                    }
                }, error => { });
            }
            else {
                this.toast.error("Captcha Not Matched !!!", '', {
                    positionClass: 'toast-center-center',
                    timeOut: 2000,
                });
            }
        }

    }

    UpdatedClientDetails(KycVerificationFrm, KycRegistrationFrm: NgForm) {
        this.KycVerificationFrm.submitted = true;
        this.KycRegistrationFrm.submitted = true;

        if (this.KycRegistrationFrm.valid) {
            if (sessionStorage.getItem("EditClientValue") == "true") {
                let param = {
                    "clientId": this.ClientId,
                    "MarriedStatus": this.MaritalStatus,
                    "AnnualIncomeList": this.AnnunalIncome,
                    "OccupationList": this.Occupation,
                    "ClientMotherName": this.MotherName,
                    "status": "8"

                }
                this.http.post<any>(`Registration/GetClientDetails`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                    data = JSON.parse(data.data);
                    alert("Client Details Upload Successfully !!!");
                    this.router.navigate(['/KycAddress']);
                }, error => { });
            }
            else {

                let param = {
                    "clientId": this.ClientId,
                    "MarriedStatus": this.MaritalStatus,
                    "AnnualIncomeList": this.AnnunalIncome,
                    "OccupationList": this.Occupation,
                    "ClientMotherName": this.MotherName,
                    "status": "3"

                }
                this.http.post<any>(`Registration/GetClientDetails`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                    data = JSON.parse(data.data);
                    alert("Client Details Upload Successfully !!!");
                    this.router.navigate(['/KycAddress']);
                }, error => { });
            }

        }

        else {
            return false;
        }
    }



    reloadBtn() {
        this.captchaShow = document.querySelector(".captacha");
        this.randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        this.captcha = '';
        length = 6;
        for (var i = 0; i < length; i++) {
            this.captcha += this.randomChars.charAt(Math.floor(Math.random() * this.randomChars.length));
            this.captchaShow.innerHTML = this.captcha;
        }

        return this.captcha;
    }

}