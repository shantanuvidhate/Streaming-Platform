import clsx from "clsx";

interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined;
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean;
  }
  const Button: React.FC<ButtonProps> = ({
    type = "button",
    fullWidth,
    children,
    onClick,
    secondary,
    danger,
    disabled,
  }) => {
    return ( 
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={clsx(`
        bg-red-600 text-white w-full mt-6 hover:bg-red-700 transition py-3 rounded-md font-semibold flex flex-row items-center justify-center`,
        disabled && 'opacity-80 cursor-default hover:bg-red-600'
        )}
      >
        {children}
      </button>
     );
  }
   
  export default Button;