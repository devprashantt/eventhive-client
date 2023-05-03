import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "../../../components/Card/Card";

import BarChart from "../../../components/Charts/BarChart";
import React from "react";
import {
  barChartDataConsumption,
  barChartOptionsConsumption,
} from "../../../constants/charts";

export default function WeeklyRevenue(props) {
  const { ...rest } = props;

  return (
    <Card align="center" direction="column" w="100%" {...rest}>
      <Flex align="center" w="100%" px="15px" py="10px">
        <Text
          me="auto"
          color="#131315"
          fontSize="xl"
          fontWeight="700"
          lineHeight="100%"
        >
          Weekly Revenue
        </Text>
      </Flex>

      <Box h="250px" mt="auto">
        <BarChart
          chartData={barChartDataConsumption}
          chartOptions={barChartOptionsConsumption}
        />
      </Box>
    </Card>
  );
}
