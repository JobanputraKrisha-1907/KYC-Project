import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';



@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['../../assets/css/FundBazarRegistration.css']
})
export class RegistrationComponent {
    userEmailOtp;
    userMobileOtp;
    NamePattern;
    isFocus = false;
    isFocusMo = false;
    MobilePattern;
    EmailPattern;
    disabledbox = false;
    dismobotpcntrl = false;
    for_resend_Mobile_btn = false;
    disbox = false;
    dispassinput = false;
    disnext = false;
    disableName = false;
    disableEmail = false;
    disboxverify = false;
    submitted = false;
    showEmail = true;
    hideEmail = false;
    showMobile = true;
    hideMobile = false;
    loading = false;
    sdata: any;
    resendbtnshow = true;
    resendbtnhide = false;
    disabledresendbtn = false;
    testurl: string;
    disableEdit = false;
    disableMobileEdit = false;

    statusEmail = false;
    statusMobile = false;
    For_Timer = false;
    For_Div_Email = false;
    For_Div_Mobile = false;
    @ViewChild('frmRegister1', { static: true }) frmRegister1;
    @ViewChild('frmRegister2', { static: true }) frmRegister2;
    @ViewChild('frmRegister3', { static: true }) frmRegister3;
    @ViewChild('frmRegister4', { static: true }) frmRegister4;
    /*@ViewChild('basicTimer', { static: true }) basicTimer;*/

    constructor(private tost: ToastrService, private http: HttpClient, @Inject('BASE_URL') _baseUrl: string, private router: Router) {
        this.testurl = _baseUrl;
    }
    accepted;
    for_Mobile_open;
    name;
    email;
    mobile;
    pass;
    emailotpIsNull;
    emailotp;
    mobileotp;
    mobileotpIsNull;
    confirmPassword;
    emailOtpCount = 1;
    mobileOtpCount = 1;
    LoadTimer;

    //start() {
    //    this.basicTimer.start();
    //}

