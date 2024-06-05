using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectPages.DAL
{
    public class RegistrationDAL
    {

        SqlConnection con = new SqlConnection(@"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=KYCDB;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");

        //Verify Client Email & Mobile For Login & Registration
        public DataTable Verify_Clientdata(string email, string mobile)
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


        //Send OTP Mobile & Email For Login & Registration 
        public DataTable SendEmailOTP(string otpget, string email_mobileType, int type) //Inserted_Otplog
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

        //Send OTP Mobile & Email For Login & Registration 
        public DataTable SendMobileOTP(string otpget, string email_mobileType, int type) //Inserted_Otplog
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

        //Send OTP Mobile & Email For Login & Registration 
        public DataTable insertwithotp(string otpsave, int verify, int cancel) //MatchAndVerify_Otp
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

        //Check Confirm OTP in Login & Registration
        public DataTable tocheck_ConfirmOtp(string dotp, int type, string email_mobileType)
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
            return dt;
        }

        // For Insert Data Into The Client Details TBL
        public DataTable Register_ClientData(string Cname, string Email, string Mobileno, string Password, int status,int RoleId)
        {
            DataTable dt = new DataTable();
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
            cmd.Parameters.Add(new SqlParameter("@roleId", RoleId));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }

        //Get Client Id For Registration
        public DataTable toGet_ClientId(string email)
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
            return dt;
        }

        // Verify Client Pancard Kyc Registration
        public DataTable CheckPanKyc(string Client_panno)
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

        //Annual Income Master Data For Registration
        public DataTable GetAnnualIncome()
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

        //Occupation Master Data For Registration
        public DataTable GetOccupationList()
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

        //KYC Confirmation Page Client Details For Registration
        public DataTable GetClientDetails(int cid,string Maritalstatus, string Annualincome, string occupation,  string Mothername,int status)
        {
            DataTable ClientDetailsDt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_UpdatedClientDetails";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@ClientId", cid));
          
            cmd.Parameters.Add(new SqlParameter("@maritalstatus", Maritalstatus));
            cmd.Parameters.Add(new SqlParameter("@annualIncome", Annualincome));
            cmd.Parameters.Add(new SqlParameter("@occupation", occupation));
            cmd.Parameters.Add(new SqlParameter("@mothername", Mothername));
            cmd.Parameters.Add(new SqlParameter("@status", status));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(ClientDetailsDt);
            con.Close();
            return ClientDetailsDt;
        }
        public DataTable GetClientPanDetails(int cid, string PanNo, string Dob, string PanProof, int status)
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
        //Country Master Data For Registration
        public DataTable ShowCountry()
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_GetCountryForCor";
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }

        //State Master Data For Registration
        public DataTable ShowState(int sname)
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

        //Additional Details(Address Details) For Registration
        public DataTable SubmitAddressDetail(int ClientId, string CAdd1, string CAdd2, string CAdd3, int CCon, int CStat, string CCity, int CPincod, string CAddressProof, string PAdd1, string PAdd2, string PAdd3, int PCon, int PStat, string PCity, int PPincod, string PAddressProof, int status)
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

        //AddressType Master Data For Facta Registration
        public DataTable AddressType()
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_GetAddressType";
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter ad = new SqlDataAdapter(cmd);
            ad.Fill(dt);
            con.Close();
            return dt;
        }

        //Source of wealth Master Data For Facta Registration
        public DataTable SourceOfWealth()
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
            return dt;
        }
        //Facta Details For Registration
        public DataTable FatcaDetails(int ClientId, int AddressType, int SourceOfWealth, string PlaceOfBirth, int CountryOfBirth, string Nationality, int status)
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

        //Get Bank Master Data For Bank Details 
        public DataTable getBankName()
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
            return dt;
        }

        //Bank Details For Registration
        public DataTable verifyIFSC(int BankName, string IFSCCode)
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_VerifyIFSCcode";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@bankName", BankName));
            cmd.Parameters.Add(new SqlParameter("@bankIFSC", IFSCCode));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }

        //Add Bank Details For Registration
        public DataTable addBankDetails(int ClientId, string BankName, string BankBranch, string BankCity, string IFSCCode, string MICRCode, string BankAcNumber, string AccountType, string ModeOfHolding, string AccHolderName1, string AccHolderName2, string AccHolderName3, string CancelChequeDoc, string BankStatementDoc, string ActivationStatus, string SignatureDoc, int status)
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

        //Add IPV Details 
        public DataTable addIPVDetail(int ClientId, string ClientVideo, string ClientImg, int status)
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

        //For Pdf preview
        public DataTable getClientDetailsPdf(int ClientId)
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
        public DataTable GetPdfDetails(int ClientId,int status)
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
        public DataTable GetExistClientPanData(int ClientId)
        {
            con.Open();
            SqlCommand cmd = con.CreateCommand();
            cmd.CommandText = "spkyc_GetExistClientPanData";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@clientId", ClientId));
            DataTable dt = new DataTable();
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }
        public DataTable EditClientDetails(int clientId)
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
        public DataTable GetRegisterClientInfo(int clientId)
        {
            con.Open();
            SqlCommand cmd = con.CreateCommand();
            cmd.CommandText = "spkyc_GetRegisterClientInfo";
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
