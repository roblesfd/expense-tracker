import { ReactNode } from "react";
import styled, { ExecutionContext } from "styled-components/native";

const defaultTextStyles = (theme: ExecutionContext["theme"]) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: ExecutionContext["theme"]) => `
    font-size: ${theme.fontSizes.body};
`;
const h5 = (theme: ExecutionContext["theme"]) => `
    font-size: ${theme.fontSizes.h5};
    font-weight: ${theme.fontWeights.medium};
`;
const h4 = (theme: ExecutionContext["theme"]) => `
    font-size: ${theme.fontSizes.h4};
    font-weight: ${theme.fontWeights.medium};
`;
const h3 = (theme: ExecutionContext["theme"]) => `
    font-size: ${theme.fontSizes.h3};
    font-weight: ${theme.fontWeights.medium};
`;

const hint = (theme: ExecutionContext["theme"]) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme: ExecutionContext["theme"]) => `
    color: ${theme.colors.text.error};
`;

const success = (theme: ExecutionContext["theme"]) => `
    color: ${theme.colors.text.success};
`;

const caption = (theme: ExecutionContext["theme"]) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: ExecutionContext["theme"]) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  success,
  hint,
  h5,
  h4,
  h3,
};

type TextProps = {
  variant:
    | "body"
    | "label"
    | "caption"
    | "error"
    | "success"
    | "hint"
    | "h5"
    | "h4"
    | "h3";
  children: ReactNode;
};

export const Text: React.FC<TextProps> = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;
