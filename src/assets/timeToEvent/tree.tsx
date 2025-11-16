// src/trees/timeToEvent.tsx
import HazardRatio from "../../components/timeToEvent/HazardRatio";
import SurvivalRateDifference from "../../components/timeToEvent/SurvivalRateDifference";
import MedianSurvivalTime from "../../components/timeToEvent/MedianSurvivalTime";
import RestrictedMeanSurvivalTime from "../../components/timeToEvent/RestrictedMeanSurvivalTime";
import HarrellCIndex from "../../components/timeToEvent/HarrellCIndex";

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
        option_description:
          "Correlation is a statistical measure of the strength of the association between two variables.",
      },
      {
        answer: "Comparison of 2 groups",
        next: ids.TWO_GROUPS_EFFECT_SIZES,
        option_description:
          "A comparison is evaluating the relationship between 2 groups.",
      },
      {
        answer: "Comparison of 3 or more groups",
        next: ids.COMPARISON_OF_THREEMORE_GROUPS,
        option_description:
          "A comparison is evaluating the relationship between 3 or more groups.",
      },
      {
        answer: "Regression model",
        next: ids.REGRESSION_MODEL,
        option_description:
          "Regression is used to predict the value of a dependent variable based on one or more independent variables.",
      },
    ],
  },

  // ---------- Correlation with continuous measure (single: HR) ----------
  [ids.HAZARD_RATIO]: {
    type: "statement",
    title: "Hazard Ratio",
    flowChartTitle: "Hazard Ratio",
    component: HazardRatio,
    color: "teal-darken-2",
    inputs: [TIME_TO_EVENT],
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
    component: SurvivalRateDifference,
    color: "indigo-darken-2",
    inputs: [ids.TWO_GROUPS_EFFECT_SIZES],
  },
  [ids.MEDIAN_SURVIVAL_TIME]: {
    type: "statement",
    title: "Median survival time",
    flowChartTitle: "Median Survival Time",
    component: MedianSurvivalTime,
    color: "indigo-darken-2",
    inputs: [ids.TWO_GROUPS_EFFECT_SIZES],
  },
  [ids.RESTRICTED_MEAN_SURVIVAL_TIME]: {
    type: "statement",
    title: "Restricted mean survival time",
    flowChartTitle: "Restricted Mean Survival Time",
    component: RestrictedMeanSurvivalTime,
    color: "indigo-darken-2",
    inputs: [ids.TWO_GROUPS_EFFECT_SIZES],
  },

  // ---------- 3+ groups → pairwise (multiple measures → selection) ----------
  [ids.COMPARISON_OF_THREEMORE_GROUPS]: {
    type: "question",
    title: FURTHER_ADJUSTMENTS_TITLE,
    component: FURTHER_ADJUSTMENTS_COMPONENT,
    inputs: [TIME_TO_EVENT],
    choices: [
      {
        answer: "Reporting pairwise differences",
        next: ids.PAIRWISE_EFFECT_SIZES,
        // No description provided in your source for REPORTING_PAIRWISE_DIFFERENCES
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
    component: SurvivalRateDifference,
    color: "indigo-darken-2",
    inputs: [ids.PAIRWISE_EFFECT_SIZES],
  },
  [ids.MEDIAN_SURVIVAL_TIME_3GROUPS]: {
    type: "statement",
    title: "Median survival time",
    flowChartTitle: "Median Survival Time",
    component: MedianSurvivalTime,
    color: "indigo-darken-2",
    inputs: [ids.PAIRWISE_EFFECT_SIZES],
  },
  [ids.RESTRICTED_MEAN_SURVIVAL_TIME_3GROUPS]: {
    type: "statement",
    title: "Restricted mean survival time",
    flowChartTitle: "Restricted Mean Survival Time",
    component: RestrictedMeanSurvivalTime,
    color: "indigo-darken-2",
    inputs: [ids.PAIRWISE_EFFECT_SIZES],
  },

  // ---------- Regression model ----------
  [ids.REGRESSION_MODEL]: {
    type: "question",
    title: FURTHER_ADJUSTMENTS_TITLE,
    component: FURTHER_ADJUSTMENTS_COMPONENT,
    inputs: [TIME_TO_EVENT],
    choices: [
      {
        answer: "Adjusted association with predictor",
        next: ids.HAZARD_RATIO_REGRESSION,
        // No description provided in your source for ADJUSTED_ASSOCIATION
      },
      {
        answer: "Overall model",
        next: ids.OVERALL_MODEL,
        // No description provided in your source for OVERALL_MODEL
      },
    ],
  },
  // Adjusted association → HR (single)
  [ids.HAZARD_RATIO_REGRESSION]: {
    type: "statement",
    title: "Hazard Ratio",
    flowChartTitle: "Hazard Ratio (HR)",
    component: HazardRatio,
    color: "purple-darken-2",
    inputs: [ids.REGRESSION_MODEL],
  },
  // Overall model → Harrell's C-index (single)
  [ids.OVERALL_MODEL]: {
    type: "statement",
    title: "Overall model",
    flowChartTitle: "Overall Model",
    component: HarrellCIndex,
    color: "purple-darken-2",
    inputs: [ids.REGRESSION_MODEL],
  },
};

export default tree;
