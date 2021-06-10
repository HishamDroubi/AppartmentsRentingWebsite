export const makeFormData = (values) => {
  const formData = new FormData();
  for (let prop in values) {
    formData.append(prop, values[prop]);
  }
  return formData;
};
