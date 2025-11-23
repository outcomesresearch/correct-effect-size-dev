import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../../layout/TabsLayout";

export default function MedianSurvivalTimeTabs() {
  const explanationSections = [
    <Stack gap={4}>
      <Text>
        Median survival time is a nonparametric statistic used to quantify the
        time at which half of the study population is still event-free.
        Specifically, it measures the time by which 50% of the subjects have
        experienced the event. It is particularly useful when summarizing the
        central tendency of survival time data.
      </Text>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Range of median survival time</Text>
        <Text>
          Median survival time values are also time-based measurements (like
          months or years). The interpretation revolves around the comparison of
          median survival time values between two groups:
        </Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>Higher median survival time for Group A vs. Group B:</Text>{" "}
            This indicates that the time at which 50% of Group A experiences the
            event is later than that of Group B.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>Equivalent median survival time values for both groups:</Text>{" "}
            This implies that both groups have a similar amount of time until 50%
            of their subjects experience the event.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>Lower median survival time for Group A vs. Group B:</Text>{" "}
            This suggests that the time at which 50% of Group A experiences the
            event is earlier than that of Group B.
          </Text>
        </List.Item>
      </List>
    </Stack>,
    <Stack gap={0}>
      <Text fw={500}>Interpretation</Text>
      <Text>
        Because the median survival time is a time-based measurement and does not
        fall within a standardized numeric range (e.g., -1 to +1, 0 to 1), there
        are no fixed value categories like &quot;weak&quot; or
        &quot;strong.&quot; However, the significance or importance of
        differences in median survival time can be assessed based on clinical or
        practical significance, background knowledge, or other contextual
        factors.
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

