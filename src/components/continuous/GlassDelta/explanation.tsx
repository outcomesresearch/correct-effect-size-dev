import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../../layout/TabsLayout";

export default function GlassDeltaTabs() {
  const explanationSections = [
    <Stack gap={4}>
      <Text>
        Glass&apos;s delta (∆) is a standardized measure that represents the
        magnitude of the difference between two groups, similar to Cohen&apos;s{" "}
        <Text span fs="italic">
          d
        </Text>
        . However, unlike Cohen&apos;s{" "}
        <Text span fs="italic">
          d
        </Text>
        , Glass&apos;s ∆ is computed by taking the difference between two means
        and dividing by the standard deviation of just one group, typically the
        control or baseline group.
      </Text>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Interpreting the magnitude of Glass&apos;s ∆</Text>
        <Text>
          The interpretation of Glass&apos;s ∆ as an absolute value is as
          follows:
        </Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>
              0.00 to 0.19:
            </Text>{" "}
            Negligible effect size
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>
              0.20 to 0.39:
            </Text>{" "}
            Small effect size
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>
              0.40 to 0.59:
            </Text>{" "}
            Medium effect size
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>
              0.60 to 0.79:
            </Text>{" "}
            Large effect size
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>
              0.80 to 1.00:
            </Text>{" "}
            Very large effect size
          </Text>
        </List.Item>
      </List>
    </Stack>,
    <Stack gap={0}>
      <Text fw={500}>When to use Glass&apos;s ∆</Text>
      <Text>
        Glass&apos;s ∆ is particularly useful when the groups being compared
        have different standard deviations or when the researcher wants to
        standardize the mean difference using the variability of a specific
        reference group.
      </Text>
    </Stack>,
  ];

  return (
    <ExplanationTabsLayout
      explanationSections={explanationSections}
      example1={
        <Text>
          Example 1 content will go here (e.g., a scatterplot, numerical
          example, or walkthrough).
        </Text>
      }
    />
  );
}
