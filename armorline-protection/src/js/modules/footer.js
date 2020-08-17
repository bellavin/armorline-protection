import {setModalEvents} from '../utils/set-modal-events';

export const footer = () => {
  const modal1 = document.querySelector(`.js-modal-1`);
  const modal2 = document.querySelector(`.js-modal-2`);

  const modal1OpenBtn = document.querySelector(`.js-footer-modal-opener-1`);
  const modal2OpenBtn = document.querySelector(`.js-footer-modal-opener-2`);



  if (modal1 && modal1OpenBtn) {
    setModalEvents(modal1, modal1OpenBtn, `modal--open`);
  }

  if (modal2 && modal1OpenBtn) {
    setModalEvents(modal2, modal2OpenBtn, `modal--open`);
  }
}
