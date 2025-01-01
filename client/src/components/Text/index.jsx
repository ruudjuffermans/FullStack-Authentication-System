const Text = ({ tag: Tag = "p", children }) => {
  return <Tag className="mt-2 text-sm text-gray-400">{children}</Tag>;
};

export default Text;
