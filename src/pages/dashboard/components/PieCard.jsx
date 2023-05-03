import { Box, Flex, Text, Select, useColorModeValue } from "@chakra-ui/react";
import Card from "../../../components/Card/Card";
import PieChart from "../../../components/Charts/PieChart";
import { pieChartData, pieChartOptions } from "../../../constants/charts";
import React from "react";

export default function Conversion(props) {
  const { ...rest } = props;

  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Card p="20px" align="center" direction="column" w="100%" {...rest}>
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <Text color={textColor} fontSize="md" fontWeight="600">
          Your Pie Chart
        </Text>
      </Flex>

      <PieChart
        h="100%"
        w="100%"
        chartData={pieChartData}
        chartOptions={pieChartOptions}
      />
      <Card flexDirection="row" w="100%" p="15px" px="20px" mx="auto">
        Information to show
      </Card>
    </Card>
  );
}
