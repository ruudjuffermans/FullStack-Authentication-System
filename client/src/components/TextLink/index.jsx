import { NavLink, Link } from "react-router-dom";

const TextLink = ({
  children,
  button,
  nav,
  bold,
  small,
  underline,
  className,
  ...props
}) => {
  let Component = button ? "button" : nav ? NavLink : Link;

  const classes = [
    "relative",
    "transition-colors",
    "text-gray-600",
    "whitespace-nowrap",
    "hover:opacity-100",
    underline &&
      "before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-current before:to-transparent before:bg-[length:220%_100%] before:bg-right before:transition-[background-position] hover:before:bg-left",
    nav && "px-2 ml-2",
    bold && "font-light",
    small && "text-sm",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export const withLink = (WrappedComponent) => {
  return ({ to, className, ...props }) => (
    <Link className={className} to={to}>
      <WrappedComponent {...props} />
    </Link>
  );
};

export default TextLink;
