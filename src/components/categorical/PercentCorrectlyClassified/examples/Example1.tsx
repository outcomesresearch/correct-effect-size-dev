import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
        In pediatric patients with orbital cellulitis receiving intravenous
        antibiotics, what factors are associated with treatment response,
        defined as the resolution of orbital cellulitis without surgical
        intervention?
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
              <Text>Prospective cohort study</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <Text>
                The study includes pediatric patients (ages 2-18 years)
                diagnosed with orbital cellulitis and admitted to a pediatric
                hospital, with consultations from ophthalmology and
                otolaryngology departments. Participants were enrolled upon
                hospital admission and monitored until the treatment outcome was
                reached. Inclusion criteria consist of children aged 2-18 years
                with radiographically confirmed orbital cellulitis (defined as
                inflammation of orbital tissues posterior to the orbital septum)
                who received intravenous antibiotic therapy. Exclusion criteria
                include prior surgical intervention before enrollment, orbital
                trauma, orbital tumors, previous orbital surgery, and incomplete
                treatment data.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>
                  The independent variables consist of demographic factors (age,
                  sex), clinical characteristics (duration of symptoms before
                  presentation, presence and severity of signs of systemic
                  illness including fever and elevated white blood cell count),
                  imaging findings (extent of orbital involvement on CT or MRI,
                  presence and size of abscess formation, involvement of
                  specific orbital structures), laboratory results (inflammatory
                  markers such as C-reactive protein and erythrocyte
                  sedimentation rate, white blood cell count), and comorbidities
                  (such as immunosuppression, chronic or acute sinusitis,
                  diabetes). All variables were evaluated at baseline during the
                  initial hospital admission.
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>
                  The dependent variable is treatment response, categorized as
                  &quot;Responder&quot; (resolution of orbital cellulitis
                  without surgical intervention, defined as clinical improvement
                  with resolution of orbital signs and symptoms on antibiotics
                  alone) or &quot;Non-responder&quot; (received surgical
                  intervention due to failure to resolve with antibiotics,
                  including procedures such as abscess drainage or orbital
                  decompression).
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
                Logistic regression analysis will be used to assess the
                association between the independent variables and treatment
                response. The overall performance of the model will be evaluated
                using the &quot;Percent Correctly Classified&quot; (also called
                overall classification accuracy) effect size measure. This
                measure quantifies the proportion of cases or observations that
                the statistical model correctly classifies or predicts. It
                directly reflects the model&apos;s ability to assign
                observations to their true categories accurately and is
                presented as a percentage ranging from 0% (no correct
                classifications) to 100% (all classifications are correct).
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Minimal Clinically Important Difference (MCID):
              </Text>
              <Text>
                Not applicable for percent correctly classified since it
                measures overall model accuracy rather than a specific threshold
                difference. However, classification accuracy ≥70% is generally
                considered acceptable for clinical prediction models in
                pediatric infectious disease contexts.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>
                The model exhibits an overall predictive accuracy of 75%,
                correctly identifying the treatment response category in 75% of
                the pediatric patients with orbital cellulitis.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>
                95% CI [68%, 82%], indicating a reasonably precise estimate of
                the model&apos;s predictive accuracy.
              </Text>
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
                &lt; 0.001, indicating that the model&apos;s classification
                accuracy is significantly better than chance (which would be
                approximately 50% for a binary outcome).
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results:</Text>
              <Text>
                The Percent Correctly Classified effect size of 75% indicates
                that the regression model has a moderate ability to accurately
                categorize pediatric patients with orbital cellulitis into
                responders and non-responders based on the included independent
                variables. This means that when predicting treatment response,
                the model correctly determines the actual outcome (whether the
                patient will respond to antibiotics alone or need surgery) in
                three out of four cases.
              </Text>
              <Text>
                The 95% confidence interval (68% to 82%) is fairly narrow,
                indicating a precise estimate of the model&apos;s predictive
                accuracy. The entire interval falls within the &quot;moderate
                predictive accuracy&quot; range (70% to 89%), showing consistent
                performance. The lower bound of 68% nears the acceptable
                threshold for clinical utility, while the upper bound of 82%
                suggests the model could perform quite well in certain
                populations.
              </Text>
              <Text>
                The model&apos;s performance shows that the chosen
                predictors—demographic factors, clinical characteristics,
                imaging findings, laboratory results, and
                comorbidities—collectively offer useful information for
                predicting treatment outcomes. However, the 75% accuracy also
                means that 25% of cases are misclassified, indicating the model
                does not correctly predict the treatment outcome in one out of
                four patients. This suggests that additional factors not
                included in the current model may also affect treatment
                response, or that some inherent unpredictability exists in the
                clinical course of orbital cellulitis.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results:</Text>
              <Text>
                The findings indicate that the identified predictors have
                moderate discriminatory power in determining the likelihood of
                treatment success without surgical intervention for pediatric
                patients with orbital cellulitis. This information can aid
                clinicians in several important ways:
              </Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Risk stratification:
                    </Text>{" "}
                    The model can help identify patients at higher risk of
                    treatment failure who may benefit from earlier surgical
                    consultation, closer monitoring, or more aggressive initial
                    management strategies.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Treatment decision-making:
                    </Text>{" "}
                    Clinicians can use the model to facilitate shared
                    decision-making with families regarding the likelihood of
                    antibiotic success versus the potential need for surgical
                    intervention, helping establish realistic expectations.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Resource allocation:
                    </Text>{" "}
                    Healthcare systems can use the model to help allocate
                    resources effectively, such as identifying patients who
                    require intensive monitoring, earlier imaging follow-up, or
                    faster access to the surgical team.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Clinical pathway development:
                    </Text>{" "}
                    The predictive model could be incorporated into standardized
                    clinical pathways for managing pediatric orbital cellulitis,
                    guiding escalation of care decisions based on individual
                    patient risk profiles.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Patient counseling:
                    </Text>{" "}
                    The model provides objective data to help families
                    understand their child&apos;s prognosis and prepare for
                    potential outcomes, including the possibility of surgical
                    intervention.
                  </Text>
                </List.Item>
              </List>
              <Text>
                However, clinicians should interpret the model&apos;s
                predictions in the context of its 75% accuracy and recognize
                that individual clinical judgment remains essential. The model
                should serve as a decision support tool rather than a definitive
                predictor, and clinical deterioration should always prompt
                reassessment regardless of the initial prediction.
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
                    Confirm these findings in larger and more diverse groups of
                    pediatric patients with orbital cellulitis across multiple
                    institutions, geographic regions, and healthcare settings to
                    evaluate generalizability and identify any
                    population-specific factors that might influence model
                    performance.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Model refinement and enhancement:
                    </Text>{" "}
                    Investigate the incorporation of additional factors that may
                    improve predictive accuracy, including: microbiological data
                    (specific pathogens identified from blood cultures, sinus
                    aspirates, or abscess cultures; antibiotic sensitivities),
                    response to initial antibiotic therapy (clinical improvement
                    within first 24-48 hours, change in inflammatory markers),
                    specific antibiotic regimens used, abscess characteristics
                    (precise location, volume, multilocularity), additional
                    biomarkers (procalcitonin, specific cytokines), orbital
                    compartment pressure measurements, and visual function
                    parameters (visual acuity, extraocular motility, pupillary
                    responses).
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Machine learning approaches:
                    </Text>{" "}
                    Apply advanced machine learning algorithms (random forests,
                    support vector machines, neural networks) to identify
                    non-linear relationships and complex interactions that
                    traditional logistic regression may not capture. Compare
                    performance to the current model.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Time-series modeling:
                    </Text>{" "}
                    Develop dynamic prediction models that incorporate changes
                    in clinical parameters over time (such as temperature
                    trends, inflammatory marker trajectories, imaging changes on
                    serial scans) rather than relying solely on baseline
                    characteristics. This could improve prediction accuracy by
                    accounting for treatment response patterns.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Sensitivity and specificity analysis:
                    </Text>{" "}
                    Perform a detailed evaluation of the model&apos;s
                    sensitivity (ability to accurately identify non-responders
                    who will need surgery) and specificity (ability to correctly
                    identify responders who will improve with antibiotics
                    alone). Recognizing which type of misclassification occurs
                    more frequently can help guide model improvements and
                    clinical use.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Decision threshold optimization:
                    </Text>{" "}
                    Explore various probability thresholds to classify patients
                    as responders or non-responders, aiming to find the best
                    balance between sensitivity and specificity based on
                    clinical priorities (such as reducing unnecessary surgeries
                    or preventing delayed surgical intervention).
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Subgroup analyses:
                    </Text>{" "}
                    Determine whether model performance differs across patient
                    age groups, specific comorbidities, causative organisms, or
                    initial disease severity. Subgroup-specific models may offer
                    improved predictions for certain patient populations.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Clinical impact studies:
                    </Text>{" "}
                    Perform prospective implementation studies to determine
                    whether using the prediction model in clinical practice
                    truly enhances patient outcomes, shortens time to
                    appropriate treatment (antibiotics vs. surgery), reduces
                    hospital length of stay, or improves resource utilization
                    compared to standard care without the model.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Cost-effectiveness analysis:
                    </Text>{" "}
                    Assess the value of implementing the prediction model by
                    considering the costs of model development and deployment,
                    the benefits of earlier appropriate surgical intervention in
                    high-risk patients, and the potential to avoid unnecessary
                    surgeries in low-risk patients.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Longitudinal outcome tracking:
                    </Text>{" "}
                    Follow patients over the long term to evaluate outcomes
                    beyond the initial hospitalization, including rates of
                    recurrent orbital cellulitis, chronic sinus disease, visual
                    complications, and quality of life measures. This can help
                    determine if certain predictors also indicate long-term
                    results.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Comparison with clinician judgment:
                    </Text>{" "}
                    Evaluate the model&apos;s predictive accuracy against
                    experienced clinicians&apos; predictions to determine if the
                    model provides additional value beyond clinical judgment and
                    to identify cases where the model and clinical judgment
                    contrast.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Development of clinical decision support tools:
                    </Text>{" "}
                    If successfully validated, create user-friendly tools such
                    as web-based calculators, mobile apps, and electronic health
                    record integrations that enable clinicians to quickly input
                    patient data and receive risk predictions during patient
                    care.
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
  "Pediatric Study on Predictors of Treatment Response in Orbital Cellulitis";

export default Example1;
