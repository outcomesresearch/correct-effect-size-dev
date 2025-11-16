import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../layout/TabsLayout";

export default function HedgesGTabs() {
  const explanationSections = [
    <Stack gap={4}>
      <Text>
        Hedge&apos;s g is a standardized measure that represents the magnitude of
        the difference between two groups in terms of standard deviations, similar
        to Cohen&apos;s d and Glass&apos;s ∆. The difference is its incorporated
        correction of biases in small sample sizes, thus making it an unbiased
        estimator of the population effect size.
      </Text>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Interpreting the magnitude of Hedge&apos;s g</Text>
        <Text>
          The interpretation of Hedge&apos;s g as an absolute value is as follows:
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
      <Text fw={500}>When to use Hedge&apos;s g</Text>
      <Text>
        Hedge&apos;s g is particularly useful when dealing with small sample sizes
        due to its bias correction.
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

