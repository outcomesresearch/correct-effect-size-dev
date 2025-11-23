import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
        In patients followed for 2 years or more, what is the association
        between age, sex, race, cigarette smoking, BMI, exercise, and severity
        of comorbid ailments with the occurrence of a heart attack?
      </Text>
      <Tabs defaultValue="studyDesign">
        <Tabs.List>
          <Tabs.Tab value="studyDesign">Study Design and Methods</Tabs.Tab>
          <Tabs.Tab value="effectSize">Effect Size Measure & MCID</Tabs.Tab>
          <Tabs.Tab value="result">Result</Tabs.Tab>
          <Tabs.Tab value="discussion">Discussion and Future Research</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="studyDesign" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Clinical Research Study Design:</Text>
              <Text>Prospective longitudinal cohort study</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <Text>
                The study population consists of individuals who were identified
                from a primary care database within a specific geographic
                region, ensuring representativeness of the general population.
                Participants were enrolled at baseline and followed
                prospectively for a minimum of 2 years. Inclusion criteria
                include adults aged 18 years and older with no history of
                previous heart attack at baseline and willingness to participate
                in regular follow-up assessments. Exclusion criteria include
                current acute cardiovascular disease at enrollment, terminal
                illness with a life expectancy of less than 2 years, and
                inability to provide informed consent or complete baseline
                assessments.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>
                  The independent variables include age (continuous), sex
                  (male/female), race (categorical: White, Black, Hispanic,
                  Asian, Other), cigarette smoking status (categorical: current
                  smoker, former smoker, never smoker), BMI (continuous),
                  exercise level (categorical: sedentary, moderate, active), and
                  the severity of comorbid ailments (measured using a validated
                  comorbidity index). These variables were assessed at baseline.
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>
                  The outcome of interest is the occurrence of a heart attack
                  (myocardial infarction) over the course of the 2-year
                  follow-up period. A heart attack was defined according to
                  standard diagnostic criteria, including cardiac biomarker
                  elevation, electrocardiographic changes, and clinical
                  symptoms, and was confirmed through medical record review.
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>
                Effect Size Measure used in the Analytical Approach:
              </Text>
              <Text>
                Logistic regression analysis will be used to examine the
                associations between risk factors and the occurrence of a heart
                attack. The overall model performance will be assessed using the
                Pseudo R-squared effect size measure. The pseudo R-squared, also
                known as a goodness-of-fit measure, provides insight into how
                well the model fits the observed data and quantifies the
                improvement of the model over a null model (a model with only an
                intercept) in explaining the variance in the outcome variable.
              </Text>
              <Text>
                Pseudo R-squared values vary between 0 and 1, where 0 indicates
                that the predictors do not explain any variance in the outcome,
                and 1 indicates that the predictors perfectly explain the
                variance.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Minimal Clinically Important Difference (MCID):
              </Text>
              <Text>
                Not applicable for Pseudo R-squared as it measures overall model
                fit and explained variance rather than a specific threshold
                difference.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>
                The Pseudo R-squared value is 0.45, indicating that the model
                explains a substantial proportion of the variance in heart
                attack occurrence.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>95% CI [0.38, 0.52], indicating a precise estimate.</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Probability Value (
                <Text span fs="italic">
                  P
                </Text>
                -value):
              </Text>
              <Text>
                <Text span fs="italic">
                  p
                </Text>{" "}
                &lt; 0.001, indicating that the overall model is statistically
                significant.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results:</Text>
              <Text>
                The Pseudo R-squared value of 0.45 indicates a high level of
                model fit, suggesting that the included risk factors
                collectively explain a substantial proportion (45%) of the
                variation in heart attack occurrence. This indicates that age,
                sex, race, cigarette smoking, BMI, exercise, and severity of
                comorbid ailments together have a strong association with the
                development of heart attacks.
              </Text>
              <Text>
                The 95% confidence interval (0.38 to 0.52) is relatively narrow,
                suggesting that the investigator and readers can be confident
                that the actual value for the model&apos;s explanatory power is
                close to the point estimate. The entire confidence interval
                falls within the &quot;high association&quot; range (≥0.30),
                indicating that the model consistently demonstrates strong
                predictive performance.
              </Text>
              <Text>
                This high Pseudo R-squared value suggests that the selected risk
                factors are significant predictors of heart attack risk and that
                the model captures much of the variation in heart attack
                occurrence within this population. However, it also indicates
                that approximately 55% of the variance remains unexplained,
                suggesting that other factors not included in the model (such as
                genetic predispositions, psychosocial stress, diet quality,
                specific lipid profiles, inflammatory markers, or unmeasured
                lifestyle factors) may also contribute to heart attack risk.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results:</Text>
              <Text>
                Identifying these risk factors and their collective association
                with heart attacks can contribute to enhanced risk
                stratification and targeted preventive interventions. The strong
                model performance (Pseudo R² = 0.45) demonstrates that these
                commonly measured clinical and demographic variables provide
                substantial predictive value for heart attack risk, which has
                several important implications:
              </Text>
              <Text>
                Healthcare providers can utilize this knowledge to guide patient
                education and intervention strategies to reduce the risk of
                heart attacks. The model could be implemented as a risk
                assessment tool in primary care settings to identify high-risk
                individuals who would benefit from intensive preventive
                interventions such as smoking cessation programs, exercise
                prescriptions, weight management support, and closer monitoring
                for cardiovascular disease.
              </Text>
              <Text>
                Public health initiatives can focus on the modifiable risk
                factors identified in this model—particularly cigarette smoking,
                BMI, and exercise—as targets for population-level prevention
                strategies. Health systems and policymakers can allocate
                resources toward programs addressing these factors to reduce the
                overall burden of heart attacks.
              </Text>
              <Text>
                The strong model performance validates the importance of
                comprehensive cardiovascular risk assessment that considers
                multiple factors simultaneously rather than focusing on single
                risk factors in isolation. This supports guideline
                recommendations for multifactorial risk assessment in
                cardiovascular disease prevention.
              </Text>
              <Text>
                The model could potentially be refined and validated for use in
                clinical decision support systems, helping clinicians identify
                patients who would benefit most from primary prevention
                strategies such as statin therapy, antihypertensive medications,
                or aspirin prophylaxis.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      External validation:
                    </Text>{" "}
                    Validate the study findings and model performance in larger
                    and more diverse populations across different geographic
                    regions, healthcare systems, and racial/ethnic groups to
                    assess generalizability and identify any population-specific
                    factors that might affect model performance.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Interaction effects:
                    </Text>{" "}
                    Investigate the interactions between different risk factors
                    to understand synergistic effects. For example, explore
                    whether the effect of smoking on heart attack risk differs
                    by age group, sex, or presence of comorbidities, or whether
                    certain combinations of risk factors confer particularly
                    high or low risk.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Mechanistic pathways:
                    </Text>{" "}
                    Conduct research to understand the biological mechanisms
                    underlying how these risk factors influence heart attack
                    development. This could include studies of inflammatory
                    pathways, endothelial dysfunction, plaque formation, and
                    thrombosis to provide insights into effective prevention
                    strategies targeting specific pathways.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Additional risk factors:
                    </Text>{" "}
                    Expand the model to include additional variables not
                    examined in this study, such as detailed lipid profiles
                    (LDL, HDL, triglycerides), blood pressure measurements,
                    fasting glucose or HbA1c levels, family history of
                    cardiovascular disease, psychosocial stress measures, diet
                    quality scores, sleep patterns, and novel biomarkers
                    (C-reactive protein, troponins, natriuretic peptides). This
                    could potentially improve model performance beyond the
                    current Pseudo R² of 0.45.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Machine learning approaches:
                    </Text>{" "}
                    Apply advanced machine learning algorithms (random forests,
                    neural networks, gradient boosting) to identify non-linear
                    relationships and complex interactions that traditional
                    logistic regression may not capture. Compare the performance
                    of these approaches to the traditional regression model.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Intervention studies:
                    </Text>{" "}
                    Design and implement randomized controlled trials targeting
                    the modifiable risk factors identified in this model
                    (smoking cessation, weight reduction, exercise promotion) to
                    demonstrate whether modifying these factors actually reduces
                    heart attack incidence and to quantify the magnitude of risk
                    reduction achievable through intervention.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Risk score development:
                    </Text>{" "}
                    Develop and validate a simple clinical risk score based on
                    this model that can be easily calculated and implemented in
                    clinical practice for point-of-care risk assessment.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Temporal dynamics:
                    </Text>{" "}
                    Investigate how changes in risk factors over time affect
                    heart attack risk. Conduct analyses examining whether
                    improvements in modifiable risk factors (quitting smoking,
                    increasing exercise, losing weight) lead to corresponding
                    reductions in heart attack risk.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Healthcare utilization and outcomes:
                    </Text>{" "}
                    Assess whether implementing risk stratification based on
                    this model leads to improved healthcare delivery, more
                    appropriate preventive treatment allocation, reduced
                    cardiovascular events, and cost-effective resource
                    utilization.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Subgroup-specific models:
                    </Text>{" "}
                    Develop and validate separate prediction models for specific
                    subpopulations (e.g., by age group, sex, or racial/ethnic
                    group) to determine whether customized models improve
                    prediction accuracy compared to a one-size-fits-all
                    approach.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Competing risks analysis:
                    </Text>{" "}
                    Conduct competing risks analyses to account for other causes
                    of morbidity and mortality that may prevent heart attacks
                    from occurring, providing a more nuanced understanding of
                    cardiovascular risk in the context of overall health.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Long-term follow-up:
                    </Text>{" "}
                    Extend the follow-up period beyond 2 years to assess whether
                    the identified risk factors predict heart attack risk over
                    longer time horizons (5, 10, or 20 years) and whether the
                    relative importance of different risk factors changes over
                    time.
                  </Text>
                </List.Item>
              </List>
            </Stack>
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

Example1.title =
  "Prospective Longitudinal Cohort Study Investigating Risk Factors for the Development of Heart Attack";

export default Example1;
