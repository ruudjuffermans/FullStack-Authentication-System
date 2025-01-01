const Card = ({ children }) => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg select-text w-[500px] border">
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
};

export default Card;
