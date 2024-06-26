import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const addSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
});

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };
  const handleSubmit = (data, options) => {
    addContact({ ...data, id: nanoid() });
    options.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={addSchema}
    >
      <Form className={s.form}>
        <label className={s.label}>
          Name
          <Field
            type="text"
            name="name"
            placeholder="Enter name"
            className={s.input}
          />
          <ErrorMessage component="span" name="name" className={s.red} />
        </label>
        <label className={s.label}>
          Number{" "}
          <Field
            type="text"
            name="number"
            placeholder="Enter number"
            className={s.input}
          />
          <ErrorMessage component="span" name="number" className={s.red} />
        </label>

        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
