import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const addSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  number: Yup.number().min(100, "Too short").required("Required"),
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
      <Form>
        <lebel>
          Name
          <Field type="text" name="name" placeholder="Enter name" />
          <ErrorMessage component="span" name="name" />
        </lebel>
        <lebel>
          Number{" "}
          <Field type="number" name="number" placeholder="Enter number" />
          <ErrorMessage component="span" name="number" />
        </lebel>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
