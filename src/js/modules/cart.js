export const cart = () => {
  const cartElem = document.querySelector(`.cart`);

  if (cartElem) {
    const cartTogglesElems = document.querySelectorAll(`.js-cart-toggles`);
    cartTogglesElems.forEach((elem) => {
      const minusELem = elem.querySelector(`.js-cart-toggle-minus`);
      const plusELem = elem.querySelector(`.js-cart-toggle-plus`);
      const ammountElem = elem.querySelector(`.js-cart-amount`);

      minusELem.addEventListener(`click`, () => {
        if (ammountElem.value > 0) {
          ammountElem.value -= 1;
        }

        if (ammountElem.value <= 0) {
          minusELem.setAttribute(`disabled`, true);
        }
      });

      plusELem.addEventListener(`click`, () => {
        if (minusELem.hasAttribute(`disabled`) && ammountElem.value >= 0) {
          minusELem.removeAttribute(`disabled`)
        }
        ammountElem.value = parseInt(ammountElem.value) + 1;
      });

      ammountElem.addEventListener(`change`, () => {
        if (ammountElem.value <= 0) {
          ammountElem.value = 0;
          minusELem.setAttribute(`disabled`, true);
        } else if (minusELem.hasAttribute(`disabled`)) {
          minusELem.removeAttribute(`disabled`);
        }
      });
    });
  }
}
