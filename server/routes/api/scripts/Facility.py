class Facility(object):

    def __init__(self, details: dict):
        self.address = details["address"]
        self.latitude = details["lat"]
        self.longitude = details["lon"]
        self.name = details["name"]