import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../TabsLayout";

export default function CohensDTabs() {
  const explanationSections = [
    <Stack gap={4}>
      <Text>
        Cohen&apos;s d is a standardized measure that represents the magnitude of
        the difference between two groups by taking the difference between the
        means and dividing by the pooled standard deviation.
      </Text>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Interpreting the magnitude of Cohen&apos;s d</Text>
        <Text>
          The interpretation of Cohen&apos;s d as an absolute value is as follows:
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
      <Text fw={500}>Standardized measure</Text>
      <Text>
        Cohen&apos;s d will measure a standardized difference irrespective of sample
        size, thus making it a valuable tool for understanding the practical
        significance of results.
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

