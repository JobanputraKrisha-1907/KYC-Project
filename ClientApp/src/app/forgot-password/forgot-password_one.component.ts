import { Component, Inject, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';


@Component({
    selector: 'app-forgot-password_one',
    templateUrl: './forgot-password_one.component.html',
    styleUrls: ['../../assets/css/forgotpassOne.css']
})
/** ForgotPassword_one component*/
export class ForgotPassword_oneComponent {
    @ViewChild('fogPass1', { static: true }) fogPass1;
    testurl = "";


    /** otpForget ctor */
    constructor(private toastr: ToastrService, private http: HttpClient, @Inject('BASE_URL') _baseUrl: string, public router: Router) {
        this.testurl = _baseUrl;
    }
    show_second_page = false;
    username;
    Forusername;
    ForEmail;
    forOtp;
    mobile;
    femail;
    disvericon = false;
    hide = true;
    show = false;
    showName = false;
    showEmail = false;
    chkemailotp;
    ForHide = false;
    loading;
    verifyemail5(fogPass1: NgForm) {



        this.fogPass1.submitted = true;
        if (fogPass1.valid) {
            
            this.showName = !this.showName;
            this.showEmail = !this.showEmail;



            this.mobile = '';
            let param = {
                "cemail": this.femail,
                "cmobile": this.mobile,

            }

            this.http.post<any>(`LogIn/Verify_Clientdata`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                data = JSON.parse(data.data);
                this.username = data[0].Name;
               
                if (data[0].MSG == "1") {
                    var otpGenerator = (Math.floor(100000 + Math.random() * 900000));
                    this.loading = true;
                    let param = {
                       
                        "cemail": this.femail,
                        "otp": otpGenerator,
                        "email_mobileType": this.femail,
                        "type": 3,
                    }
                    this.http.post<any>(`LogIn/SendEmailOTP`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                        //alert("OTP send to your emailid");
                        this.show_second_page = true;
                        this.loading = false;
                        this.toastr.success("OTP send to your emailid ", '', {
                            positionClass: 'toast-center-center',
                            timeOut: 2000,
                        })
                        this.ForEmail = this.femail;
                        this.Forusername = this.username;
                        this.forOtp = otpGenerator;
                        this.ForHide = true;
                    })
                        

                }
                else {
                    this.toastr.error("Enter Registered Email", '', {
                        positionClass: 'toast-center-center',
                        timeOut: 2000,
                    })
                        ;


                }
            }, error => { });
        }
        else {
            return false;
        }
    }
    emailpatt;
    ngOnInit() {
        this.emailpatt = environment.EmailPattern;
    }
}