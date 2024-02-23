import { Link } from "react-router-dom";

const baseStyle =
  "text-sm active:inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const buttonStyles = {
  primary: `${baseStyle} px-4 py-3 sm:px-6 sm:py-4`,
  small: `${baseStyle} px-4 py-2 md:px-5 md:py-2.5 text-xs`,
  round: `${baseStyle} px-2.5 py-1 md:px-3.5 md:py-2 text-sm rounded-full`,
  secondary:
    "text-sm active:inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 px-4 py-2.5 sm:px-6 sm:py-3.5",
};

export default function Button({ children, to, type, ...props }) {
  if (to)
    return (
      <Link to={to} className={buttonStyles[type]} {...props}>
        {children}
      </Link>
    );

  return (
    <button className={buttonStyles[type]} {...props}>
      {children}
    </button>
  );
}
