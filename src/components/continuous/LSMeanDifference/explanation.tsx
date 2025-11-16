import { Text, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../../layout/TabsLayout";

export default function LSMeanDifferenceTabs() {
  const explanationSections = [
    <Stack gap={4}>
      <Text>
        Least square (LS) means are used to estimate and compare group means in a
        regression model, particularly in the context of analysis of variance or
        linear regression. LS means are useful when dealing with complex models
        involving multiple predictors, including categorical variables or
        interactions. The LS means represent the average predicted values of the
        outcome variable for each level of the categorical predictor when
        considering the model&apos;s full set of predictors and covariates. In
        simpler terms, LS means offer a way to estimate what the group means would
        be if all groups had the same covariate values; this allows for a fairer
        comparison between groups.
      </Text>
    </Stack>,
    <Stack gap={0}>
      <Text fw={500}>Interpretation</Text>
      <Text>
        For interpretation of the precision of LS means, consider the associated
        confidence intervals (CIs). Narrower CIs indicate more precise estimates,
        whereas wider CIs suggest greater uncertainty. In addition, interpretation
        depends on the context of the study itself. In the case of a treatment or
        intervention study, differences in LS means can suggest the effectiveness
        of one treatment over another after accounting for other variables. In
        observational studies, they can show differences between groups when other
        factors are held constant.
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

