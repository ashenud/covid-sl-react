import React from "react";
// sections for this page/view
import LocalFigures from "views/PageDivisions/LocalFigures";
import GlobalFigures from "views/PageDivisions/GlobalFigures";
import LocalTimeLine from "views/PageDivisions/LocalTimeLine";
import LocalSideBar from "views/PageDivisions/LocalSideBar";
import GlobalSideBar from "views/PageDivisions/GlobalSideBar";
import MapArea from "views/PageDivisions/MapArea";

export default function MainContents() {
  return (
    <React.Fragment >
        <LocalFigures />
        <GlobalFigures />
        <LocalTimeLine />
        <LocalSideBar />
        <MapArea />
        <GlobalSideBar />
    </React.Fragment >
  );
}