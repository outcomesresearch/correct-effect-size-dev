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

export const ADJUSTED_ASSOCIATION_WITH_PREDICTOR_ANSWER =
  "Adjusted association with predictor";
export const ADJUSTED_ASSOCIATION_WITH_PREDICTOR_SHORT_VERSION =
  "A characteristic used in regression models to describe the relationship between an independent (predictor) variable and an outcome variable after accounting for other covariates or predictor variables within the model.";
export const ADJUSTED_ASSOCIATION_WITH_PREDICTOR_LONG_VERSION =
  "A characteristic used in regression models to describe the relationship between an independent (predictor) variable and an outcome variable after accounting for other covariates or predictor variables within the model.\n\nBy controlling for the potential effects of other covariates, the identified association purely reflects the unique influence of the selected predictor.\n\nBy incorporating this concept, we can isolate associations and remove potential confounders.";

export const OVERALL_MODEL_ANSWER = "Overall model";
export const OVERALL_MODEL_SHORT_VERSION =
  "A characteristic used in regression models to describe the combined influence of all independent (predictor) variables on an outcome variable.";
export const OVERALL_MODEL_LONG_VERSION =
  "A characteristic used in regression models to describe the combined influence of all independent (predictor) variables on an outcome variable.\n\nRather than focusing on individual predictors and isolated associations, the overall model captures the collective effect of all predictor variables.\n\nBy evaluating the overall model, researchers can determine how well the entire set of predictors can explain the variability in the outcome.";

export const REPORTING_PAIRWISE_DIFFERENCES_ANSWER =
  "Reporting pairwise differences";
export const REPORTING_PAIRWISE_DIFFERENCES_SHORT_VERSION =
  "Reporting pairwise differences is a detailed sub-method of analysis used in the comparison of three or more groups.";
export const REPORTING_PAIRWISE_DIFFERENCES_LONG_VERSION =
  "Reporting pairwise differences is a detailed sub-method of analysis used in the comparison of three or more groups.\n\nBy comparing each group to every other group individually, one can make multiple comparisons to observe and quantify the differences between pairs of groups. This added information allows for the extended interpretation of the comparative and contrasting relationships among the groups.";

export const REPORTING_OVERALL_EFFECT_ANSWER = "Reporting overall effect";
export const REPORTING_OVERALL_EFFECT_SHORT_VERSION =
  "Reporting the overall effect size is a comprehensive sub-method of analysis used in the comparison of three or more groups.";
export const REPORTING_OVERALL_EFFECT_LONG_VERSION =
  "Reporting the overall effect size is a comprehensive sub-method of analysis used in the comparison of three or more groups.\n\nBy considering all of the groups collectively instead of in pairs, one can compute an overarching metric to observe and quantify the summative differences among the groups. Using this method of analysis, more holistic and aggregate interpretations regarding the relationships among the groups can be deduced.";

export const CORRELATION_WITH_CONTINUOUS_MEASURE_DESCRIPTION =
  "Quantifies the strength and direction of a relationship between two continuous variables.";

export const COMPARISON_OF_TWO_GROUPS_DESCRIPTION =
  "Evaluates the presence and magnitude of the difference between two groups.";

export const COMPARISON_OF_THREE_OR_MORE_GROUPS_DESCRIPTION =
  "Evaluates the presence and magnitude of the difference among three or more groups.";

export const REGRESSION_MODEL_DESCRIPTION =
  "Quantifies the improvement of the model as compared with a null model (a model with only an intercept) for explaining the variance in the outcome variable.";

export const CONTINUOUS_OUTCOME_MEASURE_SHORT_VERSION =
  "A continuous dependent variable is a numeric variable that has an infinite number of values within a given interval. Continuous variables are often used to represent ratio data such as height, weight, and blood pressure, as well as interval data such as temperature in Celsius or Fahrenheit.";
export const CONTINUOUS_OUTCOME_MEASURE_LONG_VERSION =
  "A continuous dependent variable is a numeric variable that has an infinite number of values within a given interval. Continuous variables are often used to represent ratio data (the presence of an absolute zero) such as height, weight, and blood pressure as well as interval data (the absence of an absolute zero) such as temperature in Celsius or Fahrenheit.\n\nThe continuous effect estimate should always be reported with a measure of the precision of the estimate, which is usually defined by the 95% confidence interval. The continuous estimate and the 95% confidence interval should be interpreted in the light of clinical importance.";

export const CATEGORICAL_OUTCOME_MEASURE_SHORT_VERSION =
  "A categorical dependent variable takes on a limited number of discrete values or categories. Categorical variables are often used to represent qualitative or nominal data such as sex, race, disease severity, and treatment group.";
export const CATEGORICAL_OUTCOME_MEASURE_LONG_VERSION =
  "A categorical dependent variable takes on a limited number of discrete values or categories. Categorical variables are often used to represent qualitative or nominal data such as sex, race, disease severity, and treatment group.\n\nThe categorical effect estimate should always be reported with a measure of the precision of the estimate, which is usually defined by the 95% confidence interval. The categorical estimate and the 95% confidence interval should be interpreted in the light of clinical importance.";

export const TIME_TO_EVENT_OUTCOME_MEASURE_SHORT_VERSION =
  "A time-to-event dependent variable is used to measure the time it takes for a specific event to occur. This type of variable is commonly employed in studies that investigate the time until the occurrence of certain events, such as time to death, time to relapse, or time to recovery.";
export const TIME_TO_EVENT_OUTCOME_MEASURE_LONG_VERSION =
  "A time-to-event dependent variable is used to measure the time it takes for a specific event to occur. This type of variable is commonly employed in studies that investigate the time until the occurrence of certain events, such as time to death, time to relapse, or time to recovery.\n\nIn time-to-event analysis, the dependent variable represents the duration from a defined starting point (often referred to as zero-time) to the occurrence of the event of interest. The event can be either a positive event (e.g., recovery from illness, survival after the diagnosis of cancer) or a negative event (e.g., disease relapse, death).\n\nThe time-to-event effect estimate should always be reported with a measure of the precision of the estimate, which is usually defined by the 95% confidence interval. The time-to-event estimate and the 95% confidence interval should be interpreted in the light of clinical importance.";
