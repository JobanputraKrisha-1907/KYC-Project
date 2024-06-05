using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using ProjectPages.BAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using MimeKit;
using MimeKit.Text;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Http;
using System.IO;

namespace ProjectPages.Controllers
{
    [ApiController]
    [Route("[controller]/{action}")]    
    public class Registration : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        RegistrationBAL objregistrationBAL = new RegistrationBAL();




        [HttpPost]
        [HttpGet]
        public string DtToJson(DataTable dt)
        {
            string JSONString = string.Empty;
            JSONString = JsonConvert.SerializeObject(dt);
            return JSONString;
        }

        // For Verify Email of Client Exists Or Not (Email & Mobile verification (Both))
        public ActionResult Verify_Clientdata(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            DataTable DtVerifyClient = new DataTable();
            DtVerifyClient = objregistrationBAL.Verify_Clientdata(Convert.ToString(JData.cemail), Convert.ToString(JData.cmobile));
            String ShowData = DtToJson(DtVerifyClient);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = ShowData });
        }

        // For Send Otp to Email For Login & Registration
        public IActionResult SendEmailOTP(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);
            var emailTo = Convert.ToString(JData.cemail);

            string emailtext = "your otp is " + Convert.ToString(JData.otp) + "<br>" + "Your Otp Will be Expire In 30 Seconds";

            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse("prudentcorporate82@gmail.com"));
            email.To.Add(MailboxAddress.Parse(emailTo));
            email.Subject = "Email Otp Verification";
            email.Body = new TextPart(TextFormat.Html) { Text = emailtext };
            using var smtp = new SmtpClient();
            smtp.Connect("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
            smtp.Authenticate("prudentcorporate82@gmail.com", "yuejjylpdlyxkknm");
            smtp.Send(email);
            smtp.Disconnect(true);

            DataTable Dt_Insert_Otp = new DataTable();
            Dt_Insert_Otp = objregistrationBAL.SendEmailOTP(Convert.ToString(JData.otp), Convert.ToString(JData.email_mobileType), Convert.ToInt32(JData.type));
            String Data_Otp_log = DtToJson(Dt_Insert_Otp);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = Data_Otp_log });
        }

        // For Send Otp to Mobile For Login & Registration
        public IActionResult SendMobileOTP(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            DataTable Dt_Insert_Otp = new DataTable();
            Dt_Insert_Otp = objregistrationBAL.SendMobileOTP(Convert.ToString(JData.otp), Convert.ToString(JData.email_mobileType), Convert.ToInt32(JData.type));
            String Data_Otp_log = DtToJson(Dt_Insert_Otp);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = Data_Otp_log });
        }

        // For Insert Otp to Email & Mobile For Login & Registration
        public ActionResult insertwithotp(parameter opara) //VerifyInserted_Otp
        {
            dynamic JData = JObject.Parse(opara.JsonData);

            DataTable Dt_matchotpforVerify = new DataTable();
            Dt_matchotpforVerify = objregistrationBAL.insertwithotp(Convert.ToString(JData.otpsave), Convert.ToInt32(JData.verify), Convert.ToInt32(JData.cancel));
            String Data_Otp_match_verify = DtToJson(Dt_matchotpforVerify);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = Data_Otp_match_verify });
        }

        // Confirm otp For Login & Registration
        public ActionResult tocheck_ConfirmOtp(parameter orep) //Checked_CnfOTP
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            DataTable Dt_CnfOtp = new DataTable();
            Dt_CnfOtp = objregistrationBAL.tocheck_ConfirmOtp(Convert.ToString(JData.otpsave), Convert.ToInt32(JData.type), Convert.ToString(JData.email_mobileType));
            String dshow = DtToJson(Dt_CnfOtp);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = dshow });
        }

        // For Both TBl (InsertData_Into_ClientDetails_Tbl & InsertData_Into_Login_Tbl)
        //For Client Details Registration
        public IActionResult Register_ClientData(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            // Insert Into Client TBl //Register_ClientData // Insert Into Login Tbl
            DataTable Dt_RegisterClientData = new DataTable();
            Dt_RegisterClientData = objregistrationBAL.Register_ClientData(Convert.ToString(JData.cname), Convert.ToString(JData.cemail), Convert.ToString(JData.cmobile), Convert.ToString(JData.cpass), Convert.ToInt32(JData.status), Convert.ToInt32(JData.RoleId));
            String showClientData = DtToJson(Dt_RegisterClientData);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = showClientData });
        }

        //For Get ClientId
        public ActionResult toGet_ClientId(parameter orep) //Checked_CnfOTP
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            var email = Convert.ToString(JData.clientEmail);
            DataTable Dt_ClientId = new DataTable();
            Dt_ClientId = objregistrationBAL.toGet_ClientId(email);
            String dshow = DtToJson(Dt_ClientId);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = dshow });
        }

        // Verify Client Pancard Kyc Registration
        public ActionResult CheckPanKyc(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            DataTable Dt_VerifyClient = new DataTable();
            Dt_VerifyClient = objregistrationBAL.CheckPanKyc(Convert.ToString(JData.ClientPanNo));
            String ShowData = DtToJson(Dt_VerifyClient);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = ShowData });
        }

        //Upload Pan Image 
        public IActionResult uploadPan(IFormFile file)
        {
            var path = Path.Combine(file.FileName);
            using (var fileStream = new FileStream(path, FileMode.Create))
            {
                file.CopyTo(fileStream);
            }
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = path });
        }

        //Annual Income Master Data For Registration
        public ActionResult GetAnnualIncome()
        {
            DataTable Dt_GetIncomeList = objregistrationBAL.GetAnnualIncome();
            string condata = DtToJson(Dt_GetIncomeList);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = condata });
        }

        //Occupation Master Data For Registration
        public ActionResult GetOccupationList()
        {
            DataTable Dt_GetOccupationList = objregistrationBAL.GetOccupationList();
            string condata = DtToJson(Dt_GetOccupationList);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = condata });
        }

        //KYC Confirmation Page Client Details For Registration
        public ActionResult GetClientDetails(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            DataTable Dt_ClientDetails = new DataTable();
            Dt_ClientDetails = objregistrationBAL.GetClientDetails(Convert.ToInt32(JData.clientId), Convert.ToString(JData.MarriedStatus), Convert.ToString(JData.AnnualIncomeList), Convert.ToString(JData.OccupationList), Convert.ToString(JData.ClientMotherName), Convert.ToInt32(JData.status));
            String dshow = DtToJson(Dt_ClientDetails);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = dshow });
        }
        public ActionResult GetClientPanDetails(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            DataTable Dt_ClientPanDetails = new DataTable();
            Dt_ClientPanDetails = objregistrationBAL.GetClientPanDetails(Convert.ToInt32(JData.clientId), Convert.ToString(JData.ClientPanNo), Convert.ToString(JData.ClientDOB), Convert.ToString(JData.ClientPanProof), Convert.ToInt32(JData.status));
            String dshow = DtToJson(Dt_ClientPanDetails);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = dshow });
        }
        //Country Master Data For Registration
        public ActionResult ShowCountry()
        {
            DataTable Dt_CountryList = objregistrationBAL.ShowCountry();
            string showcon = DtToJson(Dt_CountryList);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = showcon });
        }

        //State Master Data For Registration
        public ActionResult ShowState(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            DataTable Dt_GetState = new DataTable();
            Dt_GetState = objregistrationBAL.ShowState(Convert.ToInt32(JData.countryId));
            String showstate = DtToJson(Dt_GetState);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = showstate });
        }

        //Upload Correspondence Address Proof
        public IActionResult uploadCadd(IFormFile file)
        {
            var path = Path.Combine(file.FileName);
            using (var fileStream = new FileStream(path, FileMode.Create))
            {
                file.CopyTo(fileStream);
            }
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = path });
        }

        //Upload Permanent Address Proof
        public IActionResult uploadPadd(IFormFile file)
        {
            var path = Path.Combine(file.FileName);
            using (var fileStream = new FileStream(path, FileMode.Create))
            {
                file.CopyTo(fileStream);
            }
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = path });
        }

        //Additional Details(Address Details) For Registration
        public ActionResult SubmitAddressDetail(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            DataTable Dt_AddressDetails = new DataTable();
            Dt_AddressDetails = objregistrationBAL.SubmitAddressDetail(Convert.ToInt32(JData.clientId), Convert.ToString(JData.cAdd1), Convert.ToString(JData.cAdd2), Convert.ToString(JData.cAdd3), Convert.ToInt32(JData.cCon), Convert.ToInt32(JData.cStat), Convert.ToString(JData.cCity), Convert.ToInt32(JData.cPin), Convert.ToString(JData.cAddressProof), Convert.ToString(JData.pAdd1), Convert.ToString(JData.pAdd2), Convert.ToString(JData.pAdd3), Convert.ToInt32(JData.pCon), Convert.ToInt32(JData.pStat), Convert.ToString(JData.pCity), Convert.ToInt32(JData.pPin), Convert.ToString(JData.pAddressProof), Convert.ToInt32(JData.status));
            String show = DtToJson(Dt_AddressDetails);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = show });
        }


        //AddressType Master Data For Facta Registration
        public ActionResult AddressType()
        {
            DataTable Dt_GetAddtype = objregistrationBAL.AddressType();

            string showAddtypeList = DtToJson(Dt_GetAddtype);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = showAddtypeList });
        }

        //Source of wealth Master Data For Facta Registration
        public ActionResult SourceOfWealth()
        {
            DataTable Dt_GetSOW = objregistrationBAL.SourceOfWealth();
            string showSOWList = DtToJson(Dt_GetSOW);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = showSOWList });
        }

        //Facta Details For Registration
        public ActionResult FatcaDetails(parameter oparameter)
        {
            dynamic JData = JObject.Parse(oparameter.JsonData);

            DataTable Dt_FactaDetail = new DataTable();
            Dt_FactaDetail = objregistrationBAL.FatcaDetails(Convert.ToInt32(JData.clientid), Convert.ToInt32(JData.AddressType), Convert.ToInt32(JData.SourceOfWealth), Convert.ToString(JData.PlaceOfBirth), Convert.ToInt32(JData.CountryOfBirth), Convert.ToString(JData.Nationality), Convert.ToInt32(JData.status));
            String dshow = DtToJson(Dt_FactaDetail);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = dshow });
        }

        //BankList Master Data For Facta Registration
        public ActionResult getBankName()
        {
            DataTable Dt_GetBank = objregistrationBAL.getBankName();
            string GetBankList = DtToJson(Dt_GetBank);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = GetBankList });
        }

        //Verify IFSC And Bank Name Bank Details For Registration
        public ActionResult verifyIFSC(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            DataTable Dt_VerifyIFSC = new DataTable();
            Dt_VerifyIFSC = objregistrationBAL.verifyIFSC(Convert.ToInt32(JData.BankName), Convert.ToString(JData.BankIFSC));
            String showIFSC = DtToJson(Dt_VerifyIFSC);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = showIFSC });
        }

        //Upload Cancel Cheque Proof For Bank Detail
        public IActionResult uploadCheque(IFormFile file)
        {
            var path = Path.Combine(file.FileName);
            using (var fileStream = new FileStream(path, FileMode.Create))
            {
                file.CopyTo(fileStream);
            }
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = path });
        }

        //Upload Bank Statement Proof For Bank Detail
        public IActionResult uploadStatement(IFormFile file)
        {
            var path = Path.Combine(file.FileName);
            using (var fileStream = new FileStream(path, FileMode.Create))
            {
                file.CopyTo(fileStream);
            }
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = path });
        }

        //Upload Signature For Bank Detail
        public IActionResult uploadSign(IFormFile file)
        {
            var path = Path.Combine(file.FileName);
            using (var fileStream = new FileStream(path, FileMode.Create))
            {
                file.CopyTo(fileStream);
            }
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = path });
        }

        //Add Bank Details For Registration
        public ActionResult addBankDetails(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            DataTable Dt_GetBankDetails = new DataTable();
            Dt_GetBankDetails = objregistrationBAL.addBankDetails(Convert.ToInt32(JData.clientid), Convert.ToString(JData.bankname), Convert.ToString(JData.bankbranch), Convert.ToString(JData.bankcity), Convert.ToString(JData.IFSCcode), Convert.ToString(JData.MICRcode), Convert.ToString(JData.bankacnumber), Convert.ToString(JData.accounttype), Convert.ToString(JData.modeofholding), Convert.ToString(JData.accholdername1), Convert.ToString(JData.accholdername2), Convert.ToString(JData.accholdername3), Convert.ToString(JData.cancelchequedoc), Convert.ToString(JData.bankstatementdoc), Convert.ToString(JData.activationstatus), Convert.ToString(JData.signaturedoc), Convert.ToInt32(JData.status));
            String showBankDetails = DtToJson(Dt_GetBankDetails);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = showBankDetails });
        }

        //Upload IPV video Details
        [HttpPost]
        public IActionResult uploadsvideo(IFormFile video)
        {
            var path = Path.Combine(video.FileName);
            using (var fileStream = new FileStream(path, FileMode.Create))
            {
                video.CopyTo(fileStream);
            }
            return Ok();
        }

        //Upload IPV Image (ScreenShot)
        [HttpPost]
        public IActionResult uploadsimg(IFormFile file)
        {
            var path = Path.Combine(file.FileName);
            using (var fileStream = new FileStream(path, FileMode.Create))
            {
                file.CopyTo(fileStream);
            }
            return Ok();
        }

        //Add IPV Details 
        public ActionResult addIPVDetail(parameter oparameter)
        {
            dynamic JData = JObject.Parse(oparameter.JsonData);


            DataTable Dt_IPVDetails = new DataTable();
            Dt_IPVDetails = objregistrationBAL.addIPVDetail(Convert.ToInt32(JData.clientId), Convert.ToString(JData.clientVideoDoc), Convert.ToString(JData.clientImgDoc), Convert.ToInt32(JData.status));
            String showIPVDetails = DtToJson(Dt_IPVDetails);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = showIPVDetails });
        }

        //For Pdf preview
        public IActionResult getClientDetailsPdf(parameter mod)
        {
            dynamic Jd = JObject.Parse(mod.JsonData);

            DataTable Dt_PdfPreview = new DataTable();
            Dt_PdfPreview = objregistrationBAL.getClientDetailsPdf(Convert.ToInt32(Jd.cid));
            string showPdfPreview = DtToJson(Dt_PdfPreview);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "success", data = showPdfPreview });
        }

        // new
        public IActionResult GetPdfDetails(parameter mod)
        {
            dynamic Jd = JObject.Parse(mod.JsonData);

            DataTable Dt_PdfDetails = new DataTable();
            Dt_PdfDetails = objregistrationBAL.GetPdfDetails(Convert.ToInt32(Jd.clientId),Convert.ToInt32(Jd.status));
            string showPdfDetails = DtToJson(Dt_PdfDetails);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "success", data = showPdfDetails });
        }

        public IActionResult GetExistClientPanData(parameter mod)
        {
            dynamic Jd = JObject.Parse(mod.JsonData);

            DataTable Dt_Pandetails = new DataTable();
            Dt_Pandetails = objregistrationBAL.GetExistClientPanData(Convert.ToInt32(Jd.cid));
            string showPanData = DtToJson(Dt_Pandetails);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "success", data = showPanData });
        }
        public IActionResult EditClientDetails(parameter mod)
        {
            dynamic Jd = JObject.Parse(mod.JsonData);

            DataTable Dt_EditClientData = new DataTable();
            Dt_EditClientData = objregistrationBAL.EditClientDetails(Convert.ToInt32(Jd.clientId));
            string showEditClientData = DtToJson(Dt_EditClientData);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "success", data = showEditClientData });
        }

        // for get register client info
        public IActionResult GetRegisterClientInfo(parameter mod)
        {
            dynamic Jd = JObject.Parse(mod.JsonData);

            DataTable Dt_EditClientData = new DataTable();
            Dt_EditClientData = objregistrationBAL.GetRegisterClientInfo(Convert.ToInt32(Jd.clientID));
            string showEditClientData = DtToJson(Dt_EditClientData);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "success", data = showEditClientData });
        }


    }
}
