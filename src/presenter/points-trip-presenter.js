import SortView from '../view/sort-view.js';
import PointsListView from '../view/points-list-view.js';
import PointTripView from '../view/point-trip-view.js';
import PointTripEditView from '../view/point-trip-edit-view.js';
import PointTripAddView from '../view/point-trip-add-view.js';

import { render } from '../render.js';

export default class PointsTripPresenter {
  pointsComponent = new PointsListView();

  constructor({ pointsContainer }) {
    this.pointsContainer = pointsContainer;
  }

  init() {
    render(new SortView(), this.pointsContainer);
    render(this.pointsComponent, this.pointsContainer);
    render(new PointTripEditView(),this.pointsComponent.getElement());
    for (let i = 0; i < 3; i++) {
      render(new PointTripView(), this.pointsComponent.getElement());
    }
    render(new PointTripAddView(),this.pointsComponent.getElement());
  }
}
