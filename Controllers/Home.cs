
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;

using System.Threading.Tasks;
using MimeKit;
using MimeKit.Text;
using MailKit.Net.Smtp;
using MailKit.Security;
using System.Net;
using Microsoft.AspNetCore.Http;
using System.IO;

namespace ProjectPages.Controllers
{
    [ApiController]
    [Route("[controller]/{action}")]
    public class Home : Controller
    {
        SqlConnection con = new SqlConnection(@"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=KYCDB;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
        public IActionResult Index()
        {
            return View();
        }
        // For Convert Data into Json to String
        [HttpPost]
        [HttpGet]
        public string DtToJson(DataTable dt)
        {
            string JSONString = string.Empty;
            JSONString = JsonConvert.SerializeObject(dt);
            return JSONString;
        }

        // Verify Client Pancard Kyc 
        public ActionResult CheckPanKyc(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            var Client_PanKyc = Convert.ToString(JData.ClientPanNo);
            DataTable DtVerifyClient = Verify_PanKyc_sp(Client_PanKyc);
            String ShowData = DtToJson(DtVerifyClient);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = ShowData });
        }
        public DataTable Verify_PanKyc_sp(string Client_panno)
        {
            DataTable VerifyPanKyc_Dt = new DataTable();
            con.Open();

            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "CheckPanKyc";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@panno", Client_panno));

            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(VerifyPanKyc_Dt);
            con.Close();
            return VerifyPanKyc_Dt;
        }


