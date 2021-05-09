import React from "react";
// sections for this page/view
import LocalFigures from "views/Figures/LocalFigures";
import GlobalFigures from "views/Figures/GlobalFigures";

export default function MainContents() {
  return (
    <React.Fragment >
        <LocalFigures />
        <GlobalFigures />
    </React.Fragment >
  );
}