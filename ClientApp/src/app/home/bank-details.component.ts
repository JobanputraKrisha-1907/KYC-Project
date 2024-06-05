import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../environments/environment';


@Component({
    selector: 'app-bank-details',
    templateUrl: './bank-details.component.html',
    styleUrls: ['../../assets/css/BankDetails.css']
})
/** BankDetails component*/
export class BankDetailsComponent {
    /** BankDetails ctor */
    @ViewChild('bankDetails', { static: true }) bankDetails;
    constructor(private http: HttpClient, private sanitizer: DomSanitizer, private modalService: NgbModal, private router: Router) {

    }

    banknamepattern;
    IFSCpattern;
    MICRpattern;
    numberpattern;
    holderpattern;
    data;
    MICRCode;
    BankBranch;
    BankCity;
    BankAddress;
    Bankname;
    BankId;
    Id = sessionStorage.getItem("ClientId")
    visible = true;
    scrol = "--";
    submited = false;
    hold2 = true;
    hold3 = true;
    Chequepreview = 0;
    Statementpreview = 0;
    Signaturepreview = 0;
    canclefile;
    signaturefile;
    statementfile;
    signaturefilename;
    statementfilename;
    canclefilename;
    matchanddisable = false;
    matchmaster = true;
    alert = false;
    bankName;
    IFSCCode;
    chequeProof;
    isNextClicked;
    statementProof;
    signProof;
    accountNumber;
    thirdHolder;
    secondHolder;
    firstHolder;
    UploadPath = "C:\\Users\\trainee7\\Desktop\\KYCDocs/";
    typeid = "Select";
    holdingid = "Select";
    account_type = [
        { Name: "Savings" },
        { Name: "Current" },
        { Name: "NRE" },
        { Name: "NRO" }];
    ModeofHolding = [
        { Name: "Joint" },
        { Name: "Single" },
        { Name: "Anyone or Survivor" }
    ]
    toggleCollapse() {
        this.visible = !this.visible;
        if (this.scrol == "--") {
            this.scrol = "+";
        }
        else {
            this.scrol = "--";
        }
    }

