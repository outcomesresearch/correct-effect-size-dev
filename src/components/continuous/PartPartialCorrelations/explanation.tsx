import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../../layout/TabsLayout";

export default function PartPartialCorrelationsTabs() {
  const explanationSections = [
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Part Correlation</Text>
        <Text>
          Part correlation (also known as semipartial correlation) measures the unique
          contribution of one predictor variable to the variance in the dependent
          variable, while controlling for the effects of other predictor variables. It
          quantifies the relationship between a predictor and the outcome that is not
          shared with other predictors in the model.
        </Text>
      </Stack>
      <Stack gap={0}>
        <Text fw={500}>Partial Correlation</Text>
        <Text>
          Partial correlation measures the relationship between two variables while
          controlling for the effects of one or more other variables. It quantifies
          the association between a predictor and the outcome after removing the
          variance that is shared with the control variables.
        </Text>
      </Stack>
    </Stack>,
    <Stack gap={0}>
      <Text fw={500}>Interpretation</Text>
      <Text>
        Both part and partial correlations range from -1 to +1, with values closer to
        ±1 indicating stronger relationships. Positive values indicate positive
        associations, while negative values indicate negative associations. These
        measures help researchers understand the unique contribution of each predictor
        variable in a multiple regression model.
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

