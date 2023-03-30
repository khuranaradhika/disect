import json
from Company import Company
from Facility import Facility
from bisect import bisect_left


class CompanyFactory(object):
    __facilities = json.load(open("../../../../oshub_data/facilities.json"))

    def getCompany(self, company_name):
        """
        @param company_name - name of a company
        @returns a Company object pertaining to the company, containing information about
                 the company's known manufacturing facilities IF the company is in the Open
                 Supply Hub directory
                 Otherwise, returns None.
        """
        # Binary search to check if the given company is in our directory
        companies = list(self.__facilities.keys())
        if companies[bisect_left(
                companies, company_name.lower())] != company_name.lower():
            return None
        return Company(
            company_name.lower(),
            [Facility(i) for i in self.__facilities[company_name.lower()]])


if __name__ == "__main__":
    c = CompanyFactory().getCompany("adidas")
