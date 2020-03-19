import React from "react";
import Modal from "../components/Modal/Modal";
// import axios from "../axios-characters";

const ErrorHandler = WrappedComponent => {
  return props => {
    return (
      <>
        <Modal>Something went wrong!</Modal>
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default ErrorHandler;
