const Label = ({ className = "", name, label, children, ...props }) => {
  return (
    <label
      htmlFor={name}
      className={`relative block w-full text-sm text-gray-400 pb-0 ${className}`}
      {...props}
    >
      {label}
      {children}
    </label>
  );
};

export default Label;
