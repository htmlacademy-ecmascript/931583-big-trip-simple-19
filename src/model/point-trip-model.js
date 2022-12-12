import {
  generatePoint,
  getDestinationsData,
  getOffersByTypeData
} from '../mocks/data.js';

const TASK_COUNT = 8;

const offersByType = getOffersByTypeData();
const destinations = getDestinationsData();
const getPoint = () => generatePoint(offersByType,destinations);

export default class PointsModel {
  offersByType = offersByType;
  destinations = destinations;
  points = Array.from({length: TASK_COUNT}, getPoint);

  getPoints() {
    return this.points;
  }

  getAllDestinations() {
    return this.destinations;
  }

  getAllOffersByType() {
    return this.offersByType;
  }
}

