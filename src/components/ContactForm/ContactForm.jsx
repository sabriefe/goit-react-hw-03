import { Formik, Field, Form, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
const initialValues = {
  name: "",
  phone: "",
};
const ContactForm = ({ onSubmit }) => {
  const handler = (values, actions) => {
    const createdId = nanoid();
    const result = {
      id: createdId,
      ...values,
    };
    onSubmit(result);
    console.log(result);
    actions.resetForm();
  };
  const FeedbackShema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too long!")
      .required("Required!"),
    phone: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too long!")
      .required("Required!"),
  });
  const name = useId();
  const phone = useId();
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handler}
        validationSchema={FeedbackShema}
      >
        <Form className={css.form}>
          <label htmlFor={name}>Name</label>
          <Field type="text" name="name" id={name} />
          <ErrorMessage name="name" component="span" />
          <label htmlFor={phone}>Number</label>
          <Field type="tel" name="phone" id={phone} />
          <ErrorMessage name="phone" component="span" />
          <button className={css.btn} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
