import { ReactNode } from "react";
import styled from "styled-components/native";

type ContainerProps = {
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  variant?: "autoHeight" | "fullHeight";
  children: ReactNode | ReactNode[];
};

const Container = ({
  bgColor = "transparent",
  borderColor = "transparent",
  textColor = "inherit",
  variant = "autoHeight",
  children,
}: ContainerProps) => {
  const ContainerStyles = styled.View`
    ${variant === "autoHeight" ? "height:auto;" : "flex:1;"}
    background-color: ${bgColor};
    color: ${textColor};
    align-items: "center";
    justify-content: "center";
    border-radius: 15px;
    border: 1px solid ${borderColor};
    padding-vertical: 15px;
    padding-horizontal: 12px;
    margin: 10px;
  `;

  return <ContainerStyles>{children}</ContainerStyles>;
};

export default Container;
