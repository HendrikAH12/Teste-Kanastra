type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  variant: 'btn_green';
};

const Button = ({ type, title, variant } : ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant}`}
      type={type}
    >
      <label className="whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
}

export default Button;
