export const mapInputsForPost = ({
  multichoiceCategories,
  checkboxKonto,
  adressStart,
  adressEnd,
  phone,
  dateStart,
  dateEnd,
  ...remaining
}) => {
  return {
    categories: multichoiceCategories,
    account: checkboxKonto,
    addressFrom: adressStart,
    addressTo: adressEnd,
    contactNumber: phone,
    dateFrom: dateStart.toString().slice(0, 24),
    dateTo: dateEnd.toString().slice(0, 24),
    ...remaining
  };
};

export const mapInputsFromPost = ({
  categories,
  account,
  addressFrom,
  addressTo,
  contactNumber,
  dateFrom,
  dateTo,
  ...remaining
}) => {
  return {
    multichoiceCategories: categories,
    checkboxKonto: account,
    adressStart: addressFrom,
    adressEnd: addressTo,
    phone: contactNumber,
    dateStart: convertDate(dateFrom),
    dateEnd: convertDate(dateTo),
    ...remaining
  };
};

function convertDate(dateStr) {
  if (!dateStr) {
    return "";
  }
  var date = new Date(dateStr);
  return date;
}
