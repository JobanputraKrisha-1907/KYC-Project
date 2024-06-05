import { Component, Inject, Input, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
    selector: 'app-forgot-password_third',
    templateUrl: './forgot-password_third.component.html',
    styleUrls: ['../../assets/css/forgotpassThird.css']
})
/** ForgotPassword_third component*/
export class ForgotPassword_thirdComponent {
    testurl: string;
    Email;
    Password;
    ConfirmPassword;
    sdata: any;
    Demo: any;
    @Input() UserEmail;
    /* visible: boolean;*/
    Approval: boolean;
    Rejected: boolean;
    hideform: boolean;

    PassswordPattern: RegExp;

    /** forgotpass ctor */
    @ViewChild('frmRegister', { static: true }) frmRegister;
    cemail: any;

    constructor(private http: HttpClient, @Inject('BASE_URL') _baseUrl: string, public router: Router) {
        this.testurl = _baseUrl;
    }

    ngOnInit() {

        this.Email = this.UserEmail;

    }
    ForgetPass(frmRegister: NgForm) {

        //this.frmRegister.submitted = true;
        if (this.Password !== this.ConfirmPassword) {
            //this.frmRegister.form.setErrors({ invalid: true });
            this.frmRegister.valid = false;
        }
        if (frmRegister.valid) {

            if ((this.Email != null || this.Email != " ") || (this.Password != null || this.Password != " ") || (this.ConfirmPassword != null || this.ConfirmPassword != " ")) {
                let param = {
                    "cemail": this.Email, "cpass": this.Password

                }
                console.log(this.cemail)
                this.http.post<any>(`LogIn/ForgetPass`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                    data = JSON.parse(data.data);
                    console.log(data)
                    if (data[0].MSG == "0") {
                        ///alert("Password Updated Successfully...!!");

                        this.Approval = !this.Approval;
                        this.hideform = !this.hideform;

                    }

                    else if (data[0].MSG == "1") {
                        //alert("You can't use old previous three password..!!");
                        this.Rejected = !this.Rejected

                    }
                    else {
                        this.sdata = data;

                    }
                }, error => { });
            }
            else if ((this.Email == null || this.Email == " ") || (this.Password == null || this.Password == " ") || (this.ConfirmPassword == null || this.ConfirmPassword == " ")) {
                alert("Please Input Email and Password");
            }
            else {
                return false;
            }

        }
        else {
            alert("Email & Password Required..!");

        }

    }



    goback() {
        this.Rejected = !this.Rejected
    }
}