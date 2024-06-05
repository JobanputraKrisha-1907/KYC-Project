import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';

import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare var MediaRecorder: any;

@Component({
    selector: 'app-video-ipv',
    templateUrl: './video-ipv.component.html',
    styleUrls: ['../../assets/css/VideoIPV.css']
})
/** VideoIPV component*/
export class VideoIpvComponent implements OnInit {

    @ViewChild('recordedVideo', { static: true }) recordVideoElementRef: ElementRef;
    @ViewChild('video', { static: true }) videoElementRef: ElementRef;
    urlVideo;
    videoElement: HTMLVideoElement;
    recordVideoElement: HTMLVideoElement;
    mediaRecorder: any;
    recordedBlobs: Blob[];
    isRecording: boolean = false;
    downloadUrl: string;
    stream: MediaStream;
    hidden = false;
    hidePreviewbtn = false;
    hidePreviewDisplay = true;
    hideOriginalDisplay = false;
    testurl: string;
    videoProof;
    IpvImgProof;
    IPVOtp;
    userIpvOtp;
    UploadPath = "C:\\Users\\trainee7\\Desktop\\KYCDocs/";
    Email = sessionStorage.getItem("clientEmail")
       /*Email = "vijay12@gmail.com"*/

    constructor(private http: HttpClient, @Inject('BASE_URL') _baseUrl: string, private router: Router, private toast: ToastrService) {
        this.testurl = _baseUrl;

    }

    async ngOnInit() {
        navigator.mediaDevices
            .getUserMedia({
                video: {
                    width: 480,
                },
            })
            .then((stream) => {
                this.videoElement = this.videoElementRef.nativeElement;
                this.recordVideoElement = this.recordVideoElementRef.nativeElement;

                this.stream = stream;
                this.videoElement.srcObject = this.stream;

            });
    }

