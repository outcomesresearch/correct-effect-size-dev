import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../layout/TabsLayout";

export default function AdjustedRSquaredTabs() {
  const explanationSections = [
    <Stack gap={4}>
      <Text>
        Adjusted R-squared (R²) is a statistical metric used to measure the
        proportion of variance in the dependent variable that is explained by the
        independent variables in a regression model. It is a modified version of
        the traditional R² (coefficient of determination) that takes into account
        the number of predictors in the model. The adjusted R² provides a more
        realistic and conservative estimate of the model&apos;s goodness of fit as
        compared with the traditional R².
      </Text>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Range of adjusted R²</Text>
        <Text>
          The values for the adjusted R² range from 0 to 1:
        </Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>High adjusted R²:</Text> A value closer to 1
            indicates that a large proportion of the variance in the dependent
            variable is explained by the independent variables in the model, after
            accounting for the number of predictors and the sample size. This
            suggests that the model is a good fit for the data.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>Low adjusted R²:</Text> A value closer to 0
            suggests that the model is not explaining much of the variance in the
            dependent variable, considering the number of predictors and sample
            size. It may indicate that the model needs improvement or that there
            are factors that have not been accounted for that are affecting the
            outcome.
          </Text>
        </List.Item>
      </List>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Interpretation of adjusted R² values</Text>
        <Text>
          The interpretation of adjusted R² values is as follows:
        </Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>0.00 to 0.19:</Text> Very weak explanatory power
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.20 to 0.39:</Text> Weak explanatory power
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.40 to 0.59:</Text> Moderate explanatory power
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.60 to 0.79:</Text> Strong explanatory power
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.80 to 1.00:</Text> Very strong explanatory power
          </Text>
        </List.Item>
      </List>
    </Stack>,
    <Stack gap={0}>
      <Text fw={500}>Comparing Models</Text>
      <Text>
        The adjusted R² is useful for comparing different regression models. When
        comparing models with similar numbers of predictors, a higher adjusted R²
        indicates a better fit.
      </Text>
    </Stack>,
    <Stack gap={0} mt={4}>
      <Text fw={500}>Model Parsimony</Text>
      <Text>
        The adjusted R² penalizes the inclusion of additional predictors that do
        not contribute significantly to explaining the variance in the outcome.
        Therefore, it encourages model parsimony by favoring models with fewer
        predictors that still provide a good fit.
      </Text>
    </Stack>,
    <Stack gap={0}>
      <Text fw={500}>Summary</Text>
      <Text>
        In summary, the adjusted R² is a valuable metric for assessing the
        goodness of fit of a regression model while considering model complexity.
        It provides a more balanced perspective on model performance than the
        traditional R², as it adjusts for the number of predictors and sample size.
        It is important to remember that a high adjusted R² does not necessarily
        mean that the model is the best one, and it does not indicate causality.
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

