import BootstrapContainer from "react-bootstrap/Container";

const containerStyle = {
  margin: "auto",
  borderWidth: "1px",
  borderStyle: "solid",
  padding: "16px 10px",
  textAlign: "center",
};

const CustomContainer = ({ children }) => (
  <BootstrapContainer style={containerStyle}>{children} </BootstrapContainer>
);

export default CustomContainer;