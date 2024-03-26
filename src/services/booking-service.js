const BookingRepository = require("../repository/booking-repository");
const CrudService = require("./crud-service");

const bookingRepository = new BookingRepository();

class BookingService extends CrudService {
    constructor() {
        super(bookingRepository);
    }
}

module.exports = BookingService;