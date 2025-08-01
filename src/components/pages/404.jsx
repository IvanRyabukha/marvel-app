import useHover from "../../hooks/useHover";

import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
  const [hoverRef, isHovered] = useHover();

  const linkStyle = {
    display: 'block',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '24px',
    marginTop: '30px',
    color: isHovered ? '#9f0013' : 'inherit',
  };

  return (
    <div>
      <ErrorMessage />
      <p style={{textAlign: 'center', fontWeight: 'bold', fontSize: '24px'}}>Page doesn't exist</p>
      <Link
        ref={hoverRef}
        style={linkStyle}
        to={'/'}
      >
        Back to main page
      </Link>
    </div>
  );
};

export default Page404;