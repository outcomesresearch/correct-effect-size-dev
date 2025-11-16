import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../TabsLayout";

export default function MeanDifferenceTabs() {
  const explanationSections = [
    // Intro
    <Stack gap={4}>
      <Text>
        Mean difference measures the absolute difference between the means
        (averages of values) of two or more groups of interest.
      </Text>
    </Stack>,
    // Range section
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Range of Mean Difference</Text>
        <Text>
          Mean difference values range from negative to positive, with the
          following meanings:
        </Text>
      </Stack>

      <List spacing={2}>
        <List.Item>
          <Text>
            A <Text span fw={500}>positive value</Text> indicates that the mean
            of the first group (often referred to as the &quot;treatment&quot; or
            &quot;experimental&quot; group) is higher than the mean of the second
            group (often the &quot;control&quot; or &quot;comparison&quot;
            group).
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            A <Text span fw={500}>negative value</Text> indicates that the mean
            of the first group is lower than that of the second group.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            A <Text span fw={500}>value close to 0</Text> suggests that there is
            little to no difference between the means of the two groups.
          </Text>
        </List.Item>
      </List>
    </Stack>,
    // Interpretation section
    <Stack gap={0}>
      <Text fw={500}>Interpretation</Text>
      <Text>
        The measured values for mean difference will vary for each specific
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
          Example 1 content will go here (e.g., a scatterplot, numerical example,
          or walkthrough).
        </Text>
      }
      // example2 can be added later:
      // example2={<Text>Example 2 content…</Text>}
    />
  );
}

