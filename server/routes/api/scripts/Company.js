const clone = (items) => items.map(item => Array.isArray(item) ? clone(item) : item);
const Company = class{
    constructor(name, facilities) {
        this.name = name
        this.facilities = clone(facilities) 
    }
    getFacilities(company_name){
        /*
        @param company_name - name of a company
        @returns a list of Factories by location that manufacture products for the company;
                 if the company is not in the Open Supply Hub directory or no factories are known,
                 an empty list is returned 
        */
       return clone(this.facilities);
    }

    expectedPackageMileage(location){
        /*
        @param location - a Location
        @returns the expected mileage that a package will travel in route to the location

        TODO: Use a more accurate method. The following code simply finds the average global distance from the given
        location to all factories from this company.
        */
    }

    expectedPackageEmissions(location){
        /*
        @param location - a Location
        @returns the number of emissions in kg required to ship the package to 'location' from the this company
        */
    }
}
module.exports = Company;