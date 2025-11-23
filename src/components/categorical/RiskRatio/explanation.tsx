import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../../layout/TabsLayout";

export default function RiskRatioTabs() {
  const explanationSections = [
    <Stack gap={4}>
      <Text>
        Risk ratio (RR; also known as rate ratio or relative risk) is a measure
        used to quantify the association between an exposure and an outcome.
        Specifically, it measures the magnitude of the difference of the
        probability of an event or outcome occurring in the exposed group(s) as
        compared with the probability of the outcome occurring in the unexposed
        group(s). It is particularly insightful in epidemiology to determine the
        relative increase or decrease in risk after exposure to a particular
        factor.
      </Text>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Range of RR</Text>
        <Text>RR values can range from 0 to positive infinity:</Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>RR = 1:</Text> This indicates that there is no
            association between the exposure and the outcome, which suggests that
            the risk of the event is the same in both the exposed and nonexposed
            groups.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>RR &gt; 1:</Text> This shows that there is a
            higher risk of the event in the exposed group as compared with the
            nonexposed group.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>RR &lt; 1:</Text> This implies that there is a
            lower risk of the event in the exposed group as compared with the
            nonexposed group.
          </Text>
        </List.Item>
      </List>
      <Text mt={4}>
        Note that the RR value cannot be negative.
      </Text>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Interpretation</Text>
        <Text>
          Interpreting the exact values of RRs is largely context-dependent and
          involves consideration of the specific domain, dataset, or health outcome
          being investigated. Although higher RR values indicate a greater risk and
          lower RR values indicate reduced risk, the exact thresholds for what is
          considered significant or clinically relevant can vary.
        </Text>
      </Stack>
      <Stack gap={0} mt={4}>
        <Text fw={500}>Clinical Pearl</Text>
        <Text>
          Remember that the RR calculates a relative risk. It is always important
          to consider what the base rate is when interpreting the clinical
          significance of the relative risk. For example, a relative risk of 2 has
          a very different interpretation when the base rate is 1% (risk increase
          to 2%; still quite low) versus 15% (risk increase to 30%; clinically
          important).
        </Text>
      </Stack>
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

