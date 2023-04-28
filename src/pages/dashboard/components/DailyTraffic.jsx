import React from "react";

// Chakra imports
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import BarChart from "./../../../components/Charts/BarChart";

// Custom components
import Card from "../../../components/Card/Card";
import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
} from "../../../constants/charts";

// Assets
import { RiArrowUpSFill } from "react-icons/ri";

export default function DailyTraffic(props) {
  const { ...rest } = props;

  return (
    <Card px="10" align="center" direction="column" w="100%" {...rest}>
      <Flex justify="space-between" align="start" px="10px" pt="5px">
        <Flex flexDirection="column" align="start" me="20px">
          <Flex w="100%">
            <Text me="auto" color="gray" fontSize="sm" fontWeight="500">
              Daily Traffic
            </Text>
          </Flex>
          <Flex align="end">
            <Text
              color="black"
              fontSize="34px"
              fontWeight="700"
              lineHeight="100%"
            >
              2.579
            </Text>
            <Text ms="6px" color="gray" fontSize="sm" fontWeight="500">
              Visitors
            </Text>
          </Flex>
        </Flex>
        <Flex align="center">
          <Icon as={RiArrowUpSFill} color="green" />
          <Text color="green" fontSize="sm" fontWeight="700">
            +2.45%
          </Text>
        </Flex>
      </Flex>
      <Box h="240px" mt="auto">
        <BarChart
          chartData={barChartDataDailyTraffic}
          chartOptions={barChartOptionsDailyTraffic}
        />
      </Box>
    </Card>
  );
}
