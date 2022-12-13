import Adapter from './adapter';

export default class PointsAdapter extends Adapter {
  /**
   * @param {Partial<Point>} data
   */
  constructor(data = {}) {
    super();

    this.basePrice = data.base_price;
    this.startDate = data.date_from;
    this.endDate = data.date_to;
    this.destinationId = String(data.destination);
    this.id = data.id;
    this.offerIds = data.offers?.map(String);
    this.type = data.type;
  }

  /**
   * @override
   * @return {Partial<Point>}
   */
  toJSON() {
    return {
      'base_price': this.basePrice
    };
  }
}
