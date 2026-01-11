// src/trees/categorical.tsx
import PointBiSerialCorrelation from "../../components/categorical/PointBiSerialCorrelation";

import {
  RiskRatioExamples,
  RiskRatioExamples3Groups,
  RiskRatioExplanation,
} from "../../components/categorical/RiskRatio/index";
import {
  RiskDifferenceExamples,
  RiskDifferenceExamples3Groups,
  RiskDifferenceExplanation,
} from "../../components/categorical/RiskDifference/index";
import {
  PhiCoefficientExamples,
  PhiCoefficientExamples3Groups,
  PhiCoefficientExplanation,
} from "../../components/categorical/PhiCoefficient/index";
import {
  PseudoRSquaredExamples,
  PseudoRSquaredExplanation,
} from "../../components/categorical/PseudoRSquared/index";
import {
  CStatisticExamples,
  CStatisticExplanation,
} from "../../components/categorical/CStatistic/index";
import {
  PercentCorrectlyClassifiedExamples,
  PercentCorrectlyClassifiedExplanation,
} from "../../components/categorical/PercentCorrectlyClassified/index";
import {
  OddsRatioExplanation,
  OddsRatioExamples3Groups,
  OddsRatioExamplesRegression,
} from "../../components/categorical/OddsRatio/index";
import {
  CramersVExplanation,
  CramersVExamples,
} from "../../components/categorical/CramersV/index";
import {
  GoodmanKruskalLambdaExplanation,
  GoodmanKruskalLambdaExamples,
} from "../../components/categorical/GoodmanKruskalLambda/index";
import {
  CliffsDeltaExplanation,
  CliffsDeltaExamples,
} from "../../components/categorical/CliffsDelta/index";
import {
  KendallsTauExplanation,
  KendallsTauExamples,
} from "../../components/categorical/KendallsTau/index";
import { TreeNode } from "../types";
import * as ids from "./ids";
import * as descriptions from "./descriptions";
import {
  CATEGORICAL,
  FOCUS_OF_ANALYSIS_SELECTION_COMPONENT,
  FOCUS_OF_ANALYSIS_TITLE,
  EFFECT_SIZE_SELECTION_COMPONENT,
  EFFECT_SIZE_SELECTION_TITLE,
  ROOT,
  FURTHER_ADJUSTMENTS_TITLE,
  FURTHER_ADJUSTMENTS_COMPONENT,
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
  // Root question for the categorical branch
  [CATEGORICAL]: {
    type: "question",
    title: FOCUS_OF_ANALYSIS_TITLE,
    component: FOCUS_OF_ANALYSIS_SELECTION_COMPONENT,
    inputs: [ROOT],
    choices: [
      {
        answer: "Correlation with continuous measure",
        // Only one measure applies (Point biserial) → go directly to its statement
        next: ids.POINT_BISERIAL,
        option_description: CORRELATION_WITH_CONTINUOUS_MEASURE_DESCRIPTION,
      },
      {
        answer: "Comparison of 2 groups",
        // Multiple measures → go to a selection screen
        next: ids.TWO_GROUPS_EFFECT_SIZES,
        option_description: COMPARISON_OF_TWO_GROUPS_DESCRIPTION,
      },
      {
        answer: "Comparison of 3 or more groups",
        // Needs a split between pairwise vs overall → question node
        next: ids.COMPARISON_OF_THREEMORE_GROUPS,
        option_description: COMPARISON_OF_THREE_OR_MORE_GROUPS_DESCRIPTION,
      },
      {
        answer: "Regression model",
        // Leads to another question (adjusted association vs overall model fit)
        next: ids.REGRESSION_MODEL,
        option_description: REGRESSION_MODEL_DESCRIPTION,
      },
    ],
  },

  // ---------------- CORRELATION WITH CONTINUOUS MEASURE (single measure) ----------------
  [ids.POINT_BISERIAL]: {
    type: "statement",
    title: "Point Bi-serial correlation",
    flowChartTitle: "Point Bi-serial",
    component: PointBiSerialCorrelation,
    color: "teal-darken-2",
    inputs: [CATEGORICAL],
  },

  // ---------------- COMPARISON OF TWO GROUPS (multiple measures) ----------------
  [ids.TWO_GROUPS_EFFECT_SIZES]: {
    type: "question",
    title: EFFECT_SIZE_SELECTION_TITLE,
    component: EFFECT_SIZE_SELECTION_COMPONENT,
    inputs: [CATEGORICAL],
    choices: [
      {
        answer: "Odds Ratio (OR)",
        next: ids.ODDS_RATIO,
        option_description: descriptions.ODDS_RATIO_DESCRIPTION,
      },
      {
        answer: "Risk Ratio (RR)",
        next: ids.RISK_RATIO,
        option_description: descriptions.RISK_RATIO_DESCRIPTION,
      },
      {
        answer: "Risk Difference",
        next: ids.RISK_DIFFERENCE,
        option_description: descriptions.RISK_DIFFERENCE_DESCRIPTION,
      },
      {
        answer: "Phi coefficient (ɸ)",
        next: ids.PHI_COEFFICIENT,
        option_description: descriptions.PHI_DESCRIPTION,
      },
    ],
  },
  [ids.ODDS_RATIO]: {
    type: "statement",
    title: "Odds Ratio (OR)",
    flowChartTitle: "Odds Ratio",
    component: OddsRatioExplanation,
    color: "indigo-darken-2",
    inputs: [ids.TWO_GROUPS_EFFECT_SIZES],
  },
  [ids.RISK_RATIO]: {
    type: "statement",
    title: "Risk Ratio (RR)",
    flowChartTitle: "Risk Ratio",
    component: RiskRatioExplanation,
    color: "indigo-darken-2",
    inputs: [ids.TWO_GROUPS_EFFECT_SIZES],
    examples: RiskRatioExamples,
  },
  [ids.RISK_DIFFERENCE]: {
    type: "statement",
    title: "Risk Difference",
    flowChartTitle: "Risk Difference",
    component: RiskDifferenceExplanation,
    color: "indigo-darken-2",
    inputs: [ids.TWO_GROUPS_EFFECT_SIZES],
    examples: RiskDifferenceExamples,
  },
  [ids.PHI_COEFFICIENT]: {
    type: "statement",
    title: "Phi coefficient (ɸ)",
    flowChartTitle: "Phi (ɸ)",
    component: PhiCoefficientExplanation,
    color: "indigo-darken-2",
    inputs: [ids.TWO_GROUPS_EFFECT_SIZES],
    examples: PhiCoefficientExamples,
  },

  // ---------------- COMPARISON OF THREE OR MORE GROUPS ----------------
  [ids.COMPARISON_OF_THREEMORE_GROUPS]: {
    type: "question",
    title: FURTHER_ADJUSTMENTS_TITLE,
    component: FURTHER_ADJUSTMENTS_COMPONENT,
    inputs: [CATEGORICAL],
    choices: [
      {
        answer: REPORTING_PAIRWISE_DIFFERENCES_ANSWER,
        next: ids.PAIRWISE_EFFECT_SIZES,
        option_description: {
          short: REPORTING_PAIRWISE_DIFFERENCES_SHORT_VERSION,
          long: REPORTING_PAIRWISE_DIFFERENCES_LONG_VERSION,
        },
      },
      {
        answer: REPORTING_OVERALL_EFFECT_ANSWER,
        next: ids.OVERALL_EFFECT_SIZES,
        option_description: {
          short: REPORTING_OVERALL_EFFECT_SHORT_VERSION,
          long: REPORTING_OVERALL_EFFECT_LONG_VERSION,
        },
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
        answer: "Odds Ratio (OR)",
        next: ids.ODDS_RATIO_3GROUPS,
        option_description: descriptions.ODDS_RATIO_DESCRIPTION,
      },
      {
        answer: "Risk Ratio (RR)",
        next: ids.RISK_RATIO_3GROUPS,
        option_description: descriptions.ODDS_RATIO_DESCRIPTION,
      },
      {
        answer: "Risk Difference",
        next: ids.RISK_DIFFERENCE_3GROUPS,
        option_description: descriptions.RISK_DIFFERENCE_DESCRIPTION,
      },
      {
        answer: "Phi coefficient (ɸ)",
        next: ids.PHI_COEFFICIENT_3GROUPS,
        option_description: descriptions.PHI_DESCRIPTION,
      },
    ],
  },
  [ids.ODDS_RATIO_3GROUPS]: {
    type: "statement",
    title: "Odds Ratio (OR)",
    flowChartTitle: "Odds Ratio",
    component: OddsRatioExplanation,
    color: "indigo-darken-2",
    inputs: [ids.PAIRWISE_EFFECT_SIZES],
    examples: OddsRatioExamples3Groups,
    examplesNote: "The examples shown are the same as those for comparing two groups.\n\nThe odds ratio is calculated through pairwise comparisons, and is performed similarly to when comparing two groups.",
  },
  [ids.RISK_RATIO_3GROUPS]: {
    type: "statement",
    title: "Risk Ratio (RR)",
    flowChartTitle: "Risk Ratio",
    component: RiskRatioExplanation,
    color: "indigo-darken-2",
    inputs: [ids.PAIRWISE_EFFECT_SIZES],
    examples: RiskRatioExamples3Groups,
  },
  [ids.RISK_DIFFERENCE_3GROUPS]: {
    type: "statement",
    title: "Risk Difference",
    flowChartTitle: "Risk Difference",
    component: RiskDifferenceExplanation,
    color: "indigo-darken-2",
    inputs: [ids.PAIRWISE_EFFECT_SIZES],
    examples: RiskDifferenceExamples3Groups,
  },
  [ids.PHI_COEFFICIENT_3GROUPS]: {
    type: "statement",
    title: "Phi coefficient (ɸ)",
    flowChartTitle: "Phi (ɸ)",
    component: PhiCoefficientExplanation,
    color: "indigo-darken-2",
    inputs: [ids.PAIRWISE_EFFECT_SIZES],
    examples: PhiCoefficientExamples3Groups,
  },

  // Overall effect for 3+ groups: nominal & ordinal measures (multiple → selection)
  [ids.OVERALL_EFFECT_SIZES]: {
    type: "question",
    title: EFFECT_SIZE_SELECTION_TITLE,
    component: EFFECT_SIZE_SELECTION_COMPONENT,
    inputs: [ids.COMPARISON_OF_THREEMORE_GROUPS],
    choices: [
      {
        answer: "Cramer's 𝑉",
        next: ids.CRAMERS_V,
        option_description:
          "Used as an effect size for categorical data, particularly in the context of analyzing the strength and association between two categorical variables.",
        group: "Nominal",
      },
      {
        answer: "Goodman–Kruskal λ",
        next: ids.GOODMAN_KRUSKAL_LAMBDA,
        option_description:
          "Measures the strength of association between two nominal or categorical variables in a contingency table.",
        group: "Nominal",
      },
      {
        answer: "Cliff's Δ",
        next: ids.CLIFFS_DELTA,
        option_description:
          "A nonparametric effect size measure used to describe the degree of overlap between two distributions.",
        group: "Ordinal",
      },
      {
        answer: "Kendall's τ",
        next: ids.KENDALLS_TAU,
        option_description:
          "A nonparametric correlation coefficient used to quantify the strength and direction of the relationship between two ordinal or ranked variables.",
        group: "Ordinal",
      },
    ],
  },
  [ids.CRAMERS_V]: {
    type: "statement",
    title: "Cramer's 𝑉",
    flowChartTitle: "Cramer's 𝑉",
    component: CramersVExplanation,
    color: "orange-darken-2",
    inputs: [ids.OVERALL_EFFECT_SIZES],
    examples: CramersVExamples,
  },
  [ids.GOODMAN_KRUSKAL_LAMBDA]: {
    type: "statement",
    title: "Goodman–Kruskal λ",
    flowChartTitle: "GK λ",
    component: GoodmanKruskalLambdaExplanation,
    color: "orange-darken-2",
    inputs: [ids.OVERALL_EFFECT_SIZES],
    examples: GoodmanKruskalLambdaExamples,
  },
  [ids.CLIFFS_DELTA]: {
    type: "statement",
    title: "Cliff's Δ",
    flowChartTitle: "Cliff's Δ",
    component: CliffsDeltaExplanation,
    color: "orange-darken-2",
    inputs: [ids.OVERALL_EFFECT_SIZES],
    examples: CliffsDeltaExamples,
  },
  [ids.KENDALLS_TAU]: {
    type: "statement",
    title: "Kendall's τ",
    flowChartTitle: "Kendall's τ",
    component: KendallsTauExplanation,
    color: "orange-darken-2",
    inputs: [ids.OVERALL_EFFECT_SIZES],
    examples: KendallsTauExamples,
  },

  // ---------------- REGRESSION MODEL ----------------
  [ids.REGRESSION_MODEL]: {
    type: "question",
    title: FURTHER_ADJUSTMENTS_TITLE,
    component: FURTHER_ADJUSTMENTS_COMPONENT,
    inputs: [CATEGORICAL],
    choices: [
      {
        answer: ADJUSTED_ASSOCIATION_WITH_PREDICTOR_ANSWER,
        next: ids.ODDS_RATIO_REGRESSION,
        option_description: {
          short: ADJUSTED_ASSOCIATION_WITH_PREDICTOR_SHORT_VERSION,
          long: ADJUSTED_ASSOCIATION_WITH_PREDICTOR_LONG_VERSION,
        },
      },
      {
        answer: OVERALL_MODEL_ANSWER,
        next: ids.REGRESSION_OVERALL_EFFECT_SIZES,
        option_description: {
          short: OVERALL_MODEL_SHORT_VERSION,
          long: OVERALL_MODEL_LONG_VERSION,
        },
      },
    ],
  },
  [ids.ODDS_RATIO_REGRESSION]: {
    type: "statement",
    title: "Odds Ratio (OR)",
    flowChartTitle: "Odds Ratio",
    component: OddsRatioExplanation,
    color: "indigo-darken-2",
    inputs: [ids.REGRESSION_MODEL],
    examples: OddsRatioExamplesRegression,
  },

  // Adjusted association (multiple → selection)
  // // Adjusted association (multiple → selection)
  // [ids.ADJUSTED_ASSOCIATION_EFFECT_SIZES]: {
  //   type: "question",
  //   title: EFFECT_SIZE_SELECTION_TITLE,
  //   component: EFFECT_SIZE_SELECTION_COMPONENT,
  //   inputs: [ids.REGRESSION_MODEL],
  //   choices: [
  //     {
  //       answer: "Odds Ratio (OR)",
  //       next: ids.ODDS_RATIO,
  //       option_description: descriptions.ODDS_RATIO_DESCRIPTION,
  //     },
  //     {
  //       answer: "Risk Ratio (RR)",
  //       next: ids.RISK_RATIO,
  //       option_description: descriptions.RISK_RATIO_DESCRIPTION,
  //     },
  //   ],
  // },

  // Overall model (multiple → selection)
  [ids.REGRESSION_OVERALL_EFFECT_SIZES]: {
    type: "question",
    title: EFFECT_SIZE_SELECTION_TITLE,
    component: EFFECT_SIZE_SELECTION_COMPONENT,
    inputs: [ids.REGRESSION_MODEL],
    choices: [
      {
        answer: "Pseudo R²",
        next: ids.PSEUDO_R2,
        option_description:
          "Measures the goodness-of-fit for models that do not inherently provide a traditional pseudo R² value, like logistic regression.",
      },
      {
        answer: "C-Statistic",
        next: ids.C_STATISTIC,
        option_description:
          "A performance measure used to evaluate the discriminatory power and predictive accuracy of a regression model, particularly in binary classification tasks.",
      },
      {
        answer: "Percent correctly classified",
        next: ids.PERCENT_CORRECTLY_CLASSIFIED,
        option_description:
          "A statistic used to quantify the accuracy of classification models.",
      },
    ],
  },
  [ids.PSEUDO_R2]: {
    type: "statement",
    title: "Pseudo R²",
    flowChartTitle: "Pseudo R²",
    component: PseudoRSquaredExplanation,
    color: "purple-darken-2",
    inputs: [ids.REGRESSION_OVERALL_EFFECT_SIZES],
    examples: PseudoRSquaredExamples,
  },
  [ids.C_STATISTIC]: {
    type: "statement",
    title: "C-Statistic",
    flowChartTitle: "C-Statistic",
    component: CStatisticExplanation,
    color: "purple-darken-2",
    inputs: [ids.REGRESSION_OVERALL_EFFECT_SIZES],
    examples: CStatisticExamples,
  },
  [ids.PERCENT_CORRECTLY_CLASSIFIED]: {
    type: "statement",
    title: "Percent correctly classified",
    flowChartTitle: "% Correctly Classified",
    component: PercentCorrectlyClassifiedExplanation,
    color: "purple-darken-2",
    inputs: [ids.REGRESSION_OVERALL_EFFECT_SIZES],
    examples: PercentCorrectlyClassifiedExamples,
  },
};

export default tree;
