import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../../layout/TabsLayout";

export default function KendallsTauTabs() {
  const explanationSections = [
    <Stack gap={4}>
      <Text>
        Kendall&apos;s tau (τ) is a nonparametric correlation coefficient used
        to quantify the strength and direction of the relationship between two
        ordinal or ranked variables. Specifically, it measures the degree of
        concordance or discordance between two variables. It is particularly
        useful when dealing with data that have ranks or categories, but the
        intervals between the ranks are not meaningful.
      </Text>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Range of Kendall&apos;s tau</Text>
        <Text>
          Kendall&apos;s tau values range from -1 to +1. The sign of the
          coefficient indicates the direction of the relationship, while the
          magnitude indicates the strength of the relationship:
        </Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>
              Positive τ (0 to +1):
            </Text>{" "}
            This indicates a positive association between the variables. As the
            values of one variable increase, the ranks of the other variable
            tend to increase as well.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>
              Negative τ (0 to -1):
            </Text>{" "}
            This indicates a negative association between the variables. As the
            values of one variable increase, the ranks of the other variable
            tend to decrease.
          </Text>
        </List.Item>
      </List>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>
          Interpretation of Kendall&apos;s tau as absolute values
        </Text>
        <Text>
          The interpretation of Kendall&apos;s tau as absolute values between
          variables is as follows:
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
