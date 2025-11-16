import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../layout/TabsLayout";

export default function PointBiSerialCorrelationTabs() {
  const explanationSections = [
    <Stack gap={4}>
      <Text>
        The point-biserial correlation (r_pb) quantifies the strength and
        direction of the association between a continuous variable and a
        dichotomous variable. Specifically, it determines the degree of
        relationship between two variables when one is continuous and the other is
        binary in nature. This measure is a special case of the Pearson
        correlation coefficient.
      </Text>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Range of point-biserial correlation</Text>
        <Text>
          The values for the point-biserial correlation range from -1 to +1:
        </Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>Positive r_pb (0 to +1):</Text> This indicates a
            positive association between the variables. As the values of the
            continuous variable increase, the likelihood of the dichotomous
            variable taking a particular value (e.g., 1) also tends to increase.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>r_pb close to 0:</Text> This suggests minimal or
            no association between the two variables.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>Negative r_pb (0 to -1):</Text> This indicates a
            negative association between the variables. As the values of the
            continuous variable increase, the likelihood of the dichotomous
            variable taking a particular value (e.g., 1) tends to decrease.
          </Text>
        </List.Item>
      </List>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Interpreting the magnitude of point-biserial correlation</Text>
        <Text>
          The interpretation of the point-biserial correlation as an absolute
          value is as follows:
        </Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>0.00 to 0.19:</Text> Very weak association
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.20 to 0.39:</Text> Weak association
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.40 to 0.59:</Text> Moderate association
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.60 to 0.79:</Text> Strong association
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.80 to 1.00:</Text> Very strong association
          </Text>
        </List.Item>
      </List>
    </Stack>,
  ];

  return (
    <ExplanationTabsLayout
      explanationSections={explanationSections}
      example1={
        <Text>
          Example 1 content will go here (e.g., a scatterplot, numerical example,
          or walkthrough).
        </Text>
      }
    />
  );
}

