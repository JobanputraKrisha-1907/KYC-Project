using ProjectPages.DAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectPages.BAL
{
    public class AdminBAL
    {
        AdminDAL objAdminDAL = new AdminDAL();

        //for get client data for new request
        public DataTable adminGetClientData()
        {
            return objAdminDAL.adminGetClientData();
        }
        public DataTable searchClientDetails(string searchBox)
        {
            return objAdminDAL.searchClientDetails(searchBox);
        }

        // for master data tbl

        public DataTable AddressType(string AddressType)
        {

            return objAdminDAL.AddresstypeData(AddressType);
        }
        public DataTable SAddressType(string AddressType)
        {

            return objAdminDAL.SearchAddresstypeData(AddressType);
        }
        public DataTable UAddressType(string AddressType, string Id)
        {

            return objAdminDAL.UpdateAddresstypeData(AddressType, Id);
        }
        public DataTable DAddressType(string AddressType, string Id)
        {

            return objAdminDAL.DeleteAddresstypeData(AddressType, Id);
        }



        public DataTable Occupation(string Occupation)
        {
            return objAdminDAL.OccupationData(Occupation);
        }
        public DataTable SOccupation(string Occupation)
        {

            return objAdminDAL.SearchOccupationData(Occupation);
        }
        public DataTable UOccupation(string Occupation, string Id)
        {

            return objAdminDAL.UpdateOccupationData(Occupation, Id);
        }
        public DataTable DOccupation(string Occupation, string Id)
        {

            return objAdminDAL.DeleteOccupationData(Occupation, Id);
        }





        public DataTable SourceOfWealth(string SourceOfWealth)
        {
            return objAdminDAL.SourceOfWealthData(SourceOfWealth);
        }
        public DataTable SSourceOfWealth(string SourceOfWealth)
        {

            return objAdminDAL.SearchSourceOfWealthData(SourceOfWealth);
        }
        public DataTable USourceOfWealth(string SourceOfWealth, string Id)
        {

            return objAdminDAL.UpdateSourceOfWealthData(SourceOfWealth, Id);
        }
        public DataTable DSourceOfWealth(string SourceOfWealth, string Id)
        {

            return objAdminDAL.DeleteSourceOfWealthData(SourceOfWealth, Id);
        }




        public DataTable AnnualIncome(string AnnualIncome)
        {
            return objAdminDAL.AnnualIncomeData(AnnualIncome);
        }
        public DataTable SAnnualIncome(string AnnualIncome)
        {

            return objAdminDAL.SearchAnnualIncome(AnnualIncome);
        }
        public DataTable UAnnualIncome(string AnnualIncome, string Id)
        {

            return objAdminDAL.UpdateAnnualIncomeData(AnnualIncome, Id);
        }
        public DataTable DAnnualIncome(string AnnualIncome, string Id)
        {

            return objAdminDAL.DeleteAnnualIncomeData(AnnualIncome, Id);
        }

        //shyam bhai don
        public DataTable AddCountry(string Country)
        {
            return objAdminDAL.AddCountry(Country);
        }
        public DataTable AddBank(string Bank)
        {
            return objAdminDAL.AddBank(Bank);
        }
        public DataTable SelectCountrymaster()
        {
            return objAdminDAL.SelectCountrymaster();
        }
        public DataTable AddState(string State, int CountryId)
        {
            return objAdminDAL.AddState(State, CountryId);
        }
        public DataTable SelectCountry(string Country)
        {
            return objAdminDAL.SelectCountry(Country);
        }
        public DataTable SelectBank(string Bank)
        {
            return objAdminDAL.SelectBank(Bank);
        }
        public DataTable SelectState(string State)
        {
            return objAdminDAL.SelectState(State);
        }
        public DataTable DeleteCountry(int CountryId)
        {
            return objAdminDAL.DeleteCountry(CountryId);
        }
        public DataTable DeleteBank(int BankId)
        {
            return objAdminDAL.DeleteBank(BankId);
        }
        public DataTable DeleteState(int StateId)
        {
            return objAdminDAL.DeleteState(StateId);
        }
        public DataTable UpdateCountry(string Country, int CountryId)
        {
            return objAdminDAL.UpdateCountry(Country, CountryId);
        }
        public DataTable UpdateBank(string Bank, int BankId)
        {
            return objAdminDAL.UpdateBank(Bank, BankId);
        }
        public DataTable IdtoCountry(int CountryId)
        {
            return objAdminDAL.IdtoCountry(CountryId);
        }
        public DataTable UpdateState(string State, int StateId, int CountryId)
        {
            return objAdminDAL.UpdateState(State, StateId, CountryId);
        }
        public DataTable SelectBankMaster()
        {
            return objAdminDAL.SelectBankMaster();
        }
        public DataTable AddBankIFSCCode(int BankID, string IFSCCode, string MICRCode, string BankBranch, string BankCity, string BankAddress)
        {
            return objAdminDAL.AddBankIFSCCode(BankID, IFSCCode, MICRCode, BankBranch, BankCity, BankAddress);
        }
        public DataTable SelectBankIFSCCode(string IFSCCode)
        {
            return objAdminDAL.SelectBankIFSCCode(IFSCCode);
        }
        public DataTable DeleteBankIFSCCode(string IFSCCode)
        {
            return objAdminDAL.DeleteBankIFSCCode(IFSCCode);
        }
        public DataTable UpdateBankIFSCCode(int BankID, string IFSCCode, string MICRCode, string BankBranch, string BankCity, string BankAddress)
        {
            return objAdminDAL.UpdateBankIFSCCode(BankID, IFSCCode, MICRCode, BankBranch, BankCity, BankAddress);
        }
        public DataTable IdtoBank(int BankID)
        {
            return objAdminDAL.IdtoBank(BankID);
        }

        // for verify client data
        public DataTable AdminVerifyClientDetails(int ClientId)
        {
            return objAdminDAL.AdminVerifyClientDetails(ClientId);
        }
        public DataTable AdminRejectClientRequest(int ClientId,string RejectedStatus)
        {
            return objAdminDAL.AdminRejectClientRequest(ClientId, RejectedStatus);
        }
        public DataTable AdminApprovedClientRequest(int ClientId)
        {
            return objAdminDAL.AdminApprovedClientRequest(ClientId);
        }

        public DataTable GetClientDataForRqst()
        {
            return objAdminDAL.GetClientDataForRqst();
        }
        public DataTable GetClientDataForApprovedReq()
        {
            return objAdminDAL.GetClientDataForApprovedReq();
        }
        public DataTable GetClientDataForRejectedReq()
        {
            return objAdminDAL.GetClientDataForRejectedReq();
        }

        public DataTable adminTotalRequest()
        {
            return objAdminDAL.adminTotalRequest();
        }

    }
}
