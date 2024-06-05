import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-admin-update-master-data',
    templateUrl: './admin-update-master-data.component.html',
    styleUrls: ['../../../assets/css/adminUpdateMasterData.css']
})
/** adminUpdateMasterData component*/
export class AdminUpdateMasterDataComponent {
    /** adminUpdateMasterData ctor */
    constructor(private Http: HttpClient) {

    }

    data;
    IFSCpattern = environment.IFSCpattern
    ngOnInit() {
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

    submitted = false;
    tblupdateaddrestype = false;
    tblupdateannualincome = false;
    tblupdateoccupation = false;
    tblupdatesourceofwealth = false;
    str;
    tbldelbank = false;
    tbldelifsc = false;
    tbldelcountry = false;
    tbldelstate = false;
    BankName;
    BankData;
    clickSearchBank(bankname: NgModel) {
        this.submitted = true
        if (bankname.valid) {
            let object = {
                "Bank": this.BankName
            }

            this.Http.post<any>('Admin/SelectBank', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.BankData = JSON.parse(data.data);
                //console.log(this.BankData)
                if (this.BankData.length == 0) {
                    alert('data doesnot exsists')
                }
                else {
                    this.tbldelbank = true;
                }

            })
        }
    }
    clickUpdateBank(bankid, BankName, bankname) {
        //this.submitted=true
        //alert(BankName)
        //alert(bankid)
        if (bankname.valid) {
            let object = {
                "Bank": BankName,
                "BankId": bankid
            }

            this.Http.post<any>('Admin/UpdateBank', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                var ubank = JSON.parse(data.data)
                //console.log(ubank)
                if (ubank[0].msg == 0) {
                    alert("Data already exists")
                }
                else {
                    alert('Data updated')
                    this.tbldelbank = false;
                }
            })
        }
    }
    Ifsc;
    IfscData;
    clickSearchIfsc(ifsc: NgModel) {
        this.submitted = true
        if (ifsc.valid) {
            let object = {
                "IFSCCode": this.Ifsc
            }
            this.Http.post<any>('Admin/SelectBankIFSCCode', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.IfscData = JSON.parse(data.data);
                if (this.IfscData.length == 0) {
                    alert('data doesnot exsists')
                }
                else {
                    this.tbldelifsc = true;
                }

            })
        }
    }
    //Update ifsc table
    clickUpdateIfsc(IFSC, id, MICR, BankBranch, BankCity, BankAddress, IFSCForm) {
        if (IFSCForm.valid) {
            let object = {
                "IFSCCode": IFSC,
                "BankID": id,
                "MICRCode": MICR,
                "BankBranch": BankBranch,
                "BankCity": BankCity,
                "BankAddress": BankAddress
            }

            this.Http.post<any>('Admin/UpdateBankIFSCCode', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                var uifsc = JSON.parse(data.data)
                if (uifsc[0].msg == 0) {
                    alert("Data already exists")
                }
                else {
                    alert('Data updated')
                    this.tbldelifsc = false;
                }
            })
        }
    }

    //Update country table
    Country;
    CountryData;
    clickSearchCountry(country: NgModel) {
        this.submitted = true
        if (country.valid) {
            let object = {
                "Country": this.Country
            }
            this.Http.post<any>('Admin/SelectCountry', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.CountryData = JSON.parse(data.data);
                if (this.CountryData.length == 0) {
                    alert('data doesnot exsists')
                }
                else {
                    this.tbldelcountry = true;
                }

            })
        }
    }
    clickUpdateCountry(id, country, ctry) {
        if (ctry.valid) {
            let object = {
                "Country": country,
                "CountryId": id
            }

            this.Http.post<any>('Admin/UpdateCountry', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                var ucountry = JSON.parse(data.data)
                if (ucountry[0].msg == 0) {
                    alert("Data already exists")
                }
                else {
                    alert('Data updated')
                    this.tbldelcountry = false;
                }
            })
        }
    }

    State;
    StateData;
    cdata;
    SelectCountry;
    clickSearchState(state: NgModel) {
        this.submitted = true
        if (state.valid) {
            let object = {
                "State": this.State
            }
            this.Http.post<any>('Admin/SelectState', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.StateData = JSON.parse(data.data);

                if (this.StateData.length == 0) {
                    alert('data doesnot exsists')
                }
                else {

                    this.tbldelstate = true;
                    //let object1 = {
                    //    "CountryId": item.CountryId
                    //}
                    //this.Http.post<any>('Admin/IdtoCountry', { "Jsondata": JSON.stringify(object1) }).pipe().subscribe(data => {
                    //    this.cdata = JSON.parse(data.data);
                    //})
                }

            })
        }
    }
    clickUpdateState(id, state, CountryId, State) {
        if (State.valid) {
            let object = {
                "State": state,
                "StateId": id,
                "CountryId": CountryId
            }

            this.Http.post<any>('Admin/UpdateState', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                var ustate = JSON.parse(data.data)
                if (ustate[0].msg == 0) {
                    alert("Data already exists")
                }
                else {
                    alert('Data updated')
                    this.tbldelstate = false;
                }
            })
        }
    }
    AddressType
    SAddressTypeData
    clickSearchAddressType(addresstype: NgModel) {
        this.submitted = true
        if (addresstype.valid) {
            let object = {
                "AddressType": this.AddressType
            }
            this.Http.post<any>('Admin/SearchAddressType', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.SAddressTypeData = JSON.parse(data.data);
                if (this.SAddressTypeData.length == 0) {
                    alert('data doesnot exsists')
                }
                else {
                    this.tblupdateaddrestype = true
                }
            })
        }
    }
    UAddressTypeData
    UAddressTypeV
    Addresstype1

    clickUpdateAddressType(Id: any, AddressType, addresstype) {
        if (addresstype.valid) {
            let object = {
                "Id": Id,
                "AddressType": AddressType
            }
            this.Http.post<any>('Admin/UpdateAddressType', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.UAddressTypeData = JSON.parse(data.data)
                //console.log(this.UAddressTypeData)
                if (this.UAddressTypeData[0].msg == 0) {
                    alert("Data already exists")
                }
                else {
                    alert('Data updated')
                    this.tblupdateaddrestype = false;
                }
            })
        }
    }


    AnnualIncome
    SAnnualIncomeData
    UAnnualIncomeData
    clickSearchAnnualIncome(annualincome: NgModel) {
        this.submitted = true
        if (annualincome.valid) {
            let object = {
                "annualincome": this.AnnualIncome
            }
            this.Http.post<any>('Admin/SearchAnnualIncome', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.SAnnualIncomeData = JSON.parse(data.data);
                if (this.SAnnualIncomeData.length == 0) {
                    alert('data doesnot exsists')
                }
                else {
                    this.tblupdateannualincome = true
                }
            })
        }
    }
    clickUpdateAnnualIncome(Id, AnnualIncome, annualincome) {
        if (annualincome.valid) {
            let object = {
                "Id": Id,
                "annualincome": AnnualIncome
            }

            this.Http.post<any>('Admin/UpdateAnnualIncome', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.UAnnualIncomeData = JSON.parse(data.data)
                //console.log(this.UAnnualIncomeData)
                if (this.UAnnualIncomeData[0].msg == 0) {
                    alert("Data already exists")
                }
                else {
                    alert('Data updated')
                    this.tblupdateannualincome = false
                }
            })
        }
    }




    Occupation
    SOccupationData
    UOccupationData
    clickSearchOccupation(occupation: NgModel) {
        this.submitted = true
        if (occupation.valid) {
            let object = {
                "occupation": this.Occupation
            }
            this.Http.post<any>('Admin/SearchOccupation', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.SOccupationData = JSON.parse(data.data);
                if (this.SOccupationData.length == 0) {
                    alert('data doesnot exsists')
                }
                else {
                    this.tblupdateoccupation = true
                }


            })
        }
    }
    clickUpdateOccupation(Id, Occupation, occupation) {
        if (occupation.valid) {
            let object = {
                "Id": Id,
                "occupation": Occupation
            }

            this.Http.post<any>('Admin/UpdateOccupation', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.UOccupationData = JSON.parse(data.data)
                //console.log(this.UOccupationData)
                if (this.UOccupationData[0].msg == 0) {
                    alert("Data already exists")
                }
                else {
                    alert('Data updated')
                    this.tblupdateoccupation = false
                }
            })
        }
    }





    SourceOfWealth
    SSourceOfWealthData
    USourceOfWealthData
    clickSearchSourceOfWealth(sourceofwealth: NgModel) {
        this.submitted = true
        if (sourceofwealth.valid) {
            let object = {
                "sourceofwealth": this.SourceOfWealth
            }
            this.Http.post<any>('Admin/SearchSourceOfWealth', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.SSourceOfWealthData = JSON.parse(data.data);
                if (this.SSourceOfWealthData.length == 0) {
                    alert('data doesnot exsists')
                }
                else {
                    this.tblupdatesourceofwealth = true
                }

            })
        }
    }
    clickUpdateSourceOfWealth(Id, SourceOfWealth, sourceofwealth) {
        if (sourceofwealth.valid) {
            let object = {
                "Id": Id,
                "sourceofwealth": SourceOfWealth
            }

            this.Http.post<any>('Admin/UpdateSourceOfWealth', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.USourceOfWealthData = JSON.parse(data.data)
                //console.log(this.USourceOfWealthData)
                if (this.USourceOfWealthData[0].msg == 0) {
                    alert("Data already exists")
                }
                else {
                    alert('Data updated')
                    this.tblupdatesourceofwealth = false
                }
            })
        }
    }
}