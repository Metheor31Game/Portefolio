import Link from "next/link";

type ButtonColor = "indigo" | "green" | "red";
type ButtonSize = "sm" | "base" | "lg";

interface ButtonProps {
  href: string;
  text: string;
  color?: ButtonColor;
  size?: ButtonSize;
  onClick?: () => void;
}

const Button = ({
  href,
  text,
  color = "indigo",
  size = "base",
  onClick,
}: ButtonProps) => {
  const colorStyles: Record<ButtonColor, string> = {
    indigo: "bg-indigo-700 hover:bg-indigo-800",
    green: "bg-green-600 hover:bg-green-700",
    red: "bg-red-500 hover:bg-red-600",
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-3 py-2 text-sm",
    base: "px-5 py-3 text-base",
    lg: "px-6 py-4 text-lg",
  };

  return (
    <div className="inline-flex rounded-md shadow">
      <Link
        href={href}
        onClick={onClick}
        className={`inline-flex items-center justify-center border border-transparent font-medium rounded-md text-white ${colorStyles[color]} ${sizeStyles[size]}`}
      >
        {text}
      </Link>
    </div>
  );
};

export default Button;
