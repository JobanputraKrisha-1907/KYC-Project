import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-admin-delete-master-data',
    templateUrl: './admin-delete-master-data.component.html',
    styleUrls: ['../../../assets/css/adminDeleteMasterData.css']
})
/** adminDeleteMasterData component*/
export class AdminDeleteMasterDataComponent {
    /** adminDeleteMasterData ctor */
    constructor(private Http: HttpClient) {

    }

    str;
    ngOnInit() {
        this.str = sessionStorage.getItem("action");
    }
    IFSCpattern = environment.IFSCpattern
    submitted = false;
    tbldeladdrestype = false;
    tbldeloccupation = false;
    tbldelannualincome = false;
    tbldelsourceofwealth = false;
    SAddressTypeData: any;
    AddressType;
    clickSearchAddressType(addressname: NgModel) {
        this.submitted = true;
        if (addressname.valid) {
            let object = {
                "AddressType": this.AddressType
            }
            //console.log(object['AddressType'])
            this.Http.post<any>('Admin/SearchAddressType', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.SAddressTypeData = JSON.parse(data.data);
                //console.log(this.SAddressTypeData)
                if (this.SAddressTypeData.length == 0) {
                    alert('data doesnot exsists')
                }
                else {
                    this.tbldeladdrestype = true;
                }

            })
        }
    }

    DAddressTypeData;
    clickDeleteAddressType(item: any) {
        let object = {
            "Id": item,
            "AddressType": this.SAddressTypeData[0].AddressType
        }

        this.Http.post<any>('Admin/DeleteAddressType', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
            this.DAddressTypeData = JSON.parse(data.data)
            //console.log(this.DAddressTypeData)
            if (this.DAddressTypeData[0].msg == 0) {
                alert("Data does not exists")
            }
            else {
                alert("Delete successfuly");
                this.tbldeladdrestype = false;
            }
        })

    }
    ///////////////////////////////////////////////////////////////////
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
                if (this.BankData.length == 0) {
                    alert('data doesnot exsists')
                }
                else {
                    this.tbldelbank = true;
                }

            })
        }
    }
    clickDeleteBank(id) {
        let object = {
            "BankId": id,
        }

        this.Http.post<any>('Admin/DeleteBank', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
            this.tbldelbank = false;
            alert("Delete successfuly");
        })
    }
    IFSC;
    IfscData;
    clickSearchIfsc(ifsc: NgModel) {
        this.submitted = true
        if (ifsc.valid) {
            let object = {
                "IFSCCode": this.IFSC
            }
            this.Http.post<any>('Admin/SelectBankIFSCCode', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.IfscData = JSON.parse(data.data);
                if (this.IfscData.length == 0) {
                    alert('data doesnot exsists')
                }
                else {
                    this.tbldelifsc = true;
                    for (let item of this.IfscData) {
                        let object1 = {
                            "BankID": item.BankID
                        }
                        this.Http.post<any>('Admin/IdtoBank', { "Jsondata": JSON.stringify(object1) }).pipe().subscribe(data => {
                            var data = JSON.parse(data.data);
                            item.BankID = data[0].BankName;
                        })
                    }
                }

            })
        }
    }
    //Delete ifsc table
    clickDeleteIfsc(id) {
        alert(id);
        let object = {
            "IFSCCode": id,
        }

        this.Http.post<any>('Admin/DeleteBankIFSCCode', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
            this.tbldelifsc = false;
            alert("Delete successfuly");
        })
    }
    CountryName;
    CountryData;
    clickSearchCountry(countryname: NgModel) {
        this.submitted = true
        if (countryname.valid) {
            let object = {
                "Country": this.CountryName
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
    //Delete country table
    clickDeleteCountry(id) {
        let object = {
            "CountryId": id,
        }

        this.Http.post<any>('Admin/DeleteCountry', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
            this.tbldelcountry = false;
            alert("Delete successfuly");
        })
    }
    StateName;
    StateData;
    clickSearchState(statename: NgModel) {
        this.submitted = true
        if (statename.valid) {
            let object = {
                "State": this.StateName
            }
            this.Http.post<any>('Admin/SelectState', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.StateData = JSON.parse(data.data);
                if (this.StateData.length == 0) {
                    alert('data doesnot exsists')
                }
                else {
                    this.tbldelstate = true;
                    for (let item of this.StateData) {
                        let object1 = {
                            "CountryId": item.CountryId
                        }
                        this.Http.post<any>('Admin/IdtoCountry', { "Jsondata": JSON.stringify(object1) }).pipe().subscribe(data => {
                            var data = JSON.parse(data.data);
                            item.CountryId = data[0].CountryName;
                            console.log(data)
                        })
                    }
                }

            })
        }
    }
    clickDeleteState(id) {
        let object = {
            "StateId": id,
        }

        this.Http.post<any>('Admin/DeleteState', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
            this.tbldelstate = false;
            alert("Delete successfuly");
        })
    }

    annualIncome;
    SAnnualIncomeData;
    DAnnualIncomeData
    clickSearchAnnualIncome(annualincome) {
        this.submitted = true
        if (annualincome.valid) {
            let object = {
                "annualincome": this.annualIncome
            }

            this.Http.post<any>('Admin/SearchAnnualIncome', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.SAnnualIncomeData = JSON.parse(data.data);
                //console.log(this.SOccupationData)
                if (this.SAnnualIncomeData.length == 0) {
                    alert('data doesnot exsists')
                }
                else {
                    this.tbldelannualincome = true;
                }
            })
        }
    }
    clickDeleteAnnualIncome(Id: any) {
        let object = {
            "Id": Id,
            "annualincome": this.SAnnualIncomeData[0].AnnualIncome
        }

        this.Http.post<any>('Admin/DeleteAnnualIncome', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
            this.DAnnualIncomeData = JSON.parse(data.data)
            //console.log(this.DAnnualIncomeData)
            if (this.DAnnualIncomeData[0].msg == 0) {
                alert("Data does not exists")
            }
            else {
                alert("Delete successfully");
                this.tbldelannualincome = false;
            }
        })

    }





    Occupation;
    SOccupationData
    clickSearchOccupation(occupation) {
        this.submitted = true
        if (occupation.valid) {
            let object = {
                "occupation": this.Occupation
            }

            this.Http.post<any>('Admin/SearchOccupation', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.SOccupationData = JSON.parse(data.data);
                //console.log(this.SOccupationData)
                if (this.SOccupationData.length == 0) {
                    alert('data doesnot exsists')
                }
                else {
                    this.tbldeloccupation = true;
                }
            })
        }
    }

    DOccupationData
    clickDeleteOccupation(Id: any) {
        let object = {
            "Id": Id,
            "occupation": this.SOccupationData[0].OccupationName
        }

        this.Http.post<any>('Admin/DeleteOccupation', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
            this.DOccupationData = JSON.parse(data.data)
            //console.log(this.DOccupationData)
            if (this.DOccupationData[0].msg == 0) {
                alert("Data does not exists")
            }
            else {
                alert("Delete successfully");
                this.tbldeloccupation = false;
            }
        })

    }


    SourceOfWealth
    SSourceOfWealthData
    clickSearchSourceOfWealth(sourceofwealth: NgModel) {
        this.submitted = true
        if (sourceofwealth.valid) {
            let object = {
                "sourceofwealth": this.SourceOfWealth
            }

            this.Http.post<any>('Admin/SearchSourceOfWealth', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
                this.SSourceOfWealthData = JSON.parse(data.data);
                //console.log(this.SOccupationData)
                if (this.SSourceOfWealthData.length == 0) {
                    alert('data doesnot exsists')
                }
                else {
                    this.tbldelsourceofwealth = true;
                }
            })
        }
    }
    DSourceOfWealthData
    clickDeleteSourceOfWealth(Id: any) {
        let object = {
            "Id": Id,
            "sourceofwealth": this.SSourceOfWealthData[0].SourceOfWealth
        }

        this.Http.post<any>('Admin/DeleteSourceOfWealth', { "Jsondata": JSON.stringify(object) }).pipe().subscribe(data => {
            this.DSourceOfWealthData = JSON.parse(data.data)
            //console.log(this.DSourceOfWealthData)
            if (this.DSourceOfWealthData[0].msg == 0) {
                alert("Data does not exists")
            }
            else {
                alert('Data Delete successfully')
                this.tbldelsourceofwealth = false;
            }
        })

    }
}