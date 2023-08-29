import React from "react";
import { Container } from "../../StyledComponents/Styled";

export const TopBar = () => {
  return (
    <Container className="justify-between bg-blue-600 text-white font-semibold">
      <p className="cursor-pointer">24/7 Customer service 0000-1111</p>
      <p className="cursor-pointer">Track Order</p>
    </Container>
  );
};
