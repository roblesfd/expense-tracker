import { View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { Text } from "react-native-paper";
import { Spacer } from "../spacer/spacer.component";

type CustomBarChartProps = {
  data: any[];
  title?: string;
};

const CustomBarChart = ({ data, title }: CustomBarChartProps) => {
  return (
    <View style={{ paddingHorizontal: 0 }}>
      <Spacer size="large" position="bottom">
        <Text variant="titleMedium" style={{ textAlign: "center" }}>
          {title}
        </Text>
      </Spacer>
      <BarChart data={data} barWidth={13} spacing={8} barBorderRadius={3} />;
    </View>
  );
};

export default CustomBarChart;
