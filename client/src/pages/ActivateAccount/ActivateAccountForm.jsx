import React, { useRef } from "react";
import { Form } from "formik";
import withActivateAccountForm from "./withActivateAccountForm";
import Button from "../../components/Button";

const LoginForm = (x) => {
  const inputsRef = useRef([]);

  // Handles input change to move focus
  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    } else if (value.length === 0 && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  // Handles paste event
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = (e.clipboardData || window.clipboardData).getData("text");
    const digits = pasteData.replace(/\D/g, ""); // Extract digits only

    // Assign values from pasted string
    inputsRef.current.forEach((input, index) => {
      if (digits[index]) {
        input.value = digits[index];
        if (index < inputsRef.current.length - 1) {
          inputsRef.current[index + 1].focus();
        }
      }
    });
  };

  const gatherCode = () => {
    return inputsRef.current.map((input) => input.value).join("");
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const code = gatherCode();

    if (code.length === 6) {
      x.onSubmit({ code }); // Submit the code
    } else {
      alert("Please enter all 6 digits of the code.");
    }
  };

  return (
    <Form onSubmit={handleSubmit} style={{ display: "contents" }}>
      <div className="flex mb-2 space-x-2 rtl:space-x-reverse">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index}>
            <label htmlFor={`code-${index + 1}`} className="sr-only">
              Code {index + 1}
            </label>
            <input
              type="text"
              id={`code-${index + 1}`}
              maxLength="1"
              ref={(el) => (inputsRef.current[index] = el)}
              onChange={(e) => handleInputChange(e, index)}
              onPaste={index === 0 ? handlePaste : undefined}
              className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>
        ))}
      </div>
      <p
        className="mt-2 text-sm text-gray-400"
      >
        Please introduce the 6-digit code we sent via email.
      </p>

      <Button
        loading={x.isSubmitting.toString()}
        style={{ width: "100%" }}
        type="submit"
      >
        Activate
      </Button>
    </Form>
  );
};

export default withActivateAccountForm(LoginForm);
