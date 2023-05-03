// Chakra imports
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import Card from "../../../components/Card/Card";
import LineChart from "./../../../components/Charts/LineChart";
import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { RiArrowUpSFill } from "react-icons/ri";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "../../../constants/charts";

export default function TotalSpent(props) {
  const { ...rest } = props;

  return (
    <Card
      justifyContent="center"
      align="center"
      direction="column"
      w="100%"
      padding="20px"
      mb="0px"
      {...rest}
    >
      <Flex w="100%" flexDirection={{ base: "column", lg: "row" }}>
        <Flex flexDirection="column" me="20px" justifyContent="center">
          <Text
            color="black"
            fontSize="34px"
            textAlign="start"
            fontWeight="700"
            lineHeight="100%"
          >
            $37.5K
          </Text>
          <Flex align="center" mb="20px">
            <Text color="gray" fontSize="sm" fontWeight="500" me="12px">
              Total Spent
            </Text>
            <Flex align="center">
              <Icon as={RiArrowUpSFill} color="green" />
              <Text color="green" fontSize="sm" fontWeight="700">
                +2.45%
              </Text>
            </Flex>
          </Flex>

          <Flex align="center">
            <Icon as={IoCheckmarkCircle} color="green" me="4px" />
            <Text color="green" fontSize="md" fontWeight="700">
              On track
            </Text>
          </Flex>
        </Flex>
        <Box minH="260px" width="100%" mt="auto">
          <LineChart
            chartData={lineChartDataTotalSpent}
            chartOptions={lineChartOptionsTotalSpent}
          />
        </Box>
      </Flex>
    </Card>
  );
}
