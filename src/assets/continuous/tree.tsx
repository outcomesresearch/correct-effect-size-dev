import {
  PearsonCorrelationCoefficientR,
  SpearmansRho,
  CoefficientOfDeterminationR2,
  MeanDifference,
  MedianDifference,
  CohensD,
  GlassDelta,
  HedgesG,
  RNonParametric,
  EtaSquared,
  OmegaSquared,
  BetaCoefficient,
  PartPartialCorrelations,
  LSMeanDifference,
  RSquared,
  AdjustedRSquared,
} from "../../components";

import { TreeNode } from "../types";
import * as ids from "./ids";
import {
  CONTINUOUS,
  EFFECT_SIZE_SELECTION_COMPONENT,
  EFFECT_SIZE_SELECTION_TITLE,
  FOCUS_OF_ANALYSIS_SELECTION_COMPONENT,
  FOCUS_OF_ANALYSIS_TITLE,
  FURTHER_ADJUSTMENTS_COMPONENT,
  FURTHER_ADJUSTMENTS_TITLE,
  ROOT,
} from "../ids";

const tree: Record<string, TreeNode> = {
  [CONTINUOUS]: {
    type: "question",
    title: FOCUS_OF_ANALYSIS_TITLE,
    component: FOCUS_OF_ANALYSIS_SELECTION_COMPONENT,
    inputs: [ROOT],
    choices: [
      {
        answer: "Correlation with continuous measure (continuous)",
        next: ids.CORRELATION_WITH_CONTINUOUS_MEASURE,
        option_description:
          "Correlation is a statistical measure of the strength of the association between two variables.",
      },
      {
        answer: "Comparison of 2 groups",
        next: ids.COMPARISON_OF_TWO_GROUPS,
        option_description:
          "A comparison is evaluating the relationship between 2 groups.",
      },
      {
        answer: "Comparison of 3 or more groups (Continuous)",
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

  // ---------------- CORRELATION ----------------
  [ids.CORRELATION_WITH_CONTINUOUS_MEASURE]: {
    type: "question",
    title: EFFECT_SIZE_SELECTION_TITLE,
    component: EFFECT_SIZE_SELECTION_COMPONENT,
    color: "teal-darken-2",
    inputs: [CONTINUOUS],
    choices: [
      {
        answer: "Pearson Correlation Coefficient r",
        next: ids.PEARSON_R,
      },
      {
        answer: "Spearman’s rho (non-parametric)",
        next: ids.SPEARMAN_RHO,
      },
      {
        answer: "Coefficient of Determination R²",
        next: ids.R2,
      },
    ],
  },
  [ids.PEARSON_R]: {
    type: "statement",
    title: "Pearson Correlation Coefficient r",
    flowChartTitle: "Pearson r",
    component: PearsonCorrelationCoefficientR,
    color: "teal-darken-2",
    inputs: [ids.CORRELATION_WITH_CONTINUOUS_MEASURE],
  },
  [ids.SPEARMAN_RHO]: {
    type: "statement",
    title: "Spearman’s rho (non-parametric)",
    flowChartTitle: "Spearman’s rho",
    component: SpearmansRho,
    color: "teal-darken-2",
    inputs: [ids.CORRELATION_WITH_CONTINUOUS_MEASURE],
  },
  [ids.R2]: {
    type: "statement",
    title: "Coefficient of Determination R²",
    flowChartTitle: "R²",
    component: CoefficientOfDeterminationR2,
    color: "teal-darken-2",
    inputs: [ids.CORRELATION_WITH_CONTINUOUS_MEASURE],
  },

  // ---------------- TWO GROUPS ----------------
  [ids.COMPARISON_OF_TWO_GROUPS]: {
    type: "question",
    title: EFFECT_SIZE_SELECTION_TITLE + "continuous",
    component: EFFECT_SIZE_SELECTION_COMPONENT,
    color: "indigo-darken-2",
    inputs: [CONTINUOUS],
    choices: [
      { answer: "Mean Difference", next: ids.MEAN_DIFFERENCE },
      {
        answer: "Median Difference (non-parametric)",
        next: ids.MEDIAN_DIFFERENCE,
      },
      { answer: "Cohen’s d", next: ids.COHENS_D },
      { answer: "Glass’s Δ", next: ids.GLASS_DELTA },
      { answer: "Hedges’ g", next: ids.HEDGES_G },
      { answer: "r (non-parametric)", next: ids.R_NONPARAMETRIC },
    ],
  },
  [ids.MEAN_DIFFERENCE]: {
    type: "statement",
    title: "Mean Difference",
    flowChartTitle: "Mean Difference",
    component: MeanDifference,
    color: "indigo-darken-2",
    inputs: [ids.COMPARISON_OF_TWO_GROUPS],
  },
  [ids.MEDIAN_DIFFERENCE]: {
    type: "statement",
    title: "Median Difference (non-parametric)",
    flowChartTitle: "Median Difference",
    component: MedianDifference,
    color: "indigo-darken-2",
    inputs: [ids.COMPARISON_OF_TWO_GROUPS],
  },
  [ids.COHENS_D]: {
    type: "statement",
    title: "Cohen’s d",
    flowChartTitle: "Cohen’s d",
    component: CohensD,
    color: "indigo-darken-2",
    inputs: [ids.COMPARISON_OF_TWO_GROUPS],
  },
  [ids.GLASS_DELTA]: {
    type: "statement",
    title: "Glass’s Δ",
    flowChartTitle: "Glass’s Δ",
    component: GlassDelta,
    color: "indigo-darken-2",
    inputs: [ids.COMPARISON_OF_TWO_GROUPS],
  },
  [ids.HEDGES_G]: {
    type: "statement",
    title: "Hedges’ g",
    flowChartTitle: "Hedges’ g",
    component: HedgesG,
    color: "indigo-darken-2",
    inputs: [ids.COMPARISON_OF_TWO_GROUPS],
  },
  [ids.R_NONPARAMETRIC]: {
    type: "statement",
    title: "r (non-parametric)",
    flowChartTitle: "r (non-parametric)",
    component: RNonParametric,
    color: "indigo-darken-2",
    inputs: [ids.COMPARISON_OF_TWO_GROUPS],
  },

  // ---------------- THREE+ GROUPS ----------------
  [ids.COMPARISON_OF_THREEMORE_GROUPS]: {
    type: "question",
    title: FURTHER_ADJUSTMENTS_TITLE + "continuous",
    component: FURTHER_ADJUSTMENTS_COMPONENT,
    color: "orange-darken-2",
    inputs: [CONTINUOUS],
    choices: [
      {
        answer: "Reporting Pairwise Differences",
        next: ids.REPORTING_PAIRWISE_DIFFERENCES,
      },
      {
        answer: "Reporting Overall Effect",
        next: ids.REPORTING_OVERALL_EFFECT,
      },
    ],
  },
  [ids.REPORTING_PAIRWISE_DIFFERENCES]: {
    type: "question",
    title: EFFECT_SIZE_SELECTION_TITLE,
    component: EFFECT_SIZE_SELECTION_COMPONENT,
    color: "orange-darken-2",
    inputs: [ids.COMPARISON_OF_THREEMORE_GROUPS],
    choices: [
      { answer: "Mean Difference", next: ids.MEAN_DIFFERENCE_3GROUPS },
      {
        answer: "Median Difference (non-parametric)",
        next: ids.MEDIAN_DIFFERENCE_3GROUPS,
      },
      { answer: "Cohen’s d", next: ids.COHENS_D_3GROUPS },
      { answer: "Glass’s Δ", next: ids.GLASS_DELTA_3GROUPS },
      { answer: "Hedges’ g", next: ids.HEDGES_G_3GROUPS },
      { answer: "r (non-parametric)", next: ids.R_NONPARAMETRIC_3GROUPS },
    ],
  },
  [ids.MEAN_DIFFERENCE_3GROUPS]: {
    type: "statement",
    title: "Mean Difference",
    flowChartTitle: "Mean Difference",
    component: MeanDifference,
    color: "indigo-darken-2",
    inputs: [ids.COMPARISON_OF_THREEMORE_GROUPS],
  },
  [ids.MEDIAN_DIFFERENCE_3GROUPS]: {
    type: "statement",
    title: "Median Difference (non-parametric)",
    flowChartTitle: "Median Difference",
    component: MedianDifference,
    color: "indigo-darken-2",
    inputs: [ids.COMPARISON_OF_THREEMORE_GROUPS],
  },
  [ids.COHENS_D_3GROUPS]: {
    type: "statement",
    title: "Cohen’s d",
    flowChartTitle: "Cohen’s d",
    component: CohensD,
    color: "indigo-darken-2",
    inputs: [ids.COMPARISON_OF_THREEMORE_GROUPS],
  },
  [ids.GLASS_DELTA_3GROUPS]: {
    type: "statement",
    title: "Glass’s Δ",
    flowChartTitle: "Glass’s Δ",
    component: GlassDelta,
    color: "indigo-darken-2",
    inputs: [ids.COMPARISON_OF_THREEMORE_GROUPS],
  },
  [ids.HEDGES_G_3GROUPS]: {
    type: "statement",
    title: "Hedges’ g",
    flowChartTitle: "Hedges’ g",
    component: HedgesG,
    color: "indigo-darken-2",
    inputs: [ids.COMPARISON_OF_THREEMORE_GROUPS],
  },
  [ids.R_NONPARAMETRIC_3GROUPS]: {
    type: "statement",
    title: "r (non-parametric)",
    flowChartTitle: "r (non-parametric)",
    component: RNonParametric,
    color: "indigo-darken-2",
    inputs: [ids.COMPARISON_OF_THREEMORE_GROUPS],
  },

  [ids.REPORTING_OVERALL_EFFECT]: {
    type: "question",
    title: EFFECT_SIZE_SELECTION_TITLE,
    component: EFFECT_SIZE_SELECTION_COMPONENT,
    color: "orange-darken-2",
    inputs: [ids.COMPARISON_OF_THREEMORE_GROUPS],
    choices: [
      { answer: "Eta Squared (η²)", next: ids.ETA_SQUARED },
      { answer: "Omega Squared (ω²)", next: ids.OMEGA_SQUARED },
    ],
  },
  [ids.ETA_SQUARED]: {
    type: "statement",
    title: "Eta Squared (η²)",
    flowChartTitle: "η²",
    component: EtaSquared,
    color: "orange-darken-2",
    inputs: [ids.REPORTING_OVERALL_EFFECT],
  },
  [ids.OMEGA_SQUARED]: {
    type: "statement",
    title: "Omega Squared (ω²)",
    flowChartTitle: "ω²",
    component: OmegaSquared,
    color: "orange-darken-2",
    inputs: [ids.REPORTING_OVERALL_EFFECT],
  },

  // ---------------- REGRESSION ----------------
  [ids.REGRESSION_MODEL]: {
    type: "question",
    title: FURTHER_ADJUSTMENTS_TITLE + "continuous",
    component: FURTHER_ADJUSTMENTS_COMPONENT,
    color: "purple-darken-2",
    inputs: [CONTINUOUS],
    choices: [
      {
        answer: "Adjusted Association with Predictor",
        next: ids.ADJUSTED_ASSOCIATION,
      },
      {
        answer: "Overall Model",
        next: ids.OVERALL_MODEL,
      },
    ],
  },
  [ids.ADJUSTED_ASSOCIATION]: {
    type: "question",
    title: EFFECT_SIZE_SELECTION_TITLE,
    component: EFFECT_SIZE_SELECTION_COMPONENT,
    color: "purple-darken-2",
    inputs: [ids.REGRESSION_MODEL],
    choices: [
      {
        answer: "Beta coefficient (standardized or unstandardized)",
        next: ids.BETA_COEFFICIENT,
      },
      {
        answer: "Part and partial correlations",
        next: ids.PART_PARTIAL_CORRELATIONS,
      },
      {
        answer: "LS Mean Difference",
        next: ids.LS_MEAN_DIFFERENCE,
      },
    ],
  },
  [ids.OVERALL_MODEL]: {
    type: "question",
    title: EFFECT_SIZE_SELECTION_TITLE,
    component: EFFECT_SIZE_SELECTION_COMPONENT,
    color: "purple-darken-2",
    inputs: [ids.REGRESSION_MODEL],
    choices: [
      { answer: "R²", next: ids.R2_REGRESSION },
      { answer: "Adjusted R²", next: ids.ADJUSTED_R2 },
    ],
  },
  [ids.BETA_COEFFICIENT]: {
    type: "statement",
    title: "Beta Coefficient (standardized / unstandardized)",
    flowChartTitle: "β Coefficient",
    component: BetaCoefficient,
    color: "purple-darken-2",
    inputs: [ids.ADJUSTED_ASSOCIATION],
  },
  [ids.PART_PARTIAL_CORRELATIONS]: {
    type: "statement",
    title: "Part and partial correlatinos",
    flowChartTitle: "Part and partial Correlation",
    component: PartPartialCorrelations,
    color: "purple-darken-2",
    inputs: [ids.ADJUSTED_ASSOCIATION],
  },
  [ids.LS_MEAN_DIFFERENCE]: {
    type: "statement",
    title: "LS Mean Difference",
    flowChartTitle: "LS Mean Difference",
    component: LSMeanDifference,
    color: "purple-darken-2",
    inputs: [ids.ADJUSTED_ASSOCIATION],
  },
  [ids.R2_REGRESSION]: {
    type: "statement",
    title: "R²",
    flowChartTitle: "R²",
    component: RSquared,
    color: "purple-darken-2",
    inputs: [ids.OVERALL_MODEL],
  },
  [ids.ADJUSTED_R2]: {
    type: "statement",
    title: "Adjusted R²",
    flowChartTitle: "Adjusted R²",
    component: AdjustedRSquared,
    color: "purple-darken-2",
    inputs: [ids.OVERALL_MODEL],
  },
};

console.log({ tree });

export default tree;
