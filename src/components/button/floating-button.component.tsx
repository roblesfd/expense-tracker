import React, { ReactNode } from "react";
import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

type FloatingButtonProps = {
  children?: ReactNode;
  bgColor: string;
  onPress: () => void;
};

const StyledFloatingButton = styled(Pressable)<{ bgColor: string }>`
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  position: absolute;
  bottom: 55px;
  right: 7px;
  background-color: ${({ bgColor }) => bgColor || "inherit"};
  border-radius: 35px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 3.84px;
  elevation: 5;
  /* Para Android */
  z-index: 10;
`;

const FloatingButton: React.FC<FloatingButtonProps> = ({
  children,
  bgColor,
  onPress,
}) => {
  return (
    <View style={{ flex: 1 }}>
      <StyledFloatingButton onPress={onPress} bgColor={bgColor}>
        <Ionicons name="add" size={25} color="white" />
      </StyledFloatingButton>
      {children}
    </View>
  );
};

export default FloatingButton;
