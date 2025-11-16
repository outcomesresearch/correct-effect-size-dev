import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../../layout/TabsLayout";

export default function SpearmanRhoTabs() {
  const explanationSections = [
    // Intro
    <Stack gap={4}>
      <Text>
        Spearman&apos;s rho (ρ) can be used to measure the strength and direction
        of monotonic associations between two ordinal or ranked variables.
        Spearman&apos;s ρ is especially suitable for data that does not meet the
        assumptions required for the Pearson correlation coefficient, such as data
        with nonlinear relationships or data that is ordinal in nature.
      </Text>
    </Stack>,
    // Range section
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Range of Spearman&apos;s ρ</Text>
        <Text>
          Spearman&apos;s ρ values range from -1 to +1, with the following
          meanings:
        </Text>
      </Stack>

      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>
              +1:
            </Text>{" "}
            There is a perfect positive monotonic relationship. As the rank of one
            variable increases, the rank of the other variable increases
            proportionally.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>
              0:
            </Text>{" "}
            No monotonic relationship exists between the two ranked variables.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>
              -1:
            </Text>{" "}
            There is a perfect negative monotonic relationship. As the rank of one
            variable increases, the rank of the other variable decreases
            proportionally.
          </Text>
        </List.Item>
      </List>
    </Stack>,
    // Magnitude interpretation
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Interpreting the magnitude of Spearman&apos;s ρ</Text>
        <Text>
          The interpretation of Spearman&apos;s ρ as an absolute value is as
          follows:
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
        While a significant Spearman&apos;s ρ value indicates a monotonic
        relationship between variables, it does not imply causation. Spearman&apos;s
        ρ is particularly useful for ordinal data or when the relationship between
        variables is monotonic but not necessarily linear. It is less sensitive to
        outliers than Pearson&apos;s <Text span fs="italic">r</Text>, but it is important to consider the broader
        context when interpreting its value.
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

