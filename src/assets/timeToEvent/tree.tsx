// src/trees/timeToEvent.tsx
import { HazardRatioExamples, HazardRatioExamplesRegression, HazardRatioExplanation } from "../../components/timeToEvent/HazardRatio/index";
import { SurvivalRateDifferenceExamples, SurvivalRateDifferenceExamples3Groups, SurvivalRateDifferenceExplanation } from "../../components/timeToEvent/SurvivalRateDifference/index";
import { MedianSurvivalTimeExamples, MedianSurvivalTimeExamples3Groups, MedianSurvivalTimeExplanation } from "../../components/timeToEvent/MedianSurvivalTime/index";
import { RestrictedMeanSurvivalTimeExamples, RestrictedMeanSurvivalTimeExamples3Groups, RestrictedMeanSurvivalTimeExplanation } from "../../components/timeToEvent/RestrictedMeanSurvivalTime/index";
import { HarrellCIndexExamples, HarrellCIndexExplanation } from "../../components/timeToEvent/HarrellCIndex/index";

import { TreeNode } from "../types";
import * as ids from "./ids";
import {
  TIME_TO_EVENT,
  ROOT,
  FOCUS_OF_ANALYSIS_SELECTION_COMPONENT,
  FOCUS_OF_ANALYSIS_TITLE,
  EFFECT_SIZE_SELECTION_TITLE,
  FURTHER_ADJUSTMENTS_TITLE,
  FURTHER_ADJUSTMENTS_COMPONENT,
  EFFECT_SIZE_SELECTION_COMPONENT,
  ADJUSTED_ASSOCIATION_WITH_PREDICTOR_ANSWER,
  ADJUSTED_ASSOCIATION_WITH_PREDICTOR_DESCRIPTION,
  OVERALL_MODEL_ANSWER,
  OVERALL_MODEL_DESCRIPTION,
  REPORTING_PAIRWISE_DIFFERENCES_ANSWER,
  REPORTING_PAIRWISE_DIFFERENCES_DESCRIPTION,
  CORRELATION_WITH_CONTINUOUS_MEASURE_DESCRIPTION,
  COMPARISON_OF_TWO_GROUPS_DESCRIPTION,
  COMPARISON_OF_THREE_OR_MORE_GROUPS_DESCRIPTION,
  REGRESSION_MODEL_DESCRIPTION,
} from "../ids";

