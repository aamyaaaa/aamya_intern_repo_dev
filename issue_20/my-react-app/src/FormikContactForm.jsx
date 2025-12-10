// issue_20/my-react-app/src/FormikContactForm.jsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
});

function FormikContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted:", values);
      alert(`Form submitted!\nName: ${values.name}\nEmail: ${values.email}`);
      resetForm();
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = formik;

  return (
    <div
      style={{
        border: "1px solid #30363d",
        padding: "1.5rem",
        marginTop: "1rem",
        borderRadius: "8px",
        background: "#111827",
        color: "white",
        width: "450px",
      }}
    >
      <h2>Formik Form Demo</h2>
      <p>Simple form with Formik and Yup validation.</p>

      <form onSubmit={handleSubmit} noValidate>
        {/* Name field */}
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: "0.25rem" }}
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #4b5563",
              background: "#020617",
              color: "white",
            }}
          />
          {touched.name && errors.name && (
            <div
              style={{
                color: "#f97373",
                marginTop: "0.25rem",
                fontSize: "0.9rem",
              }}
            >
              {errors.name}
            </div>
          )}
        </div>

        {/* Email field */}
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "0.25rem" }}
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #4b5563",
              background: "#020617",
              color: "white",
            }}
          />
          {touched.email && errors.email && (
            <div
              style={{
                color: "#f97373",
                marginTop: "0.25rem",
                fontSize: "0.9rem",
              }}
            >
              {errors.email}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            color: "#fff",
            background: "#16a34a",
            border: "none",
            padding: "0.6rem 1.3rem",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "0.95rem",
          }}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default FormikContactForm;
