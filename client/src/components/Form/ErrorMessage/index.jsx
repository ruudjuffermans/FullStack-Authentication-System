import { ErrorMessage as FormikErrorMessage } from "formik";

const ErrorMessage = ({ className, name, ...props }) => {
  return (
    <FormikErrorMessage
      name={name}
      render={(error) =>
        Array.isArray(error) ? (
          <div className={`py-2 ${className || ""}`}>
            {error.map((error, i) => (
              <div
                key={i}
                className="text-xs italic text-red-400 flex items-start"
              >
                <span className="mr-1">•</span>
                {error}
              </div>
            ))}
          </div>
        ) : (
          <div className={`py-2 ${className || ""}`}>
            <div className="text-xs italic text-red-400">
              {error}
            </div>
          </div>
        )
      }
    />
  );
};

export default ErrorMessage;
