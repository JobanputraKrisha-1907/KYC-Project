import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-admin-add-master-data',
    templateUrl: './admin-add-master-data.component.html',
    styleUrls: ['../../../assets/css/adminAddMasterData.css']
})
/** adminAddMasterData component*/
export class AdminAddMasterDataComponent {
    /** adminAddMasterData ctor */
    constructor(private Http: HttpClient) {

    }
    data;
    IFSCpatternp;
    submitted = false
    ngOnInit() {
        this.IFSCpatternp = environment.IFSCpattern;
        this.str = sessionStorage.getItem("action");
        if (this.str == "state") {
            this.Http.post<any>('Admin/SelectCountrymaster', {}).pipe().subscribe(data => {
                this.data = JSON.parse(data.data);
            })
        }
        if (this.str == "ifsc") {
            this.Http.post<any>('Admin/SelectBankMaster', {}).pipe().subscribe(data => {
                this.data = JSON.parse(data.data);
            })
        }
    }
    str;

    //add bank into bank table
    BankName;
    AddBankData;
    clickAddBank(bankname: NgModel) {
        this.submitted = true
        if (bankname.valid) {

            let object = {
                "Bank": this.BankName
            }

            this.Http.post<any>('Admin/AddBank', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.AddBankData = JSON.parse(data.data)
                console.log(this.AddBankData)
                if (this.AddBankData[0].msg == 1) {
                    alert("Your data is added successfuly");
                }
                else {
                    alert("Your data is already exitsts")
                }
            })
        }
    }
    //add ifsc table

    IFSC;
    BankAddress;
    BankCity;
    BankBranch;
    MICR;
    AddIfscData;
    SelectBank = "Select";
    clickAddIfsc(Ifscdetails: NgForm) {
        this.submitted = true
        if (Ifscdetails.valid && this.SelectBank != "Select") {

            let object = {
                "BankID": this.SelectBank,
                "IFSCCode": this.IFSC,
                "MICRCode": this.MICR,
                "BankBranch": this.BankBranch,
                "BankCity": this.BankCity,
                "BankAddress": this.BankAddress
            }

            this.Http.post<any>('Admin/AddBankIFSCCode', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.AddIfscData = JSON.parse(data.data)
                //console.log(this.AddressTypeData)
                if (this.AddIfscData[0].msg == 1) {
                    alert("Your data is added successfuly");
                    Ifscdetails.reset();
                    this.submitted = false;
                    this.SelectBank = "Select";
                }
                else {
                    alert("Your data is already exitsts")
                }
            })
        }
    }

    //add country table
    CountryName;
    AddCountryData;

    clickAddCountry(countryname: NgModel) {
        this.submitted = true
        if (countryname.valid) {
            let object = {
                "Country": this.CountryName
            }

            this.Http.post<any>('Admin/AddCountry', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.AddCountryData = JSON.parse(data.data)
                //console.log(this.AddressTypeData)
                if (this.AddCountryData[0].msg == 1) {
                    alert("Your data is added successfuly");
                }
                else {
                    alert("Your data is already exitsts")
                }
            })
        }
    }

    StateName;
    AddStateData;
    SelectCountry = "Select";
    clickAddState(stateform: NgForm) {
        this.submitted = true
        if (stateform.valid) {

            //console.log(this.SelectCountry);
            if (this.SelectCountry == "Select") {
                alert("enter country")
            } else {

                let object = {
                    "State": this.StateName,
                    "CountryId": this.SelectCountry
                }

                this.Http.post<any>('Admin/AddState', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                    this.AddStateData = JSON.parse(data.data)

                    //console.log(this.AddStateData)
                    if (this.AddStateData[0].msg == 1) {
                        stateform.reset();
                        this.submitted = false;
                        this.SelectCountry = "Select";
                        alert("Your data is added successfuly");
                    }
                    else {
                        alert("Your data is already exitsts")

                    }
                })
            }
        }
    }
    AddressTypeData
    addressType;
    clickAddAddressType(addresstype: NgModel) {
        this.submitted = true
        if (addresstype.valid) {
            let object = {
                "AddressType": this.addressType
            }

            this.Http.post<any>('Admin/InsertAddressType', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.AddressTypeData = JSON.parse(data.data)
                //console.log(this.AddressTypeData)
                if (this.AddressTypeData[0].msg == 1) {
                    alert("Your data is added successfuly");
                }
                else {
                    alert("Your data is already exitsts")
                }
            })
        }

    }
    AnnualIncomeData
    annualIncome
    clickAddAnnualIncome(annualincome: NgModel) {
        this.submitted = true
        if (annualincome.valid) {
            let object = {
                "annualincome": this.annualIncome
            }

            this.Http.post<any>('Admin/InsertAnnualIncome', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.AnnualIncomeData = JSON.parse(data.data)
                if (this.AnnualIncomeData[0].msg == 1) {
                    alert("Your data is added successfuly");
                }
                else {
                    alert("Your data is already exitsts")
                }
            })
        }
    }
    OccupationData
    Occupation
    clickAddOccupation(occupation: NgModel) {
        this.submitted = true
        if (occupation.valid) {
            let object = {
                "occupation": this.Occupation
            }

            this.Http.post<any>('Admin/InsertOccupation', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.OccupationData = JSON.parse(data.data)
                if (this.OccupationData[0].msg == 1) {
                    alert("Your data is added successfuly");
                }
                else {
                    alert("Your data is already exitsts")
                }
            })
        }
    }
    SourceOfWealthData
    SourceOfWealth
    clickAddSourceOfWealth(sourceofwealth: NgModel) {
        this.submitted = true
        if (sourceofwealth.valid) {
            let object = {
                "sourceofwealth": this.SourceOfWealth
            }

            this.Http.post<any>('Admin/InsertSourceOfWealth', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.SourceOfWealthData = JSON.parse(data.data)
                if (this.SourceOfWealthData[0].msg == 1) {
                    alert("Your data is added successfuly");
                }
                else {
                    alert("Your data is already exitsts")
                }
            })
        }
    }
}