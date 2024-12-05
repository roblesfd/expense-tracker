import { View } from "react-native";
import FlexLayout from "../../../components/display/flex.component";
import { Text } from "../../../components/typography/text.component";
import { IconButton } from "react-native-paper";
import { useState } from "react";
import { useTheme } from "styled-components/native";

type TotalBalanceProps = {
  total: number;
};

const TotalBalance = ({ total }: TotalBalanceProps) => {
  const [totalBalanceVisible, setTotalBalanceVisible] = useState(false);
  const theme = useTheme();

  return (
    <FlexLayout justifyContent="space-between" alignItems="center">
      <View style={{ flex: 1 }}>
        <Text variant="h5">Saldo total</Text>
        <Text variant="h4">{totalBalanceVisible ? total : "$*******"}</Text>
      </View>
      <IconButton
        icon={totalBalanceVisible ? "eye" : "eye-off"}
        iconColor={theme.colors.brand.primary}
        size={25}
        onPress={() => setTotalBalanceVisible(!totalBalanceVisible)}
      />
    </FlexLayout>
  );
};

export default TotalBalance;
