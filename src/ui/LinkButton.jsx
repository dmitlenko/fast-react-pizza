import { Link, useNavigate } from "react-router-dom";

const buttonStyles =
  "text-sm text-blue-500 hover:text-blue-700 hover:underline";

export default function LinkButton({ to, children }) {
  const navigate = useNavigate();

  if (to === -1)
    return (
      <button onClick={() => navigate(-1)} className={buttonStyles}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={buttonStyles}>
      {children}
    </Link>
  );
}