        // For Verify Email of Client Exists Or Not
        public ActionResult Verify_Clientdata(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            var Client_Email = Convert.ToString(JData.cemail);
            var Client_Mobile = Convert.ToString(JData.cmobile);
            DataTable DtVerifyClient = Verify_Client_sp(Client_Email, Client_Mobile);
            String ShowData = DtToJson(DtVerifyClient);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = ShowData });
        }
        public DataTable Verify_Client_sp(string email, string mobile)
        {
            DataTable VerifyEmail_Dt = new DataTable();
            con.Open();

            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_VerifyClient";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@email", email));
            cmd.Parameters.Add(new SqlParameter("@mobile", mobile));

            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(VerifyEmail_Dt);
            con.Close();
            return VerifyEmail_Dt;
        }

        // For Verify Mobile of Client Exists Or Not

        //public ActionResult Verify_Client_Mobile(parameter orep)
        //{
        //    dynamic JData = JObject.Parse(orep.JsonData);

        //    var mobile = Convert.ToString(JData.cmobile);
        //    var email = Convert.ToString(JData.cemail);

        //    DataTable DtVerify_Mobile = Verify_Mobile(mobile,email);
        //    String ShowData = DtToJson(DtVerify_Mobile);
        //    return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = ShowData });


        //}
        //public DataTable Verify_Mobile(string mobile,string email)
        //{
        //    DataTable VerifyMobile_Dt = new DataTable();
        //    con.Open();

        //    SqlCommand cmd = new SqlCommand();
        //    cmd.Connection = con;
        //    cmd.CommandText = "spkyc_VerifyClient";
        //    cmd.CommandType = CommandType.StoredProcedure;
        //    cmd.Parameters.Add(new SqlParameter("@mobile", mobile));
        //    cmd.Parameters.Add(new SqlParameter("@email", email));

        //    SqlDataAdapter da = new SqlDataAdapter(cmd);
        //    da.Fill(VerifyMobile_Dt);
        //    con.Close();
        //    return VerifyMobile_Dt;
        //}

        // For Both TBl (InsertData_Into_ClientDetails_Tbl & InsertData_Into_Login_Tbl)

        public IActionResult Insertdata_To_Tbl(parameter orep)
        {

            dynamic JData = JObject.Parse(orep.JsonData);

            var name = Convert.ToString(JData.cname);
            var email = Convert.ToString(JData.cemail);
            var mobile = Convert.ToString(JData.cmobile);
            var password = Convert.ToString(JData.cpass);
            var status = Convert.ToInt32(JData.status);

            // Insert Into Client TBl
            int Insert_Into_Client = Register_ClientData(name, email, mobile, password,status); //Register_ClientData
                                                                                         // Insert Into Login Tbl

           
                return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = 1 });
            

        }


        // For Insert Data Into The Client Details TBL

        public int Register_ClientData(string Cname, string Email, string Mobileno, string Password,int status)
        {


            con.Open();

            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_RegisterClient";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@name", Cname));
            cmd.Parameters.Add(new SqlParameter("@email", Email));
            cmd.Parameters.Add(new SqlParameter("@mobile", Mobileno));
            cmd.Parameters.Add(new SqlParameter("@password", Password));
            cmd.Parameters.Add(new SqlParameter("@status", status));
            int DataOFInsert_Row = cmd.ExecuteNonQuery();

            con.Close();
            return DataOFInsert_Row;
        }

        // For Insert Data Into The Login TBL



        // For Verify Username And Password of Client To check Already Exists Or Not

        public ActionResult Verify_Client(parameter opara)
        {
            dynamic Jsonvar = JObject.Parse(opara.JsonData);
            var username = Convert.ToString(Jsonvar.UserName);
            var pwd = Convert.ToString(Jsonvar.UserPassword);

            DataTable Dt_Verify_Client = Verify_ClientForLogin(username, pwd); //Login_Creds
            String DataClient_Login = DtToJson(Dt_Verify_Client);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = DataClient_Login });

        }
        public DataTable Verify_ClientForLogin(string userName, string passWord)
        {
            DataTable Dt_ClientLogin = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_VerifyClientLogin";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@email", userName));
            cmd.Parameters.Add(new SqlParameter("@password", passWord));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(Dt_ClientLogin);
            con.Close();
            return Dt_ClientLogin;
        }

        // For Send Otp to Email

        public IActionResult SendEmailOTP(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            var emailTo = Convert.ToString(JData.cemail);
            var otpget = Convert.ToString(JData.otp);
            var email_mobileType = Convert.ToString(JData.email_mobileType);
            var type = Convert.ToInt32(JData.type);

            string emailtext = "your otp is " + otpget + "<br>" + "Your Otp Will be Expire In 30 Seconds";

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

            DataTable Dt_Insert_Otp = Inserted_Otplog(otpget, email_mobileType, type);
            String Data_Otp_log = DtToJson(Dt_Insert_Otp);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = Data_Otp_log });
        }
        public IActionResult SendMobileOTP(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);


            var otpget = Convert.ToString(JData.otp);
            var email_mobileType = Convert.ToString(JData.email_mobileType);
            var type = Convert.ToInt32(JData.type);




            DataTable Dt_Insert_Otp = Inserted_Otplog(otpget, email_mobileType, type);
            String Data_Otp_log = DtToJson(Dt_Insert_Otp);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = Data_Otp_log });
        }

        public DataTable Inserted_Otplog(string otpget, string email_mobileType, int type) //Inserted_Otplog
        {
            DataTable Dt_Otpinsert = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_InsertOtp";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@emailType", email_mobileType));
            cmd.Parameters.Add(new SqlParameter("@otp", otpget));
            cmd.Parameters.Add(new SqlParameter("@type", type));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(Dt_Otpinsert);
            con.Close();
            return Dt_Otpinsert;
        }

        public ActionResult insertwithotp(parameter opara) //VerifyInserted_Otp
        {
            dynamic Jsonvar = JObject.Parse(opara.JsonData);
            var otpsave = Convert.ToString(Jsonvar.otpsave);
            var verify = Convert.ToInt32(Jsonvar.verify);
            var cancel = Convert.ToInt32(Jsonvar.cancel);

            DataTable Dt_matchotpforVerify = MatchAndVerify_Otp(otpsave, verify, cancel);
            String Data_Otp_match_verify = DtToJson(Dt_matchotpforVerify);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = Data_Otp_match_verify });

        }
        public DataTable MatchAndVerify_Otp(string otpsave, int verify, int cancel) //MatchAndVerify_Otp
        {
            DataTable Dt_Of_Verify_otpMatch = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_VerifyCancelOtp";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@otp", otpsave));
            cmd.Parameters.Add(new SqlParameter("@verify", verify));
            cmd.Parameters.Add(new SqlParameter("@cancel", cancel));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(Dt_Of_Verify_otpMatch);
            con.Close();
            return Dt_Of_Verify_otpMatch;
        }

        // confirm otp

        public ActionResult tocheck_ConfirmOtp(parameter orep) //Checked_CnfOTP
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            var otp = Convert.ToString(JData.otpsave);
            var type = Convert.ToInt32(JData.type);
            var email_mobileType = Convert.ToString(JData.email_mobileType);



            DataTable dt1 = ConfirmOtp(otp, type, email_mobileType);
            String dshow = DtToJson(dt1);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = dshow });
        }

        public DataTable ConfirmOtp(string dotp, int type, string email_mobileType)
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;

            cmd.CommandText = "spkyc_ConfirmOtp";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@otp", dotp));
            cmd.Parameters.Add(new SqlParameter("@type", type));
            cmd.Parameters.Add(new SqlParameter("@email_mobileType", email_mobileType));



            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            //}
            return dt;

        }


        // forgotPass 

        public ActionResult ForgetPass(parameter orep) //ForgetPassword
        {

            dynamic JData = JObject.Parse(orep.JsonData);
            //TODO: Save the data in database  

            var email = Convert.ToString(JData.cemail);
            var pass = Convert.ToString(JData.cpass);




            DataTable dt1 = Updated_Password(email, pass);
            String dshow = DtToJson(dt1);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = dshow });
        }

        public DataTable Updated_Password(string Email, string Pass) //Updated_Password
        {

            DataTable dt = new DataTable();
            con.Open();

            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_UpdateCheckPassword";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@Email", Email));
            cmd.Parameters.Add(new SqlParameter("@Pass", Pass));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }

        //For Get ClientId
        public ActionResult toGet_ClientId(parameter orep) //Checked_CnfOTP
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            var email = Convert.ToString(JData.clientEmail);
            DataTable dt1 = for_ClientId(email);
            String dshow = DtToJson(dt1);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = dshow });
        }

        public DataTable for_ClientId(string email)
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;

            cmd.CommandText = "spkyc_GetClientId";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@email", email));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            //}
            return dt;

        }


        public ActionResult GetAnnualIncome()
        {
            DataTable GetIncomeListDt = GetIncome();
            string condata = DtToJson(GetIncomeListDt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = condata });
        }

        public DataTable GetIncome()
        {
            DataTable AnnualIncomeList = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_AnnualIncomeMasterList";
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(AnnualIncomeList);
            con.Close();
            return AnnualIncomeList;
        }

        public ActionResult GetOccupationList()
        {
            DataTable GetOccupationListDt = GetOccupation();
            string condata = DtToJson(GetOccupationListDt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = condata });
        }

        public DataTable GetOccupation()
        {
            DataTable OccupationList = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_OccupationMasterList";
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(OccupationList);
            con.Close();
            return OccupationList;
        }

        public ActionResult GetClientDetails(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);
            var cId = Convert.ToInt32(JData.clientId);
          
            var MaritalStatus = Convert.ToString(JData.MarriedStatus);
            var AnnualIncome = Convert.ToString(JData.AnnualIncomeList);
            var Occupation = Convert.ToString(JData.OccupationList);
            var MotherName = Convert.ToString(JData.ClientMotherName);
            var status = Convert.ToInt32(JData.status);
           
            DataTable ClientDetails = GetUpdatedClientDetails(cId,  MaritalStatus, Occupation, AnnualIncome, MotherName,status);
            String dshow = DtToJson(ClientDetails);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = dshow });
        }

        public DataTable GetUpdatedClientDetails(int cid, string Maritalstatus, string occupation, string Annualincome, string Mothername,int status)
        {
            DataTable ClientDetailsDt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;

            cmd.CommandText = "spkyc_UpdatedClientDetails";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@ClientId", cid));
          
            cmd.Parameters.Add(new SqlParameter("@maritalstatus", Maritalstatus));
            cmd.Parameters.Add(new SqlParameter("@occupation", occupation));
            cmd.Parameters.Add(new SqlParameter("@annualIncome", Annualincome));
            cmd.Parameters.Add(new SqlParameter("@mothername", Mothername));
            cmd.Parameters.Add(new SqlParameter("@status", status));
          
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(ClientDetailsDt);
            con.Close();
            return ClientDetailsDt;
        }
        public ActionResult GetClientPanDetails(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);
            var cId = Convert.ToInt32(JData.clientId);

            var PanNo = Convert.ToString(JData.ClientPanNo);
            var Dob = Convert.ToString(JData.ClientDOB);
            var PanProof = Convert.ToString(JData.ClientPanProof);
            var status = Convert.ToInt32(JData.status);
    

            DataTable ClientDetails = GetUpdatedClientPanDetails(cId, PanNo, Dob, PanProof,status);
            String dshow = DtToJson(ClientDetails);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = dshow });
        }

        public DataTable GetUpdatedClientPanDetails(int cid, string PanNo, string Dob, string PanProof,int status)
        {
            DataTable ClientDetailsDt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;

            cmd.CommandText = "spkyc_UpdatedClientPanDetails";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@ClientId", cid));

            cmd.Parameters.Add(new SqlParameter("@panNo", PanNo));
            cmd.Parameters.Add(new SqlParameter("@dob", Dob));
            cmd.Parameters.Add(new SqlParameter("@panProof", PanProof));
            cmd.Parameters.Add(new SqlParameter("@status", status));
          

            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(ClientDetailsDt);
            con.Close();
            return ClientDetailsDt;
        }

        //Address Detail Component Logic
        //Insert Data In Database
        public ActionResult SubmitAddressDetail(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            //For Correspondence Address
            var ClientId = Convert.ToInt32(JData.clientId);
            var Cadd1 = Convert.ToString(JData.cAdd1);
            var Cadd2 = Convert.ToString(JData.cAdd2);
            var Cadd3 = Convert.ToString(JData.cAdd3);
            var Ccon = Convert.ToInt32(JData.cCon);
            var Cstat = Convert.ToInt32(JData.cStat);
            var Ccity = Convert.ToString(JData.cCity);
            var Cpin = Convert.ToInt32(JData.cPin);
            var CAddressProof = Convert.ToString(JData.cAddressProof);

            //For Permanent Address
            var Padd1 = Convert.ToString(JData.pAdd1);
            var Padd2 = Convert.ToString(JData.pAdd2);
            var Padd3 = Convert.ToString(JData.pAdd3);
            var PCon = Convert.ToInt32(JData.pCon);
            var PStat = Convert.ToInt32(JData.pStat);
            var PCity = Convert.ToString(JData.pCity);
            var PPin = Convert.ToInt32(JData.pPin);
            var PAddressProof = Convert.ToString(JData.pAddressProof);
            var status = Convert.ToInt32(JData.status);

            DataTable dt = InsertAddressDetail(ClientId, Cadd1, Cadd2, Cadd3, Ccon, Cstat, Ccity, Cpin, CAddressProof, Padd1, Padd2, Padd3, PCon, PStat, PCity, PPin, PAddressProof, status);
            String show = DtToJson(dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = show });
        }

        public DataTable InsertAddressDetail(int ClientId, string CAdd1, string CAdd2, string CAdd3, int CCon, int CStat, string CCity, int CPincod, string CAddressProof, string PAdd1, string PAdd2, string PAdd3, int PCon, int PStat, string PCity, int PPincod, string PAddressProof,int status)
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_AddAddressDetail";
            cmd.CommandType = CommandType.StoredProcedure;

            //For Correspondence Address
            cmd.Parameters.Add(new SqlParameter("@clientId", ClientId));
            cmd.Parameters.Add(new SqlParameter("@cAddLine1", CAdd1));
            cmd.Parameters.Add(new SqlParameter("@cAddLine2", CAdd2));
            cmd.Parameters.Add(new SqlParameter("@cAddLine3", CAdd3));
            cmd.Parameters.Add(new SqlParameter("@cCount", CCon));
            cmd.Parameters.Add(new SqlParameter("@cStat", CStat));
            cmd.Parameters.Add(new SqlParameter("@cCit", CCity));
            cmd.Parameters.Add(new SqlParameter("@cPincod", CPincod));
            cmd.Parameters.Add(new SqlParameter("@cAddressProof", CAddressProof));

            //For Permanent Address
            cmd.Parameters.Add(new SqlParameter("@pAddLine1", PAdd1));
            cmd.Parameters.Add(new SqlParameter("@pAddLine2", PAdd2));
            cmd.Parameters.Add(new SqlParameter("@pAddLine3", PAdd3));
            cmd.Parameters.Add(new SqlParameter("@pCount", PCon));
            cmd.Parameters.Add(new SqlParameter("@pStat", PStat));
            cmd.Parameters.Add(new SqlParameter("@pCit", PCity));
            cmd.Parameters.Add(new SqlParameter("@pPincod", PPincod));
            cmd.Parameters.Add(new SqlParameter("@pAddressProof", PAddressProof));
            cmd.Parameters.Add(new SqlParameter("@status", status));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }

        //Get Country For Dropdown
        public ActionResult ShowCountry()
        {
            DataTable dt = GetCountry();
            string showcon = DtToJson(dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = showcon });
        }

        public DataTable GetCountry()
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_GetCountryForCor";
            cmd.CommandType = CommandType.Text;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }

        //Get State For Dropdown
        public ActionResult ShowState(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);
            var stateid = Convert.ToInt32(JData.countryId);

            DataTable statedt = GetState(stateid);
            String showstate = DtToJson(statedt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = showstate });
        }
        public DataTable GetState(int sname)
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_GetStateForCor";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@countryId", sname));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }

        //for Upload Img

        public IActionResult uploadPadd(IFormFile file)
        {

            var path = Path.Combine(file.FileName);
            using (var fileStream = new FileStream(path, FileMode.Create))
            {
                file.CopyTo(fileStream);

            }
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = path });

        }
        public IActionResult uploadCadd(IFormFile file)
        {

            var path = Path.Combine(file.FileName);
            using (var fileStream = new FileStream(path, FileMode.Create))
            {
                file.CopyTo(fileStream);

            }
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = path });

        }
        public IActionResult uploadPan(IFormFile file)
        {

            var path = Path.Combine(file.FileName);
            using (var fileStream = new FileStream(path, FileMode.Create))
            {
                file.CopyTo(fileStream);

            }
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = path });

        }


        //BAnk Details

        public ActionResult verifyIFSC(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            var IFSCCode = Convert.ToString(JData.BankIFSC);
            var BankName = Convert.ToInt32(JData.BankName);
            DataTable table = matchIFSCandbank(BankName, IFSCCode);
            String b = DtToJson(table);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }
        public DataTable matchIFSCandbank(int BankName, string IFSCCode)
        {
            DataTable dt = new DataTable();
            con.Open();

            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_VerifyIFSCcode";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@bankIFSC", IFSCCode));
            cmd.Parameters.Add(new SqlParameter("@bankName", BankName));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;

        }

        //public ActionResult select()
        //{
        //    DataTable table = selectdata();
        //    String b = DtToJson(table);
        //    return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        //}
        //public DataTable selectdata()
        //{
        //    DataTable dt = new DataTable();
        //    con.Open();

        //    SqlCommand cmd = new SqlCommand();
        //    cmd.Connection = con;
        //    cmd.CommandText = "spkyc_selectbankdetails";
        //    cmd.CommandType = CommandType.StoredProcedure;
        //    SqlDataAdapter da = new SqlDataAdapter(cmd);
        //    da.Fill(dt);
        //    con.Close();
        //    return dt;
        //}
        //[HttpPost]
        //public IActionResult uploads(IFormCollection data, IFormFile file)
        //{

        //    //var foldername = data["foldername"];
        //    //string path = @"D:\image-client\" + foldername;

        //    //if (!Directory.Exists(path))
        //    //{
        //    //    Directory.CreateDirectory(path);
        //    //}
        //    //else
        //    //{
        //    //    System.IO.Directory.Delete(@"D:\image-client\" + foldername, true);
        //    //    Directory.CreateDirectory(path);
        //    //}
        //    var filename = data["setname"];
        //    try
        //    {
        //        var path1 = Path.Combine(@"D:\image-client", "KYCdocument", filename);

        //        using (var fileStream = new FileStream(path1, FileMode.Create))
        //        {
        //            file.CopyTo(fileStream);
        //        }
        //        return Ok();
        //    }
        //    catch
        //    {
        //        return BadRequest();
        //    }



        //}
        public IActionResult uploadCheque(IFormFile file)
        {

            var path = Path.Combine(file.FileName);
            using (var fileStream = new FileStream(path, FileMode.Create))
            {
                file.CopyTo(fileStream);

            }
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = path });

        }
        public IActionResult uploadStatement(IFormFile file)
        {

            var path = Path.Combine(file.FileName);
            using (var fileStream = new FileStream(path, FileMode.Create))
            {
                file.CopyTo(fileStream);

            }
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = path });

        }
        public IActionResult uploadSign(IFormFile file)
        {

            var path = Path.Combine(file.FileName);
            using (var fileStream = new FileStream(path, FileMode.Create))
            {
                file.CopyTo(fileStream);

            }
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = path });

        }
        public ActionResult addBankDetails(parameter orep)
        {
            dynamic JData = JObject.Parse(orep.JsonData);

            var ClientId = Convert.ToInt32(JData.clientid);

            var BankName = Convert.ToString(JData.bankname);
            var BankBranch = Convert.ToString(JData.bankbranch);
            var BankCity = Convert.ToString(JData.bankcity);

            var IFSCCode = Convert.ToString(JData.IFSCcode);
            var MICRCode = Convert.ToString(JData.MICRcode);
            var BankAcNumber = Convert.ToString(JData.bankacnumber);
            var AccountType = Convert.ToString(JData.accounttype);
            var ModeOfHolding = Convert.ToString(JData.modeofholding);
            var AccHolderName1 = Convert.ToString(JData.accholdername1);
            var AccHolderName2 = Convert.ToString(JData.accholdername2);
            var AccHolderName3 = Convert.ToString(JData.accholdername3);
            var CancelChequeDoc = Convert.ToString(JData.cancelchequedoc);
            var BankStatementDoc = Convert.ToString(JData.bankstatementdoc);
            var ActivationStatus = Convert.ToString(JData.activationstatus);
            var SignatureDoc = Convert.ToString(JData.signaturedoc);
            var status = Convert.ToInt32(JData.status);

            DataTable table = insertbankdetails(ClientId, BankName, BankBranch, BankCity, IFSCCode, MICRCode, BankAcNumber, AccountType, ModeOfHolding, AccHolderName1, AccHolderName2, AccHolderName3, CancelChequeDoc, BankStatementDoc, ActivationStatus, SignatureDoc,status);
            String b = DtToJson(table);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }
        public DataTable insertbankdetails(int ClientId, string BankName, string BankBranch, string BankCity, string IFSCCode, string MICRCode, string BankAcNumber, string AccountType, string ModeOfHolding, string AccHolderName1, string AccHolderName2, string AccHolderName3, string CancelChequeDoc, string BankStatementDoc, string ActivationStatus, string SignatureDoc,int status)
        {
            DataTable dt = new DataTable();
            con.Open();

            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_addBankDetails";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@ClientId", ClientId));

            cmd.Parameters.Add(new SqlParameter("@BankName", BankName));
            cmd.Parameters.Add(new SqlParameter("@BankBranch", BankBranch));
            cmd.Parameters.Add(new SqlParameter("@BankCity", BankCity));

            cmd.Parameters.Add(new SqlParameter("@IFSCCode", IFSCCode));
            cmd.Parameters.Add(new SqlParameter("@MICRCode", MICRCode));
            cmd.Parameters.Add(new SqlParameter("@BankAcNumber", BankAcNumber));
            cmd.Parameters.Add(new SqlParameter("@AccountType", AccountType));
            cmd.Parameters.Add(new SqlParameter("@ModeOfHolding", ModeOfHolding));
            cmd.Parameters.Add(new SqlParameter("@AccHolderName1", AccHolderName1));
            cmd.Parameters.Add(new SqlParameter("@AccHolderName2", AccHolderName2));
            cmd.Parameters.Add(new SqlParameter("@AccHolderName3", AccHolderName3));
            cmd.Parameters.Add(new SqlParameter("@CancelChequeDoc", CancelChequeDoc));
            cmd.Parameters.Add(new SqlParameter("@BankStatementDoc", BankStatementDoc));
            cmd.Parameters.Add(new SqlParameter("@ActivationStatus", ActivationStatus));
            //cmd.Parameters.Add(new SqlParameter("@Timest", Timest));
            cmd.Parameters.Add(new SqlParameter("@SignatureDoc", SignatureDoc));
            cmd.Parameters.Add(new SqlParameter("@status", status));

            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }
        public ActionResult getBankName()
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand com = new SqlCommand();
            com.Connection = con;
            com.CommandText = "spkyc_GetBankName";
            com.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter ad = new SqlDataAdapter(com);
            ad.Fill(dt);
            con.Close();
            String b = DtToJson(dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }

        // for fatca details

        public ActionResult FatcaDetails(parameter oparameter)
        {
            dynamic jsonparameter = JObject.Parse(oparameter.JsonData);
            var ClientId = Convert.ToInt32(jsonparameter.clientid);
            var AddressType = Convert.ToInt32(jsonparameter.AddressType);
            var SourceOfWealth = Convert.ToInt32(jsonparameter.SourceOfWealth);
            var PlaceOfBirth = Convert.ToString(jsonparameter.PlaceOfBirth);
            var CountryOfBirth = Convert.ToInt32(jsonparameter.CountryOfBirth);
            var Nationality = Convert.ToString(jsonparameter.Nationality);
            var status = Convert.ToInt32(jsonparameter.status);

            DataTable dt1 = Fatcadata(ClientId, AddressType, SourceOfWealth, PlaceOfBirth, CountryOfBirth, Nationality,status);
            String dshow = DtToJson(dt1);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = dshow });
        }
        public DataTable Fatcadata(int ClientId, int AddressType, int SourceOfWealth, string PlaceOfBirth, int CountryOfBirth, string Nationality,int status)
        {
            DataTable dt = new DataTable();
            con.Open();

            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_addFatcaDetails";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@ClientId", ClientId));
            cmd.Parameters.Add(new SqlParameter("@AddressType", AddressType));
            cmd.Parameters.Add(new SqlParameter("@SourceOfWealth", SourceOfWealth));
            cmd.Parameters.Add(new SqlParameter("@PlaceOfBirth", PlaceOfBirth));
            cmd.Parameters.Add(new SqlParameter("@CountryOfBirth", CountryOfBirth));
            cmd.Parameters.Add(new SqlParameter("@Nationality", Nationality));
            cmd.Parameters.Add(new SqlParameter("@status", status));




            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;

        }

        public ActionResult AddressType()
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand com = new SqlCommand();
            com.Connection = con;
            com.CommandText = "spkyc_GetAddressType";
            com.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter ad = new SqlDataAdapter(com);
            ad.Fill(dt);
            con.Close();
            String b = DtToJson(dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }

        // source of wealth
        public ActionResult SourceOfWealth()
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand com = new SqlCommand();
            com.Connection = con;
            com.CommandText = "spkyc_GetSourceOfWealth";
            com.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter ad = new SqlDataAdapter(com);
            ad.Fill(dt);
            con.Close();
            String b = DtToJson(dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        }

        // country details
        //public ActionResult CountryOfBirth()
        //{
        //    DataTable dt = new DataTable();
        //    con.Open();
        //    SqlCommand com = new SqlCommand();
        //    com.Connection = con;
        //    com.CommandText = "spkyc_GetCountry";
        //    com.CommandType = CommandType.StoredProcedure;
        //    SqlDataAdapter ad = new SqlDataAdapter(com);
        //    ad.Fill(dt);
        //    con.Close();
        //    String b = DtToJson(dt);
        //    return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        //}


        //Nationality details
        //public ActionResult Nationality()
        //{
        //    DataTable dt = new DataTable();
        //    con.Open();
        //    SqlCommand com = new SqlCommand();
        //    com.Connection = con;
        //    com.CommandText = "SPKYC_Nationality";
        //    com.CommandType = CommandType.StoredProcedure;
        //    SqlDataAdapter ad = new SqlDataAdapter(com);
        //    ad.Fill(dt);
        //    con.Close();
        //    String b = DtToJson(dt);
        //    return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = b });
        //}


        // for Video IPV


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
        [HttpPost]
        public IActionResult uploadsimg(IFormFile file)
        {
            var path = Path.Combine(file.FileName);
            using ( var fileStream = new FileStream(path, FileMode.Create))
            {
                file.CopyTo(fileStream);
            }
            return Ok();
        }

        public ActionResult addIPVDetail(parameter oparameter)
        {
            dynamic jsonparameter = JObject.Parse(oparameter.JsonData);
            var ClientId = Convert.ToInt32(jsonparameter.clientId);
            var ClientVideo = Convert.ToString(jsonparameter.clientVideoDoc);
            var ClientImg = Convert.ToString(jsonparameter.clientImgDoc);
            var status = Convert.ToInt32(jsonparameter.status);

            DataTable dt1 = IPVDetails(ClientId, ClientVideo, ClientImg,status);
            String dshow = DtToJson(dt1);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "Success", data = dshow });
        }
        public DataTable IPVDetails(int ClientId, string ClientVideo, string ClientImg,int status)
        {
            DataTable dt = new DataTable();
            con.Open();

            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_addIPVDetails";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@ClientId", ClientId));
            cmd.Parameters.Add(new SqlParameter("@ClientVideo", ClientVideo));
            cmd.Parameters.Add(new SqlParameter("@ClientImg", ClientImg));
            cmd.Parameters.Add(new SqlParameter("@status", status));





            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;

        }

        //for Pdf preview
        public IActionResult getClientDetailsPdf(parameter mod)
        {
            dynamic Jd = JObject.Parse(mod.JsonData);
            var id = Convert.ToInt32(Jd.cid);
            DataTable dt = getAllClientData(id);
            string a = DtToJson(dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "success", data = a });
        }
        public DataTable getAllClientData(int ClientId)
        {
            con.Open();
            SqlCommand cmd = con.CreateCommand();
            cmd.CommandText = "spkyc_GetAllClientDetails";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@id", ClientId));
            DataTable dt = new DataTable();
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;

        }
        //new
        public IActionResult GetPdfDetails(parameter mod)
        {
            dynamic Jd = JObject.Parse(mod.JsonData);
            var clientId = Convert.ToInt32(Jd.clientId);
            var status = Convert.ToInt32(Jd.status);
            DataTable dt = ForPdfDetails(clientId,status);
            string a = DtToJson(dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "success", data = a });
        }
        public DataTable ForPdfDetails(int ClientId,int status)
        {
            con.Open();
            SqlCommand cmd = con.CreateCommand();
            cmd.CommandText = "spkyc_GetPdfDetails";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@id", ClientId));
            cmd.Parameters.Add(new SqlParameter("@status", status));
            DataTable dt = new DataTable();
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;

        }

        // for get pan details of exits client

        public IActionResult GetExistClientPanData(parameter mod)
        {
            dynamic Jdata = JObject.Parse(mod.JsonData);
            var clientId = Convert.ToInt32(Jdata.clientId);
           
            DataTable dt = GetExistPanData(clientId);
            string PanData = DtToJson(dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "success", data = PanData });
        }
        public DataTable GetExistPanData(int clientId)
        {
            con.Open();
            SqlCommand cmd = con.CreateCommand();
            cmd.CommandText = "spkyc_GetExistClientPanData";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@clientId", clientId));
 
            DataTable dt = new DataTable();
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }
        // for edit client data 
        public IActionResult EditClientDetails(parameter mod)
        {
            dynamic Jdata = JObject.Parse(mod.JsonData);
            var clientId = Convert.ToInt32(Jdata.clientId);

            DataTable dt = GetEditClientdata(clientId);
            string PanData = DtToJson(dt);
            return Ok(new Response() { status = HttpStatusCode.OK, message = "success", data = PanData });
        }
        public DataTable GetEditClientdata(int clientId)
        {
            con.Open();
            SqlCommand cmd = con.CreateCommand();
            cmd.CommandText = "spkyc_EditExistClientDetails";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@clientId", clientId));

            DataTable dt = new DataTable();
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }
    }
}