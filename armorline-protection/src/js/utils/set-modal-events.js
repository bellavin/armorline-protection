export const setModalEvents = (modalElem, openBtnElem, modalClassName) => {
  const overlayElem = modalElem.querySelector(`.js-modal-overlay`);
  const closeBtnElem = modalElem.querySelector(`.js-modal-close`);

  const openModalHandler = () => {
    if (modalElem) {
      modalElem.classList.add(modalClassName);
      document.addEventListener(`keydown`, escKeyDownHandler);
    }
  };

  const closeModalHandler = () => {
      modalElem.classList.remove(modalClassName);
      document.removeEventListener(`keydown`, escKeyDownHandler);
  };

  const escKeyDownHandler = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      closeModalHandler();
    }
  };

  if (openBtnElem) {
    openBtnElem.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      openModalHandler();
    });
  }


  if (overlayElem) {
    overlayElem.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      closeModalHandler();
    });
  }


  if (closeBtnElem) {
    closeBtnElem.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      closeModalHandler();
    });
  }
}
