import React from "react";
// sections for this page/view
import LocalFigures from "views/Figures/LocalFigures";
import GlobalFigures from "views/Figures/GlobalFigures";
import LocalTimeLine from "views/Charts/LocalTimeLine";

export default function MainContents() {
  return (
    <React.Fragment >
        <LocalFigures />
        <GlobalFigures />
        <LocalTimeLine />
    </React.Fragment >
  );
}