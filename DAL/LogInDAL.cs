using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectPages.DAL
{
    public class LogInDAL
    {

        SqlConnection con = new SqlConnection(@"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=KYCDB;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");

        //Login Creds
        public DataTable Verify_Client(string userName, string passWord)
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

        //Updated Password For Login
        public DataTable ForgetPass(string Email, string Pass) //Updated_Password
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

        // for get client data
        public DataTable getClientStatusDetails(string Email)
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_GetClientStatusDetails";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@Email", Email));
      
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }

        // for last login

        public DataTable GetLastLoginTime(string Email)
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_GetLastLoginTime";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@Email", Email));

            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }
    }
}
