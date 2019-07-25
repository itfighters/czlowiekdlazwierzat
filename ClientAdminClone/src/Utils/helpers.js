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
      dateFrom: dateStart,
      dateTo: dateEnd,
      ...remaining,
    };
  };