    matchIFSC() {
        var IFSCLength = String(this.IFSCCode)
        if (IFSCLength.length == 11) {
            let param = {
                "BankName": this.bankName,
                "BankIFSC": this.IFSCCode
            }
            this.http.post<any>(`Registration/verifyIFSC`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                var data = JSON.parse(data.data);
                if (data.length != 0) {
                    this.MICRCode = data[0].MICRCode;
                    this.BankBranch = data[0].BankBranch;
                    this.BankCity = data[0].BankCity;

                    this.matchanddisable = true;
                }
                else {
                    this.MICRCode = "";
                    this.BankBranch = "";
                    this.BankCity = "";
                    this.matchanddisable = false;
                }
            }, error => { });
        }
    }

    modetoholder() {
        this.hold2 = true;
        this.hold3 = true;
        this.secondHolder = "";
        this.thirdHolder = "";
        if (this.holdingid == "Joint") {
            this.hold2 = false;
            this.hold3 = false;

        }
        if (this.holdingid == "Anyone or Survivor") {
            this.hold2 = false;
            this.thirdHolder = "";
        }
    }
    CancelChequeimgURL;
    signatureimgURL;
    statementimgURL;
  

    // upload cheque
    urlForCheque = "";

    onUploadCheque(e) {
        if (e.target.files) {

            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (event: any) => {
                this.urlForCheque = event.target.result;
            }
            return this.sanitizer.bypassSecurityTrustResourceUrl(this.urlForCheque);
        }
    }
    openCheque(content) {
        this.modalService.open(content, { centered: true });
    }


    // upload bank state

    urlForBankState = "";

    onUploadBankState(e) {
        if (e.target.files) {

            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (event: any) => {
                this.urlForBankState = event.target.result;
            }
            return this.sanitizer.bypassSecurityTrustResourceUrl(this.urlForBankState);
        }
    }
    openBankState(content) {
        this.modalService.open(content, { centered: true });
    }


    //upload Sign

    urlForSign = "";

    onUploadSign(e) {
        if (e.target.files) {

            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (event: any) => {
                this.urlForSign = event.target.result;
            }
            return this.sanitizer.bypassSecurityTrustResourceUrl(this.urlForSign);
        }
    }
    openSign(content) {
        this.modalService.open(content, { centered: true });
    }


    uploadCheque(files) {

        let file = <File>files[0];
        if (file) {
            let date = formatDate(new Date(), 'dd-MM-yyyy_HH-mm-ss-MS', 'en-us')
            let cID = sessionStorage.getItem("ClientId")

            this.chequeProof = this.UploadPath + cID + "_" + 4 + "_" + date + ".png"

            const formData = new FormData();
            formData.append('file', file, this.chequeProof);
            this.http.post<any>(`Registration/uploadCheque`, formData, { reportProgress: true, observe: 'events' }).pipe().subscribe(data => {

                console.log("Cadd", this.chequeProof);
            }, error => { });
        }
    }
    uploadStatement(files) {
        let file = <File>files[0];
        if (file) {

            let date = formatDate(new Date(), 'dd-MM-yyyy_HH-mm-ss-MS', 'en-us')
            let cID = sessionStorage.getItem("ClientId")

            this.statementProof = this.UploadPath + cID + "_" + 5 + "_" + date + ".png"

            const formData = new FormData();
            formData.append('file', file, this.statementProof);
            this.http.post<any>(`Registration/uploadStatement`, formData, { reportProgress: true, observe: 'events' }).pipe().subscribe(data => {

                console.log("cheque", this.statementProof);
            }, error => { });
        }
    }
    uploadSign(files) {

        let file = <File>files[0];
        if (file) {
            let date = formatDate(new Date(), 'dd-MM-yyyy_HH-mm-ss-MS', 'en-us')
            let cID = sessionStorage.getItem("ClientId")

            this.signProof = this.UploadPath + cID + "_" + 6 + "_" + date + ".png"

            const formData = new FormData();
            formData.append('file', file, this.signProof);
            this.http.post<any>(`Registration/uploadSign`, formData, { reportProgress: true, observe: 'events' }).pipe().subscribe(data => {

                console.log("cheque", this.signProof);
            }, error => { });
        }
    }

    submitBankDetails(bankDetails: NgForm) {
        this.isNextClicked = true;
        this.bankDetails.submitted = true;
        this.submited = true;
        if (bankDetails.valid) {
            if (sessionStorage.getItem("EditClientValue") == "true") {
                var param = {
                    "bankname": this.bankName,
                    "IFSCcode": this.IFSCCode,
                    "MICRcode": this.MICRCode,
                    "bankbranch": this.BankBranch,
                    "bankcity": this.BankCity,
                    "accounttype": this.typeid,
                    "bankacnumber": this.accountNumber,
                    "modeofholding": this.holdingid,
                    "accholdername1": this.firstHolder,
                    "accholdername2": this.secondHolder,
                    "accholdername3": this.thirdHolder,
                    "cancelchequedoc": this.chequeProof,
                    "bankstatementdoc": this.statementProof,
                    "signaturedoc": this.signProof,
                    "activationstatus": "true",
                    "clientid": this.Id,
                    "status": "8"


                }

                this.http.post<any>(`Registration/addBankDetails`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                    alert("insert")
                    this.router.navigate(['/KycVideoIPV']);
                }, error => { });
            }
            else {
                var param = {
                    "bankname": this.bankName,
                    "IFSCcode": this.IFSCCode,
                    "MICRcode": this.MICRCode,
                    "bankbranch": this.BankBranch,
                    "bankcity": this.BankCity,
                    "accounttype": this.typeid,
                    "bankacnumber": this.accountNumber,
                    "modeofholding": this.holdingid,
                    "accholdername1": this.firstHolder,
                    "accholdername2": this.secondHolder,
                    "accholdername3": this.thirdHolder,
                    "cancelchequedoc": this.chequeProof,
                    "bankstatementdoc": this.statementProof,
                    "signaturedoc": this.signProof,
                    "activationstatus": "true",
                    "clientid": this.Id,
                    "status": "6"


                }

                this.http.post<any>(`Registration/addBankDetails`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                    alert("insert")
                    this.router.navigate(['/KycVideoIPV']);
                }, error => { });
            }

        }
        
    }
    ngOnInit() {
        this.banknamepattern = environment.Banknamepattern
        this.IFSCpattern = environment.IFSCpattern
        this.MICRpattern = environment.MICRpattern
        this.holderpattern = environment.Holderpattern
        this.numberpattern = environment.Numberpattern
        this.http.post<any>(`Home/getBankName`, {}).pipe().subscribe(data => {
            this.data = JSON.parse(data.data);

        }, error => { });

        if (sessionStorage.getItem("EditClientValue") == "true") {
            let paramPan = {
                "clientId": sessionStorage.getItem('ClientId')
            }
            this.http.post<any>('Registration/EditClientDetails', { "JsonData": JSON.stringify(paramPan) }).subscribe(data => {
                data = JSON.parse(data.data);
                this.bankName = data[0].BankName
                this.IFSCCode = data[0].IFSCCode
                this.MICRCode = data[0].MICRCode
                this.BankBranch = data[0].BankBranch
                this.BankCity = data[0].BankCity
                this.typeid = data[0].AccountType
                this.accountNumber = data[0].BankAcNumber
                this.holdingid = data[0].ModeOfHolding
                this.firstHolder = data[0].AccHolderName1
                this.secondHolder = data[0].AccHolderName2
                this.thirdHolder = data[0].AccHolderName3

                this.http.post<any>(`Registration/getBankName`, {}).pipe().subscribe(data => {
                    this.data = JSON.parse(data.data);

                }, error => { });
                this.hold2 = true;
                this.hold3 = true;

                if (this.holdingid == "Joint") {
                    this.hold2 = false;
                    this.hold3 = false;


                }
                if (this.holdingid == "Anyone or Survivor") {
                    this.hold2 = false;


                }

            }, error => console.error(error));
        }
    }
    cancelchequeDoc = false;
    statementDoc = false;
    signatureDoc = false;
    showcancelcheque() {
        this.cancelchequeDoc = true;

    }
    closeDoc() {
        this.cancelchequeDoc = false;
        this.signatureDoc = false;
        this.statementDoc = false;
    }
    showstatement() {
        this.statementDoc = true
    }
    showsignature() {
        this.signatureDoc = true
    }
}