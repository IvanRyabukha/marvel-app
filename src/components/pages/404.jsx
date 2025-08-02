import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import useHover from "../../hooks/useHover";
import ErrorMessage from "../errorMessage/ErrorMessage";

const Page404 = () => {
  const [hoverRef, isHovered] = useHover();

  const linkStyle = {
    display: "block",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "24px",
    marginTop: "30px",
    color: isHovered ? "#9f0013" : "inherit",
  };

  return (
    <div>
      <Helmet>
        <meta name="description" content="This page is not found" />
        <title>This page is not found</title>
      </Helmet>
      <ErrorMessage />
      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px" }}>
        Page doesn't exist
      </p>
      <Link ref={hoverRef} style={linkStyle} to={"/"}>
        Back to main page
      </Link>
    </div>
  );
};

export default Page404;
