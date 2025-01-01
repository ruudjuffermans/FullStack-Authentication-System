const Col = ({ children, className = "", ...props }) => {
    return (
      <div className={`flex-1 ${className}`} {...props}>
        {children}
      </div>
    );
  };

const Row = ({ children, className = "", ...props }) => {
    return (
      <div
        className={`flex flex-wrap gap-5 h-full ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  };
  
  Row.Col = Col

  
  export default Row;
  