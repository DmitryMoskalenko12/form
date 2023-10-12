import * as Yup from 'yup';

export const validationOrderForm = Yup.object().shape({
  first_name: Yup.string().min(2, 'Минимум 2 символа').required('Обязательное поле'),
  last_name: Yup.string().required('Обязательное поле'),
  phone: Yup.string().required('Обязательное поле'),
  address: Yup.string().required('Обязательное поле'),
  postcode: Yup.string().required('Обязательное поле'),
  city: Yup.string().required('Обязательное поле'),
  email: Yup.string().matches(/^[a-zA-Z0-9]+@[a-zA-Z]+(\.[a-zA-Z]+)+$/, 'Неправильный емейл адрес').required('Обязательное поле'),
  to_checkout: Yup.boolean()
  .required('Необходимо согласие!')
  .oneOf([true], 'Необходимо согласие'),
})