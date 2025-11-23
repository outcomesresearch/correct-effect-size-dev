import { Text, Stack, Tabs, List } from "@mantine/core";

function Example2() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
        What is the independent association of age, race, TNM stage, and
        comorbidity burden with overall survival in patients with head and neck
        squamous cell carcinoma?
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
              <Text>Retrospective observational cohort study</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Number of participants:
                    </Text>{" "}
                    1,245
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Location of recruitment:
                    </Text>{" "}
                    Patients were identified from a multi-institutional cancer
                    registry, including academic medical centers and community
                    hospitals
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Inclusion/exclusion criteria:
                    </Text>{" "}
                    Adults (≥18 years) diagnosed with primary head and neck
                    squamous cell carcinoma between 2015 and 2020, with complete
                    staging information and comorbidity assessment. Exclusion
                    criteria included prior head and neck cancer, metastatic
                    disease at diagnosis, and incomplete follow-up data
                  </Text>
                </List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables Under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/predictor/exposure variables:</Text>
                <List spacing={2}>
                  <List.Item>
                    Age (continuous variable, per 10-year increase)
                  </List.Item>
                  <List.Item>
                    Race (categorical: White, Black, Hispanic, Asian/Other)
                  </List.Item>
                  <List.Item>
                    TNM stage (categorical: Stage I, Stage II, Stage III, Stage
                    IV)
                  </List.Item>
                  <List.Item>
                    Adult Comorbidity Evaluation-27 (ACE-27) score (categorical:
                    None, Mild, Moderate, Severe)
                  </List.Item>
                </List>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/outcome:</Text>
                <Text>
                  Overall survival (time from diagnosis to death from any cause)
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Focus of analysis:</Text>
              <Text>
                Regression model (multivariable Cox proportional hazards
                regression)
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Effect size measures used in the analytical approach:
              </Text>
              <List spacing={2}>
                <List.Item>
                  Adjusted Hazard Ratio (HR) for each predictor variable
                  (adjusted association with predictor)
                </List.Item>
                <List.Item>
                  Harrell&apos;s C-index for overall model performance
                </List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Minimal clinically important difference (MCID):
              </Text>
              <Text>
                A priori, the research team defined a clinically meaningful HR
                as ≥1.30 or ≤0.77 (representing a 30% or greater change in
                risk), consistent with oncology literature standards
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>
                Adjusted Hazard Ratios for Individual Predictors:
              </Text>
              <Text>
                <Text span fw={500}>
                  Age:
                </Text>
              </Text>
              <Text>
                HR = 1.18 per 10-year increase (95% CI: 1.09–1.28;{" "}
                <Text span fs="italic">
                  p
                </Text>{" "}
                &lt; 0.001)
              </Text>
              <Text>
                For every 10-year increase in age, patients had an 18% higher
                hazard of death after adjusting for race, TNM stage, and
                comorbidity burden
              </Text>
              <Text>
                <Text span fw={500}>
                  Race (Reference: White):
                </Text>
              </Text>
              <List spacing={2}>
                <List.Item>
                  Black: HR = 1.24 (95% CI: 1.02–1.51;{" "}
                  <Text span fs="italic">
                    p
                  </Text>{" "}
                  = 0.03)
                </List.Item>
                <List.Item>
                  Hispanic: HR = 0.89 (95% CI: 0.69–1.15;{" "}
                  <Text span fs="italic">
                    p
                  </Text>{" "}
                  = 0.37)
                </List.Item>
                <List.Item>
                  Asian/Other: HR = 0.82 (95% CI: 0.61–1.10;{" "}
                  <Text span fs="italic">
                    p
                  </Text>{" "}
                  = 0.18)
                </List.Item>
              </List>
              <Text>
                Black patients had a 24% higher hazard of death compared with
                White patients after adjusting for other variables. Hispanic and
                Asian/Other patients have a lower hazard of death compared to
                White patients, but the confidence interval includes values both
                below and above 1, so no definitive conclusion can be drawn
                about the actual relationship.
              </Text>
              <Text>
                <Text span fw={500}>
                  TNM Stage (Reference: Stage I):
                </Text>
              </Text>
              <List spacing={2}>
                <List.Item>
                  Stage II: HR = 1.45 (95% CI: 1.08–1.95;{" "}
                  <Text span fs="italic">
                    p
                  </Text>{" "}
                  = 0.01)
                </List.Item>
                <List.Item>
                  Stage III: HR = 2.12 (95% CI: 1.61–2.79;{" "}
                  <Text span fs="italic">
                    p
                  </Text>{" "}
                  &lt; 0.001)
                </List.Item>
                <List.Item>
                  Stage IV: HR = 3.58 (95% CI: 2.78–4.61;{" "}
                  <Text span fs="italic">
                    p
                  </Text>{" "}
                  &lt; 0.001)
                </List.Item>
              </List>
              <Text>
                Compared with Stage I disease, patients with Stage II, III, and
                IV disease had progressively higher hazards of death. Stage IV
                patients had a 258% higher hazard (HR - 1 = 2.58) compared with
                Stage I patients after adjusting for other factors
              </Text>
              <Text>
                <Text span fw={500}>
                  ACE-27 Comorbidity Score (Reference: None):
                </Text>
              </Text>
              <List spacing={2}>
                <List.Item>
                  Mild: HR = 1.31 (95% CI: 1.05–1.64;{" "}
                  <Text span fs="italic">
                    p
                  </Text>{" "}
                  = 0.02)
                </List.Item>
                <List.Item>
                  Moderate: HR = 1.67 (95% CI: 1.34–2.08;{" "}
                  <Text span fs="italic">
                    p
                  </Text>{" "}
                  &lt; 0.001)
                </List.Item>
                <List.Item>
                  Severe: HR = 2.41 (95% CI: 1.89–3.07;{" "}
                  <Text span fs="italic">
                    p
                  </Text>{" "}
                  &lt; 0.001)
                </List.Item>
              </List>
              <Text>
                Patients with increasing comorbidity burden had progressively
                higher hazards of death. Those with severe comorbidity had a
                141% higher hazard of death (HR - 1 = 1.41) compared with
                patients without comorbidity after adjusting for other
                variables.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results:</Text>
              <Text>
                <Text span fw={500}>
                  Individual Predictor Variables:
                </Text>
              </Text>
              <Text>
                Age demonstrated a clinically meaningful association with
                survival, with each decade of life increasing mortality risk by
                18%
              </Text>
              <Text>
                Race showed disparities in survival, with Black patients
                experiencing significantly worse outcomes even after controlling
                for tumor stage and comorbidity. The wide confidence interval
                and inclusion of 1.0 for the hazard ratio for Hispanic and
                Asian/Other groups suggest these findings require cautious
                interpretation.
              </Text>
              <Text>
                TNM stage emerged as the strongest predictor of survival, with
                advanced-stage disease showing progressively worse outcomes. All
                stage comparisons exceeded the pre-defined MCID threshold of HR
                ≥1.30, indicating clinically meaningful differences.
              </Text>
              <Text>
                Comorbidity burden showed a clear dose-response relationship
                with survival, where greater severity of comorbidity was
                associated with higher mortality risk. Moderate and severe
                comorbidity categories surpassed the clinically meaningful
                threshold.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results:</Text>
              <Text>
                <Text span fw={500}>
                  Clinical Practice:
                </Text>
              </Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    This multivariable prognostic model helps clinicians with
                    risk assessment and treatment planning for patients with
                    head and neck squamous cell carcinoma.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The significant effect of comorbidity burden on survival
                    emphasizes the need for thorough geriatric and medical
                    evaluations in cancer care planning.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Racial disparities in outcomes warrant investigation into
                    possible differences in treatment access, treatment
                    tolerance, or biological factors.
                  </Text>
                </List.Item>
              </List>
              <Text>
                <Text span fw={500}>
                  Patient Counseling:
                </Text>
              </Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    The model offers quantitative estimates of survival risk
                    that can help guide shared decision-making discussions with
                    patients and families.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Patients with severe comorbidity might benefit from
                    discussions about treatment intensity, care goals, and
                    supportive options.
                  </Text>
                </List.Item>
              </List>
              <Text>
                <Text span fw={500}>
                  Health Equity:
                </Text>{" "}
                The persistent survival disadvantage for Black patients after
                adjusting for clinical factors suggests the need for
                interventions addressing social determinants of health,
                healthcare access, and treatment delivery
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Model Validation and Refinement:
                    </Text>{" "}
                    External validation of the model in independent cohorts is
                    necessary to evaluate its generalizability and calibration.
                    Including additional predictors such as treatment modality,
                    performance status, smoking status, and molecular markers
                    may enhance model discrimination. Investigation of potential
                    interactions between predictors (e.g., age × comorbidity,
                    race × stage) could offer more detailed risk stratification.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Disparity Research:
                    </Text>{" "}
                    Conduct studies to explore the mechanisms behind racial
                    disparities in survival, including analyses of treatment
                    patterns, treatment completion rates, and access to
                    multidisciplinary care. Assess whether the observed
                    disparities continue in healthcare systems with universal
                    access to care.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Comorbidity Management:
                    </Text>{" "}
                    Prospective studies assessing interventions to improve
                    comorbidity management during cancer treatment. Development
                    of integrated care models that address both cancer treatment
                    and management of concurrent medical conditions.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Clinical Trial Design:
                    </Text>{" "}
                    Use the prognostic model to classify patients in clinical
                    trials to ensure balanced randomization across risk groups.
                    Consider using adaptive trial designs that include baseline
                    risk when evaluating new therapeutic interventions.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Advanced Modeling:
                    </Text>{" "}
                    Explore the use of machine learning techniques to identify
                    complex non-linear relationships and interactions among
                    predictors. Develop dynamic prediction models that include
                    time-varying covariates and landmark analyses.
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

Example2.title =
  "Multivariable Prognostic Model for Overall Survival in Patients with Head and Neck Squamous Cell Carcinoma: The Role of Demographics, Tumor Stage, and Comorbidity";

export default Example2;
