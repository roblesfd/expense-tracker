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
  onPress: () => void;
};

const DropdownHeader: React.FC<DropdownHeaderProps> = styled(TouchableOpacity)`
  padding: 10px 15px;
  border-bottom-width: 1px;
`;

type DropdownProps = {
  items: any[];
  placeholder?: string | ReactNode;
  width?: string;
  childrenHeader: ReactNode | ReactNode[];
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
      <DropdownHeader onPress={() => setIsOpen(!isOpen)}>
        {childrenHeader}
      </DropdownHeader>
      {isOpen && <ScrollView>{children}</ScrollView>}
    </DropdownContainer>
  );
};

export default Dropdown;
