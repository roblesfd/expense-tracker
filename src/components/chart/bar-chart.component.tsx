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
    <View>
      <Spacer size="large" position="bottom">
        <Text variant="titleMedium" style={{ textAlign: "center" }}>
          {title as string}
        </Text>
      </Spacer>
      <BarChart data={data} />;
    </View>
  );
};

export default CustomBarChart;
