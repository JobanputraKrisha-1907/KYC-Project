import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['../../assets/css/FundBazarLogin.css']
})
export class HomeComponent {
    otp: string;
    viewdata: any;
    submitted: false;
    title = 'otpinput';
    showOtpComponent = true;
    showlogin = true;
    hidelogin = false;
    for_resend_otp = false;
    showotp = true;
    hidepassword = false;
    loading = false;
    statusEmail = false;
    @ViewChild('frmLogin', { static: true }) frmLogin;
    @ViewChild('basicTimer', { static: true }) basicTimer;

    @ViewChild("ngOtpInput", { static: true }) ngOtpInput;

    // login with otp
    config = {
        allowNumbersOnly: true,
        length: 6,
        isPasswordInput: false,
        disableAutoFocus: false,


        inputStyles: {

            margin: "8px 12px 0px 2px",
            width: "40px",
            height: "40px",
           /* color: "blue",*/
            font: "22px",
        }



    };




    // OTP Code
    onOtpChange(otp: any) {
        this.otp = otp;
        if (otp.length > 6) {
            this.validateOtp();
        }
    }

    //setVal(val: any) {
    //    this.ngOtpInput.setValue(val);
    //}

    //onConfigChange() {
    //    this.showOtpComponent = false;
    //    this.otp = null;
    //    setTimeout(() => {
    //        this.showOtpComponent = true;
    //    }, 0);
    //}

    validateOtp() {
        alert('only allow 6 digit');
    }

    constructor(private http: HttpClient, private tost: ToastrService, private router: Router) { }
    UserEmail;
    UserPassword;
    msg;
    chckotp;
    otpcount = 1;
    mobile;
 
    dislock = true;
    ngOnInit(): void {
        this.loading = true;
        setTimeout(() => {

            this.loading = false;
        }, 2000)
    }
    // This For Validation Functionality
    toggle() {
        if (this.UserEmail == null || this.UserEmail == '') {

            this.tost.error("Please enter email", '', {
                positionClass: 'toast-center-center',
                timeOut: 3000,
            });
        }
        else if (this.UserPassword == null || this.UserPassword == '') {
            this.tost.error("Please enter password", '', {
                positionClass: 'toast-center-center',
                timeOut: 3000,
            });
        }
    }