    toEnable(frmRegister1, frmRegister2: NgForm) {

        this.frmRegister1.submitted = true;
        this.frmRegister2.submitted = true;

        if (this.frmRegister1.valid) {
            if (this.frmRegister2.valid) {
                let param = {
                    "cmobile": this.mobile,
                    "cemail": this.email
                }
                this.http.post<any>(`Registration/Verify_Clientdata`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                    data = JSON.parse(data.data);
                    if (data[0].MSG == "1") {
                        this.accepted = true;

                    }
                    else {
                        this.loading = true;
                        this.isFocus = true;

                        var otpGenerator = (Math.floor(100000 + Math.random() * 900000));
                        let param = {
                            'otp': otpGenerator,
                            "cemail": this.email,
                            "email_mobileType": this.email,
                            "type": 1
                        }
                        this.userEmailOtp = param.otp;
                        this.http.post<any>(`Registration/SendEmailOTP`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {

                            sessionStorage.setItem('clientEmail', this.email)
                            this.loading = false;
                            this.For_Timer = true;
                            this.For_Div_Email = true;
                            this.disabledresendbtn = !this.disabledresendbtn;

                            setTimeout(() => {



                            }, 0);
                            setTimeout(() => {

                                this.disabledresendbtn = !this.disabledresendbtn;


                            }, 10000);
                            //setTimeout(() => {
                            //    //this.For_Timer = false;
                            //    //this.For_Div_Email = false;

                            //    let param = {
                            //        "otpsave": this.userEmailOtp,
                            //        "verify": 0,
                            //        "cancel": 1

                            //    }

                            //    this.http.post<any>(`Home/insertwithotp`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                            //        data = JSON.parse(data.data);



                            //        //this.formRegister.resetForm();

                            //        this.userEmailOtp = 0;
                            //    }, error => { });

                            //}, 30000);

                            this.showEmail = !this.showEmail;
                            this.hideEmail = !this.hideEmail;
                            this.disableName = !this.disableName;
                            this.disableEmail = !this.disableEmail;
                            this.disabledbox = !this.disabledbox;
                            this.disabledresendbtn = !this.disabledresendbtn;
                            this.userEmailOtp = param.otp;


                            this.statusEmail = !this.statusEmail;
                        }, error => { });
                    }
                }, error => { });


            }
        }
        else {
            return false;
        }

    }
    onFocus() {
        this.isFocus = false;
        if (this.frmRegister2.valid) {
            this.loading = true;
            this.mobile = '';
            let param = {

                "cemail": this.email,
                "cmobile": this.mobile,

            }
            this.http.post<any>(`Registration/Verify_Clientdata`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                data = JSON.parse(data.data);
                if (data[0].MSG == "1") {

                    this.accepted = true;
                    this.loading = false;
                }
                else {
                    this.loading = false;
                    this.accepted = false;
                }
            }, error => { });
        }


    }
    toResendEmailOtp() {
        this.disabledresendbtn = !this.disabledresendbtn;
        this.For_Div_Email = false;
        if (this.emailOtpCount < 0) {
            this.tost.error("OTP Limit is Over", '', {
                positionClass: 'toast-center-center',
                timeOut: 3000,
            });
        }
        if (this.emailOtpCount >= 0) {
            let param = {
                "otpsave": this.userEmailOtp,
                "verify": 0,
                "cancel": 1

            }

            this.http.post<any>(`Registration/insertwithotp`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                data = JSON.parse(data.data);






            }, error => { });
            if (this.emailOtpCount >= 0) {
                this.loading = true;
                var otpGenerator = (Math.floor(100000 + Math.random() * 900000));
                let param = {
                    'otp': otpGenerator,
                    "cemail": this.email,
                    "email_mobileType": this.email,
                    "type": 1
                }
                this.userEmailOtp = param.otp;
                this.http.post<any>(`Registration/SendEmailOTP`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                    this.For_Timer = true;
                    this.For_Div_Email = true;
                    this.loading = false;

                    /*this.basicTimer.start();*/

                    setTimeout(() => {



                    }, 0);
                    setTimeout(() => {

                        this.disabledresendbtn = !this.disabledresendbtn;


                    }, 10000);
                    //setTimeout(() => {


                    //    //this.For_Timer = false;
                    //    //this.For_Div_Email = false;
                    //    let param = {
                    //        "otpsave": this.userEmailOtp,
                    //        "verify": 0,
                    //        "cancel": 1

                    //    }

                    //    this.http.post<any>(`Home/insertwithotp`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                    //        data = JSON.parse(data.data);



                    //        this.userEmailOtp = 0


                    //    }, error => { });
                    //}, 30000);


                    this.emailOtpCount--;


                });


            }

        }

        else {
            this.disabledresendbtn = this.disabledresendbtn;

        }

    }



    toShowField() {
        this.statusEmail = !this.statusEmail;

        this.For_Timer = false;
        this.For_Div_Email = false;
        this.disableName = !this.disableName;
        this.disableEmail = !this.disableEmail;
        this.showEmail = !this.showEmail;
        this.hideEmail = !this.hideEmail;
        this.disabledbox = !this.disabledbox;
        this.disabledresendbtn = !this.disabledresendbtn;


    }

    toEnablemobile() {
        var otpElen = String(this.emailotp)

        if (otpElen.length == 9 || otpElen.length == 4) {
            this.emailotpIsNull = true;

        }
        if (otpElen.length == 6) {
            this.For_Div_Email = false;
            let param = {
                "otpsave": this.emailotp,
                "type": 1,
                "email_mobileType": this.email,

            }

            this.http.post<any>(`Registration/tocheck_ConfirmOtp`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                data = JSON.parse(data.data);
                if (data[0].msg == "1") {
                    this.disbox = !this.disbox;
                    this.disableEdit = !this.disableEdit;
                    this.disabledbox = !this.disabledbox;
                    this.disabledresendbtn = !this.disabledresendbtn;

                    this.disboxverify = !this.disboxverify;
                    this.tost.success("OTP Match Succesfully..!!", '', {
                        positionClass: 'toast-center-center',
                        timeOut: 3000,
                    });

                }
                else {
                    this.tost.error("OTP Incorrect", '', {
                        positionClass: 'toast-center-center',
                        timeOut: 3000,
                    });
                }
            }, error => { });
            //if (this.emailotp == this.userEmailOtp) {


            //    this.userEmailOtp = 0

            //    this.For_Timer = false;
            //   
            //    let param = {
            //        "otpsave": this.emailotp,
            //        "verify": 1,
            //        "cancel": 0

            //    }

            //    this.http.post<any>(`Home/insertwithotp`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
            //        data = JSON.parse(data.data);


            //        this.sdata = data;



            //        this.tost.success("OTP Match Successfully...!!", '', {
            //            positionClass: 'toast-center-center',
            //            timeOut: 3000,
            //        });
            //       

            //        //this.formRegister.resetForm();


            //    }, error => { });


            //}




        }
        else {
            this.tost.error("Enter OTP", '', {
                positionClass: 'toast-center-center',
                timeOut: 3000,
            });
            this.disbox = this.disbox;

        }
    }


    onFocusMobile() {
        this.isFocusMo = false;
        if (this.frmRegister3.valid) {
            this.loading = true;
            
            let param = {
                "cemail": this.email,

                "cmobile": this.mobile
            }
            this.http.post<any>(`Registration/Verify_Clientdata`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                data = JSON.parse(data.data);
                if (data[0].MSG == "1") {
                  
                    this.for_Mobile_open = true;
                    this.loading = false;
                }
                else {
                    this.loading = false;
                    this.for_Mobile_open = false;
                }
            }, error => { });
        }

    }
    toEnablemobverifier(frmRegister3: NgForm) {
        this.frmRegister3.submitted = true
        if (this.frmRegister3.valid) {
            let param = {
                "cemail": this.email,

                "cmobile": this.mobile
            }
            this.http.post<any>(`Registration/Verify_Clientdata`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                data = JSON.parse(data.data);
                if (data[0].MSG == "1") {

                    this.for_Mobile_open = true;

                }
                else {
                    this.loading = true;
                    this.isFocusMo = true;
                    var otpGenerator = (Math.floor(100000 + Math.random() * 900000));

                    let param = {

                        'otp': otpGenerator,
                        "email_mobileType": this.mobile,
                        "type": 2
                    }
                    this.userMobileOtp = param.otp
                    this.http.post<any>(`Registration/SendMobileOTP`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {

                        this.loading = false;
                        this.For_Timer = true;
                        this.For_Div_Mobile = true;
                        this.for_resend_Mobile_btn = !this.for_resend_Mobile_btn;


                        setTimeout(() => {



                        }, 0);
                        setTimeout(() => {

                            this.for_resend_Mobile_btn = !this.for_resend_Mobile_btn;

                        }, 10000);
                        //setTimeout(() => {
                        //    this.For_Timer = false;
                        //    this.For_Div_Mobile = false;

                        //   

                        //    let param = {
                        //        "otpsave": this.userMobileOtp,
                        //        "verify": 0,
                        //        "cancel": 1

                        //    }

                        //    this.http.post<any>(`Home/insertwithotp`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                        //        data = JSON.parse(data.data);



                        //        this.userMobileOtp = 0;

                        //        //this.formRegister.resetForm();


                        //    }, error => { });

                        //}, 30000);


                        this.showMobile = !this.showMobile;
                        this.hideMobile = !this.hideMobile;
                        this.disbox = !this.disbox;
                        this.statusMobile = !this.statusMobile;
                        this.dismobotpcntrl = !this.dismobotpcntrl;
                        this.for_resend_Mobile_btn = !this.for_resend_Mobile_btn;
                        /*  this.basicTimer.start();*/
                    }, error => { });
                }
            }, error => { });



        }
        else {
            return false;
        }
    }
    toShowFieldMobile() {
        this.statusMobile = !this.statusMobile;

        this.For_Div_Mobile = false;
        this.showMobile = !this.showMobile;
        this.hideMobile = !this.hideMobile;
        this.disbox = !this.disbox;
        this.dismobotpcntrl = !this.dismobotpcntrl;
        this.for_resend_Mobile_btn = !this.for_resend_Mobile_btn;
    }
    toEnablepassinput() {
        var otpMlen = String(this.mobileotp)
        if (otpMlen.length == 9 || otpMlen.length == 4) {
            this.mobileotpIsNull = true;

        }
        if (otpMlen.length == 6) {
            this.For_Div_Mobile = false;

            let param = {
                "otpsave": this.mobileotp,
                "type": 2,
                "email_mobileType": this.mobile,

            }

            this.http.post<any>(`Registration/tocheck_ConfirmOtp`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                data = JSON.parse(data.data);
                if (data[0].msg == "1") {

                    this.dispassinput = !this.dispassinput;
                    this.disnext = !this.disnext;
                    this.for_resend_Mobile_btn = !this.for_resend_Mobile_btn;
                    this.dismobotpcntrl = !this.dismobotpcntrl;
                    this.disableMobileEdit = !this.disableMobileEdit;
                    this.tost.success("OTP Match Succesfully..!!", '', {
                        positionClass: 'toast-center-center',
                        timeOut: 3000,
                    });

                }
                else {
                    this.tost.error("OTP Incorrect", '', {
                        positionClass: 'toast-center-center',
                        timeOut: 3000,
                    });
                }
            }, error => { });

            //if (this.userMobileOtp == this.mobileotp) {
            //    this.For_Timer = false;
            //    this.dismobotpcntrl = !this.dismobotpcntrl;
            //    this.for_resend_Mobile_btn = this.for_resend_Mobile_btn;
            //    this.disboxverify = !this.disboxverify;
            //    let param = {
            //        "otpsave": this.mobileotp,
            //        "verify": 1,
            //        "cancel": 0

            //    }

            //    this.http.post<any>(`Home/insertwithotp`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
            //        data = JSON.parse(data.data);


            //        this.sdata = data;
            //        this.tost.success("OTP Match Successfully...!!", '', {
            //            positionClass: 'toast-center-center',
            //            timeOut: 3000,
            //        });

            //        this.dispassinput = !this.dispassinput;
            //        this.disnext = !this.disnext;
            //        //this.formRegister.resetForm();


            //    }, error => { });
            //}











        }
        else {
            this.tost.error("Enter OTP", '', {
                positionClass: 'toast-center-center',
                timeOut: 3000,
            });
            this.dispassinput = this.dispassinput;

        }




    }
    for_Resend_Mobileotp() {
        this.for_resend_Mobile_btn = !this.for_resend_Mobile_btn;
        this.For_Div_Mobile = false;
        if (this.mobileOtpCount < 0) {
            this.tost.error("OTP Limit is Over", '', {
                positionClass: 'toast-center-center',
                timeOut: 3000,
            });
        }
        if (this.mobileOtpCount >= 0) {
            let param = {
                "otpsave": this.userMobileOtp,
                "verify": 0,
                "cancel": 1

            }

            this.http.post<any>(`Registration/insertwithotp`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                data = JSON.parse(data.data);





            }, error => { });

            if (this.mobileOtpCount >= 0) {
                var otpGenerator = (Math.floor(100000 + Math.random() * 900000));
                let param = {
                    'otp': otpGenerator,

                    "email_mobileType": this.mobile,
                    "type": 2
                }
                this.userMobileOtp = param.otp;
                this.http.post<any>(`Registration/SendMobileOTP`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                    this.For_Timer = true;
                    this.For_Div_Mobile = true;


                    setTimeout(() => {



                    }, 0);
                    setTimeout(() => {
                        this.for_resend_Mobile_btn = !this.for_resend_Mobile_btn;


                    },10000);
                    //setTimeout(() => {


                    //    this.disabledresendbtn = !this.disabledresendbtn;
                    //    this.For_Timer = false;
                    //    this.For_Div_Mobile = false;
                    //    let param = {
                    //        "otpsave": this.userMobileOtp,
                    //        "verify": 0,
                    //        "cancel": 1

                    //    }

                    //    this.http.post<any>(`Home/insertwithotp`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                    //        data = JSON.parse(data.data);


                    //        this.userMobileOtp = 0;



                    //    }, error => { });
                    //}, 30000);


                    this.mobileOtpCount--;


                });


            }
        }

        else {
            this.for_resend_Mobile_btn = this.for_resend_Mobile_btn;

        }
    }
    EnableNext() {
        if (this.pass == this.confirmPassword) {
            this.disnext = this.disnext;
        }
        else {

            this.disnext = !this.disnext;
        }
    }
    submitdata(frmRegister1, frmRegister2, frmRegister3, frmRegister4: NgForm) {

        this.frmRegister1.submitted = true;
        this.frmRegister2.submitted = true;
        this.frmRegister3.submitted = true;
        this.frmRegister4.submitted = true;
        if (this.pass !== this.confirmPassword) {
            this.frmRegister1.form.setErrors({ invalid: true });
        }


        if (this.frmRegister4.valid) {

            let param = {
                "cname": this.name, "cemail": this.email, "cmobile": this.mobile, "cpass": this.pass,"status":"1","RoleId":"2"
            }

            this.http.post<any>(`Registration/Register_ClientData`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                /*console.log(message)*/
                alert(data.message);


                //frmRegister.resetForm();
                this.router.navigate(['/KycConfirm']);
                //this.disableName = !this.disableName;
                //this.disableEmail = !this.disableEmail;
                //this.hideEmail = !this.hideEmail;
                //this.showEmail = !this.showEmail;
                //this.showMobile = !this.showMobile;
                //this.hideMobile = !this.hideMobile;
                //this.dispassinput = !this.dispassinput;
                //this.disnext = !this.disnext;

            }, error => { });
        }



        else {
            return false;
        }
    }

    ngOnInit() {
        this.loading = true;
        setTimeout(() => {

            this.loading = false;
        }, 2000)
        this.NamePattern = environment.NamePattern;
        this.MobilePattern = environment.MobilePattern;
        this.EmailPattern = environment.EmailPattern;
    }
}
