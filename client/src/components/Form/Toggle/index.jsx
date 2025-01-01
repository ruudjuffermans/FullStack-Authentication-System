import { Field } from "formik";

const Toggle = ({ className, round, name }) => {
  const baseToggleClass = "w-10 h-6 bg-gray-300 rounded-full relative transition duration-300 ease-in-out";
  const roundClass = "rounded-full";
  const sliderBaseClass = "absolute inset-0 w-4 h-4 bg-white rounded-full shadow transform transition duration-300 ease-in-out";
  const sliderCheckedClass = "translate-x-4";

  return (
    <Field
      type="checkbox"
      name={name}
      render={({ field }) => (
        <label className="inline-flex items-center cursor-pointer">
          <input
            {...field}
            className="sr-only"
            type="checkbox"
          />
          <div
            className={`${baseToggleClass} ${className || ""} ${round ? roundClass : ""} peer-focus:ring-2 peer-focus:ring-blue-500 peer-focus:ring-offset-2`}
          >
            <span
              className={`${sliderBaseClass} peer-checked:${sliderCheckedClass} ${round ? "rounded-full" : "rounded"}`}
            ></span>
          </div>
        </label>
      )}
    />
  );
};

export default Toggle;
