import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
    selector: 'app-fatca-details',
    templateUrl: './fatca-details.component.html',
    styleUrls: ['../../assets/css/fatcaDetails.css']
})
/** fatcaDetails component*/
export class FatcaDetailsComponent {
    /** fatcaDetails ctor */
    @ViewChild('FatcaDaetails', { static: true }) FatcaDaetails;
    constructor(private router  : Router, private Http: HttpClient) {

    }


    name
    ddata;
    NationalityData;
    CountryOfBirthData;
    SourceOfWeathData;
    AddressTypeData;
    CountryOfBirth;
    Nationality;
    PlaceOfBirth;
    SourceOfWealth;
    AddressType;
    FatcaData = false;
    TaxData = false;
    yes = true;
    no = false;
    submitted = false;
    TaxDetails(value) {
        if (value == this.yes) {
            this.TaxData = true
        }
        else if (value == this.no) {
            this.TaxData = false

        }
    }
    ngOnInit() {
        //for Address type
        this.Http.post<any>('Registration/AddressType', { "Jsondata": '' }).pipe().subscribe(data => {
            this.AddressTypeData = JSON.parse(data.data);
        });

        //for Country
        this.Http.post<any>('Registration/ShowCountry', { "Jsondata": '' }).pipe().subscribe(data => {
            this.CountryOfBirthData = JSON.parse(data.data);

        });


        //for Source of Wealth
        this.Http.post<any>('Registration/SourceOfWealth', { "Jsondata": '' }).pipe().subscribe(data => {
            this.SourceOfWeathData = JSON.parse(data.data);

        });
        if (sessionStorage.getItem("EditClientValue") == "true") {
            let paramPan = {
                "clientId": sessionStorage.getItem('ClientId')
            }
            this.Http.post<any>('Registration/EditClientDetails', { "JsonData": JSON.stringify(paramPan) }).subscribe(data => {
                data = JSON.parse(data.data);
                this.AddressType = data[0].AddressType
                this.SourceOfWealth = data[0].SourceOfWealth
                this.PlaceOfBirth = data[0].PlaceOfBirth
                this.CountryOfBirth = data[0].CountryOfBirth
                this.Nationality = data[0].Nationality
               
            }, error => console.error(error));
        }
    }


    Collapse() {
        this.FatcaData = !this.FatcaData
    }
    Submit(FatcaDetails: NgForm) {
        
        if (FatcaDetails.valid) {
            if (sessionStorage.getItem("EditClientValue") == "true") {
                let param = {
                    "clientid": sessionStorage.getItem("ClientId"),
                    "AddressType": this.AddressType,
                    "SourceOfWealth": this.SourceOfWealth,
                    "PlaceOfBirth": this.PlaceOfBirth,
                    "CountryOfBirth": this.CountryOfBirth,
                    "Nationality": this.Nationality,
                    "status": "8"

                }

                this.Http.post<any>('Registration/FatcaDetails', { "Jsondata": JSON.stringify(param) }).pipe().subscribe(data => {
                    this.ddata = JSON.parse(data.data);
                    this.router.navigate(['/KycBankDetails']);
                });
                alert("Details are successfully submitted")
            }
            else {
                let param = {
                    "clientid": sessionStorage.getItem("ClientId"),
                    "AddressType": this.AddressType,
                    "SourceOfWealth": this.SourceOfWealth,
                    "PlaceOfBirth": this.PlaceOfBirth,
                    "CountryOfBirth": this.CountryOfBirth,
                    "Nationality": this.Nationality,
                    "status": "5"

                }

                this.Http.post<any>('Registration/FatcaDetails', { "Jsondata": JSON.stringify(param) }).pipe().subscribe(data => {
                    this.ddata = JSON.parse(data.data);
                    this.router.navigate(['/KycBankDetails']);
                });
                alert("Details are successfully submitted")
            }
            

        }
        else if (FatcaDetails.invalid) {
            alert("Datials are incorrect")
            this.submitted = true
        }
    }
   
    //Nationality() {
    //    this.Http.post<any>('Home/Nationality', { "Jsondata": '' }).pipe().subscribe(data => {
    //        this.NationalityData = JSON.parse(data.data);
    //    });

    //}
}