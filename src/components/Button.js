import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Button = ({ label }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            playStore {
              cleanapps
            }
          }
        }
      }
    `
  );
  return (
    <button
      className="button"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = site.siteMetadata.playStore.cleanapps;
      }}
    >
      {label}
    </button>
  );
};

export default Button;
