const Heading = ({ tag: Tag = "h1", children }) => {
    return <Tag className="text-2xl font-bold text-gray-900">{children}</Tag>;
  };
  
  export default Heading;
  