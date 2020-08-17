import {setModalEvents} from '../utils/set-modal-events';

export const contacts = () => {
  const modal1 = document.querySelector(`.js-modal-1`);
  const modal2 = document.querySelector(`.js-modal-2`);

  const modal1OpenBtn = document.querySelector(`.js-contacts-modal-opener-1`);
  const modal2OpenBtn = document.querySelector(`.js-contacts-modal-opener-2`);



  if (modal1 && modal1OpenBtn) {
    setModalEvents(modal1, modal1OpenBtn, `modal--open`);
  }

  if (modal2 && modal1OpenBtn) {
    setModalEvents(modal2, modal2OpenBtn, `modal--open`);
  }

  // const mapElem = document.querySelector(`.js-contacts-map`);
  // if (mapElem) {
    // let map;

    // function initMap() {
    //   map = new google.maps.Map(mapElem, {
    //     center: { lat: -34.397, lng: 150.644 },
    //     zoom: 8
    //   });
    // }
  // }
}
