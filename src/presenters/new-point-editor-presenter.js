import {PointType} from '../enums';
import {pointTitleMap} from '../maps';
import Presenter from './presenter';

/**
 * @extends {Presenter<NewPointEditorView>}
 */
export default class NewPointEditorPresenter extends Presenter {
  constructor() {
    super(...arguments);

    const pointTypeOptions =
      Object.entries(pointTitleMap).map(([value, title]) => ({title, value}));

    const destinationsList = this.destinationsModel.listAll();
    const destinationsOptions =
      Array.from(destinationsList, (element) => ({title: element.name, value: element.name.toLowerCase()}));

    this.view.pointTypeView.setOptions(pointTypeOptions);
    this.view.pointTypeView.setValue(PointType.SHIP);

    this.view.destinationView.setOptions(destinationsOptions);

    this.view.addEventListener('submit', this.handleViewSubmit.bind(this));
    this.view.addEventListener('reset', this.handleViewReset.bind(this));
    this.view.addEventListener('close', this.handleViewClose.bind(this));
  }

  /**
   * @override
   */
  handleNavigation() {
    if (this.location.pathname === '/new') {
      this.view.open();

    } else {
      this.view.close(false);
    }
  }

  /**
   * @param {SubmitEvent} event
   */
  handleViewSubmit(event) {
    event.preventDefault();
  }

  handleViewReset(event) {
    event.preventDefault();
    this.view.close();
  }

  handleViewClose() {
    this.navigate('/');
  }
}