    startRecording() {

        this.recordedBlobs = [];
        let options: any = { mimeType: 'video/webm' };

        try {
            this.mediaRecorder = new MediaRecorder(this.stream, options);
        } catch (err) {
            console.log(err);
        }
        this.mediaRecorder.start(); // collect 100ms of data
        this.isRecording = !this.isRecording;
        setTimeout(() => { this.mediaRecorder.stop(), this.hidePreviewbtn = false, this.hideOriginalDisplay = true; }, 11000);
        /*this.isRecording = this.isRecording;*/
        this.hidePreviewbtn = true;
        this.onDataAvailableEvent();
        this.onStopRecordingEvent();
    }
    downloadFile() {


        var otpElen = String(this.userIpvOtp)

        //if (otpElen.length == 9 || otpElen.length == 4) {
        //    this.toast.error("Enter OTP", '', {
        //        positionClass: 'toast-center-center',
        //        timeOut: 3000,
        //    });

        //}
        if (otpElen.length == 6) {

            let param = {
                "otpsave": this.userIpvOtp,
                "type": 5,
                "email_mobileType": this.Email,

            }

            this.http.post<any>(`Registration/tocheck_ConfirmOtp`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                data = JSON.parse(data.data);
                if (data[0].msg == "1") {

                    this.toast.success("OTP Match Succesfully..!!", '', {
                        positionClass: 'toast-center-center',
                        timeOut: 3000,
                    });
                    let cID = sessionStorage.getItem("ClientId")
                    let date = formatDate(new Date(), 'dd-MM-yyyy_HH-mm-ss-MS', 'en-us')
                    this.videoProof = this.UploadPath + cID + "_" + 7 + "_" + date + ".mp4"
                    this.IpvImgProof = this.UploadPath + cID + "_" + 8 + "_" + date + ".png"

                    let urlvideo = this.recordVideoElement.src;
                    this.http.get(urlvideo, { responseType: 'blob' }).subscribe((blob: Blob) => {


                        const formData = new FormData();
                        formData.append('video', blob, this.videoProof);
                        this.http.post<any>(`Registration/uploadsvideo`, formData, { reportProgress: true, observe: 'events' }).pipe().subscribe(data => {
                            console.log("done")
                        });
                    }, error => { });
                    let urlimg = this.canvas.nativeElement.toDataURL("image/png")
                    this.http.get(urlimg, { responseType: 'blob' }).subscribe((blob: Blob) => {

                        const formData = new FormData();
                        formData.append('file', blob, this.IpvImgProof);
                        this.http.post<any>(`Registration/uploadsimg`, formData, { reportProgress: true, observe: 'events' }).pipe().subscribe(data => {
                            console.log("done")

                        }, error => { });


                    });
                    if (sessionStorage.getItem("EditClientValue") == "true") {
                        let param = {
                            "clientId": sessionStorage.getItem("ClientId"),

                            "clientVideoDoc": this.videoProof,
                            "clientImgDoc": this.IpvImgProof,
                            "status": "8"

                        }

                        this.http.post<any>(`Registration/addIPVDetail`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                            alert("insert")
                            this.router.navigate(['/KycPdfPreview']);
                        }, error => { });
                    }
                    else {
                        let param = {
                            "clientId": sessionStorage.getItem("ClientId"),

                            "clientVideoDoc": this.videoProof,
                            "clientImgDoc": this.IpvImgProof,
                            "status": "7"

                        }

                        this.http.post<any>(`Registration/addIPVDetail`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                            alert("insert")
                            this.router.navigate(['/KycPdfPreview']);
                        }, error => { });
                    }
                    
                }
                else {
                    this.toast.error("OTP Incorrect", '', {
                        positionClass: 'toast-center-center',
                        timeOut: 3000,
                    });
                }
            }, error => { });





        }
        else {
            this.toast.error("Enter OTP", '', {
                positionClass: 'toast-center-center',
                timeOut: 3000,
            });


        }




        //if (this.IPVOtp == this.userIpvOtp) {
        //    this.toast.success("OTP Match Successfully", '', {
        //        positionClass: 'toast-center-center',
        //        timeOut: 2000,
        //    });
        //    let date = formatDate(new Date(), 'dd-MM-yyyy_HH-mm-ss-MS', 'en-us')

        //    let cID = 1007
        //    this.videoProof = this.UploadPath + cID + "_" + 7 + "_" + date + ".mp4"
        //    this.IpvImgProof = this.UploadPath + cID + "_" + 8 + "_" + date + ".png"

        //    let urlvideo = this.recordVideoElement.src;
        //    this.http.get(urlvideo, { responseType: 'blob' }).subscribe((blob: Blob) => {


        //        const formData = new FormData();
        //        formData.append('video', blob, this.videoProof);
        //        this.http.post<any>(`Home/uploadsvideo`, formData, { reportProgress: true, observe: 'events' }).pipe().subscribe(data => {
        //            console.log("done")
        //        });
        //    }, error => { });
        //    let urlimg = this.canvas.nativeElement.toDataURL("image/png")
        //    this.http.get(urlimg, { responseType: 'blob' }).subscribe((blob: Blob) => {

        //        const formData = new FormData();
        //        formData.append('file', blob, this.IpvImgProof);
        //        this.http.post<any>(`Home/uploadsimg`, formData, { reportProgress: true, observe: 'events' }).pipe().subscribe(data => {
        //            console.log("done")

        //        }, error => { });


        //    });
        //    let param = {
        //        "clientId": sessionStorage.getItem("ClientId"),

        //        "clientVideoDoc": this.videoProof,
        //        "clientImgDoc": this.IpvImgProof,

        //    }

        //    this.http.post<any>(`Home/addIPVDetail`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
        //        alert("insert")
        //          this.router.navigate(['/KycPdfPreview']);
        //    }, error => { });
        //}

    }
    //Submit() {
    //    if (this.IPVOtp == this.userIpvOtp) {
    //        console.log(this.videoProof)
    //        console.log(this.IpvImgProof)
    //        let param = {
    //            "clientId": sessionStorage.getItem("ClientId"),
    //            "clientVideoDoc": this.videoProof,
    //            "clientImgDoc": this.IpvImgProof,

    //        }

    //        this.http.post<any>(`Home/addIPVDetail`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
    //            alert("insert")
    //          /*  this.router.navigate(['/KycVideoIPV']);*/
    //        }, error => { });
    //    }
    //}
    /*@C:/Users/baps / Desktop / parth / pru.webm*/
    showStart() {
        this.isRecording = !this.isRecording;
        this.mediaRecorder.start();
        this.hidePreviewDisplay = true;
        this.hideOriginalDisplay = false;
    }
    videoPreview() {
        this.hidePreviewDisplay = false
        this.recordVideoElement.play();

        console.log(this.recordVideoElement.src);
    }

    playRecording() {
        if (!this.recordedBlobs || !this.recordedBlobs.length) {
            console.log('cannot play.');
            return;
        }
        this.recordVideoElement.play();
    }

    onDataAvailableEvent() {
        try {
            this.mediaRecorder.ondataavailable = (event: any) => {
                if (event.data && event.data.size > 0) {
                    this.recordedBlobs.push(event.data);
                }
            };
        } catch (error) {
            console.log(error);
        }
    }

    onStopRecordingEvent() {
        try {

            this.mediaRecorder.onstop = (event: Event) => {
                const videoBuffer = new Blob(this.recordedBlobs, {
                    type: 'video/webm',
                });

                this.downloadUrl = window.URL.createObjectURL(videoBuffer); // you can download with <a> tag
                this.recordVideoElement.src = this.downloadUrl;

            };
        } catch (error) {
            console.log(error);
        }
    }



    /////////////////////////////////////////////
    WIDTH = 640;
    HEIGHT = 480;

    @ViewChild("video", { static: true })
    public video: ElementRef;

    @ViewChild("canvas", { static: true })
    public canvas: ElementRef;

    captures: string[] = [];
    error: any;
    isCaptured: boolean;

    //async ngAfterViewInit() {
    //    await this.setupDevices();
    //}

    //async setupDevices() {
    //    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    //        try {
    //            const stream = await navigator.mediaDevices.getUserMedia({
    //                video: true
    //            });
    //            if (stream) {
    //                this.video.nativeElement.srcObject = stream;
    //                this.video.nativeElement.play();

    //                this.error = null;
    //            } else {
    //                this.error = "You have no output video device";
    //            }
    //        } catch (e) {
    //            this.error = e;
    //        }
    //    }
    //}

    capture() {
        this.drawImageToCanvas(this.video.nativeElement);
        this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
        this.isCaptured = true;
    }

    removeCurrent() {
        this.isCaptured = false;
    }

    setPhoto(idx: number) {
        this.isCaptured = true;
        var image = new Image();
        image.src = this.captures[idx];
        this.drawImageToCanvas(image);
    }

    drawImageToCanvas(image: any) {
        this.canvas.nativeElement
            .getContext("2d")
            .drawImage(image, 0, 0, this.WIDTH, this.HEIGHT);
    }

    otpsend() {
        var otpGenerator = (Math.floor(100000 + Math.random() * 900000));

        let param = {
            "cemail": this.Email,
            "otp": otpGenerator,
            "type": 5,
            "email_mobileType": this.Email
        }
        this.http.post<any>(`Registration/SendEmailOTP`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
            this.IPVOtp = param.otp;
            this.toast.success("OTP Sent To your Email", '', {
                positionClass: 'toast-center-center',
                timeOut: 2000,
            });
            var st = this.stream.getTracks()[0];
            var st1 = this.stream.getTracks()[0];
            st1.enabled = true;
            st.stop();
        })
    }
}