import { useField, useFormikContext } from "formik";
import FormControl from "../FormControl";
import Label from "../Label";
import ErrorMessage from "../ErrorMessage";

const Field = ({ className, label, ...props }) => {
  const [field, meta] = useField(props);
  const { setFieldTouched } = useFormikContext(); // Access Formik context
  
  const baseInputClass =
    "block w-full placeholder-gray-300 px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 transition duration-300";
  const errorClass = "border-red-300 focus:ring-red-200";
  const normalClass = "border-gray-300 focus:ring-blue-200";

  const handleBlur = (e) => {
    setFieldTouched(field.name, true, false); // Mark only this field as touched
    field.onBlur(e); // Call Formik's default onBlur
  };

  return (
    <div>
      <FormControl>
        <Label name={field.name} label={label} />
        <input
          className={`${baseInputClass} ${
            meta.touched && meta.error ? errorClass : normalClass
          } ${className || ""}`}
          value={field.value}
          {...props}
          onBlur={handleBlur}
          onChange={field.onChange}
        />
        {meta.touched && <ErrorMessage name={field.name} />}
      </FormControl>
    </div>
  );
};

export default Field;
