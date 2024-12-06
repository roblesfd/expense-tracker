import React, { ReactNode, useState } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import styled from "styled-components/native";

type DropdownContainerProps = {
  width?: string;
  children: ReactNode | ReactNode[];
};

const DropdownContainer: React.FC<DropdownContainerProps> = styled.View`
  width: ${({ width }) => width || "100%"};
  border: 1px solid ${({ theme }) => theme.colors.ui.secondary || "inherit"};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.bg.primary || "inherit"};
`;

type DropdownHeaderProps = {
  children: ReactNode | ReactNode[];
  isOpen: boolean;
  onPress: () => void;
};

const StyledTouchableOpacity = styled(TouchableOpacity)<{ isOpen: boolean }>`
  padding: 10px 15px;
  border-bottom-width: ${({ isOpen }) => (isOpen ? "1px" : "0px")};
  border-bottom-color: ${({ theme }) => theme.colors.ui.secondary};
`;

const DropdownHeader: React.FC<DropdownHeaderProps> = ({
  children,
  isOpen,
  onPress,
}) => (
  <StyledTouchableOpacity isOpen={isOpen} onPress={onPress}>
    {children}
  </StyledTouchableOpacity>
);

type DropdownProps = {
  items: any[];
  placeholder?: string | ReactNode;
  width?: string;
  childrenHeader:
    | ReactNode
    | ((
        isOpen: boolean,
        setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
      ) => ReactNode);
  children: ReactNode | ReactNode[];
};

const Dropdown: React.FC<DropdownProps> = ({
  items,
  width,
  childrenHeader,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer width={width}>
      <DropdownHeader isOpen={isOpen} onPress={() => setIsOpen(!isOpen)}>
        {typeof childrenHeader === "function"
          ? childrenHeader(isOpen, setIsOpen)
          : childrenHeader}
      </DropdownHeader>
      {isOpen && <ScrollView>{children}</ScrollView>}
    </DropdownContainer>
  );
};

export default Dropdown;
