export const order = () => {
  const orderElem = document.querySelector(`.order`);

  if (orderElem) {
    const togglePersonElem = orderElem.querySelector(`.js-order-toggle-person`);
    const toggleCompanyElem = orderElem.querySelector(`.js-order-toggle-company`);
    const formPersonElem = orderElem.querySelector(`.js-order-form-person`);
    const formCompanyElem = orderElem.querySelector(`.js-order-form-company`);

    const openPersonForm = () => {
      if(togglePersonElem.checked) {
        formPersonElem.classList.add(`active`);

        formCompanyElem.classList.remove(`active`)
      }
    }

    const openCompanyForm = () => {
      if(toggleCompanyElem.checked) {
        formCompanyElem.classList.add(`active`);

        formPersonElem.classList.remove(`active`)
      }
    }

    toggleCompanyElem.addEventListener(`change`, () => {
      openCompanyForm();
    });

    togglePersonElem.addEventListener(`change`, () => {
      openPersonForm();
    });

  }
}
