const Company = require("./Company")
const Facility = require("./Facility");
const fs = require("fs");

const CompanyFactory = class {
    static async getCompany(company_name){
        /*
        @param company_name - name of a company
        @returns a Company object pertaining to the company, containing information about
                 the company's known manufacturing facilities IF the company is in the Open
                 Supply Hub directory
                 Otherwise, returns undefined.
        */
        // TODO: Binary search to check if the given company is in our directory (currently just a linear search)
        if(this.facilities === undefined){
            this.facilities = JSON.parse(fs.readFileSync("../oshub_data/facilities.json", "utf8"));
        }
        if(!(company_name.toLowerCase() in this.facilities)){ 
            return undefined;
        }

        var companys_facilities = []
        for(var i = 0;i<this.facilities[company_name.toLowerCase()].length;i++){
            companys_facilities.push(new Facility(this.facilities[company_name.toLowerCase()][i]));
        }
        return new Company(company_name.toLowerCase(), companys_facilities);

        }
    }
CompanyFactory.facilities = undefined;
module.exports = CompanyFactory;