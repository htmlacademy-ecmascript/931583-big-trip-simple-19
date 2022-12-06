import FilterView from './view/filter-view.js';
import {render} from './render.js';
import PointsTripPresenter from './presenter/points-trip-presenter.js';

const siteHeaderElement = document.querySelector('.page-header');
const siteMainElement = document.querySelector('.page-main');
const siteFilterElement = siteHeaderElement.querySelector('.trip-controls__filters');
const sitePointsElement = siteMainElement.querySelector('.trip-events');

const pointsTripPresenter = new PointsTripPresenter({pointsContainer: sitePointsElement});

render(new FilterView(), siteFilterElement);
pointsTripPresenter.init();

