import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../TabsLayout";

export default function BetaCoefficientTabs() {
  const explanationSections = [
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Standardized Beta (β) Coefficient</Text>
        <Text>
          The standardized beta (β) coefficient represents the change in the
          dependent variable (Y) in standard deviation units (z-scores) for a
          one-standard-deviation change in the predictor variable (X), while holding
          all other predictor variables constant. Standardized betas allow for a
          direct comparison of the magnitude of the effects of different predictors
          in the model, regardless of the units of measurement, which makes it
          easier to identify which predictor variable has a stronger or weaker
          impact on the dependent variable in terms of standard deviations.
        </Text>
      </Stack>
      <Stack gap={4} mt={4}>
        <Text fw={500}>Standardized beta coefficients can be positive, negative, or equivalent to 0:</Text>
        <List spacing={2}>
          <List.Item>
            <Text>
              <Text span fw={500}>Positive β:</Text> This indicates a positive
              association between the predictor and the outcome. An increase of one
              standard deviation in the predictor is associated with an increase in
              the dependent variable by the magnitude of the standardized beta,
              assuming all other variables remain constant.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <Text span fw={500}>Negative β:</Text> This suggests a negative
              association. An increase of one standard deviation in the predictor
              is associated with a decrease in the dependent variable by the
              magnitude of the standardized beta, given all other variables stay the
              same.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <Text span fw={500}>β close to 0:</Text> This implies a weak or no
              association between the predictor and the outcome when considering
              other predictors in the model.
            </Text>
          </List.Item>
        </List>
        <Text fw={500} mt={4}>The interpretation of a standardized beta coefficient as an absolute value is as follows:</Text>
        <List spacing={2}>
          <List.Item>
            <Text>
              <Text span fw={500}>1.0:</Text> This suggests that a
              one-standard-deviation change in the predictor variable corresponds to
              a one-standard-deviation change in the dependent variable.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <Text span fw={500}>&lt;1.0:</Text> This suggests that a less than
              one-standard-deviation (or smaller) change in the predictor variable
              corresponds to a less than one-standard-deviation change in the
              dependent variable.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <Text span fw={500}>&gt;1.0:</Text> This suggests that a more than
              one-standard-deviation (or larger) change in the predictor variable
              corresponds to a more than one-standard-deviation change in the
              dependent variable.
            </Text>
          </List.Item>
        </List>
        <Text mt={4}>
          The magnitude of the beta value reflects the strength of the association.
          Larger beta values indicate a stronger relationship.
        </Text>
      </Stack>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Unstandardized Beta (β) Coefficient</Text>
        <Text>
          The unstandardized beta (β) coefficient represents the change in the
          dependent variable (Y) for a one-unit change in the predictor variable
          (X), while holding all other predictor variables constant. The
          unstandardized beta coefficient provides the specific effect size in the
          original units of the dependent variable, and it is particularly useful
          when the predictor variables are measured in different units or have
          different scales.
        </Text>
      </Stack>
      <Stack gap={4} mt={4}>
        <Text fw={500}>Unstandardized beta coefficients can be positive, negative, or equivalent to 0:</Text>
        <List spacing={2}>
          <List.Item>
            <Text>
              <Text span fw={500}>Positive β:</Text> This indicates that, as the
              independent variable increases by one unit, the dependent variable is
              expected to increase by the value of the beta coefficient, assuming
              all other variables remain constant.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <Text span fw={500}>Negative β:</Text> This suggests that, as the
              independent variable increases by one unit, the dependent variable is
              expected to decrease by the value of the beta coefficient, given all
              other variables stay the same.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <Text span fw={500}>β = 0:</Text> This implies that there is no
              effect of the independent variable on the dependent variable, holding
              all other predictors constant.
            </Text>
          </List.Item>
        </List>
        <Text mt={4}>
          The magnitude of the beta value reflects the strength of the association.
          Larger beta values indicate a stronger relationship.
        </Text>
      </Stack>
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

