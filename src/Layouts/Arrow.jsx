export const SampleArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#651fff",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};
