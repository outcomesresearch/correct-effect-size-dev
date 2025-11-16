import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../TabsLayout";

export default function PearsonCorrelationTabs() {
  const explanationSections = [
    // Intro
    <Stack gap={4}>
      <Text>
        The Pearson correlation coefficient (Pearson’s r) is used to quantify
        the linear relationship or association between two continuous variables.
        It measures both the direction and the strength of this linear
        relationship.
      </Text>
    </Stack>,
    // Range section
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Range of Pearson&apos;s r</Text>
        <Text>
          Pearson&apos;s r values range from -1 to +1, with the following
          meanings:
        </Text>
      </Stack>

      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>
              +1:
            </Text>{" "}
            There is a perfect positive linear relationship. As one variable
            increases, the other variable increases proportionally.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>
              0:
            </Text>{" "}
            No linear relationship exists between the two variables.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>
              -1:
            </Text>{" "}
            There is a perfect negative linear relationship. As one variable
            increases, the other variable decreases proportionally.
          </Text>
        </List.Item>
      </List>
    </Stack>,
    // Magnitude interpretation
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Interpreting the magnitude of Pearson&apos;s r</Text>
        <Text>
          The interpretation of the Pearson correlation coefficient as an
          absolute value is as follows:
        </Text>
      </Stack>

      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>
              0.00 to 0.19:
            </Text>{" "}
            Very weak association
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>
              0.20 to 0.39:
            </Text>{" "}
            Weak association
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>
              0.40 to 0.59:
            </Text>{" "}
            Moderate association
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>
              0.60 to 0.79:
            </Text>{" "}
            Strong association
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>
              0.80 to 1.00:
            </Text>{" "}
            Very strong association
          </Text>
        </List.Item>
      </List>
    </Stack>,
    // Caveats
    <Stack gap={0}>
      <Text fw={500}>Important caveats</Text>
      <Text>
        While a significant Pearson&apos;s r value indicates a linear
        relationship between variables, it does not imply causation.
        Furthermore, it is essential to check the assumptions of the Pearson
        correlation (e.g., linearity, no outliers) and to consider the broader
        context when interpreting its value. Nonlinear relationships might not
        be well represented by Pearson&apos;s r.
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
