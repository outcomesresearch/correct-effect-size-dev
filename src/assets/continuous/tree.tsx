import {
  PearsonExamples,
  PearsonExplanation,
} from "../../components/continuous/PearsonCorrelationCoefficient/index";
import {
  CoefficientOfDeterminationExamples,
  CoefficientOfDeterminationExplanation,
} from "../../components/continuous/CoefficientOfDetermination/index";
import {
  SpearmanRhoExamples,
  SpearmanRhoExplanation,
} from "../../components/continuous/SpearmanRho/index";
import {
  MeanDifferenceExamples,
  MeanDifferenceExamples3Groups,
  MeanDifferenceExplanation,
} from "../../components/continuous/MeanDifference/index";
import {
  MedianDifferenceExamples,
  MedianDifferenceExplanation,
} from "../../components/continuous/MedianDifference/index";
import {
  CohensDExamples,
  CohensDExplanation,
} from "../../components/continuous/CohensD/index";
import {
  GlassDeltaExamples,
  GlassDeltaExamples3Groups,
  GlassDeltaExplanation,
} from "../../components/continuous/GlassDelta/index";
import {
  HedgesGExamples,
  HedgesGExamples3Groups,
  HedgesGExplanation,
} from "../../components/continuous/HedgesG/index";
import {
  RNonParametricExamples,
  RNonParametricExamples3Groups,
  RNonParametricExplanation,
} from "../../components/continuous/RNonParametric/index";
import {
  EtaSquaredExamples,
  EtaSquaredExplanation,
} from "../../components/continuous/EtaSquared/index";
import {
  OmegaSquaredExamples,
  OmegaSquaredExplanation,
} from "../../components/continuous/OmegaSquared/index";
import {
  BetaCoefficientExamples,
  BetaCoefficientExplanation,
} from "../../components/continuous/BetaCoefficient/index";
import {
  PartPartialCorrelationsExamples,
  PartPartialCorrelationsExplanation,
} from "../../components/continuous/PartPartialCorrelations/index";
import {
  LSMeanDifferenceExamples,
  LSMeanDifferenceExplanation,
} from "../../components/continuous/LSMeanDifference/index";
import {
  RSquaredExamples,
  RSquaredExplanation,
} from "../../components/continuous/RSquared/index";
import {
  AdjustedRSquaredExamples,
  AdjustedRSquaredExplanation,
} from "../../components/continuous/AdjustedRSquared/index";

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
  ADJUSTED_ASSOCIATION_WITH_PREDICTOR_ANSWER,
  ADJUSTED_ASSOCIATION_WITH_PREDICTOR_SHORT_VERSION,
  ADJUSTED_ASSOCIATION_WITH_PREDICTOR_LONG_VERSION,
  OVERALL_MODEL_ANSWER,
  OVERALL_MODEL_SHORT_VERSION,
  OVERALL_MODEL_LONG_VERSION,
  REPORTING_PAIRWISE_DIFFERENCES_ANSWER,
  REPORTING_PAIRWISE_DIFFERENCES_SHORT_VERSION,
  REPORTING_PAIRWISE_DIFFERENCES_LONG_VERSION,
  REPORTING_OVERALL_EFFECT_ANSWER,
  REPORTING_OVERALL_EFFECT_SHORT_VERSION,
  REPORTING_OVERALL_EFFECT_LONG_VERSION,
  CORRELATION_WITH_CONTINUOUS_MEASURE_DESCRIPTION,
  COMPARISON_OF_TWO_GROUPS_DESCRIPTION,
  COMPARISON_OF_THREE_OR_MORE_GROUPS_DESCRIPTION,
  REGRESSION_MODEL_DESCRIPTION,
} from "../ids";

