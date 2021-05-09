import React from "react";
// sections for this page/view
import MainContents from "components/Contents/MainContents";

export default function PageLayout() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <div className="main">
        <MainContents />
      </div>
    </div>
  );
}
