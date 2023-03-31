import {Company} from "Company.js"
import {Facility} from "Facility.js"


export class CompanyFactory {
    static facilities = undefined; 

    static async getCompany(company_name){
        /*
        @param company_name - name of a company
        @returns a Company object pertaining to the company, containing information about
                 the company's known manufacturing facilities IF the company is in the Open
                 Supply Hub directory
                 Otherwise, returns undefined.
        */
        // TODO: Binary search to check if the given company is in our directory (currently just a linear search)
        if(facilities == undefined){
            facilities = await fetch(open("../../../../oshub_data/facilities.json"))
        }
        if(!facilities.has(company_name.toLowerCase())){ 
            return undefined
        }
        return Company(
            company_name.toLowerCase(),
            [Facility(i) for i in self.__facilities[company_name.lower()]])
        }
    }