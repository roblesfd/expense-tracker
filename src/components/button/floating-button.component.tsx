import React, { ReactNode } from "react";
import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { Button } from "react-native-paper";

const FloatingButton = styled.Pressable`
  border-width: 1px;
  border-color: red;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  position: absolute;
  bottom: 55px;
  right: 7px;
  background-color: red;
  border-radius: 35px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 3.84px;
  elevation: 5; /* Para Android */
  z-index: 10;
`;

type FloatingButtonProps = {
  children: ReactNode;
  onPress: () => void;
};

const FloatingButtonContainer: React.FC<FloatingButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <View style={{ flex: 1 }}>
      <FloatingButton onPress={onPress}>
        <Ionicons name="add" size={25} color="white" />
      </FloatingButton>
      {children}
    </View>
  );
};

export default FloatingButtonContainer;
