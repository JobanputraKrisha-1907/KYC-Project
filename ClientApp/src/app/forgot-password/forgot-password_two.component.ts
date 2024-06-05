import { Component } from '@angular/core';
import { Inject, Input, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-forgot-password_two',
    templateUrl: './forgot-password_two.component.html',
    styleUrls: ['../../assets/css/forgotpassTwo.css']
})
/** ForgotPassword_two component*/
export class ForgotPassword_twoComponent {
    chkemailotp;
    ForHide1 = false;
    sdata;
    dislock = true;
    atmcount = 1;
    loading;
    @ViewChild('basicTimer', { static: true }) basicTimer;

    constructor(private toastr: ToastrService, private http: HttpClient, @Inject('BASE_URL') _baseurl: string, public router: Router) {
        this.testurl = _baseurl;
    }

    @Input() ForOTP;
    @Input() ForUserEmail;
    @Input() foruserusername;
    fotp;
    chkname;
    testurl = "";
    Show_third_page = false;
    for_resend_otp;

    ngOnInit() {
        this.chkname = this.foruserusername;
    }


    //EnableEmailReOtp() {
    //    this.dislock = !this.dislock;
    //    this.loading = true;
    //    if (this.atmcount >= 0) {
    //        var otpGenerator = (Math.floor(100000 + Math.random() * 900000));
    //        console.log(this.ForUserEmail)
    //        let param = {
    //            "cemail": this.ForUserEmail,
    //            "otp": otpGenerator,
    //            "email_mobileType": 1,
    //            "type": 3,
    //        }
    //        this.http.post<any>(`Home/SendEmailOTP`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {

    //            this.for_resend_otp = true;
    //            this.basicTimer.start();
    //            setTimeout(() => {
    //               this.loading = false
    //            }, 0);
    //            setTimeout(() => {
    //                this.dislock = !this.dislock;
    //                this.for_resend_otp = false;

    //                let param = {
    //                    "otpsave": this.ForOTP,
    //                    "verify": 0,
    //                    "cancel": 1

    //                }

    //                this.http.post<any>(`Home/insertwithotp`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
    //                    data = JSON.parse(data.data);



    //                    this.ForOTP = 0;

    //                    //this.formRegister.resetForm();


    //                }, error => { });

    //            }, 30000);

    //            this.atmcount--;


    //        }, error => { });
    //        this.ForOTP = param.otp;
    //    }
    //    else {

    //        this.dislock = this.dislock;
    //    }
    //}

    tonewpass() {
        var otpEmail = String(this.fotp);
        if (otpEmail.length == 6) {


            let param = {
                "otpsave": this.fotp,
                "type": 3,
                "email_mobileType": this.ForUserEmail,

            }

            this.http.post<any>(`LogIn/tocheck_ConfirmOtp`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                data = JSON.parse(data.data);
                if (data[0].msg == "1") {



                    this.loading = false;
                    this.ForHide1 = true;
                    this.Show_third_page = true;


                }
                else {
                    this.toastr.error("OTP Incorrect", '', {
                        positionClass: 'toast-center-center',
                        timeOut: 3000,
                    });
                }
            }, error => { });
        }
        else {
            this.toastr.error("Enter  OTP", '', {
                positionClass: 'toast-center-center',
                timeOut: 1000,
            })

        }

    }
}