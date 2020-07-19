export const menu = (menuClass, burgerClass, overlayClass) => {
  const menuElem = document.querySelector(menuClass);
  const brugerElem = menuElem.querySelector(burgerClass);
  const overlayElem = menuElem.querySelector(overlayClass);

  const escKeyDownHandler = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      closeMenuHandler();
    }
  };

  const openMenuHandler = () => {
    menuElem.classList.add(`active`);
    brugerElem.querySelector(`.burger`).classList.add(`active`);
    document.addEventListener(`keydown`, escKeyDownHandler);
  }

  const closeMenuHandler = () => {
    menuElem.classList.remove(`active`);
    brugerElem.querySelector(`.burger`).classList.remove(`active`);
    document.removeEventListener(`keydown`, escKeyDownHandler);
  }

  brugerElem.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    const isOpen = menuElem.classList.contains(`active`);

    if (!isOpen) {
      openMenuHandler();
    } else {
      closeMenuHandler();
    }
  });

  overlayElem.addEventListener(`click`, () => {
    closeMenuHandler();
  })
}
