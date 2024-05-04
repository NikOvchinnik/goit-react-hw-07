import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import style from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const initialValue = {
  name: "",
  number: "",
};

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimal 3 symbols!")
    .max(50, "Max 50 symbols!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\+?[ ()0-9-]+$/, "You can use only +,-,0-9 and ( )")
    .min(3, "Minimal 3 symbols!!")
    .max(50, "Max 50 symbols!")
    .required("Required"),
});

const ContactForm = () => {
  const dispath = useDispatch();
  const idInputName = useId();
  const idInputNumber = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name.trim(),
      number: values.number.trim(),
    };
    dispath(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={style.contactForm}>
        <div className={style.inputContainer}>
          <label htmlFor={idInputName}>Name</label>
          <Field type="text" name="name" id={idInputName} />
          <ErrorMessage name="name" component="p" className={style.errorText} />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor={idInputNumber}>Number</label>
          <Field type="tel" name="number" id={idInputNumber} />
          <ErrorMessage
            name="number"
            component="p"
            className={style.errorText}
          />
        </div>

        <button type="submit" className={style.btnContactForm}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
