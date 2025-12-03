import { tv } from "tailwind-variants";

const buttonStyle = tv({
  base:
    "w-64 rounded shadow-md font-medium duration-300 disabled:cursor-not-allowed disabled:opacity-60",

  variants: {
    variant: {
      solid:
        "border border-transparent bg-purple-500 text-white enabled:hover:bg-purple-600 cursor-pointer",
      blue:
        "border border-transparent bg-blue-600 text-white enabled:hover:bg-blue-700 cursor-pointer",
      confirm:
        "border border-transparent bg-green-500 text-white enabled:hover:bg-green-600 cursor-pointer",
      caution:
        "border border-transparent bg-yellow-500 text-gray-900 enabled:hover:bg-yellow-600 cursor-pointer",
      danger:
        "border border-transparent bg-red-500 text-slate-100 enabled:hover:bg-red-700 cursor-pointer",
      ghost:
        "border border-purple-500 text-purple-500 cursor-pointer enabled:hover:bg-purple-50 enabled:hover:text-purple-700",
    },
    size: {
      sm: "px-2.5 py-1.5 text-xs",
      md: "px-3 py-2 text-sm",
      lg: "px-5 py-2 text-lg",
    },
  },

  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});

const Button = ({
  children,
  variant = "solid",
  type = "button", // NATIVE HTML type!
  disabled = false,
  loading = false,
  size = "lg",
  className,
  onClick,
}) => {
  return (
    <button
      type={type} // can be "submit", "reset", or "button"
      onClick={onClick}
      aria-busy={loading}
      disabled={disabled || loading}
      className={buttonStyle({ variant, size, className })}
    >
      {loading ? (
        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
