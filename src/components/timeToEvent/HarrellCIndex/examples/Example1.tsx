import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
        What is the predictive accuracy and discriminative ability of a model
        that includes a variety of demographic, clinical, treatment, and
        environmental factors to predict childhood asthma exacerbations?
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
              <Text>Observational cohort</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Number of participants:
                    </Text>{" "}
                    1,100
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Location of recruitment:
                    </Text>{" "}
                    Patients were recruited from pediatric clinics and hospitals
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Inclusion/exclusion criteria:
                    </Text>{" "}
                    Patients with asthma between the ages of 1 and 17 years
                  </Text>
                </List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables Under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent Variables (Predictors):</Text>
                <Text>
                  <Text span fw={500}>
                    Factor Group 1: Demographics
                  </Text>
                </Text>
                <List spacing={2}>
                  <List.Item>
                    Age: Continuous variable representing the age of the
                    pediatric patient
                  </List.Item>
                  <List.Item>
                    Gender: Categorical variable indicating the sex of the
                    patient (male or female)
                  </List.Item>
                </List>
                <Text>
                  <Text span fw={500}>
                    Factor Group 2: Clinical-related
                  </Text>
                </Text>
                <List spacing={2}>
                  <List.Item>
                    Lung Function: Continuous variable signaling measurements of
                    patient lung function (e.g., forced expiratory volume in 1
                    second)
                  </List.Item>
                  <List.Item>
                    Allergy Status: Categorical variable disclosing the presence
                    or absence of known allergies in the patient
                  </List.Item>
                </List>
                <Text>
                  <Text span fw={500}>
                    Factor Group 3: Treatment-related
                  </Text>
                </Text>
                <List spacing={2}>
                  <List.Item>
                    Medication Adherence: Continuous variable noting the
                    patient&apos;s adherence level to prescribed asthma
                    medications
                  </List.Item>
                </List>
                <Text>
                  <Text span fw={500}>
                    Factor Group 4: Environmental-related
                  </Text>
                </Text>
                <List spacing={2}>
                  <List.Item>
                    Allergen Exposure: Categorical variable indicating the
                    patient&apos;s level of exposure to common allergens (e.g.,
                    low, moderate, or high)
                  </List.Item>
                  <List.Item>
                    Tobacco Smoke Exposure: Categorical variable indicating the
                    patient&apos;s exposure to tobacco smoke (e.g., exposed or
                    not exposed)
                  </List.Item>
                </List>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent Variable (Outcome):</Text>
                <Text>Childhood asthma exacerbations</Text>
              </Stack>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Analytical Approach:</Text>
              <List spacing={2}>
                <List.Item>
                  Focus of Analysis: Regression Model - Overall Model
                </List.Item>
                <List.Item>Outcome Measure Type: Time-to-Event</List.Item>
                <List.Item>
                  Effect Size Measure: Harrell&apos;s C-index was used to
                  evaluate the survival model&apos;s performance
                </List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Minimal Clinically Important Difference (MCID):
              </Text>
              <Text>
                Expert clinicians in this specialty deemed that a risk
                prediction model with a predictive ability of 0.75 or greater
                would be clinically meaningful in this disease/population
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>
                The Harrell&apos;s C-index value is 0.75, which represents good
                discriminative ability.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>
                The 95% confidence interval (CI) ranges from 0.73 to 0.77.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results:</Text>
              <Text>
                The developed regression model demonstrates good predictive
                accuracy and discrimination, as suggested by Harrell&apos;s
                C-index value of 0.75. This value implies that the model is
                capable of correctly ranking pediatric patients with respect to
                their risk of developing asthma exacerbations 75% of the time.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    The model&apos;s high Harrell&apos;s C-index shows its
                    potential usefulness in clinical settings for identifying
                    high-risk pediatric patients who might benefit from targeted
                    treatments and personalized management strategies to prevent
                    asthma exacerbations.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Early identification of at-risk children can improve asthma
                    management and lower exacerbation rates.
                  </Text>
                </List.Item>
              </List>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Limitations to Consider:
                    </Text>{" "}
                    Since this is an observational study, alternative
                    explanations for the positive findings can include
                    confounding (a third factor causes the observed results),
                    bias (a systematic error in one or more aspects of the
                    study&apos;s conduct), chance (a random effect), and
                    effect-cause (a reversal of effect).
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Validate the Model:
                    </Text>{" "}
                    Perform a follow-up study to evaluate and confirm the
                    model&apos;s performance in a different cohort of patients,
                    ensuring this new group represents diverse demographics and
                    healthcare settings. This approach aims to compare the
                    C-index from the original study with that of the new cohort,
                    focusing on the model&apos;s consistency across various
                    patient populations and identifying any biases or
                    limitations.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Refine the Model:
                    </Text>{" "}
                    Perform a follow-up study that includes additional factors
                    such as genetic markers, new biomarkers, patient-reported
                    outcomes, or social determinants of health. This step aims
                    to further improve the model&apos;s predictive ability and
                    increase its C-index. The addition of these variables should
                    be balanced with the risk of overfitting and the
                    model&apos;s clinical usefulness.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Assess the Model Over Time:
                    </Text>{" "}
                    Use the model in studies with long-term follow-up, enabling
                    evaluation of its performance over periods and its ability
                    to adapt to changing patient features. This includes
                    examining the C-index at various points and possibly
                    updating the model with new patient data to maintain its
                    accuracy and relevance in predicting outcomes.
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
  "Predictive Model for Childhood Asthma Exacerbations: A Multifactorial Approach";

export default Example1;
