import View from './view';
import {html} from '../utils';
import './ui-blocker-view.css';

export default class UiBlockerView extends View {
  constructor() {
    super();

    this.classList.add('ui-blocker');
  }

  /**
   * @param {boolean} flag
   */
  toggle(flag) {
    if (flag) {
      document.body.append(this);
      document.addEventListener('keydown', this.handleDocumentKeydown);
    }
    else {
      this.remove();
      document.removeEventListener('keydown', this.handleDocumentKeydown);
    }
  }

  /**
   * @param {KeyboardEvent} event
   */
  handleDocumentKeydown(event) {
    event.preventDefault();
  }
}

customElements.define(String(UiBlockerView), UiBlockerView);
