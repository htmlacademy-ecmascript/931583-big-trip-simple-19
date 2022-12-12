import {
  getPointsData,
  getDestinationsData,
  offersByTypeData
} from '../mocks/data.js';

export default class PointsModel {
  points = getPointsData();
  destinations = getDestinationsData();
  offersByType = offersByTypeData;

  getPoints() {
    console.log(this.points);
    return this.points;
  }

  getAllDestinations() {
    return this.destinations;
  }

  getAllOffersByType() {
    return this.offersByType;
  }
}
