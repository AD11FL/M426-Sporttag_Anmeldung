using M426.DataSets;
using M426.DataSets.DataSetTableAdapters;
using System;

namespace M426.BusinessObjects
{
    public class BusinessObject
    {
        private SportTableAdapter sportTableAdapter = new SportTableAdapter();
        private UserTableAdapter userTableAdapter = new UserTableAdapter();
        private Student_SportTableAdapter studentSportTableAdapter = new Student_SportTableAdapter();

        public DataSet.SportDataTable GetSport()
        {
            return sportTableAdapter.GetData();
        }

        public DataSet.UserDataTable GetUsers()
        {
            return userTableAdapter.GetData();
        }

        public DataSet.UserDataTable GetUserByEmail(String email)
        {
            return userTableAdapter.GetDataByEmail(email);
        }

        public DataSet.UserDataTable GetUsersByClass(String className)
        {
            return userTableAdapter.GetDataByClass(className);
        }
    }
}