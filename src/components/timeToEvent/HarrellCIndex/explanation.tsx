import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../../layout/TabsLayout";

export default function HarrellCIndexTabs() {
  const explanationSections = [
    <Stack gap={4}>
      <Text>
        Harrell&apos;s C-index is a nonparametric statistic used to quantify the
        predictive accuracy of survival models. Specifically, it measures the
        discrimination ability of models for correctly ranking subjects based on
        their event times. It is particularly useful when assessing the
        performance of prognostic models in survival analysis.
      </Text>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Range of Harrell&apos;s C-index</Text>
        <Text>
          Harrell&apos;s C-index values range from 0 to 1. The value of the
          coefficient indicates the ability of the model to correctly rank pairs
          of subjects:
        </Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>Value closer to 1:</Text> This indicates a
            positive predictive accuracy. The model has a high probability of
            correctly ranking pairs of subjects in order of their event times.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>Value closer to 0.5:</Text> This implies no
            better accuracy than random chance.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>Value closer to 0:</Text> This suggests a negative
            predictive accuracy. The model consistently predicts in the opposite
            direction.
          </Text>
        </List.Item>
      </List>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Interpretation of Harrell&apos;s C-index</Text>
        <Text>
          An interpretation of Harrell&apos;s C-index in survival analysis is as
          follows:
        </Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>&lt;0.5:</Text> No discriminative ability and no
            better than chance
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.5 to 0.7:</Text> Poor to moderate discriminative
            ability
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.7 to 0.8:</Text> Good discriminative ability
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>&gt;0.8:</Text> Excellent discriminative ability
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