    //This For Login Functionality 
    LoginBtn(frmLogin: NgForm) {
        this.frmLogin.submitted = true;
        if (frmLogin.valid) {
            let param = {
                "UserName": this.UserEmail,
                "UserPassword": this.UserPassword,
            }
            this.http.post<any>(`LogIn/Verify_Client`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                data = JSON.parse(data.data);
                
                if (data[0].MSG == "1") {
                    this.tost.error("Invalid email or password", '', {
                        positionClass: 'toast-center-center',
                        timeOut: 3000,
                    });
                }
                if (data[0].Role == "1") {
                    sessionStorage.setItem("clientEmail", data[0].Username);
                    this.router.navigate(['/KycAdminDashboard']);
                }
                else {
                    sessionStorage.setItem("clientEmail", this.UserEmail);
                   
                    sessionStorage.setItem("ClientName", data[0].Name);
                    sessionStorage.setItem("ClientId", data[0].ClientId);

                    switch (data[0].Status) {
                        case 1:
                            this.router.navigate(['/KycConfirm']);
                            break;
                        case 2:
                            this.router.navigate(['/KycConfirm']);
                            sessionStorage.setItem("ForStatusValue","true")
                            break;
                        case 3:
                            this.router.navigate(['/KycAddress']);
                            break;
                        case 4:
                            this.router.navigate(['/KycFatcaDetails']);
                            break;
                        case 5:
                            this.router.navigate(['/KycBankDetails']);
                            break;
                        case 6:
                            this.router.navigate(['/KycVideoIPV']);
                            break;
                        case 7:
                            this.router.navigate(['/KycPdfPreview']);
                            break;
                        case 8:
                            this.router.navigate(['/KycClientDashboard']);
                            break;
                        //case 9:
                        //    this.router.navigate(['/KycClientDashboard']);
                        //    break;


                    }
                    
                    this.frmLogin.resetForm();
                }
            }, error => { });
        }
        else {
            return false;
        }
    }
    Login_Otp(frmLogin: NgForm) {
        this.statusEmail = true;
        this.frmLogin.submitted = true;

        if (this.UserEmail == null || this.UserEmail == " ") {
            this.tost.error("Enter Email", '', {
                positionClass: 'toast-center-center',
                timeOut: 3000,
            })
        }
        else {
            this.mobile = '';
            let param = {
                "cemail": this.UserEmail,
                "cmobile": this.mobile = '',

            }

            this.http.post<any>(`LogIn/Verify_Clientdata`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                data = JSON.parse(data.data);
              
                if (data[0].MSG == "1") {
                    this.showotp = !this.showotp;
                    this.hidepassword = !this.hidepassword;
                    this.showlogin = !this.showlogin;
                    this.hidelogin = !this.hidelogin;
                    var otpGenerator = (Math.floor(100000 + Math.random() * 900000));
                    this.loading = true;
                    let param = {
                       
                        "cemail": this.UserEmail,
                        "otp": otpGenerator,
                        "email_mobileType": this.UserEmail,
                        "type": 4,
                    }

                    this.chckotp = param.otp;
                    this.http.post<any>(`LogIn/SendEmailOTP`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                        data = JSON.parse(data.data);
                        this.dislock = !this.dislock;

                        this.for_resend_otp = true;
                        this.loading = false;

                        setTimeout(() => {

                        }, 0);
                        setTimeout(() => {
                            this.dislock = !this.dislock;
                            this.statusEmail = false;

                        }, 10000);
                        //setTimeout(() => {
                        //    this.dislock = !this.dislock;
                        //    let param = {
                        //        "otpsave": this.chckotp,
                        //        "verify": 0,
                        //        "cancel": 1

                        //    }

                        //    this.http.post<any>(`Home/insertwithotp`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                        //        data = JSON.parse(data.data);



                        //        //this.formRegister.resetForm();

                        //        this.chckotp = 0;

                        //    }, error => { });
                        //    this.for_resend_otp = false;
                        //}, 30000);

                    }, error => { });
                }
                else {


                    this.tost.error("Invalid Email", '', {
                        positionClass: 'toast-center-center',
                        timeOut: 3000,
                    })

                    //this.formRegister.resetForm();
                }
            }, error => { });
        }

    }
    EnableEmailReOtp() {
        this.dislock = !this.dislock;
        this.statusEmail = true;
        if (this.otpcount < 0) {
            this.tost.error("OTP Limit is Over", '', {
                positionClass: 'toast-center-center',
                timeOut: 3000,
            });
        }
        if (this.otpcount >= 0) {



            let param = {
                "otpsave": this.chckotp,
                "verify": 0,
                "cancel": 1

            }

            this.http.post<any>(`LogIn/insertwithotp`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                data = JSON.parse(data.data);


                //this.formRegister.resetForm();



            }, error => { });

            if (this.otpcount >= 0) {
                this.loading = true;
                var otpGenerator = (Math.floor(100000 + Math.random() * 900000));

                let param = {
                    "cemail": this.UserEmail,
                    "otp": otpGenerator,
                    "email_mobileType": this.UserEmail,
                    "type": 4,
                }
                this.http.post<any>(`LogIn/SendEmailOTP`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                    this.loading = false;

                    this.tost.error(this.otpcount + "  Attempt Remaining ..!", '', {
                        positionClass: 'toast-center-center',
                        timeOut: 3000,
                    });
                    setTimeout(() => {
                        /*  this.for_resend_otp = true;*/
                        /*   this.basicTimer.start();*/
                    }, 0);
                    setTimeout(() => {
                        this.dislock = !this.dislock;
                        this.statusEmail = false;

                        /* this.for_resend_otp = false;*/
                    }, 10000);

                    //setTimeout(() => {
                    //    this.dislock = !this.dislock;

                    //    let param = {
                    //        "otpsave": this.chckotp,
                    //        "verify": 0,
                    //        "cancel": 1

                    //    }

                    //    this.http.post<any>(`Home/insertwithotp`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                    //        data = JSON.parse(data.data);


                    //        //this.formRegister.resetForm();

                    //        this.chckotp = 0;

                    //    }, error => { });
                    //    this.for_resend_otp = false;
                    //}, 30000);

                    this.otpcount--;


                }, error => { });
                this.chckotp = param.otp;
            }
        }

        else {

            this.dislock = this.dislock;
        }
    }
    submitlogin(frmLogin: NgForm) {
        var otplen = String(this.chckotp)
        if (otplen.length == 9 || otplen.length == 4) {
           

        }
        if (otplen.length == 6) {
            let param = {
                "otpsave": this.otp,
                "type": 4,
                "email_mobileType": this.UserEmail,

            }

            this.http.post<any>(`LogIn/tocheck_ConfirmOtp`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                data = JSON.parse(data.data);
                if (data[0].msg == "1") {
                    let object = {
                        "Email": this.UserEmail
                    }
                    this.http.post<any>(`LogIn/getClientStatusDetails`, { "JsonData": JSON.stringify(object) }).pipe().subscribe(data => {
                        data = JSON.parse(data.data);
                        sessionStorage.setItem("clientEmail", data[0].Email);
                        sessionStorage.setItem("ClientName", data[0].Name);
                        sessionStorage.setItem("ClientId", data[0].ClientId);

                        switch (data[0].Status) {
                            case 1:
                                this.router.navigate(['/KycConfirm']);
                                break;
                            case 2:
                                this.router.navigate(['/KycConfirm']);
                                sessionStorage.setItem("ForStatusValue", "true")
                                break;
                            case 3:
                                this.router.navigate(['/KycAddress']);
                                break;
                            case 4:
                                this.router.navigate(['/KycFatcaDetails']);
                                break;
                            case 5:
                                this.router.navigate(['/KycBankDetails']);
                                break;
                            case 6:
                                this.router.navigate(['/KycVideoIPV']);
                                break;
                            case 7:
                                this.router.navigate(['/KycPdfPreview']);
                                break;
                            case 8:
                                this.router.navigate(['/KycClientDashboard']);
                                break;
                            //case 9:
                            //    this.router.navigate(['/KycClientDashboard']);
                            //    break;


                        }
                    }, error => { });

                   

                }
                else {
                    this.tost.error("OTP Incorrect", '', {
                        positionClass: 'toast-center-center',
                        timeOut: 3000,
                    });
                }
            }, error => { });
        }
        else {
            return false;
        }
        //if (this.otp == this.chckotp) {
        //    let param = {
        //        "otpsave": this.chckotp,
        //        "verify": 1,
        //        "cancel": 0

        //    }

        //    this.http.post<any>(`Home/insertwithotp`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
        //        data = JSON.parse(data.data);





        //        alert("success");
        //        window.location.reload();

        //    }, error => { });
        //}

        //else {
        //    alert("enter correct otp")
        //}
    }
}
