const Facility = class {
    constructor(details){
        this.address = details.address
        this.latitude = details.lat
        this.longitude = details.lon
        this.name = details.name
    }
}
module.exports = Facility;