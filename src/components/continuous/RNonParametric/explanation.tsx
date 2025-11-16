import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../../layout/TabsLayout";

export default function RNonParametricTabs() {
  const explanationSections = [
    <Stack gap={4}>
      <Text>
        The <Text span fs="italic">r</Text> correlation coefficient is a standardized measure that represents the
        strength and direction of a linear relationship between two ordinal or
        ranked variables without making assumptions about the distribution of the
        variables. In the context of nonparametric statistics, it refers to
        measures like Spearman&apos;s ρ.
      </Text>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Range of <Text span fs="italic">r</Text> correlation coefficient</Text>
        <Text>
          The <Text span fs="italic">r</Text> correlation coefficient values range from -1 to +1, with the
          following meanings:
        </Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>0 to +1:</Text> There is a positive association. As
            the values of one variable increase, the values of the other variable
            tend to increase as well.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0 to -1:</Text> There is a negative association.
            As the values of one variable increase, the values of the other
            variable tend to decrease.
          </Text>
        </List.Item>
      </List>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Interpreting the magnitude of <Text span fs="italic">r</Text></Text>
        <Text>
          The interpretation of the <Text span fs="italic">r</Text> correlation coefficient as an absolute value
          is as follows:
        </Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>0.00 to 0.19:</Text> Negligible effect size
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.20 to 0.39:</Text> Small effect size
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.40 to 0.59:</Text> Medium effect size
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.60 to 0.79:</Text> Large effect size
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.80 to 1.00:</Text> Very large effect size
          </Text>
        </List.Item>
      </List>
    </Stack>,
    <Stack gap={0}>
      <Text fw={500}>When to use <Text span fs="italic">r</Text></Text>
      <Text>
        The <Text span fs="italic">r</Text> value is particularly useful when dealing with data that do not meet
        the assumptions of parametric tests, such as data that are not normally
        distributed or that have outliers.
      </Text>
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

