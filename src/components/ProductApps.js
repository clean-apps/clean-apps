import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const ProductApps = (props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            github {
              cleanscan
              cleanlauncher
              cleanhabits
              cleantodo
            }
            playStore {
              cleanscan
              cleanlauncher
              cleanhabits
              cleantodo
            }
          }
        }
      }
    `
  );

  let { github, playStore } = site.siteMetadata;

  return (
    <section className="product-app">
      <div className="product-app-group">
        <div className="product-app-1-tagline">
          Clean Scan <br />
          <small className="subtitle">Document Scanner</small>
          <div className="b-row">
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = github.cleanscan;
              }}
              className="button-outline"
            >
              More Info
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = playStore.cleanscan;
              }}
              className="button"
            >
              Download
            </button>
          </div>
        </div>
        <div className="product-app-1-image"></div>

        <div className="product-app-2-tagline">
          Clean Habits <br />
          <small className="subtitle">Miminal Habit Tracker</small>
          <div className="b-row">
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = github.cleanhabits;
              }}
              className="button-outline"
            >
              More Info
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = playStore.cleanhabits;
              }}
              className="button"
            >
              Download
            </button>
          </div>
        </div>
        <div className="product-app-2-image"></div>

        <div className="product-app-3-tagline">
          Clean Launcher <br />
          <small className="subtitle">NoDistraction Launcher</small>
          <div className="b-row">
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = github.cleanlauncher;
              }}
              className="button-outline"
            >
              More Info
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = playStore.cleanlauncher;
              }}
              className="button"
            >
              Download
            </button>
          </div>
        </div>
        <div className="product-app-3-image"></div>

        <div className="product-app-4-tagline">
          Clean To-Do <br />
          <small className="subtitle">Task Management and To-Do Lists</small>
          <div className="b-row">
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = github.cleantodo;
              }}
              className="button-outline"
            >
              More Info
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = playStore.cleantodo;
              }}
              className="button"
            >
              Download
            </button>
          </div>
        </div>
        <div className="product-app-4-image"></div>
      </div>
    </section>
  );
};

export default ProductApps;
