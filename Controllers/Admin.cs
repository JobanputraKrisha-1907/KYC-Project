using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using ProjectPages.BAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using MimeKit;
using MimeKit.Text;
using MailKit.Net.Smtp;
using MailKit.Security;
using System.Threading.Tasks;

namespace ProjectPages.Controllers
{
    [ApiController]
    [Route("[controller]/{action}")]
    public class Admin : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        AdminBAL objAdminBAL = new AdminBAL();


        [HttpPost]
        [HttpGet]
        public string DtToJson(DataTable dt)
        {
            string JSONString = string.Empty;
            JSONString = JsonConvert.SerializeObject(dt);
            return JSONString;
        }
        // for get client data for new request
        public ActionResult adminGetClientData()
        {
            DataTable Dt_clientdata = objAdminBAL.adminGetClientData();
            string showcon = DtToJson(Dt_clientdata);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = showcon });
        }
        public ActionResult searchClientDetails(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            DataTable DtsearchClient = new DataTable();
            DtsearchClient = objAdminBAL.searchClientDetails(Convert.ToString(JData.searchBox));
            String ShowData = DtToJson(DtsearchClient);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = ShowData });
        }


        // for master data tbl

        public IActionResult InsertAddressType(parameter detail)
        {

            dynamic Jsondata = JObject.Parse(detail.JsonData);
            var AddressType = Convert.ToString(Jsondata.AddressType);
            DataTable Dt_AddressType = new DataTable();
            Dt_AddressType = objAdminBAL.AddressType(AddressType);
            String data = DtToJson(Dt_AddressType);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = data });
        }
        public IActionResult SearchAddressType(parameter detail)
        {

            dynamic Jsondata = JObject.Parse(detail.JsonData);
            var AddressType = Convert.ToString(Jsondata.AddressType);
            DataTable Dt_AddressType = new DataTable();
            Dt_AddressType = objAdminBAL.SAddressType(AddressType);
            String data = DtToJson(Dt_AddressType);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = data });
        }

        public IActionResult UpdateAddressType(parameter detail)
        {

            dynamic Jsondata = JObject.Parse(detail.JsonData);
            var AddressType = Convert.ToString(Jsondata.AddressType);
            var Id = Convert.ToString(Jsondata.Id);
            DataTable Dt_AddressType = new DataTable();
            Dt_AddressType = objAdminBAL.UAddressType(AddressType, Id);
            String data = DtToJson(Dt_AddressType);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = data });
        }
        public IActionResult DeleteAddressType(parameter detail)
        {
            dynamic Jsondata = JObject.Parse(detail.JsonData);
            var AddressType = Convert.ToString(Jsondata.AddressType);
            var Id = Convert.ToString(Jsondata.Id);
            DataTable Dt_AddressType = new DataTable();
            Dt_AddressType = objAdminBAL.DAddressType(AddressType, Id);
            String data = DtToJson(Dt_AddressType);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = data });
        }




        public IActionResult InsertOccupation(parameter detail)
        {

            dynamic Jsondata = JObject.Parse(detail.JsonData);
            var Occupation = Convert.ToString(Jsondata.occupation);
            DataTable Dt_Occupation = new DataTable();
            Dt_Occupation = objAdminBAL.Occupation(Occupation);
            String data = DtToJson(Dt_Occupation);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = data });
        }

        public IActionResult SearchOccupation(parameter detail)
        {

            dynamic Jsondata = JObject.Parse(detail.JsonData);
            var Occupation = Convert.ToString(Jsondata.occupation);
            DataTable Dt_Occupation = new DataTable();
            Dt_Occupation = objAdminBAL.SOccupation(Occupation);
            String data = DtToJson(Dt_Occupation);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = data });
        }

        public IActionResult UpdateOccupation(parameter detail)
        {

            dynamic Jsondata = JObject.Parse(detail.JsonData);
            var Occupation = Convert.ToString(Jsondata.occupation);
            var Id = Convert.ToString(Jsondata.Id);
            DataTable Dt_Occupation = new DataTable();
            Dt_Occupation = objAdminBAL.UOccupation(Occupation, Id);
            String data = DtToJson(Dt_Occupation);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = data });
        }
        public IActionResult DeleteOccupation(parameter detail)
        {

            dynamic Jsondata = JObject.Parse(detail.JsonData);
            var Occupation = Convert.ToString(Jsondata.occupation);
            var Id = Convert.ToString(Jsondata.Id);
            DataTable Dt_Occupation = new DataTable();
            Dt_Occupation = objAdminBAL.DOccupation(Occupation, Id);
            String data = DtToJson(Dt_Occupation);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = data });
        }





        public IActionResult InsertSourceOfWealth(parameter detail)
        {

            dynamic Jsondata = JObject.Parse(detail.JsonData);
            var SourecOfWealth = Convert.ToString(Jsondata.sourceofwealth);
            DataTable Dt_SourecOfWealth = new DataTable();
            Dt_SourecOfWealth = objAdminBAL.SourceOfWealth(SourecOfWealth);
            String data = DtToJson(Dt_SourecOfWealth);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = data });
        }
        public IActionResult SearchSourceOfWealth(parameter detail)
        {

            dynamic Jsondata = JObject.Parse(detail.JsonData);
            var SourceOfWealth = Convert.ToString(Jsondata.sourceofwealth);
            DataTable Dt_SourceOfWealth = new DataTable();
            Dt_SourceOfWealth = objAdminBAL.SSourceOfWealth(SourceOfWealth);
            String data = DtToJson(Dt_SourceOfWealth);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = data });
        }

        public IActionResult UpdateSourceOfWealth(parameter detail)
        {

            dynamic Jsondata = JObject.Parse(detail.JsonData);
            var SourceOfWealth = Convert.ToString(Jsondata.sourceofwealth);
            var Id = Convert.ToString(Jsondata.Id);
            DataTable Dt_SourceOfWealth = new DataTable();
            Dt_SourceOfWealth = objAdminBAL.USourceOfWealth(SourceOfWealth, Id);
            String data = DtToJson(Dt_SourceOfWealth);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = data });
        }
        public IActionResult DeleteSourceOfWealth(parameter detail)
        {

            dynamic Jsondata = JObject.Parse(detail.JsonData);
            var SourceOfWealth = Convert.ToString(Jsondata.sourceofwealth);
            var Id = Convert.ToString(Jsondata.Id);
            DataTable Dt_SourceOfWealth = new DataTable();
            Dt_SourceOfWealth = objAdminBAL.DSourceOfWealth(SourceOfWealth, Id);
            String data = DtToJson(Dt_SourceOfWealth);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = data });
        }




        public IActionResult InsertAnnualIncome(parameter detail)
        {

            dynamic Jsondata = JObject.Parse(detail.JsonData);
            var AnnualIncome = Convert.ToString(Jsondata.annualincome);
            DataTable Dt_AnnualIncome = new DataTable();
            Dt_AnnualIncome = objAdminBAL.AnnualIncome(AnnualIncome);
            String data = DtToJson(Dt_AnnualIncome);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = data });
        }
        public IActionResult SearchAnnualIncome(parameter detail)
        {

            dynamic Jsondata = JObject.Parse(detail.JsonData);
            var AnnualIncome = Convert.ToString(Jsondata.annualincome);
            DataTable Dt_AnnualIncome = new DataTable();
            Dt_AnnualIncome = objAdminBAL.SAnnualIncome(AnnualIncome);
            String data = DtToJson(Dt_AnnualIncome);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = data });
        }

        public IActionResult UpdateAnnualIncome(parameter detail)
        {

            dynamic Jsondata = JObject.Parse(detail.JsonData);
            var AnnualIncome = Convert.ToString(Jsondata.annualincome);
            var Id = Convert.ToString(Jsondata.Id);
            DataTable Dt_AnnualIncome = new DataTable();
            Dt_AnnualIncome = objAdminBAL.UAnnualIncome(AnnualIncome, Id);
            String data = DtToJson(Dt_AnnualIncome);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = data });
        }
        public IActionResult DeleteAnnualIncome(parameter detail)
        {

            dynamic Jsondata = JObject.Parse(detail.JsonData);
            var AnnualIncome = Convert.ToString(Jsondata.annualincome);
            var Id = Convert.ToString(Jsondata.Id);
            DataTable Dt_AnnualIncome = new DataTable();
            Dt_AnnualIncome = objAdminBAL.DAnnualIncome(AnnualIncome, Id);
            String data = DtToJson(Dt_AnnualIncome);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = data });
        }


        public ActionResult AddCountry(parameter opara)
        {
            dynamic Jsonvar = JObject.Parse(opara.JsonData);

            DataTable Dt = new DataTable();
            Dt = objAdminBAL.AddCountry(Convert.ToString(Jsonvar.Country));
            String b = DtToJson(Dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }
        public ActionResult AddBank(parameter opara)
        {
            dynamic Jsonvar = JObject.Parse(opara.JsonData);

            DataTable Dt = new DataTable();
            Dt = objAdminBAL.AddBank(Convert.ToString(Jsonvar.Bank));
            String b = DtToJson(Dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }

        public ActionResult SelectCountrymaster()
        {
            DataTable Dt = new DataTable();
            Dt = objAdminBAL.SelectCountrymaster();
            String b = DtToJson(Dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }

        public ActionResult AddState(parameter opara)
        {
            dynamic Jsonvar = JObject.Parse(opara.JsonData);

            DataTable Dt = new DataTable();
            Dt = objAdminBAL.AddState(Convert.ToString(Jsonvar.State), Convert.ToInt32(Jsonvar.CountryId));
            String b = DtToJson(Dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }
        public ActionResult SelectCountry(parameter opara)
        {
            dynamic Jsonvar = JObject.Parse(opara.JsonData);

            DataTable Dt = new DataTable();
            Dt = objAdminBAL.SelectCountry(Convert.ToString(Jsonvar.Country));
            String b = DtToJson(Dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }
        public ActionResult SelectBank(parameter opara)
        {
            dynamic Jsonvar = JObject.Parse(opara.JsonData);

            DataTable Dt = new DataTable();
            Dt = objAdminBAL.SelectBank(Convert.ToString(Jsonvar.Bank));
            String b = DtToJson(Dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }
        public ActionResult SelectState(parameter opara)
        {
            dynamic Jsonvar = JObject.Parse(opara.JsonData);

            DataTable Dt = new DataTable();
            Dt = objAdminBAL.SelectState(Convert.ToString(Jsonvar.State));
            String b = DtToJson(Dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }
        public ActionResult DeleteCountry(parameter opara)
        {
            dynamic Jsonvar = JObject.Parse(opara.JsonData);

            DataTable Dt = new DataTable();
            Dt = objAdminBAL.DeleteCountry(Convert.ToInt32(Jsonvar.CountryId));
            String b = DtToJson(Dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }
        public ActionResult DeleteBank(parameter opara)
        {
            dynamic Jsonvar = JObject.Parse(opara.JsonData);

            DataTable Dt = new DataTable();
            Dt = objAdminBAL.DeleteBank(Convert.ToInt32(Jsonvar.BankId));
            String b = DtToJson(Dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }
        public ActionResult DeleteState(parameter opara)
        {
            dynamic Jsonvar = JObject.Parse(opara.JsonData);

            DataTable Dt = new DataTable();
            Dt = objAdminBAL.DeleteState(Convert.ToInt32(Jsonvar.StateId));
            String b = DtToJson(Dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }
        public ActionResult UpdateCountry(parameter opara)
        {
            dynamic Jsonvar = JObject.Parse(opara.JsonData);

            DataTable Dt = new DataTable();
            Dt = objAdminBAL.UpdateCountry(Convert.ToString(Jsonvar.Country), Convert.ToInt32(Jsonvar.CountryId));
            String b = DtToJson(Dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }
        public ActionResult UpdateBank(parameter opara)
        {
            dynamic Jsonvar = JObject.Parse(opara.JsonData);

            DataTable Dt = new DataTable();
            Dt = objAdminBAL.UpdateBank(Convert.ToString(Jsonvar.Bank), Convert.ToInt32(Jsonvar.BankId));
            String b = DtToJson(Dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }
        public ActionResult IdtoCountry(parameter opara)
        {
            dynamic Jsonvar = JObject.Parse(opara.JsonData);

            DataTable Dt = new DataTable();
            Dt = objAdminBAL.IdtoCountry(Convert.ToInt32(Jsonvar.CountryId));
            String b = DtToJson(Dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }
        public ActionResult UpdateState(parameter opara)
        {
            dynamic Jsonvar = JObject.Parse(opara.JsonData);

            DataTable Dt = new DataTable();
            Dt = objAdminBAL.UpdateState(Convert.ToString(Jsonvar.State), Convert.ToInt32(Jsonvar.StateId), Convert.ToInt32(Jsonvar.CountryId));
            String b = DtToJson(Dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }
        public ActionResult SelectBankMaster()
        {
            DataTable Dt = new DataTable();
            Dt = objAdminBAL.SelectBankMaster();
            String b = DtToJson(Dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }
        public ActionResult AddBankIFSCCode(parameter opara)
        {
            dynamic Jsonvar = JObject.Parse(opara.JsonData);

            DataTable Dt = new DataTable();
            Dt = objAdminBAL.AddBankIFSCCode(Convert.ToInt32(Jsonvar.BankID), Convert.ToString(Jsonvar.IFSCCode), Convert.ToString(Jsonvar.MICRCode), Convert.ToString(Jsonvar.BankBranch), Convert.ToString(Jsonvar.BankCity), Convert.ToString(Jsonvar.BankAddress));
            String b = DtToJson(Dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }
        public ActionResult SelectBankIFSCCode(parameter opara)
        {
            dynamic Jsonvar = JObject.Parse(opara.JsonData);

            DataTable Dt = new DataTable();
            Dt = objAdminBAL.SelectBankIFSCCode(Convert.ToString(Jsonvar.IFSCCode));
            String b = DtToJson(Dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }
        public ActionResult DeleteBankIFSCCode(parameter opara)
        {
            dynamic Jsonvar = JObject.Parse(opara.JsonData);

            DataTable Dt = new DataTable();
            Dt = objAdminBAL.DeleteBankIFSCCode(Convert.ToString(Jsonvar.IFSCCode));
            String b = DtToJson(Dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }
        public ActionResult UpdateBankIFSCCode(parameter opara)
        {
            dynamic Jsonvar = JObject.Parse(opara.JsonData);

            DataTable Dt = new DataTable();
            Dt = objAdminBAL.UpdateBankIFSCCode(Convert.ToInt32(Jsonvar.BankID), Convert.ToString(Jsonvar.IFSCCode), Convert.ToString(Jsonvar.MICRCode), Convert.ToString(Jsonvar.BankBranch), Convert.ToString(Jsonvar.BankCity), Convert.ToString(Jsonvar.BankAddress));
            String b = DtToJson(Dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }
        public ActionResult IdtoBank(parameter opara)
        {
            dynamic Jsonvar = JObject.Parse(opara.JsonData);

            DataTable Dt = new DataTable();
            Dt = objAdminBAL.IdtoBank(Convert.ToInt32(Jsonvar.BankID));
            String b = DtToJson(Dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }

        // for verify client data 

        public IActionResult AdminVerifyClientDetails(parameter mod)
        {
            dynamic Jd = JObject.Parse(mod.JsonData);

            DataTable Dt_PdfPreview = new DataTable();
            Dt_PdfPreview = objAdminBAL.AdminVerifyClientDetails(Convert.ToInt32(Jd.clientId));
            string showPdfPreview = DtToJson(Dt_PdfPreview);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "success", data = showPdfPreview });
        }

        // for client reject 
        public IActionResult AdminRejectClientRequest(parameter mod)
        {
            dynamic Jd = JObject.Parse(mod.JsonData);

            DataTable Dt_PdfPreview = new DataTable();
            Dt_PdfPreview = objAdminBAL.AdminRejectClientRequest(Convert.ToInt32(Jd.clientId), Convert.ToString(Jd.RejectedStatus));
            string showPdfPreview = DtToJson(Dt_PdfPreview);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "success", data = showPdfPreview });
        }
        // for approved client
        public IActionResult AdminApprovedClientRequest(parameter mod)
        {
            dynamic Jd = JObject.Parse(mod.JsonData);

            DataTable Dt_PdfPreview = new DataTable();
            Dt_PdfPreview = objAdminBAL.AdminApprovedClientRequest(Convert.ToInt32(Jd.clientId));
            string showPdfPreview = DtToJson(Dt_PdfPreview);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "success", data = showPdfPreview });
        }

        // for under process request

        public ActionResult GetClientDataForRqst()
        {
            DataTable Dt_GetIncomeList = objAdminBAL.GetClientDataForRqst();
            string condata = DtToJson(Dt_GetIncomeList);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = condata });
        }

        // for kyc approved request

        public ActionResult GetClientDataForApprovedReq()
        {
            DataTable Dt_GetIncomeList = objAdminBAL.GetClientDataForApprovedReq();
            string condata = DtToJson(Dt_GetIncomeList);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = condata });
        }

        // for kyc rejected request
        public ActionResult GetClientDataForRejectedReq()
        {
            DataTable Dt_GetIncomeList = objAdminBAL.GetClientDataForRejectedReq();
            string condata = DtToJson(Dt_GetIncomeList);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = condata });
        }

        // for total request
        public ActionResult adminTotalRequest()
        {
            DataTable DtVerifyClient = objAdminBAL.adminTotalRequest();
            String ShowData = DtToJson(DtVerifyClient);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = ShowData });
        }


        // for email rejection
        public IActionResult SendEmailRejection(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);
            var emailTo = Convert.ToString(JData.UserEmail);
            var rejectionType = Convert.ToString(JData.RejectionType);
           
           
            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse("prudentcorporate82@gmail.com"));
            email.To.Add(MailboxAddress.Parse(emailTo));
            email.Subject = "Email Otp Verification";
            string emailtext = "Your Kyc Process is rejected so fill and upload correct details of "+ rejectionType + "";
            email.Body = new TextPart(TextFormat.Html) { Text = emailtext };
            var smtp = new SmtpClient();
            smtp.Connect("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
            smtp.Authenticate("prudentcorporate82@gmail.com", "yuejjylpdlyxkknm");
            smtp.Send(email);
            smtp.Disconnect(true);

          



            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = "Success" });
        }
    }
}
