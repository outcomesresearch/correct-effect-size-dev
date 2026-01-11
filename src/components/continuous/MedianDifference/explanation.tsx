import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../../layout/TabsLayout";

export default function MedianDifferenceTabs() {
  const explanationSections = [
    // Intro
    <Stack gap={4}>
      <Text>
        Median difference measures the absolute difference between the medians
        (the middle value within a set of values when arranged in order) of two
        or more groups of interest. The median difference is especially valuable
        when data distributions are skewed or have notable outliers, as medians
        are less influenced by these factors as compared with means.
      </Text>
    </Stack>,
    // Multiple groups section
    <Stack gap={4}>
      <Text>
        For comparisons involving 3 or more groups, the median difference is
        calculated through pairwise comparisons and is done similar to when comparing two groups, with the only
        difference being adjustment of alpha error for multiple comparisons.
      </Text>
    </Stack>,
    // Range section
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Range of Median Difference</Text>
        <Text>
          Median difference values range from negative to positive, with the
          following meanings:
        </Text>
      </Stack>

      <List spacing={2}>
        <List.Item>
          <Text>
            A{" "}
            <Text span fw={500}>
              positive value
            </Text>{" "}
            indicates that the median of the first group (often referred to as
            the &quot;treatment&quot; or &quot;experimental&quot; group) is
            higher than the median of the second group (often the
            &quot;control&quot; or &quot;comparison&quot; group).
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            A{" "}
            <Text span fw={500}>
              negative value
            </Text>{" "}
            indicates that the median of the first group is lower than that of
            the second group.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            A{" "}
            <Text span fw={500}>
              value close to 0
            </Text>{" "}
            suggests that there is little to no difference between the medians
            of the two groups.
          </Text>
        </List.Item>
      </List>
    </Stack>,
    // Interpretation section
    <Stack gap={0}>
      <Text fw={500}>Interpretation</Text>
      <Text>
        The measured values for median difference will vary for each specific
        outcome measure and thus do not have standardized values and
        interpretations.
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
      // example2 can be added later:
      // example2={<Text>Example 2 content…</Text>}
    />
  );
}
