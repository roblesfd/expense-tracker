import styled from "styled-components/native";

type SeparatorProps = {
  color?: string;
  thickness?: number;
  marginVertical?: number;
};

const Separator = styled.View<SeparatorProps>`
  width: 100%;
  height: ${({ thickness }) => thickness || 1}px;
  background-color: ${({ color, theme }) =>
    color || theme.colors.ui.secondary || "#ccc"};
  margin-vertical: ${({ marginVertical }) => marginVertical || 8}px;
`;

const HorizontalSeparator = ({
  color,
  thickness,
  marginVertical,
}: SeparatorProps) => {
  return (
    <Separator
      color={color}
      thickness={thickness}
      marginVertical={marginVertical}
    />
  );
};

export default HorizontalSeparator;
