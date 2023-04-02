const Facility = class {
    constructor(details){
        this.address = details.address
        this.latitude = details.lat
        this.longitude = details.long
        this.name = details.name
    }
}
module.exports = Facility;