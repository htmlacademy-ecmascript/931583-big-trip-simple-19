import FilterView from './view/filter-view.js';
import {render} from './render.js';
import EventsPresenter from './presenter/events-presenter.js';

const siteHeaderElement = document.querySelector('.page-header');
const siteMainElement = document.querySelector('.page-main');
const siteFilterElement = siteHeaderElement.querySelector('.trip-controls__filters');
const siteEventsElement = siteMainElement.querySelector('.trip-events');

const eventsPresenter = new EventsPresenter({eventsContainer: siteEventsElement});

render(new FilterView(), siteFilterElement);
eventsPresenter.init();

