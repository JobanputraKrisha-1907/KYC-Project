using ProjectPages.DAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectPages.BAL
{
    public class RegistrationBAL
    {

        RegistrationDAL objregistrationDAL = new RegistrationDAL();

        public DataTable Verify_Clientdata(string email, string mobile)
        {
            return objregistrationDAL.Verify_Clientdata(email, mobile);
        }

        public DataTable SendEmailOTP(string otpget, string email_mobileType, int type)
        {
            return objregistrationDAL.SendEmailOTP(otpget, email_mobileType, type);
        }

        public DataTable SendMobileOTP(string otpget, string email_mobileType, int type)
        {
            return objregistrationDAL.SendMobileOTP(otpget, email_mobileType, type);
        }

        public DataTable insertwithotp(string otpsave, int verify, int cancel)
        {
            return objregistrationDAL.insertwithotp(otpsave, verify, cancel);
        }

        public DataTable tocheck_ConfirmOtp(string dotp, int type, string email_mobileType)
        {
            return objregistrationDAL.tocheck_ConfirmOtp(dotp, type, email_mobileType);
        }

        public DataTable Register_ClientData(string Cname, string Email, string Mobileno, string Password, int status,int RoleId)
        {
            return objregistrationDAL.Register_ClientData(Cname, Email, Mobileno, Password,status, RoleId);
        }

        public DataTable toGet_ClientId(string email)
        {
            return objregistrationDAL.toGet_ClientId(email);
        }

        public DataTable CheckPanKyc(string Client_panno)
        {
            return objregistrationDAL.CheckPanKyc(Client_panno);
        }

        public DataTable GetAnnualIncome()
        {
            return objregistrationDAL.GetAnnualIncome();
        }

        public DataTable GetOccupationList()
        {
            return objregistrationDAL.GetOccupationList();
        }

        public DataTable GetClientDetails(int cid, string Maritalstatus, string Annualincome, string occupation, string Mothername, int status)
        {
            return objregistrationDAL.GetClientDetails(cid,Maritalstatus, Annualincome, occupation,  Mothername, status);
        }

        public DataTable GetClientPanDetails(int cid, string PanNo, string Dob, string PanProof, int status)
        {
            return objregistrationDAL.GetClientPanDetails(cid, PanNo, Dob, PanProof, status);
        }
        public DataTable ShowCountry()
        {
            return objregistrationDAL.ShowCountry();
        }

        public DataTable ShowState(int sname)
        {
            return objregistrationDAL.ShowState(sname);
        }

        public DataTable SubmitAddressDetail(int ClientId, string CAdd1, string CAdd2, string CAdd3, int CCon, int CStat, string CCity, int CPincod, string CAddressProof, string PAdd1, string PAdd2, string PAdd3, int PCon, int PStat, string PCity, int PPincod, string PAddressProof, int status)
        {
            return objregistrationDAL.SubmitAddressDetail(ClientId, CAdd1, CAdd2, CAdd3, CCon, CStat, CCity, CPincod, CAddressProof, PAdd1, PAdd2, PAdd3, PCon, PStat, PCity, PPincod, PAddressProof,status);
        }

        public DataTable AddressType()
        {
            return objregistrationDAL.AddressType();
        }

        public DataTable SourceOfWealth()
        {
            return objregistrationDAL.SourceOfWealth();
        }

        public DataTable FatcaDetails(int ClientId, int AddressType, int SourceOfWealth, string PlaceOfBirth, int CountryOfBirth, string Nationality, int status)
        {
            return objregistrationDAL.FatcaDetails(ClientId, AddressType, SourceOfWealth, PlaceOfBirth, CountryOfBirth, Nationality,status);
        }

        public DataTable getBankName()
        {
            return objregistrationDAL.getBankName();
        }

        public DataTable verifyIFSC(int BankName, string IFSCCode)
        {
            return objregistrationDAL.verifyIFSC(BankName, IFSCCode);
        }

        public DataTable addBankDetails(int ClientId, string BankName, string BankBranch, string BankCity, string IFSCCode, string MICRCode, string BankAcNumber, string AccountType, string ModeOfHolding, string AccHolderName1, string AccHolderName2, string AccHolderName3, string CancelChequeDoc, string BankStatementDoc, string ActivationStatus, string SignatureDoc,int status)
        {
            return objregistrationDAL.addBankDetails(ClientId, BankName, BankBranch, BankCity, IFSCCode, MICRCode, BankAcNumber, AccountType, ModeOfHolding, AccHolderName1, AccHolderName2, AccHolderName3, CancelChequeDoc, BankStatementDoc, ActivationStatus, SignatureDoc,status);
        }

        public DataTable addIPVDetail(int ClientId, string ClientVideo, string ClientImg, int status)
        {
            return objregistrationDAL.addIPVDetail(ClientId, ClientVideo, ClientImg,status);
        }

        public DataTable getClientDetailsPdf(int ClientId)
        {
            return objregistrationDAL.getClientDetailsPdf(ClientId);
        }

        //new
        public DataTable GetPdfDetails(int ClientId, int status)
        {
            return objregistrationDAL.GetPdfDetails(ClientId,status);
        }

        public DataTable GetExistClientPanData(int ClientId)
        {
            return objregistrationDAL.GetExistClientPanData(ClientId);
        }
        public DataTable EditClientDetails(int ClientId)
        {
            return objregistrationDAL.EditClientDetails(ClientId);
        }
        public DataTable GetRegisterClientInfo(int ClientId)
        {
            return objregistrationDAL.GetRegisterClientInfo(ClientId);
        }
    }
}
