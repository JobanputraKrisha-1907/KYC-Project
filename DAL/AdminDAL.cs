using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectPages.DAL
{
    public class AdminDAL
    {
        SqlConnection con = new SqlConnection(@"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=KYCDB;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");

        public DataTable adminGetClientData()
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_adminGetNewRequest";
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }
        public DataTable searchClientDetails(string searchBox)
        {
            DataTable searchClient_Dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_SearchClientDetails";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@searchBox", searchBox));
       

            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(searchClient_Dt);
            con.Close();
            return searchClient_Dt;
        }


        // for master data tbl

        public DataTable AddresstypeData(string AddressType)
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_InsertAddressType";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@Addresstype", AddressType));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }

        public DataTable SearchAddresstypeData(string AddressType)
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_SearchAddressType";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@Addresstype", AddressType));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }

        public DataTable UpdateAddresstypeData(string AddressType, string Id)
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_UpdateAddresstype";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@Addresstype", AddressType));
            cmd.Parameters.Add(new SqlParameter("@Id", Id));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }
        public DataTable DeleteAddresstypeData(string AddressType, string Id)
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_DeleteAddresstype";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@Addresstype", AddressType));
            cmd.Parameters.Add(new SqlParameter("@Id", Id));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }




        public DataTable OccupationData(string Occupation)
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_InsertOccupation";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@Occupation", Occupation));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }

        public DataTable SearchOccupationData(string Occupation)
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_SearchOccupation";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@Occupation", Occupation));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }

        public DataTable UpdateOccupationData(string Occupation, string Id)
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_UpdateOccupation";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@Occupation", Occupation));
            cmd.Parameters.Add(new SqlParameter("@Id", Id));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }
        public DataTable DeleteOccupationData(string Occupation, string Id)
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_DeleteOccupation";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@Occupation", Occupation));
            cmd.Parameters.Add(new SqlParameter("@Id", Id));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }





        public DataTable SourceOfWealthData(string SourceOfWealth)
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_InsertSourceOfWealth";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@SourceOfWealth", SourceOfWealth));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }
        public DataTable SearchSourceOfWealthData(string SourceOfWealth)
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_SearchSourceOfWealth";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@SourceOfWealth", SourceOfWealth));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }

        public DataTable UpdateSourceOfWealthData(string SourceOfWealth, string Id)
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_UpdateSourceOfWealth";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@SourceOfWealth", SourceOfWealth));
            cmd.Parameters.Add(new SqlParameter("@Id", Id));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }
        public DataTable DeleteSourceOfWealthData(string SourceOfWealth, string Id)
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_DeleteSourceOfWealth";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@SourceOfWealth", SourceOfWealth));
            cmd.Parameters.Add(new SqlParameter("@Id", Id));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }




        public DataTable AnnualIncomeData(string AnnualIncome)
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_InsertAnnualIncome";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@AnnualIncome", AnnualIncome));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }

        public DataTable SearchAnnualIncome(string AnnualIncome)
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_SearchAnnualIncome";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@AnnualIncome", AnnualIncome));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }

        public DataTable UpdateAnnualIncomeData(string AnnualIncome, string Id)
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_UpdateAnnualIncome";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@AnnualIncome", AnnualIncome));
            cmd.Parameters.Add(new SqlParameter("@Id", Id));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }
        public DataTable DeleteAnnualIncomeData(string AnnualIncome, string Id)
        {
            DataTable dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_DeleteAnnualIncome";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@AnnualIncome", AnnualIncome));
            cmd.Parameters.Add(new SqlParameter("@Id", Id));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }

        // shyam patel

        public DataTable AddCountry(string Country)
        {
            DataTable Dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_AddCountryMaster";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@Country", Country));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(Dt);
            con.Close();
            return Dt;
        }
        public DataTable AddBank(string Bank)
        {
            DataTable Dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_AddBankMaster";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@Bank", Bank));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(Dt);
            con.Close();
            return Dt;
        }
        public DataTable SelectCountrymaster()
        {
            DataTable Dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_SelectCountry";
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(Dt);
            con.Close();
            return Dt;
        }
        public DataTable AddState(string State, int CountryId)
        {
            DataTable Dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_AddStateMaster";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@State", State));
            cmd.Parameters.Add(new SqlParameter("@CountryId", CountryId));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(Dt);
            con.Close();
            return Dt;
        }
        public DataTable SelectCountry(string Country)
        {
            DataTable Dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_SelectCountryMaster";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@Country", Country));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(Dt);
            con.Close();
            return Dt;
        }
        public DataTable SelectBank(string Bank)
        {
            DataTable Dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_SelectBankMaster";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@Bank", Bank));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(Dt);
            con.Close();
            return Dt;
        }
        public DataTable SelectState(string State)
        {
            DataTable Dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_SelectStateMaster";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@State", State));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(Dt);
            con.Close();
            return Dt;
        }
        public DataTable DeleteCountry(int CountryId)
        {
            DataTable Dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_DeleteCountryMaster";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@CountryId", CountryId));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(Dt);
            con.Close();
            return Dt;
        }
        public DataTable DeleteBank(int BankId)
        {
            DataTable Dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_DeleteBankMaster";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@BankId", BankId));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(Dt);
            con.Close();
            return Dt;
        }
        public DataTable DeleteState(int StateId)
        {
            DataTable Dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_DeleteStateMaster";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@StateId", StateId));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(Dt);
            con.Close();
            return Dt;
        }
        public DataTable UpdateCountry(string Country, int CountryId)
        {
            DataTable Dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_UpdateCountryMaster";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@CountryId", CountryId));
            cmd.Parameters.Add(new SqlParameter("@Country", Country));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(Dt);
            con.Close();
            return Dt;
        }
        public DataTable UpdateBank(string Bank, int BankId)
        {
            DataTable Dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_UpdateBankMaster";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@BankId", BankId));
            cmd.Parameters.Add(new SqlParameter("@Bank", Bank));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(Dt);
            con.Close();
            return Dt;
        }
        public DataTable IdtoCountry(int CountryId)
        {
            DataTable Dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_IdtoCountry";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@CountryId", CountryId));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(Dt);
            con.Close();
            return Dt;
        }
        public DataTable UpdateState(string State, int StateId, int CountryId)
        {
            DataTable Dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_UpdateStateMaster";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@StateId", StateId));
            cmd.Parameters.Add(new SqlParameter("@State", State));
            cmd.Parameters.Add(new SqlParameter("@CountryId", CountryId));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(Dt);
            con.Close();
            return Dt;
        }
        public DataTable SelectBankMaster()
        {
            DataTable Dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_SelectBank";
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(Dt);
            con.Close();
            return Dt;
        }
        public DataTable AddBankIFSCCode(int BankID, string IFSCCode, string MICRCode, string BankBranch, string BankCity, string BankAddress)
        {
            DataTable Dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_AddBankIFSCCodeMaster";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@BankID", BankID));
            cmd.Parameters.Add(new SqlParameter("@IFSCCode", IFSCCode));
            cmd.Parameters.Add(new SqlParameter("@MICRCode", MICRCode));
            cmd.Parameters.Add(new SqlParameter("@BankBranch", BankBranch));
            cmd.Parameters.Add(new SqlParameter("@BankCity", BankCity));
            cmd.Parameters.Add(new SqlParameter("@BankAddress", BankAddress));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(Dt);
            con.Close();
            return Dt;
        }
        public DataTable SelectBankIFSCCode(string IFSCCode)
        {
            DataTable Dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_SelectBankIFSCCodeMaster";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@IFSCCode", IFSCCode));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(Dt);
            con.Close();
            return Dt;
        }
        public DataTable DeleteBankIFSCCode(string IFSCCode)
        {
            DataTable Dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_DeleteBankIFSCCodeMaster";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@IFSCCode", IFSCCode));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(Dt);
            con.Close();
            return Dt;
        }
        public DataTable UpdateBankIFSCCode(int BankID, string IFSCCode, string MICRCode, string BankBranch, string BankCity, string BankAddress)
        {
            DataTable Dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_UpdateBankIFSCCodeMaster";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@BankID", BankID));
            cmd.Parameters.Add(new SqlParameter("@IFSCCode", IFSCCode));
            cmd.Parameters.Add(new SqlParameter("@MICRCode", MICRCode));
            cmd.Parameters.Add(new SqlParameter("@BankBranch", BankBranch));
            cmd.Parameters.Add(new SqlParameter("@BankCity", BankCity));
            cmd.Parameters.Add(new SqlParameter("@BankAddress", BankAddress));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(Dt);
            con.Close();
            return Dt;
        }
        public DataTable IdtoBank(int BankID)
        {
            DataTable Dt = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_IdtoBank";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@BankID", BankID));
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(Dt);
            con.Close();
            return Dt;
        }

        // for verify client data
        public DataTable AdminVerifyClientDetails(int ClientId)
        {
            con.Open();
            SqlCommand cmd = con.CreateCommand();
            cmd.CommandText = "spkyc_AdminGetAllClientData";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@clientId", ClientId));
            DataTable dt = new DataTable();
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }

        // for reject client
        public DataTable AdminRejectClientRequest(int ClientId,string RejectedStatus)
        {
            con.Open();
            SqlCommand cmd = con.CreateCommand();
            cmd.CommandText = "spkyc_AdminRejectClientRequest";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@clientId", ClientId));
            cmd.Parameters.Add(new SqlParameter("@RejectedStatus", RejectedStatus));
            DataTable dt = new DataTable();
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }
        public DataTable AdminApprovedClientRequest(int ClientId)
        {
            con.Open();
            SqlCommand cmd = con.CreateCommand();
            cmd.CommandText = "spkyc_AdminApprovedClientRequest";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@clientId", ClientId));
            DataTable dt = new DataTable();
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return dt;
        }

        //Get ClientData For Under Process Request
        public DataTable GetClientDataForRqst()
        {
            DataTable GetClientRqst = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_GetRequest";
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(GetClientRqst);
            con.Close();
            return GetClientRqst;
        }
        //Get ClientData For KYc Approved Request
        public DataTable GetClientDataForApprovedReq()
        {
            DataTable GetClientRqst = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_GetApprovedRequest";
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(GetClientRqst);
            con.Close();
            return GetClientRqst;
        }

        //Get ClientData For KYc Rejected Request
        public DataTable GetClientDataForRejectedReq()
        {
            DataTable GetClientRqst = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_GetRejectedRequest";
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(GetClientRqst);
            con.Close();
            return GetClientRqst;
        }

        // for total request

        public DataTable adminTotalRequest()
        {
            DataTable ShowStatus = new DataTable();
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "spkyc_TotalRequestChecker";
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(ShowStatus);
            con.Close();
            return ShowStatus;
        }
    }
}
