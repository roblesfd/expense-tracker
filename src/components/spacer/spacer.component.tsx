import React, { ReactNode } from "react";
import styled, { DefaultTheme, useTheme } from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
  extraLarge: 4,
  "2xl": 5,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

type GetVariantProps = {
  position: "top" | "left" | "right" | "bottom";
  size: "small" | "medium" | "large" | "extraLarge" | "2xl";
  theme: DefaultTheme;
};

const getVariant = ({ position, size, theme }: GetVariantProps): string => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

type SpacerViewProps = {
  variant: string;
  children?: ReactNode;
};

const SpacerView: React.FC<SpacerViewProps> = styled.View`
  ${({ variant }) => variant};
`;

type SpacerProps = {
  position?: "top" | "left" | "right" | "bottom";
  size?: "small" | "medium" | "large" | "extraLarge" | "2xl";
  children?: ReactNode;
};

export const Spacer: React.FC<SpacerProps> = ({
  position = "top",
  size = "small",
  children,
}) => {
  const theme = useTheme();
  const variant = getVariant({ position, size, theme });
  return <SpacerView variant={variant as string}>{children}</SpacerView>;
};
