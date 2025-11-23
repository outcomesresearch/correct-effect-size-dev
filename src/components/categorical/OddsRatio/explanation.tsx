import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../../layout/TabsLayout";

export default function OddsRatioTabs() {
  const explanationSections = [
    <Stack gap={4}>
      <Text>
        The odds ratio (OR) is used to analyze results from case-control
        studies. Due to its suitability for comparing the odds of an outcome
        between two groups, it can also be used in other clinical research
        circumstances. The OR quantifies how much larger the odds for exposure
        (risk factor) are among cases as compared with controls.
      </Text>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Range of OR</Text>
        <Text>OR values can range from 0 to positive infinity:</Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>
              OR = 1:
            </Text>{" "}
            This indicates that there is no association between the exposure and
            the outcome, which suggests that the odds of the event are the same
            in both the exposed and nonexposed groups.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>
              OR &gt; 1:
            </Text>{" "}
            This shows that the odds of the event are higher in the exposed
            group as compared with the nonexposed group.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>
              OR &lt; 1:
            </Text>{" "}
            This implies that the odds of the event are lower in the exposed
            group as compared with the nonexposed group.
          </Text>
        </List.Item>
      </List>
      <Text mt={4}>Note that the OR value cannot be negative.</Text>
    </Stack>,
    <Stack gap={0}>
      <Text fw={500}>Interpretation</Text>
      <Text>
        Interpreting the exact values of ORs is context-dependent and involves
        consideration of the specific domain, dataset, or health outcome being
        assessed. Although OR values greater than 1 indicate increased odds due
        to exposure and those less than 1 indicate decreased odds, the specific
        thresholds for what is considered significant or clinically relevant can
        vary.
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
