import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../../layout/TabsLayout";

export default function RiskDifferenceTabs() {
  const explanationSections = [
    <Stack gap={4}>
      <Text>
        Risk difference (RD) is used to determine the magnitude of the
        difference in the risk of an outcome of interest occurring in two or
        more groups. Specifically, it computes the difference in probabilities
        of an event occurring between the exposed and nonexposed groups. It is
        frequently used in epidemiology to assess the absolute effect of an
        exposure or intervention.
      </Text>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Range of RD</Text>
        <Text>RD values can range from -1 to +1:</Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>
              RD = 0:
            </Text>{" "}
            This suggests that there is no difference in risk between the
            exposed and nonexposed groups.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>
              RD &gt; 0:
            </Text>{" "}
            This indicates that the exposed group has a higher risk of the event
            as compared with the nonexposed group.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>
              RD &lt; 0:
            </Text>{" "}
            This implies that the exposed group has a lower risk of the event as
            compared with the nonexposed group.
          </Text>
        </List.Item>
      </List>
    </Stack>,
    <Stack gap={0}>
      <Text fw={500}>Interpretation</Text>
      <Text>
        Interpreting the exact values of RDs is context-dependent and relies
        heavily on the specific domain, dataset, or health outcome being
        examined. Although positive values show an increased risk due to
        exposure and negative values suggest a reduced risk, the specific
        thresholds for what is considered a significant or clinically meaningful
        difference can vary.
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
