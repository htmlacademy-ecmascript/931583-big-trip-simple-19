import {
  getPointsData
} from '../mocks/data.js';

export default class PointsModel {
  points = getPointsData();

  getPoints() {
    return this.points;
  }
}
