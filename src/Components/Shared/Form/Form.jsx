import React, { useState } from "react";
import { ArrowRight } from "react-bootstrap-icons";

const Form = ({ isColTwo }) => {
  const [values, setValues] = useState({ name: "", email: "", comment: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!values.name.trim()) errs.name = "Name is required.";
    if (!values.email.trim()) errs.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) errs.email = "Enter a valid email.";
    if (!values.comment.trim()) errs.comment = "Comment is required.";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((s) => ({ ...s, [name]: value }));
    setErrors((s) => ({ ...s, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // Simulate successful submission. Replace with real submit logic if needed.
      setSubmitted(true);
      setValues({ name: "", email: "", comment: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="replay__box cmn__bg">
      <h3>Leave a Reply</h3>
      <p>
        Your email address will not be published. Required fields are marked *
      </p>
      <form onSubmit={handleSubmit} className="row g-4" noValidate>
        <div className={` ${isColTwo ? "col-lg-6" : "col-lg-12"}`}>
          <label className="visually-hidden" htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Name *"
            value={values.name}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "error-name" : undefined}
            className={errors.name ? "is-invalid" : ""}
          />
          {errors.name && <small id="error-name" className="text-danger">{errors.name}</small>}
        </div>
        <div className={` ${isColTwo ? "col-lg-6" : "col-lg-12"}`}>
          <label className="visually-hidden" htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="Email *"
            value={values.email}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "error-email" : undefined}
            className={errors.email ? "is-invalid" : ""}
          />
          {errors.email && <small id="error-email" className="text-danger">{errors.email}</small>}
        </div>
        <div className="col-lg-12">
          <label className="visually-hidden" htmlFor="contact-comment">Comment</label>
          <textarea
            id="contact-comment"
            name="comment"
            rows="5"
            placeholder="Write Comments *"
            value={values.comment}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={errors.comment ? "true" : "false"}
            aria-describedby={errors.comment ? "error-comment" : undefined}
            className={errors.comment ? "is-invalid" : ""}
          ></textarea>
          {errors.comment && <small id="error-comment" className="text-danger">{errors.comment}</small>}
        </div>
        <div className="col-12">
          <button type="submit" className="d-flex fw-500 cmn--btn align-items-center gap-2">
            <span className="get__text">Submit Comment</span>
            <span>
              <i className=" fz-20">
                <ArrowRight />
              </i>
            </span>
          </button>
          {submitted && <div className="mt-2 text-success">Comment submitted successfully.</div>}
        </div>
      </form>
    </div>
  );
};

export default Form;
