from copy import deepcopy


class Company(object):

    def __init__(self, name, facilities):
        self.name = name
        self.facilities = deepcopy(facilities)

    def getFactories(company_name):
        """
        @param company_name - name of a company
        @returns a list of Factories by location that manufacture products for the company;
                 if the company is not in the Open Supply Hub directory or no factories are known,
                 an empty list is returned 
        """

    def expectedPackageMileage(location):
        """
        @param location - a Location
        @returns the expected mileage that a package will travel in route to the location

        TODO: Use a more accurate method. The following code simply finds the average global distance from the given
        location to all factories from this company.
        """

    def expectedPackageEmissions(location):
        """
        @param location - a Location
        @returns the number of emissions in kg required to ship the package to 'location' from the this company
        """