const tree: Record<string, TreeNode> = {
  [TIME_TO_EVENT]: {
    type: "question",
    title: FOCUS_OF_ANALYSIS_TITLE,
    component: FOCUS_OF_ANALYSIS_SELECTION_COMPONENT,
    inputs: [ROOT],
    choices: [
      {
        answer: "Correlation with continuous measure",
        next: ids.HAZARD_RATIO, // single-measure path (HR)
        option_description: CORRELATION_WITH_CONTINUOUS_MEASURE_DESCRIPTION,
      },
      {
        answer: "Comparison of 2 groups",
        next: ids.TWO_GROUPS_EFFECT_SIZES,
        option_description: COMPARISON_OF_TWO_GROUPS_DESCRIPTION,
      },
      {
        answer: "Comparison of 3 or more groups",
        next: ids.COMPARISON_OF_THREEMORE_GROUPS,
        option_description: COMPARISON_OF_THREE_OR_MORE_GROUPS_DESCRIPTION,
      },
      {
        answer: "Regression model",
        next: ids.REGRESSION_MODEL,
        option_description: REGRESSION_MODEL_DESCRIPTION,
      },
    ],
  },

  // ---------- Correlation with continuous measure (single: HR) ----------
  [ids.HAZARD_RATIO]: {
    type: "statement",
    title: "Hazard Ratio",
    flowChartTitle: "Hazard Ratio",
    component: HazardRatioExplanation,
    color: "teal-darken-2",
    inputs: [TIME_TO_EVENT],
    examples: HazardRatioExamples,
  },

  // ---------- 2 groups (multiple measures → selection) ----------
  [ids.TWO_GROUPS_EFFECT_SIZES]: {
    type: "question",
    title: EFFECT_SIZE_SELECTION_TITLE,
    component: EFFECT_SIZE_SELECTION_COMPONENT,
    inputs: [TIME_TO_EVENT],
    choices: [
      {
        answer: "Survival rate difference",
        next: ids.SURVIVAL_RATE_DIFFERENCE,
      },
      { answer: "Median survival time", next: ids.MEDIAN_SURVIVAL_TIME },
      {
        answer: "Restricted mean survival time",
        next: ids.RESTRICTED_MEAN_SURVIVAL_TIME,
      },
    ],
  },
  [ids.SURVIVAL_RATE_DIFFERENCE]: {
    type: "statement",
    title: "Survival rate difference",
    flowChartTitle: "Survival Rate Difference",
    component: SurvivalRateDifferenceExplanation,
    color: "indigo-darken-2",
    inputs: [ids.TWO_GROUPS_EFFECT_SIZES],
    examples: SurvivalRateDifferenceExamples,
  },
  [ids.MEDIAN_SURVIVAL_TIME]: {
    type: "statement",
    title: "Median survival time",
    flowChartTitle: "Median Survival Time",
    component: MedianSurvivalTimeExplanation,
    color: "indigo-darken-2",
    inputs: [ids.TWO_GROUPS_EFFECT_SIZES],
    examples: MedianSurvivalTimeExamples,
  },
  [ids.RESTRICTED_MEAN_SURVIVAL_TIME]: {
    type: "statement",
    title: "Restricted mean survival time",
    flowChartTitle: "Restricted Mean Survival Time",
    component: RestrictedMeanSurvivalTimeExplanation,
    color: "indigo-darken-2",
    inputs: [ids.TWO_GROUPS_EFFECT_SIZES],
    examples: RestrictedMeanSurvivalTimeExamples,
  },

  // ---------- 3+ groups → pairwise (multiple measures → selection) ----------
  [ids.COMPARISON_OF_THREEMORE_GROUPS]: {
    type: "question",
    title: FURTHER_ADJUSTMENTS_TITLE,
    component: FURTHER_ADJUSTMENTS_COMPONENT,
    inputs: [TIME_TO_EVENT],
    choices: [
      {
        answer: REPORTING_PAIRWISE_DIFFERENCES_ANSWER,
        next: ids.PAIRWISE_EFFECT_SIZES,
        option_description: REPORTING_PAIRWISE_DIFFERENCES_DESCRIPTION,
      },
    ],
  },
  [ids.PAIRWISE_EFFECT_SIZES]: {
    type: "question",
    title: EFFECT_SIZE_SELECTION_TITLE,
    component: EFFECT_SIZE_SELECTION_COMPONENT,
    inputs: [ids.COMPARISON_OF_THREEMORE_GROUPS],
    choices: [
      {
        answer: "Survival rate difference",
        next: ids.SURVIVAL_RATE_DIFFERENCE_3GROUPS,
      },
      {
        answer: "Median survival time",
        next: ids.MEDIAN_SURVIVAL_TIME_3GROUPS,
      },
      {
        answer: "Restricted mean survival time",
        next: ids.RESTRICTED_MEAN_SURVIVAL_TIME_3GROUPS,
      },
    ],
  },

  [ids.SURVIVAL_RATE_DIFFERENCE_3GROUPS]: {
    type: "statement",
    title: "Survival rate difference",
    flowChartTitle: "Survival Rate Difference",
    component: SurvivalRateDifferenceExplanation,
    color: "indigo-darken-2",
    inputs: [ids.PAIRWISE_EFFECT_SIZES],
    examples: SurvivalRateDifferenceExamples3Groups,
  },
  [ids.MEDIAN_SURVIVAL_TIME_3GROUPS]: {
    type: "statement",
    title: "Median survival time",
    flowChartTitle: "Median Survival Time",
    component: MedianSurvivalTimeExplanation,
    color: "indigo-darken-2",
    inputs: [ids.PAIRWISE_EFFECT_SIZES],
    examples: MedianSurvivalTimeExamples3Groups,
  },
  [ids.RESTRICTED_MEAN_SURVIVAL_TIME_3GROUPS]: {
    type: "statement",
    title: "Restricted mean survival time",
    flowChartTitle: "Restricted Mean Survival Time",
    component: RestrictedMeanSurvivalTimeExplanation,
    color: "indigo-darken-2",
    inputs: [ids.PAIRWISE_EFFECT_SIZES],
    examples: RestrictedMeanSurvivalTimeExamples3Groups,
  },

  // ---------- Regression model ----------
  [ids.REGRESSION_MODEL]: {
    type: "question",
    title: FURTHER_ADJUSTMENTS_TITLE,
    component: FURTHER_ADJUSTMENTS_COMPONENT,
    inputs: [TIME_TO_EVENT],
    choices: [
      {
        answer: ADJUSTED_ASSOCIATION_WITH_PREDICTOR_ANSWER,
        next: ids.HAZARD_RATIO_REGRESSION,
        option_description: ADJUSTED_ASSOCIATION_WITH_PREDICTOR_DESCRIPTION,
      },
      {
        answer: OVERALL_MODEL_ANSWER,
        next: ids.OVERALL_MODEL,
        option_description: OVERALL_MODEL_DESCRIPTION,
      },
    ],
  },
  // Adjusted association → HR (single)
  [ids.HAZARD_RATIO_REGRESSION]: {
    type: "statement",
    title: "Hazard Ratio",
    flowChartTitle: "Hazard Ratio (HR)",
    component: HazardRatioExplanation,
    color: "purple-darken-2",
    inputs: [ids.REGRESSION_MODEL],
    examples: HazardRatioExamplesRegression,
  },
  // Overall model → Harrell's C-index (single)
  [ids.OVERALL_MODEL]: {
    type: "statement",
    title: "Harrel's C-index",
    flowChartTitle: "Harrel's C-index",
    component: HarrellCIndexExplanation,
    color: "purple-darken-2",
    inputs: [ids.REGRESSION_MODEL],
    examples: HarrellCIndexExamples,
  },
};

export default tree;
