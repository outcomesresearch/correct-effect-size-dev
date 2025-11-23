import { Text } from "@mantine/core";

export const ROOT = "assignExposures";
export const CONTINUOUS = "continuous";
export const CATEGORICAL = "categorical";
export const TIME_TO_EVENT = "time_to_event";

export const OUTCOME_MEASURE_TITLE = "Outcome Measure";
export const OUTCOME_MEASURE_SELECTION_COMPONENT = () => (
  <Text c="dimmed" size="md">
    Select the type of outcome variable being analyzed or compared.
  </Text>
);

export const FURTHER_ADJUSTMENTS_TITLE = "Further adjustments";
export const FURTHER_ADJUSTMENTS_COMPONENT = () => (
  <Text c="dimmed" size="md">
    Select any further adjustments done during analysis, for example to remove
    confounding factors or refine overall model assumptions.
  </Text>
);

// Shared component for effect size selection nodes
export const EFFECT_SIZE_SELECTION_TITLE =
  "Appropriate Effect Size Measurements ";
export const EFFECT_SIZE_SELECTION_COMPONENT = () => (
  <Text c="dimmed" size="md">
    Based on the inputs you've given, consider the following as effect size
    measurements when reporting the results of your investigation.
  </Text>
);

export const FOCUS_OF_ANALYSIS_TITLE = "Focus of Analysis";
export const FOCUS_OF_ANALYSIS_SELECTION_COMPONENT = () => (
  <Text c="dimmed" size="md">
    In statistical analysis, the focus of analysis depends on the research
    question being asked and the type of data being collected.
  </Text>
);

export const ADJUSTED_ASSOCIATION_WITH_PREDICTOR_ANSWER = "Adjusted association with predictor";
export const ADJUSTED_ASSOCIATION_WITH_PREDICTOR_DESCRIPTION =
  "A characteristic used in regression models to describe the relationship between an independent (predictor) variable and an outcome variable after accounting for other covariates or predictor variables within the model.|||\nBy controlling for the potential effects of other covariates, the identified association purely reflects the unique influence of the selected predictor.\n\nBy incorporating this concept, we can isolate associations and remove potential confounders.";

export const OVERALL_MODEL_ANSWER = "Overall model";
export const OVERALL_MODEL_DESCRIPTION =
  "A characteristic used in regression models to describe the combined influence of all independent (predictor) variables on an outcome variable.|||\nRather than focusing on individual predictors and isolated associations, the overall model captures the collective effect of all predictor variables.\n\nBy evaluating the overall model, researchers can determine how well the entire set of predictors can explain the variability in the outcome.";
