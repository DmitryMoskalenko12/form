import classes from './form.module.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validationOrderForm } from '@/helpers/validation';
import ReactInputMask from 'react-input-mask';
import cn from 'classnames';
import { useRouter } from 'next/router';

const FormOrder = () => {

  const router = useRouter();

  const handleSubmit = (values) => {
  
    const redirectURL = `https://www.google.com/&first_name=${values.first_name}&last_name=${values.last_name}&email=${values.email}&phone=${values.phone}&address=${values.address}&city=${values.city}&postcode=${values.postcode}&to_checkout=${values.to_checkout ? '1': '0'}`;

    router.push(redirectURL);
  }

  return (
    <Formik initialValues={{
      first_name: '',
      last_name: '',
      address: '',
      postcode: '',
      city: '',
      phone: '',
      email: '',
      to_checkout: ''
    }}
    validationSchema={validationOrderForm} onSubmit={(values, {resetForm}) => {handleSubmit(values); resetForm()}}>
      {({errors, touched, values}) =>
     <Form className={classes.orderForm} noValidate>
      <div className={classes.inputLabel}>
        <label className={classes.label} htmlFor="first_name">Імя</label>
        <Field id='first_name' type='text' name='first_name' className={cn(classes.input, {[classes.fail]: errors.first_name && touched.first_name})}/>
      </div>
      <ErrorMessage name='first_name' className={classes.error} component={'div'}/>

      <div className={classes.inputLabel}>
        <label className={classes.label} htmlFor="last_name">Фамилия</label>
        <Field id='last_name' type='text' name='last_name' className={cn(classes.input, {[classes.fail]: errors.last_name && touched.last_name})}/>
      </div>
      <ErrorMessage name='last_name' className={classes.error} component={'div'}/>

      <div className={classes.inputLabel}>
        <label className={classes.label} htmlFor="address">Адрес</label>
        <Field id='address' type='text' name='address' className={cn(classes.input, {[classes.fail]: errors.address && touched.address})}/>
      </div>
      <ErrorMessage name='address' className={classes.error} component={'div'}/>

      <div className={classes.inputLabel}>
        <label className={classes.label} htmlFor="postcode">Почтовой индекс</label>
        <Field id='postcode' type='text' name='postcode' className={cn(classes.input, {[classes.fail]: errors.postcode && touched.postcode})}/>
      </div>
      <ErrorMessage name='postcode' className={classes.error} component={'div'}/>

      <div className={classes.inputLabel}>
        <label className={classes.label} htmlFor="city">Город</label>
        <Field id='city' type='text' name='city' className={cn(classes.input, {[classes.fail]: errors.city && touched.city})}/>
      </div>
      <ErrorMessage name='city' className={classes.error} component={'div'}/>

      <div className={classes.inputLabel}>
        <label className={classes.label} htmlFor='phone'>Номер телефона</label>
        <Field name='phone'>
          {({ field }) => (
            <ReactInputMask id='phone' type='text' mask='+339999999999' {...field} maskChar={null} className={cn(classes.input,{[classes.fail]: errors.phone && touched.phone})} placeholder="+33"/>
          )}
        </Field>
      </div>
        <ErrorMessage name='phone' className={classes.error} component={'div'}/>

      <div className={classes.inputLabel}>
        <label className={classes.label} htmlFor="email">Электронная почта</label>
        <Field id='email' type='text' name='email' className={cn(classes.input, {[classes.fail]: errors.email && touched.email})}/>
      </div>
      <ErrorMessage name='email' className={classes.error} component={'div'}/>

      <div className={classes.inputLabelCheck}>
        <label className={classes.label} htmlFor="to_checkout">Я принимаю политику конфиденциальности и принимаю обработку персональных данных, заказы и возвраты</label>
        <Field id='to_checkout' type='checkbox' name='to_checkout' className={cn(classes.inputCheck, {[classes.fail]: errors.to_checkout && touched.to_checkout})}/>
      </div>
      <ErrorMessage name='to_checkout' className={classes.error} component={'div'}/>
      <button className={classes.button} type='submit' disabled={!values.to_checkout}>Перейти к оплате  
      <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5625 5.87305C6.82617 5.60938 6.82617 5.16992 6.5625 4.87695L2.57812 0.892578C2.28516 0.628906 1.8457 0.628906 1.58203 0.892578L0.908203 1.56641C0.644531 1.85938 0.644531 2.29883 0.908203 2.5625L3.75 5.4043L0.908203 8.2168C0.644531 8.48047 0.644531 8.91992 0.908203 9.21289L1.58203 9.85742C1.8457 10.1504 2.28516 10.1504 2.57812 9.85742L6.5625 5.87305Z" fill="#231F20"/>
      </svg>
      </button>
     </Form>
    }
    </Formik>
  )
}

export default FormOrder;