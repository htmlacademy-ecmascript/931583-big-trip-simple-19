import SortView from '../view/sort-view.js';
import EventsView from '../view/events-view.js';
import PointEventView from '../view/point-event-view.js';
import PointEventEditView from '../view/point-event-edit-view.js';
import PointEventAddView from '../view/point-event-add-view.js';

import { render } from '../render.js';

export default class EventsPresenter {
  eventsComponent = new EventsView();

  constructor({ eventsContainer }) {
    this.eventsContainer = eventsContainer;
  }

  init() {
    render(new SortView(), this.eventsContainer);
    render(this.eventsComponent, this.eventsContainer);
    render(new PointEventEditView(),this.eventsComponent.getElement());
    for (let i = 0; i < 3; i++) {
      render(new PointEventView(), this.eventsComponent.getElement());
    }
    render(new PointEventAddView(),this.eventsComponent.getElement());
  }
}
