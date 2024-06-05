import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { degrees, ImageAlignment, PDFDocument, rgb, StandardFonts, TextAlignment } from 'pdf-lib';



@Component({
    selector: 'app-pdf-preview',
    templateUrl: './pdf-preview.component.html',
    styleUrls: ['../../assets/css/PdfPreview.css']
})
/** pdfPreview component*/
export class PdfPreviewComponent {
    /** pdfPreview ctor */
    constructor(private http: HttpClient, private router: Router) {

    }
    ClientId = sessionStorage.getItem("ClientId");
   /* ClientId = 1;*/
    data;
    ngOnInit() {
        //setTimeout(() => { this.loading = false; }, 4000)
        document.getElementById('loader').setAttribute("style", "display:initial");
        let id_obj = {
            "cid": this.ClientId
        }

        this.http.post<any>('Registration/getClientDetailsPdf', { "JsonData": JSON.stringify(id_obj) }).pipe().subscribe(data => {
            this.data = JSON.parse(data.data);
          /*  console.log(data)*/
            fillForm(this.data)
            async function fillForm(data: Object) {

                const formUrl = '/assets/WelcomeLetterIndividualNew.pdf';
                const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
                const pdfDoc = await PDFDocument.load(formPdfBytes);

                //const fieldNames = pdfDoc.getForm().getFields().map((f) => f.getName());
                // console.log({ fieldNames })

                const form = pdfDoc.getForm();
                var str = JSON.stringify(data[0].ClientId);
                form.getTextField('ApplicationNo').setText(str);
                form.getTextField('inv_pan_number').setText(data[0].PanNo);
                form.getTextField('inv_name').setText(data[0].Name);
                form.getTextField('date_birth').setText(data[0].DOB);
                form.getTextField('AccountType').setText(data[0].AccountType);
                form.getTextField('MAIDENNAME').setText('MiddelName');
                form.getTextField('MOTHERNAME').setText(data[0].MotherName);
                form.getTextField('txtNationality').setText(data[0].Nationality);
                /*form.getTextField('txttaxstatus').setText(data[0].Status);*/

                // Occupation CheckBox
                if (data[0].Occupation.trim() == "6") form.getCheckBox('ocp_prof').check();
                if (data[0].Occupation.trim() == "2") form.getCheckBox('ocp_private').check();
                if (data[0].Occupation.trim() == "7") form.getCheckBox('ocp_house_wife').check();
                if (data[0].Occupation.trim() == "5") form.getCheckBox('ocp_student').check();
                if (data[0].Occupation.trim() == "3") form.getCheckBox('ocp_public').check();
                if (data[0].Occupation.trim() == "1") form.getCheckBox('ocp_service').check();
                if (data[0].Occupation.trim() == "4") form.getCheckBox('ocp_goverment').check();
                if (data[0].Occupation.trim() == "8") form.getCheckBox('ocp_business').check();
                if (data[0].Occupation.trim() == "9") form.getCheckBox('ocp_retired').check();
                if (data[0].Occupation.trim() == "10") form.getCheckBox('ocp_agriculturist').check();
                if (data[0].Occupation.trim() == "11") form.getCheckBox('ocp_prop').check();
                if (data[0].Occupation.trim() == "13") form.getCheckBox('ocp_occup_others').check()
                
                   
                        
             

                //Gross Anual Income

                if (data[0].AnnualIncome.trim() == "1") form.getCheckBox('below1lac').check();
                if (data[0].AnnualIncome.trim() == "2") form.getCheckBox('1-5lac').check();
                if (data[0].AnnualIncome.trim() == "3") form.getCheckBox('5-10lac').check();
                if (data[0].AnnualIncome.trim() == "4") form.getCheckBox('10-25lac').check();
                if (data[0].AnnualIncome.trim() == "5") form.getCheckBox('25-1cr').check();
                if (data[0].AnnualIncome.trim() == "6") form.getCheckBox('above1cr').check();
                
               
               
              

                //Politically Exposed Person Status 
                form.getCheckBox('PEP_YES').uncheck();
                form.getCheckBox('PEP_R').check();
                form.getCheckBox('PEP_No').uncheck();

               // form.getTextField('Text12').setText('');
                form.getTextField('mail_addr1').setText(data[0].PAddressLine1);
                form.getTextField('mail_addr2').setText(data[0].PAddressLine2);
               form.getTextField('mail_city').setText(data[0].PCity);
                form.getTextField('mail_country').setText(data[0].CountryName);
                form.getTextField('mail_state').setText(data[0].StateName);
                form.getTextField('mail_pin').setText(String(data[0].PPinCode));
                form.getTextField('mobile').setText(data[0].MobileNo);
                form.getTextField('email_id').setText(data[0].Email);
                form.getTextField('off_phone').setText('off phone');
                form.getTextField('home_phone').setText('home phone');
                form.getTextField('BANKACCNO').setText(data[0].BankAcNumber);
                form.getTextField('BANKNAME').setText(data[0].BankName);
                form.getTextField('BANKBRANCH').setText(data[0].BankAddress);
                form.getTextField('BANKCITY').setText(data[0].BankCity);
                form.getTextField('BANKMICR').setText(data[0].MICRCode);
                form.getTextField('BANKIFSC').setText(data[0].IFSCCode);
                form.getTextField('BANKPIN').setText('Bank Pincode');

                //Type of Account

                if (data[0].AccountType.trim() == "Savings") form.getCheckBox('SAVINGS').check();
                if (data[0].AccountType.trim() == "Current") form.getCheckBox('CURRENT').check();
                if (data[0].AccountType.trim() == "NRE") form.getCheckBox('NRE').check();
                if (data[0].AccountType.trim() == "NRO") form.getCheckBox('NRO').check();

                //Mode Of Holding
                if (data[0].ModeOfHolding == "Single") form.getCheckBox('SINGLE').check();
                if (data[0].ModeOfHolding == "Anyone or Survivor") form.getCheckBox('MULTIPLE').check();
                if (data[0].ModeOfHolding == "Join") form.getCheckBox('Join').check();

                //Nominee Details Not in Datatable
                //form.getTextField('N_name1').setText('N 1');
                //form.getTextField('N_dob1').setText('N Dob');
                //form.getTextField('N_GuardianName1').setText('N GName');
                //form.getTextField('N_address1').setText('N addresss');
                //form.getTextField('N_PanNo1').setText('N Pan');
                //form.getTextField('N_relation1').setText('N Ralation');
                //form.getTextField('N_Per1').setText('N perl 1');
                //form.getTextField('N_GuardianPanNo1').setText('N G pan');
                //form.getCheckBox('N_GuardRelationMother1').uncheck();
                //form.getCheckBox('N_GuardRelationFather1').uncheck();
                //form.getCheckBox('N_GuardRelationLG1').uncheck();
                //form.getTextField('N_name2').setText('N 2');
                //form.getTextField('N_dob2').setText('N Dob 2');
                //form.getTextField('N_GuardianName2').setText('N G N 2');
                //form.getTextField('N_address2').setText('N Add2');
                //form.getTextField('N_PanNo2').setText('N Pan');
                //form.getTextField('N_relation2').setText('n r 2');
                //form.getTextField('N_Per2').setText('n perl2');
                //form.getTextField('N_GuardianPanNo2').setText('n G Pan');
                //form.getCheckBox('N_GuardRelationMother2').uncheck();
                //form.getCheckBox('N_GuardRelationFather2').uncheck();
                //form.getCheckBox('N_GuardRelationLG2').uncheck();
                //form.getTextField('N_name3').setText('Null');
                //form.getTextField('N_dob3').setText('Null');
                //form.getTextField('N_GuardianName3').setText('Null');
                //form.getTextField('N_address3').setText('Null');
                //form.getTextField('N_PanNo3').setText('Null');
                //form.getTextField('N_relation3').setText('Null');
                //form.getTextField('N_Per3').setText('Null');
                //form.getTextField('N_GuardianPanNo3').setText('Null');
                //form.getCheckBox('N_GuardRelationMother3').uncheck();
                //form.getCheckBox('N_GuardRelationFather3').uncheck();
                //form.getCheckBox('N_GuardRelationLG3').uncheck();

                form.getCheckBox('N_OPTOut').check();

                //Get Date DDMMYYYY Formate
                let mm1: string;
                let dd1: string;
                let today = new Date();
                const yyyy = today.getFullYear();
                var mm = today.getMonth() + 1; // Months start at 0!
                var dd = today.getDate();
                if (dd < 10) { dd1 = '0' + dd; }
                else { dd1 = dd.toString(); }
                if (mm < 10) { mm1 = '0' + mm; }
                else { mm1 = mm.toString(); }
                const formattedToday = dd1 + '' + mm1 + '' + yyyy;

                form.getTextField('todayDate').setText(formattedToday);
                form.getTextField('TopCity').setText('');
                form.getTextField('gender').setText(data[0].Gender);
               
                form.getTextField('father_name').setText('Father Name');
                form.getTextField('place_birth').setText(data[0].PlaceOfBirth);
                form.getTextField('country_birth').setText(data[0].CountryName1);
                form.getTextField('Nationality').setText(data[0].Nationality);

                if (data[0].Occupation.trim() == "6") form.getTextField('occtype').setText("PROFESSIONAL");
                if (data[0].Occupation.trim() == "2") form.getTextField('occtype').setText("PRIVATE SECTOR");
                if (data[0].Occupation.trim() == "7") form.getTextField('occtype').setText("HOUSEWIFE");
                if (data[0].Occupation.trim() == "5") form.getTextField('occtype').setText("STUDENT");
                if (data[0].Occupation.trim() == "3") form.getTextField('occtype').setText("PUBLIC SECTOR");
                if (data[0].Occupation.trim() == "1") form.getTextField('occtype').setText("SERVICES");
                if (data[0].Occupation.trim() == "4") form.getTextField('occtype').setText("GOVERNMENT SERVICE");
                if (data[0].Occupation.trim() == "8") form.getTextField('occtype').setText("BUSINESS");
                if (data[0].Occupation.trim() == "9") form.getTextField('occtype').setText("RETIRED");
                if (data[0].Occupation.trim() == "10") form.getTextField('occtype').setText("AGRICULTURE");
                if (data[0].Occupation.trim() == "11") form.getTextField('occtype').setText("PROPRIETORSHIP");
                if (data[0].Occupation.trim() == "13") form.getTextField('occtype').setText("OTHERS");

                ////Address Types

                if (data[0].AddressType == 1) form.getCheckBox('resident').check();
                if (data[0].AddressType == 2) form.getCheckBox('business').check();
                if (data[0].AddressType == 3) form.getCheckBox('RegisteredOffice').check();
                if (data[0].AddressType == 4) form.getCheckBox('resi_business').check();
               
                ////Permissible documents
                //form.getCheckBox('passport').check();
                //form.getCheckBox('election_id').check();
                //form.getCheckBox('pancard').check();
                //form.getCheckBox('govtid').check();
                //form.getCheckBox('license').check();
                //form.getCheckBox('uidaicard').check();
                //form.getCheckBox('nregacard').check();
                //form.getCheckBox('pothers').check();

                ////Are you a tax resident of any country other than India? 
                //form.getCheckBox('TRY').check();
                //form.getCheckBox('TRN').check();


                //form.getTextField('Citizenship1').setText('Null');
                //form.getTextField('TaxRefNumbers1').setText('Null');
                //form.getTextField('Citizenship2').setText('Null');
                //form.getTextField('TaxRefNumbers2').setText('Null');
                //form.getTextField('Citizenship3').setText('Null');
                //form.getTextField('TaxRefNumbers3').setText('Null');
                //form.getTextField('TIN1').setText('Null');
                //form.getTextField('TIN2').setText('Null');
                //form.getTextField('TIN3').setText('Null');

                //Today Date
                const formattedToday1 = dd1 + '-' + mm1 + '-' + yyyy;
                form.getTextField('todayDate1').setText(formattedToday1);
                form.getTextField('todayDate1').setAlignment(TextAlignment.Center);

                form.getTextField('TopCity1').setText(data[0].CCity);

                //const pngUrl = '/assets/Step-7.png';
                //const pngImageBytes = await fetch(pngUrl).then((res) => res.arrayBuffer());
                //let pngImage = await pdfDoc.embedPng(pngImageBytes);

          /*      form.getButton('ClientSignatureFatka').setImage(pngImage, ImageAlignment.Center);*/

                form.getTextField('SBC').setText('Null');
                form.getTextField('UC').setText('Null');
                form.getTextField('CompName').setText('Null');
                form.getTextField('bank_name').setText(data[0].BankName);
                form.getTextField('M_IFSC').setText(data[0].IFSCCode);
                form.getTextField('amount_words').setText('Null');
                form.getTextField('upper_limit').setText('Null');
                form.getTextField('reference1').setText('Null');
                form.getTextField('m_').setText(data[0].MobileNo);
                form.getTextField('reference2').setText('Null');
              
                form.getTextField('first_acc_holder_name').setText(data[0].AccHolderName1);
                form.getTextField('second_acc_holder_name').setText(data[0].AccHolderName2);
                form.getTextField('third_acc_holder_name').setText(data[0].AccHolderName3);
                form.getTextField('m_accno').setText(data[0].BankAcNumber);
                form.getTextField('user_email').setText(data[0].Email);

                //FREQUENCY
                form.getCheckBox('MONTHLY').uncheck();
                form.getCheckBox('QUARTERLY').check();
                form.getCheckBox('HALFYEARLY').uncheck();
                form.getCheckBox('YEARLY').uncheck();
                form.getCheckBox('AWP').uncheck();

                //DEBIT TYPE
                form.getCheckBox('D_FA').uncheck();
                form.getCheckBox('D_MA').check();


                form.getCheckBox('D_TICK').uncheck();
                form.getCheckBox('CREATE').check();
                form.getCheckBox('MODIFY').uncheck();
                form.getCheckBox('CANCEL').uncheck();

                form.getCheckBox('saving_acc_type').check();
                form.getCheckBox('curr_acc_type').uncheck();
                form.getCheckBox('cc').check();
                form.getCheckBox('nre').check();
                form.getCheckBox('nro').check();
                form.getCheckBox('accother').check();

                form.getTextField('UMRN').setText('Null');
                form.getTextField('M_MICR').setText(data[0].MICRCode);
                const formattedToday2 = dd1 + '' + mm1 + '' + yyyy;
                form.getTextField('M_DFROM').setText(formattedToday2);
                form.getTextField('M_DTO').setText('');
                /*form.getButton('QRCode').setImage(pngImage, ImageAlignment.Center);*/

                form.flatten();

                // const pdfBytes = await pdfDoc.save({updateFieldAppearances: false});
                const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
                document.getElementById('pdf').setAttribute("src", pdfDataUri);
                // alert('successfully fetch your data');   
                document.getElementById('loader').setAttribute("style", "display:none");



            }

        });

    }

    ClickContinue() {
        if (sessionStorage.getItem("EditClientValue") == "true") {
            let param = {
                "clientId": this.ClientId,
                "status": "8"
            }
            this.http.post<any>(`Registration/GetPdfDetails`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                data = JSON.parse(data.data);
                this.router.navigate(['/KycClientDashboard']);

            }, error => { });
        }
        else {
            let param = {
                "clientId": this.ClientId,
                "status": "8"
            }
            this.http.post<any>(`Registration/GetPdfDetails`, { "JsonData": JSON.stringify(param) }).pipe().subscribe(data => {
                data = JSON.parse(data.data);
                this.router.navigate(['/KycClientDashboard']);

            }, error => { });
        }
     
    }
}