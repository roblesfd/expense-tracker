import React, { ReactNode } from "react";
import styled from "styled-components/native";

type FlexLayoutProps = {
  flex?: "none" | number;
  direction?: "row" | "column";
  justifyContent?:
    | "start"
    | "space-around"
    | "space-between"
    | "center"
    | "end";
  alignItems?: "stretch" | "center" | "start" | "end";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: number; // Nuevo: Espaciado entre los elementos
  children: ReactNode | ReactNode[];
};

const FlexLayout: React.FC<FlexLayoutProps> = styled.View<FlexLayoutProps>`
  flex: ${({ flex = "none" }) => flex};
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  justify-content: ${({ justifyContent = "space-between" }) => justifyContent};
  align-items: ${({ alignItems = "center" }) => alignItems};
  flex-wrap: ${({ flexWrap = "nowrap" }) => flexWrap};
  gap: ${({ gap = 0 }) => `${gap}px`};
`;

export default FlexLayout;
