import React from "react";
import { View } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { Text } from "react-native-paper";
import FlexLayout from "../display/flex.component";
import { Spacer } from "../spacer/spacer.component";

type CustomPieChartProps = {
  title: string;
  innerCircleValue: string;
  data: any[];
};

const CustomPieChart = ({
  title,
  innerCircleValue,
  data,
}: CustomPieChartProps) => {
  const renderLegend = (text: string, color: String) => {
    return (
      <View style={{ flexDirection: "row", marginBottom: 12 }}>
        <View
          style={{
            height: 18,
            width: 18,
            marginRight: 10,
            borderRadius: 4,
            backgroundColor: (color as string) || "white",
          }}
        />
        <Text style={{ color: "black", fontSize: 16 }}>{text || ""}</Text>
      </View>
    );
  };

  return (
    <>
      <Spacer size="large" position="bottom">
        <Text variant="titleMedium" style={{ textAlign: "center" }}>
          {title}
        </Text>
      </Spacer>
      <PieChart
        donut
        showText
        textColor="white"
        fontWeight="bold"
        radius={150}
        textSize={20}
        data={data}
        innerRadius={50}
        centerLabelComponent={() => {
          return (
            <View>
              <Text
                style={{ color: "black", fontSize: 25, textAlign: "center" }}
              >
                {innerCircleValue as string}
              </Text>
            </View>
          );
        }}
      />
      <FlexLayout
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 20,
        }}
      >
        {data.map((item) => renderLegend(item.text, item.color))}
      </FlexLayout>
    </>
  );
};

export default CustomPieChart;
