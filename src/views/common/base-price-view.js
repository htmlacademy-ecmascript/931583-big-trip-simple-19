import View from '../view';
import {html} from '../../utils';

export default class BasePriceView extends View {
  constructor() {
    super();

    this.classList.add('event__field-group', 'event__field-group--time');
  }

  /**
   * @override
   */
  createHtml() {
    return html`
      <label class="event__label" for="event-price-1">
      <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input
        class="event__input  event__input--price"
        id="event-price-1"
        type="number"
        name="event-price"
        min="1">
    `;
  }

  setValue(value) {
    this.querySelector('input').valueAsNumber = value;
  }

  getValue() {
    return this.querySelector('input').valueAsNumber;
  }
}

customElements.define(String(BasePriceView), BasePriceView);
