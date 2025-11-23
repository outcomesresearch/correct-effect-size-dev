import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../../layout/TabsLayout";

export default function SurvivalRateDifferenceTabs() {
  const explanationSections = [
    <Stack gap={4}>
      <Text>
        Survival rate difference is a nonparametric statistic used to quantify the
        difference in survival probabilities between two groups at a specific time
        point. Specifically, it measures the absolute difference in the proportion
        of subjects who are event-free in one group as compared with another. It
        is particularly useful when assessing the comparative effectiveness of two
        treatments or interventions on survival.
      </Text>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Range of survival rate difference</Text>
        <Text>
          Survival rate difference values are expressed as percentages, typically
          ranging from -100% to 100%. The interpretation revolves around the
          comparison of survival rates between two groups:
        </Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>Positive survival rate difference:</Text> This
            indicates that Group A has a higher proportion of subjects who are
            event-free as compared with Group B.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>No survival rate difference (0%):</Text> This
            implies that both groups have a similar proportion of subjects who are
            event-free.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>Negative survival rate difference:</Text> This
            indicates that Group A has a lower proportion of subjects who are
            event-free as compared with Group B.
          </Text>
        </List.Item>
      </List>
    </Stack>,
    <Stack gap={0}>
      <Text fw={500}>Interpretation</Text>
      <Text>
        Because the survival rate difference is a percentage-based measurement and
        does not fall within a standardized numeric range (e.g., -1 to +1, 0 to
        1), there are no fixed value categories like &quot;weak&quot; or
        &quot;strong.&quot; However, the significance or importance of the
        survival rate difference can be assessed based on clinical or practical
        significance, background knowledge, or other contextual factors.
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