const tree: Record<string, TreeNode> = {
  [CONTINUOUS]: {
    type: "question",
    title: FOCUS_OF_ANALYSIS_TITLE,
    component: FOCUS_OF_ANALYSIS_SELECTION_COMPONENT,
    inputs: [ROOT],
    choices: [
      {
        answer: "Correlation with continuous measure",
        next: ids.CORRELATION_WITH_CONTINUOUS_MEASURE,
        option_description: CORRELATION_WITH_CONTINUOUS_MEASURE_DESCRIPTION,
      },
      {
        answer: "Comparison of 2 groups",
        next: ids.COMPARISON_OF_TWO_GROUPS,
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
        option_description:
          "Used to quantify the linear relationship or association between two continuous variables.",
      },
      {
        answer: "Spearman's rho (non-parametric)",
        next: ids.SPEARMAN_RHO,
        option_description:
          "Can be used to measure the strength and direction of monotonic associations between two ordinal or ranked variables.",
      },
      {
        answer: "Coefficient of Determination R²",
        next: ids.R2,
        option_description:
          "Quantifies the proportion of the total variance in the dependent variable that is explained by the independent variables included in the regression model.",
      },
    ],
  },
  [ids.PEARSON_R]: {
    type: "statement",
    title: "Pearson correlation coefficient (Pearson's r)",
    flowChartTitle: "Pearson r",
    component: PearsonExplanation,
    color: "teal-darken-2",
    inputs: [ids.CORRELATION_WITH_CONTINUOUS_MEASURE],
    examples: PearsonExamples,
  },
  [ids.SPEARMAN_RHO]: {
    type: "statement",
    title: "Spearman's rho (non-parametric)",
    flowChartTitle: "Spearman's rho",
    component: SpearmanRhoExplanation,
    color: "teal-darken-2",
    inputs: [ids.CORRELATION_WITH_CONTINUOUS_MEASURE],
    examples: SpearmanRhoExamples,
  },
  [ids.R2]: {
    type: "statement",
    title: "Coefficient of Determination R²",
    flowChartTitle: "R2",
    component: CoefficientOfDeterminationExplanation,
    color: "teal-darken-2",
    inputs: [ids.CORRELATION_WITH_CONTINUOUS_MEASURE],
    examples: CoefficientOfDeterminationExamples,
  },

  // ---------------- TWO GROUPS ----------------
  [ids.COMPARISON_OF_TWO_GROUPS]: {
    type: "question",
    title: EFFECT_SIZE_SELECTION_TITLE,
    component: EFFECT_SIZE_SELECTION_COMPONENT,
    color: "indigo-darken-2",
    inputs: [CONTINUOUS],
    choices: [
      {
        answer: "Mean Difference",
        next: ids.MEAN_DIFFERENCE,
        option_description:
          "Measures the absolute difference between the means of two or more groups of interest.",
      },
      {
        answer: "Median Difference (non-parametric)",
        next: ids.MEDIAN_DIFFERENCE,
        option_description:
          "Measures the absolute difference between the medians of two or more groups of interest.",
      },
      {
        answer: "Cohen's d",
        next: ids.COHENS_D,
        option_description:
          "A standardized measure that represents the magnitude of the difference between two groups by taking the difference between the means and dividing by the pooled standard deviation.",
      },
      {
        answer: "Glass's Δ",
        next: ids.GLASS_DELTA,
        option_description:
          "A standardized measure representing the magnitude of the difference between two groups, similar to Cohen's d.",
      },
      {
        answer: "Hedges' g",
        next: ids.HEDGES_G,
        option_description:
          "Represents the magnitude of the difference between two groups in terms of standard deviations, similar to Cohen's d and Glass's ∆.",
      },
      {
        answer: "r (non-parametric)",
        next: ids.R_NONPARAMETRIC,
        option_description:
          "A standardized measure that represents the strength and direction of a linear relationship between two ordinal or ranked variables without making assumptions about the distribution of the variables.",
      },
    ],
  },
  [ids.MEAN_DIFFERENCE]: {
    type: "statement",
    title: "Mean Difference",
    flowChartTitle: "Mean Difference",
    component: MeanDifferenceExplanation,
    color: "indigo-darken-2",
    inputs: [ids.COMPARISON_OF_TWO_GROUPS],
    examples: MeanDifferenceExamples,
  },
  [ids.MEDIAN_DIFFERENCE]: {
    type: "statement",
    title: "Median Difference (non-parametric)",
    flowChartTitle: "Median Difference",
    component: MedianDifferenceExplanation,
    color: "indigo-darken-2",
    inputs: [ids.COMPARISON_OF_TWO_GROUPS],
    examples: MedianDifferenceExamples,
  },
  [ids.COHENS_D]: {
    type: "statement",
    title: "Cohen's d",
    flowChartTitle: "Cohen's d",
    component: CohensDExplanation,
    color: "indigo-darken-2",
    inputs: [ids.COMPARISON_OF_TWO_GROUPS],
    examples: CohensDExamples,
  },
  [ids.GLASS_DELTA]: {
    type: "statement",
    title: "Glass's Δ",
    flowChartTitle: "Glass's Δ",
    component: GlassDeltaExplanation,
    color: "indigo-darken-2",
    inputs: [ids.COMPARISON_OF_TWO_GROUPS],
    examples: GlassDeltaExamples,
  },
  [ids.HEDGES_G]: {
    type: "statement",
    title: "Hedges' g",
    flowChartTitle: "Hedges' g",
    component: HedgesGExplanation,
    color: "indigo-darken-2",
    inputs: [ids.COMPARISON_OF_TWO_GROUPS],
    examples: HedgesGExamples,
  },
  [ids.R_NONPARAMETRIC]: {
    type: "statement",
    title: "r (non-parametric)",
    flowChartTitle: "r (non-parametric)",
    component: RNonParametricExplanation,
    color: "indigo-darken-2",
    inputs: [ids.COMPARISON_OF_TWO_GROUPS],
    examples: RNonParametricExamples,
  },

  // ---------------- THREE+ GROUPS ----------------
  [ids.COMPARISON_OF_THREEMORE_GROUPS]: {
    type: "question",
    title: FURTHER_ADJUSTMENTS_TITLE,
    component: FURTHER_ADJUSTMENTS_COMPONENT,
    color: "orange-darken-2",
    inputs: [CONTINUOUS],
    choices: [
      {
        answer: REPORTING_PAIRWISE_DIFFERENCES_ANSWER,
        next: ids.REPORTING_PAIRWISE_DIFFERENCES,
        option_description: {
          short: REPORTING_PAIRWISE_DIFFERENCES_SHORT_VERSION,
          long: REPORTING_PAIRWISE_DIFFERENCES_LONG_VERSION,
        },
      },
      {
        answer: REPORTING_OVERALL_EFFECT_ANSWER,
        next: ids.REPORTING_OVERALL_EFFECT,
        option_description: {
          short: REPORTING_OVERALL_EFFECT_SHORT_VERSION,
          long: REPORTING_OVERALL_EFFECT_LONG_VERSION,
        },
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
      {
        answer: "Mean Difference",
        next: ids.MEAN_DIFFERENCE_3GROUPS,
        option_description:
          "Measures the absolute difference between the means of two or more groups of interest.",
      },
      {
        answer: "Median Difference (non-parametric)",
        next: ids.MEDIAN_DIFFERENCE_3GROUPS,
        option_description:
          "Measures the absolute difference between the medians of two or more groups of interest.",
      },
      {
        answer: "Cohen's d",
        next: ids.COHENS_D_3GROUPS,
        option_description:
          "Represents the magnitude of the difference between two groups by taking the difference between the means and dividing by the pooled standard deviation.",
      },
      {
        answer: "Glass's Δ",
        next: ids.GLASS_DELTA_3GROUPS,
        option_description:
          "Represents the magnitude of the difference between two groups, similar to Cohen's d.",
      },
      {
        answer: "Hedges' g",
        next: ids.HEDGES_G_3GROUPS,
        option_description:
          "Represents the magnitude of the difference between two groups in terms of standard deviations, similar to Cohen's d and Glass's ∆.",
      },
      {
        answer: "r (non-parametric)",
        next: ids.R_NONPARAMETRIC_3GROUPS,
        option_description:
          "Represents the strength and direction of a linear relationship between two ordinal or ranked variables without making assumptions about the distribution of the variables.",
      },
    ],
  },
  [ids.MEAN_DIFFERENCE_3GROUPS]: {
    type: "statement",
    title: "Mean Difference",
    flowChartTitle: "Mean Difference",
    component: MeanDifferenceExplanation,
    color: "indigo-darken-2",
    inputs: [ids.REPORTING_PAIRWISE_DIFFERENCES],
    examples: MeanDifferenceExamples3Groups,
  },
  [ids.MEDIAN_DIFFERENCE_3GROUPS]: {
    type: "statement",
    title: "Median Difference (non-parametric)",
    flowChartTitle: "Median Difference",
    component: MedianDifferenceExplanation,
    color: "indigo-darken-2",
    inputs: [ids.REPORTING_PAIRWISE_DIFFERENCES],
    examples: MedianDifferenceExamples,
  },
  [ids.COHENS_D_3GROUPS]: {
    type: "statement",
    title: "Cohen's d",
    flowChartTitle: "Cohen's d",
    component: CohensDExplanation,
    color: "indigo-darken-2",
    inputs: [ids.REPORTING_PAIRWISE_DIFFERENCES],
    examples: CohensDExamples,
  },
  [ids.GLASS_DELTA_3GROUPS]: {
    type: "statement",
    title: "Glass's Δ",
    flowChartTitle: "Glass's Δ",
    component: GlassDeltaExplanation,
    color: "indigo-darken-2",
    inputs: [ids.REPORTING_PAIRWISE_DIFFERENCES],
    examples: GlassDeltaExamples3Groups,
  },
  [ids.HEDGES_G_3GROUPS]: {
    type: "statement",
    title: "Hedges' g",
    flowChartTitle: "Hedges' g",
    component: HedgesGExplanation,
    color: "indigo-darken-2",
    inputs: [ids.REPORTING_PAIRWISE_DIFFERENCES],
    examples: HedgesGExamples3Groups,
  },
  [ids.R_NONPARAMETRIC_3GROUPS]: {
    type: "statement",
    title: "r (non-parametric)",
    flowChartTitle: "r (non-parametric)",
    component: RNonParametricExplanation,
    color: "indigo-darken-2",
    inputs: [ids.REPORTING_PAIRWISE_DIFFERENCES],
    examples: RNonParametricExamples3Groups,
  },

  [ids.REPORTING_OVERALL_EFFECT]: {
    type: "question",
    title: EFFECT_SIZE_SELECTION_TITLE,
    component: EFFECT_SIZE_SELECTION_COMPONENT,
    color: "orange-darken-2",
    inputs: [ids.COMPARISON_OF_THREEMORE_GROUPS],
    choices: [
      {
        answer: "Eta Squared (η²)",
        next: ids.ETA_SQUARED,
        option_description:
          "Used to assess the strength of association between multiple groups and a dependent variable; it is commonly used in analysis of variance.",
      },
      {
        answer: "Omega Squared (ω²)",
        next: ids.OMEGA_SQUARED,
        option_description:
          "Used to assess the strength of association between multiple groups and a dependent variable; it is commonly used in analysis of variance.",
      },
    ],
  },
  [ids.ETA_SQUARED]: {
    type: "statement",
    title: "Eta Squared (η²)",
    flowChartTitle: "η²",
    component: EtaSquaredExplanation,
    color: "orange-darken-2",
    inputs: [ids.REPORTING_OVERALL_EFFECT],
    examples: EtaSquaredExamples,
  },
  [ids.OMEGA_SQUARED]: {
    type: "statement",
    title: "Omega Squared (ω²)",
    flowChartTitle: "ω²",
    component: OmegaSquaredExplanation,
    color: "orange-darken-2",
    inputs: [ids.REPORTING_OVERALL_EFFECT],
    examples: OmegaSquaredExamples,
  },

  // ---------------- REGRESSION ----------------
  [ids.REGRESSION_MODEL]: {
    type: "question",
    title: FURTHER_ADJUSTMENTS_TITLE,
    component: FURTHER_ADJUSTMENTS_COMPONENT,
    color: "purple-darken-2",
    inputs: [CONTINUOUS],
    choices: [
      {
        answer: ADJUSTED_ASSOCIATION_WITH_PREDICTOR_ANSWER,
        next: ids.ADJUSTED_ASSOCIATION,
        option_description: {
          short: ADJUSTED_ASSOCIATION_WITH_PREDICTOR_SHORT_VERSION,
          long: ADJUSTED_ASSOCIATION_WITH_PREDICTOR_LONG_VERSION,
        },
      },
      {
        answer: OVERALL_MODEL_ANSWER,
        next: ids.OVERALL_MODEL,
        option_description: {
          short: OVERALL_MODEL_SHORT_VERSION,
          long: OVERALL_MODEL_LONG_VERSION,
        },
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
        option_description:
          "Represents the change in the dependent variable in standard deviation units for a one-standard-deviation change in the predictor variable, while holding all other predictor variables constant.",
      },
      {
        answer: "Part and partial correlations",
        next: ids.PART_PARTIAL_CORRELATIONS,
        option_description:
          "Measures the unique contribution of one predictor variable to the variance in the dependent variable, while controlling for the effects of other predictor variables.",
      },
      {
        answer: "Least Squared Mean Difference",
        next: ids.LS_MEAN_DIFFERENCE,
        option_description:
          "Used to estimate and compare group means in a regression model, particularly in the context of analysis of variance or linear regression.",
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
      {
        answer: "R²",
        next: ids.R2_REGRESSION,
        option_description:
          "Quantifies the proportion of the total variance in the dependent variable that is explained by the independent variables included in the regression model.",
      },
      {
        answer: "Adjusted R²",
        next: ids.ADJUSTED_R2,
        option_description:
          "A statistical metric used to measure the proportion of variance in the dependent variable that is explained by the independent variables in a regression model.",
      },
    ],
  },
  [ids.BETA_COEFFICIENT]: {
    type: "statement",
    title: "Beta Coefficient (standardized / unstandardized)",
    flowChartTitle: "β Coefficient",
    component: BetaCoefficientExplanation,
    color: "purple-darken-2",
    inputs: [ids.ADJUSTED_ASSOCIATION],
    examples: BetaCoefficientExamples,
  },
  [ids.PART_PARTIAL_CORRELATIONS]: {
    type: "statement",
    title: "Part and partial correlations",
    flowChartTitle: "Part and partial Correlation",
    component: PartPartialCorrelationsExplanation,
    color: "purple-darken-2",
    inputs: [ids.ADJUSTED_ASSOCIATION],
    examples: PartPartialCorrelationsExamples,
  },
  [ids.LS_MEAN_DIFFERENCE]: {
    type: "statement",
    title: "LS Mean Difference",
    flowChartTitle: "LS Mean Difference",
    component: LSMeanDifferenceExplanation,
    color: "purple-darken-2",
    inputs: [ids.ADJUSTED_ASSOCIATION],
    examples: LSMeanDifferenceExamples,
  },
  [ids.R2_REGRESSION]: {
    type: "statement",
    title: "R²",
    flowChartTitle: "R²",
    component: RSquaredExplanation,
    color: "purple-darken-2",
    inputs: [ids.OVERALL_MODEL],
    examples: RSquaredExamples,
  },
  [ids.ADJUSTED_R2]: {
    type: "statement",
    title: "Adjusted R²",
    flowChartTitle: "Adjusted R²",
    component: AdjustedRSquaredExplanation,
    color: "purple-darken-2",
    inputs: [ids.OVERALL_MODEL],
    examples: AdjustedRSquaredExamples,
  },
};

export default tree;
