import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../layout/TabsLayout";

export default function RSquaredTabs() {
  const explanationSections = [
    <Stack gap={4}>
      <Text>
        The coefficient of determination (R²) is an effect size measure used in
        regression analysis. It quantifies the proportion of the total variance in
        the dependent variable that is explained by the independent variables
        included in the regression model. R² is used to assess the goodness of fit
        of the model and the proportion of variance in the dependent variable that
        can be attributed to the predictors.
      </Text>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Range of R²</Text>
        <Text>R² values range from 0 to 1:</Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            An R² of <Text span fw={500}>0</Text> indicates that the model
            explains none of the variance in the dependent variable.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            An R² of <Text span fw={500}>1.0</Text> suggests that the model
            explains all of the variance, which means that the model perfectly
            predicts the dependent variable.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            A <Text span fw={500}>higher R² value</Text> suggests that the model
            is better at explaining and predicting the dependent variable.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            A <Text span fw={500}>lower R² value</Text> implies that there may be
            factors that are unaccounted for or a measurement error that affects
            the model&apos;s ability to explain the variance.
          </Text>
        </List.Item>
      </List>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Interpretation of R² values</Text>
        <Text>The interpretation of R² values is as follows:</Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>&lt;0.30:</Text> Low R². This indicates that only
            a small proportion of the variance in the dependent variable is
            explained by the independent variables. The model may not fit the data
            well or may lack important predictors.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.30 to 0.70:</Text> Moderate R². This indicates
            that a substantial proportion of the variance in the dependent variable
            is explained by the independent variables. The model provides a
            reasonable fit to the data, but there is still unexplained variance.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>&gt;0.70:</Text> High R². This indicates that a
            large proportion of the variance in the dependent variable is explained
            by the independent variables. The model provides a strong fit to the
            data, and the predictors have a substantial influence on the dependent
            variable.
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

