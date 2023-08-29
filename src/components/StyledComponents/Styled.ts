import styled from "styled-components";
type ContainerProps = {
  extraClassName?: string;
};
export const Container = styled.div.attrs<ContainerProps>((props) => ({
  className: `flex px-5 sm:px-10 ${props.extraClassName || ""}`,
}))``;
