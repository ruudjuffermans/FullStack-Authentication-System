const FormControl = ({ className, ...props }) => {
    const baseClass = "mb-5 relative transition-all duration-1000 ease-in-out";
  
    return <div className={`${baseClass} ${className || ""}`} {...props} />;
  };
  
  export default FormControl;
  