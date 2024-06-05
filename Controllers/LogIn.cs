using Microsoft.AspNetCore.Mvc;
using MimeKit;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using ProjectPages.BAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;

using MimeKit.Text;
using MailKit.Net.Smtp;
using MailKit.Security;
using System.Net;
using System.Threading.Tasks;

namespace ProjectPages.Controllers
{
    [ApiController]
    [Route("[controller]/{action}")]
    public class LogIn : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        //for login

        LogInBAL objloginBAL = new LogInBAL();

        // For Convert Data into Json to String
        [HttpPost]
        [HttpGet]
        public string DtToJson(DataTable dt)
        {
            string JSONString = string.Empty;
            JSONString = JsonConvert.SerializeObject(dt);
            return JSONString;
        }

        // For Insert Data Into The Login TBL
        // For Verify Username And Password of Client To check Already Exists Or Not For Login
        public ActionResult Verify_Client(parameter opara)
        {
            dynamic Jsonvar = JObject.Parse(opara.JsonData);

            DataTable Dt_Verify_Client = new DataTable();
            Dt_Verify_Client = objloginBAL.Verify_Client(Convert.ToString(Jsonvar.UserName), Convert.ToString(Jsonvar.UserPassword)); //Login_Creds
            String DataClient_Login = DtToJson(Dt_Verify_Client);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = DataClient_Login });
        }

        // For Verify Email of Client Exists Or Not (Email & Mobile verification (Both))
        public ActionResult Verify_Clientdata(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            DataTable DtVerifyClient = new DataTable();
            DtVerifyClient = objloginBAL.Verify_Clientdata(Convert.ToString(JData.cemail), Convert.ToString(JData.cmobile));
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
            Dt_Insert_Otp = objloginBAL.SendEmailOTP(Convert.ToString(JData.otp), Convert.ToString(JData.email_mobileType), Convert.ToInt32(JData.type));
            String Data_Otp_log = DtToJson(Dt_Insert_Otp);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = Data_Otp_log });
        }

        // For Send Otp to Mobile For Login & Registration
        public IActionResult SendMobileOTP(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            DataTable Dt_Insert_Otp = new DataTable();
            Dt_Insert_Otp = objloginBAL.SendMobileOTP(Convert.ToString(JData.otp), Convert.ToString(JData.email_mobileType), Convert.ToInt32(JData.type));
            String Data_Otp_log = DtToJson(Dt_Insert_Otp);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = Data_Otp_log });
        }

        // For Insert Otp to Email & Mobile For Login & Registration
        public ActionResult insertwithotp(parameter opara) //VerifyInserted_Otp
        {
            dynamic Jsonvar = JObject.Parse(opara.JsonData);

            DataTable Dt_matchotpforVerify = new DataTable();
            Dt_matchotpforVerify = objloginBAL.insertwithotp(Convert.ToString(Jsonvar.otpsave), Convert.ToInt32(Jsonvar.verify), Convert.ToInt32(Jsonvar.cancel));
            String Data_Otp_match_verify = DtToJson(Dt_matchotpforVerify);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = Data_Otp_match_verify });
        }

        // Confirm otp For Login & Registration
        public ActionResult tocheck_ConfirmOtp(parameter orep) //Checked_CnfOTP
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            DataTable Dt_CnfOtp = new DataTable();
            Dt_CnfOtp = objloginBAL.tocheck_ConfirmOtp(Convert.ToString(JData.otpsave), Convert.ToInt32(JData.type), Convert.ToString(JData.email_mobileType));
            String dshow = DtToJson(Dt_CnfOtp);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = dshow });
        }

        // ForgotPass For Login
        public ActionResult ForgetPass(parameter orep) //ForgetPassword
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            DataTable Dt_ForgotPwd = new DataTable();
            Dt_ForgotPwd = objloginBAL.ForgetPass(Convert.ToString(JData.cemail), Convert.ToString(JData.cpass));
            String dshow = DtToJson(Dt_ForgotPwd);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = dshow });
        }

        // for get client status vise data
        public ActionResult getClientStatusDetails(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            DataTable Dt_ClientDatalist = new DataTable();
            Dt_ClientDatalist = objloginBAL.getClientStatusDetails(Convert.ToString(JData.Email));
            String dshow = DtToJson(Dt_ClientDatalist);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = dshow });

          
        }

        // for last login time
        public IActionResult GetLastLoginTime(parameter mod)
        {
            dynamic Jd = JObject.Parse(mod.JsonData);

            DataTable Dt_PdfPreview = new DataTable();
            Dt_PdfPreview = objloginBAL.GetLastLoginTime(Convert.ToString(Jd.clientEmail));
            string showPdfPreview = DtToJson(Dt_PdfPreview);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "success", data = showPdfPreview });
        }
    }
}
