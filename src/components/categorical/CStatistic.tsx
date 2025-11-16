import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../TabsLayout";

export default function CStatisticTabs() {
  const explanationSections = [
    <Stack gap={4}>
      <Text>
        The concordance index (C-index), which is also known as the area under the
        receiver operating characteristic curve (AUC-ROC), is a performance measure
        used to evaluate the discriminatory power and predictive accuracy of a
        regression model, particularly in binary classification tasks. The C-index
        measures the ability of a predictive model to correctly rank pairs of
        observations: one with the event of interest (e.g., disease occurrence) and
        the other without.
      </Text>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Range of C-index</Text>
        <Text>
          C-index values range from 0.5 to 1. The interpretation revolves around
          the model&apos;s ability to correctly rank subjects based on their risk
          scores:
        </Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>Closer to 1:</Text> This indicates strong
            predictive accuracy and suggests that the model has a high probability
            of correctly ranking pairs of subjects in order of their event times.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>Around 0.5:</Text> This implies that the model has
            no better discriminatory power than random chance.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>Closer to 0:</Text> This suggests that the model
            consistently predicts in the opposite direction, thus implying poor
            predictive accuracy.
          </Text>
        </List.Item>
      </List>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Interpretation of C-index values</Text>
        <Text>
          The interpretation of C-index values between variables is as follows:
        </Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>0.5:</Text> Random performance or no
            discrimination (equivalent to flipping a coin)
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.7 to 0.8:</Text> Acceptable discrimination,
            suggesting some ability to distinguish between event and nonevent cases
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.8 to 0.9:</Text> Good discrimination, indicating
            a strong ability to distinguish between event and nonevent cases
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.9 to 1.0:</Text> Excellent discrimination,
            suggesting a near-perfect ability to discriminate between event and
            nonevent cases
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

