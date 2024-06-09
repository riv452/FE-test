import React from "react";
import BootstrapCol from "react-bootstrap/Col";

const colStyle = {
  marginRight: "4%",
  marginLeft: "4%",
  minWidth: "15%",
};

const CustomCol = (props) => {
  const { xs, lg, children, ...rest } = props;
  return (
    <BootstrapCol style={colStyle} {...rest} xs={xs} lg={lg}>
      {children}
    </BootstrapCol>
  );
};

export default CustomCol;