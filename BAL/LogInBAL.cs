using ProjectPages.DAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectPages.BAL
{
    public class LogInBAL
    {
        LogInDAL objloginDAL = new LogInDAL();
        public DataTable Verify_Client(string userName, string passWord)
        {
            return objloginDAL.Verify_Client(userName, passWord);
        }

        public DataTable Verify_Clientdata(string email, string mobile)
        {
            return objloginDAL.Verify_Clientdata(email, mobile);
        }


        public DataTable SendEmailOTP(string otpget, string email_mobileType, int type)
        {
            return objloginDAL.SendEmailOTP(otpget, email_mobileType, type);
        }

        public DataTable SendMobileOTP(string otpget, string email_mobileType, int type)
        {
            return objloginDAL.SendMobileOTP(otpget, email_mobileType, type);
        }

        public DataTable insertwithotp(string otpsave, int verify, int cancel)
        {
            return objloginDAL.insertwithotp(otpsave, verify, cancel);
        }

        public DataTable tocheck_ConfirmOtp(string dotp, int type, string email_mobileType)
        {
            return objloginDAL.tocheck_ConfirmOtp(dotp, type, email_mobileType);
        }

        public DataTable ForgetPass(string Email, string Pass)
        {
            return objloginDAL.ForgetPass(Email, Pass);
        }
        public DataTable getClientStatusDetails(string Email)
        {
            return objloginDAL.getClientStatusDetails(Email);
        }

        public DataTable GetLastLoginTime(string Email)
        {
            return objloginDAL.GetLastLoginTime(Email);
        }
    }
}
