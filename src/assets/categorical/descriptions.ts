export const CRAMERS_V_DESCRIPTION = {
    short: "Cramer's 𝑉 measures the strength of correlation between two nominal variables and values range from 0 to 1, with 0 indicating no association between the two variables and 1 a perfect association.",
    long: `Cramer's 𝑉 measures the strength of correlation between two nominal variables and values range from 0 to 1, with 0 indicating no association between the two variables and 1 a perfect association.\n\nCramer's 𝑉 values of > 0.05 indicate weak, > 0.10 moderate, > 0.15 strong, and > 0.25 very strong association.`,
};

export const GOODMAN_KRUSKAL_LAMBDA_DESCRIPTION = {
    short: "Goodman and Kruskal's Lambda (λ) measures the association between 2 nominal variables based on proportional reduction of error. Values of lambda are interpreted as percentages.",
    long: `Goodman and Kruskal's Lambda (λ) measures the association between 2 nominal variables based on proportional reduction of error. Values of lambda are interpreted as percentages.\n\nRange is from 0 to 1 (0 to 100%) with zero displaying no improvement in prediction of the dependent variable based on the values of the independent variable, and 100% displaying perfect prediction or association between variables.`,
};

export const CLIFFS_DELTA_DESCRIPTION = {
    short: "Cliff's delta (Δ) is a measure of effect size that quantifies the amount of difference in the distribution of the values of an ordinal variable, between two groups of observations.",
    long: `Cliff's delta (Δ) is a measure of effect size that quantifies the amount of difference in the distribution of the values of an ordinal variable, between two groups of observations.\n\nCliff's Δ range is -1 to 1, with zero indicating no difference and 1 indicating that values in the first group are larger than values in the second group.`,
};

export const KENDALLS_TAU_DESCRIPTION = {
    short: "Kendall's (𝑡) is a measure of the strength of association between ordinal variables.",
    long: `Kendall's (𝑡) is a measure of the strength of association between ordinal variables.\n\nKendall's 𝑡 ranges from 0 to 1, with 0 indicating no association and 1 a perfect association between the two variables.`,
};

export const PHI_DESCRIPTION = {
    short: "A measure of the strength of association between two dichotomous variables.",
    long: `The phi coefficient (ɸ) is a measure of the strength of association between two dichotomous variables.\n\nPhi coefficient has a range from 0–1 with 0 value displaying no correlation between the two variables.\n\nA value of 0.1 is considered a small effect, 0.3 medium effect, and 0.5 large effect.`,
};

export const RISK_DIFFERENCE_DESCRIPTION = {
    short: "The magnitude of the difference between the risk of an outcome of interest occurring in two or more groups.",
    long: "The magnitude of the difference between the risk of an outcome of interest occurring in two or more groups.",
};

export const RISK_RATIO_DESCRIPTION = {
    short: "Measure of the strength of association between 2 categorical variables, calculated as the ratio of the probability of the outcome occurring in one group compared to the probability of the outcome occurring in the other group.",
    long: `The Risk Ratio (also known as Relative Risk) is a measure of the strength of association between 2 categorical variables calculated as the ratio of the probability of the outcome occurring in one group (exposed group) compared to the probability of the outcome occurring in the other (not exposed) group(s).\n\nRR = 1 indicates that the probability of the outcome is the same in the 2 groups being compared, and there is no association between the 2 variables.\n\nRR > 1 indicates that the probability or risk for the outcome is higher in the exposed group.\n\nRR < 1 indicates that the probability or risk for the outcome is lower in the exposed group.`,
};

export const ODDS_RATIO_DESCRIPTION = {
    short: "Quantifies how much higher are the odds for exposure (risk factor) among cases as compared to controls.",
    long: `Odds Ratio (OR) is a measure of effect size used in case-control studies. OR quantifies how much higher are the odds for exposure (risk factor) among cases as compared to controls.\n\nOR = 1 indicates that odds are the same for cases and controls, and there is no association between the 2 variables.\n\nOR > 1, the odds for the event of interest are higher for cases as compared to controls.\n\nOR < 1, the odds for the event of interest are lower for cases as compared to controls.`,
};

export const PSEUDO_R2_DESCRIPTION = {
    short: "Measures of model fit when the dependent variable is categorical. As a measure of effect size, the Pseudo R² statistics quantify the proportion of variance that is explained by the variables in the model as compared to a model with no variables in it.",
    long: `Pseudo R² statistics are measures of model fit when the dependent variable is categorical. As a measure of effect size, the Pseudo R² statistics quantify the proportion of variance that is explained by the variables in the model as compared to a model with no variables in it.\n\nPseudo R² statistics should not be reported alone. They are of value when comparing performance of different models.`,
};

export const C_STATISTIC_DESCRIPTION = {
    short: "A measure of the discriminative power of a prediction model. C-statistic is equivalent to AUC in ROC analysis.",
    long: `The c-statistic is a measure of the discriminative power of a prediction model. C-statistic is equivalent to AUC in ROC analysis.\n\nC-statistic ranges from 0.5 to 1, with 0.5 showing no better discrimination than chance alone, and 1 indicating perfect discriminative power of the model.`,
};

export const PERCENT_CORRECTLY_CLASSIFIED_DESCRIPTION = {
    short: "Quantifies what percentage of the cases in the sample data are correctly classified by the prediction model.",
    long: `The percent correctly classified quantifies what percentage of the cases in the sample data are correctly classified by the prediction model.\n\nPercent correctly classified should be reported together with correctly classified for each of the categories of the dependent variable.`,
};
