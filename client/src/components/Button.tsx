import "../styles/components/button.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", onClick }) => {
  return (
    <button onClick={onClick} className={variant === "primary" ? "btn-primary" : "btn-secondary"}>
      {children}
    </button>
  );
};

export default Button;
