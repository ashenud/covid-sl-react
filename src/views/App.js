import React from "react";

// core components
import Navbar from "components/Navbars/IndexNavbar";
import PageLayout from "components/PageLayout/PageLayout";



export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  },[]);
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <PageLayout />
      </div>
    </>
  );
}
