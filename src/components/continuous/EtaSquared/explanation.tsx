import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../../layout/TabsLayout";

export default function EtaSquaredTabs() {
  const explanationSections = [
    <Stack gap={4}>
      <Text>
        Eta-squared (η²) is used to assess the strength of association between
        multiple groups and a dependent variable; it is commonly used in analysis
        of variance. It helps researchers to gauge the practical significance of
        group differences, and it provides a quantitative measure of the impact of
        the independent variable on the dependent variable.
      </Text>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Range of η²</Text>
        <Text>
          η² values range from 0 to 1, with the following meanings:
        </Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>0</Text> indicates that the independent variable
            has no effect on the dependent variable (no variance explained).
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>1</Text> indicates that the independent variable
            completely accounts for all of the variance in the dependent variable
            (full variance explained).
          </Text>
        </List.Item>
      </List>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Interpretation of η²</Text>
        <Text>Interpretation of η² is as follows:</Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>≈ 0.01:</Text> Small effect size. A value such as
            this suggests that the independent variable accounts for a very small
            proportion of the total variance in the dependent variable. This
            indicates a weak or negligible relationship.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>≈ 0.06:</Text> Medium effect size. A value such as
            this suggests that the independent variable accounts for a moderate
            proportion of the total variance in the dependent variable. This
            indicates a moderate or intermediate relationship.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>≈ 0.14:</Text> Large effect size. A value such as
            this suggests that the independent variable accounts for a substantial
            proportion of the total variance in the dependent variable. This
            indicates a strong and meaningful relationship.
          </Text>
        </List.Item>
      </List>
    </Stack>,
    <Stack gap={0}>
      <Text fw={500}>Important considerations</Text>
      <Text>
        Although η² provides valuable insights into the strength of relationships,
        it is essential to be aware that it can be biased, especially with smaller
        sample sizes, where it tends to overestimate the population effect size. In
        such cases, omega-squared may be a more appropriate measure.
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

