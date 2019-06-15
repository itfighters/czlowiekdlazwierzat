import { get, post } from '../Utils/fetch';

const prepareForm = ({
  multichoiceCategories,
  checkboxKonto,
  adressStart,
  adressEnd,
  phone,
  dateStart,
  dateEnd,
  ...remaining
}) => {
  console.log(remaining);
  return {
    categories: multichoiceCategories,
    account: checkboxKonto,
    addressFrom: adressStart,
    addressTo: adressEnd,
    contactNumber: phone,
    dateFrom: dateStart,
    dateTo: dateEnd,
    ...remaining,
  };
};

export default {
  getForm(id) {
    return get(`/api/post/${id}`);
  },
  loadCategories() {
    return get(
      'https://czlowiekdlazwierzat.azurewebsites.net/server/api/category'
    );
  },
  addForm(form) {
    return post(
      'https://czlowiekdlazwierzat.azurewebsites.net/server/api/auction',
      prepareForm(form)
    );
  },
  updateForm(id, form) {},
};
