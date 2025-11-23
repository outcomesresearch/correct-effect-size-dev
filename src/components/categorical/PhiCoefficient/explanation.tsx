import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../../layout/TabsLayout";

export default function PhiCoefficientTabs() {
  const explanationSections = [
    <Stack gap={4}>
      <Text>
        The phi coefficient (Φ) is a measure used to express the degree of
        association between two dichotomous variables. Specifically, it
        quantifies the correlation in a 2 x 2 contingency table. Derived from
        the Pearson correlation coefficient, the phi coefficient is particularly
        effective when exploring the relationship between two binary variables.
      </Text>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Range of phi coefficient</Text>
        <Text>Phi coefficient values can range from -1 to +1:</Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>
              Positive Φ (0 to +1):
            </Text>{" "}
            This indicates a positive association between the variables. If one
            variable takes a particular value, the other variable is more likely
            to take a specific value as well.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>
              Φ close to 0:
            </Text>{" "}
            This suggests minimal or no association between the two variables,
            implying that the variables are independent of each other.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>
              Negative Φ (0 to -1):
            </Text>{" "}
            This implies a negative association between the variables. If one
            variable takes a particular value, the other variable is less likely
            to take a specific value.
          </Text>
        </List.Item>
      </List>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Interpretation of phi coefficient values</Text>
        <Text>The interpretation of phi coefficient values is as follows:</Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>
              0.1 to 0.3:
            </Text>{" "}
            Small effect size
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>
              0.3 to 0.5:
            </Text>{" "}
            Medium effect size
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>
              &gt;0.5:
            </Text>{" "}
            Large effect size
          </Text>
        </List.Item>
      </List>
      <Text mt={4}>
        The interpretation of the phi coefficient is context-dependent, and the
        above thresholds are general guidelines. For some applications, even
        smaller values might indicate meaningful associations, especially if
        sample sizes are large.
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
