import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../../layout/TabsLayout";

export default function OmegaSquaredTabs() {
  const explanationSections = [
    <Stack gap={4}>
      <Text>
        Omega-squared (ω²) is used to assess the strength of association between
        multiple groups and a dependent variable; it is commonly used in analysis
        of variance. It helps researchers to gauge the practical significance of
        group differences, and it provides a quantitative measure of the impact of
        the independent variable on the dependent variable.
      </Text>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Range of ω²</Text>
        <Text>
          ω² values range from 0 to 1, with the following meanings:
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
        <Text fw={500}>Interpretation of ω²</Text>
        <Text>Interpretation of ω² is as follows:</Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>&lt;0.01:</Text> Small effect size. This value
            suggests that the independent variable(s) have a small effect on the
            dependent variable. Only a tiny portion of the variance in the dependent
            variable can be attributed to the independent variable(s).
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.01 to 0.06:</Text> Medium effect size. This value
            suggests that the independent variable(s) have a moderate effect on the
            dependent variable. A moderate portion of the variance in the dependent
            variable can be attributed to the independent variable(s).
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>&gt;0.06:</Text> Large effect size. This value
            suggests that the independent variable(s) have a substantial effect on
            the dependent variable. A significant portion of the variance in the
            dependent variable can be attributed to the independent variable(s).
          </Text>
        </List.Item>
      </List>
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

