import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={'italic'} mt={0}>
        In patients with rheumatic diseases, does a regression model incorporating various independent variables accurately predict the occurrence of disease exacerbations?
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
                The study population consists of patients diagnosed with rheumatic diseases, such as rheumatoid arthritis, systemic lupus erythematosus, or psoriatic arthritis, who are recruited from rheumatology clinics in a specific geographic area. Participants were enrolled at baseline and followed prospectively for 12 months to monitor for disease exacerbations. Inclusion criteria include adults aged 18 years and older with a confirmed diagnosis of a rheumatic disease for at least 6 months, stable disease activity at enrollment, and willingness to participate in regular follow-up assessments. Exclusion criteria include other major comorbidities that could confound disease exacerbation assessment (such as active malignancy or severe uncontrolled infections), inability to attend follow-up visits, and inability to provide informed consent.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>
                  The independent variables include demographic characteristics (age, sex), disease-specific factors (disease duration, baseline disease severity measured by validated disease activity scores), treatment modalities (medication use including disease-modifying antirheumatic drugs, biologic agents, corticosteroids; physical therapy participation), and lifestyle factors (smoking status categorized as current/former/never, physical activity level categorized as sedentary/moderate/active, body mass index). These variables were assessed at baseline.
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>
                  The dependent measure is the occurrence of disease exacerbation during the follow-up period, which is classified as a binary outcome (present/absent). Disease exacerbation was defined as a clinically significant worsening of disease activity requiring escalation of therapy, hospitalization, or meeting validated criteria for disease flare specific to each rheumatic condition.
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Effect Size Measure used in the Analytical Approach:</Text>
              <Text>
                A logistic regression model will be constructed using the independent variables, and the performance of the model will be evaluated using the c-statistic (area under the receiver operating characteristic curve, AUC-ROC) as the effect size measure. The c-statistic, also known as the C-index or concordance index, is a performance measure used to evaluate the discriminatory power and predictive accuracy of a regression model, particularly in binary classification tasks. The c-index measures the ability of a predictive model to correctly rank pairs of observations, one with the event of interest (disease exacerbation) and the other without. It ranges from 0 to 1, where 0.5 indicates random performance (like chance), and 1 indicates perfect discrimination.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Minimal Clinically Important Difference (MCID):</Text>
              <Text>
                Not applicable for the c-statistic as it measures overall model discrimination rather than a specific threshold difference. However, a c-statistic ≥0.70 is generally considered clinically useful for prediction models.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>
                The c-statistic (AUC-ROC) is 0.78, indicating acceptable discrimination.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>
                95% CI [0.72, 0.84], indicating a reasonably precise estimate.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results:</Text>
              <Text>
                The c-statistic of 0.78 suggests that the regression model has acceptable discrimination, or the ability to correctly rank pairs of observations, with one having a disease exacerbation and the other without. This indicates that the included independent variables contribute meaningfully to the predictive capacity of the model for disease exacerbations in rheumatic patients.
              </Text>
              <Text>
                The 95% confidence interval (0.72 to 0.84) is reasonably narrow and entirely falls within the &quot;acceptable to good discrimination&quot; range, suggesting that the model&apos;s discriminatory performance is consistent and reliable. The entire confidence interval is above 0.70, which is generally considered the threshold for clinically useful prediction models, providing confidence that the model has meaningful predictive utility.
              </Text>
              <Text>
                A c-statistic of 0.78 means that if we randomly select one patient who experienced a disease exacerbation and one patient who did not, there is a 78% probability that the model will assign a higher predicted risk to the patient who experienced the exacerbation. This represents a substantial improvement over random chance (which would be 50%) and indicates that the model can meaningfully stratify patients by their risk of disease exacerbation.
              </Text>
              <Text>
                While the model demonstrates acceptable discrimination, the c-statistic of 0.78 also indicates room for improvement. Approximately 22% of the time, the model may incorrectly rank patient pairs, suggesting that additional factors not captured by the current variables may influence disease exacerbation risk.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results:</Text>
              <Text>
                The results suggest that the regression model incorporating the identified independent variables can potentially help clinicians in rheumatology clinics identify patients at higher risk of experiencing disease exacerbations. This knowledge can aid in implementing preventive measures, adjusting treatment strategies, and providing personalized care to improve patient outcomes.
              </Text>
              <Text>
                The acceptable discriminatory performance (c-statistic = 0.78) indicates that this risk prediction model could be implemented as a clinical decision support tool in rheumatology practice. Clinicians could use the model to:
              </Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    Identify high-risk patients who may benefit from more intensive monitoring, earlier treatment escalation, or proactive preventive interventions before exacerbations occur.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Stratify patients for different management pathways, with high-risk patients receiving closer follow-up (e.g., monthly visits) and low-risk patients potentially suitable for less frequent monitoring.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Support shared decision-making discussions with patients about their individual exacerbation risk and the potential benefits of various treatment intensification strategies or lifestyle modifications.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Optimize resource allocation by targeting intensive interventions to patients most likely to benefit based on their predicted risk profile.
                  </Text>
                </List.Item>
              </List>
              <Text>
                The model&apos;s performance suggests that readily measurable clinical and demographic factors can provide meaningful prognostic information, making the tool practical for implementation in routine clinical practice without requiring expensive or invasive testing.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>External validation:</Text> Validate the discriminatory power of the regression model in larger populations, diverse geographic settings, different healthcare systems, and across various subtypes of rheumatic diseases to assess generalizability and identify any population-specific factors that might affect model performance.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Model refinement:</Text> Investigate the inclusion of additional factors that could improve the predictive accuracy and enhance the clinical utility of the model. Potential additions include: genetic markers (e.g., HLA alleles, specific single-nucleotide polymorphisms associated with disease severity), biomarkers (e.g., inflammatory markers like C-reactive protein, erythrocyte sedimentation rate, specific autoantibodies, cytokine profiles), patient-reported outcomes (pain scores, fatigue levels, quality of life measures), medication adherence measures, psychosocial factors (stress levels, depression, anxiety, social support), environmental exposures, and comorbidity burden measured by validated indices, like the Adult Comorbidity Evaluation-27.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Model calibration assessment:</Text> Evaluate not only discrimination (assessed by c-statistic) but also calibration—how well predicted probabilities match observed exacerbation rates. Calibration plots and Hosmer-Lemeshow tests should be performed to assess whether the model provides accurate absolute risk estimates.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Clinical utility studies:</Text> Conduct prospective implementation studies to assess whether using the prediction model in clinical practice actually improves patient outcomes, reduces exacerbations, enhances quality of life, or improves cost-effectiveness compared to standard care without risk stratification.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Dynamic prediction models:</Text> Develop and validate dynamic prediction models that incorporate longitudinal changes in risk factors over time, as disease characteristics, treatment responses, and other factors evolve during follow-up. Time-varying covariates may improve prediction accuracy.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Subgroup-specific models:</Text> Investigate whether separate prediction models for specific rheumatic disease subtypes (rheumatoid arthritis-specific, lupus-specific, etc.) provide better discrimination than a general model across all rheumatic diseases.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Machine learning approaches:</Text> Apply advanced machine learning algorithms (random forests, gradient boosting, neural networks) to identify non-linear relationships and complex interactions that traditional logistic regression may not capture. Compare the performance of these approaches to the current model.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Decision curve analysis:</Text> Perform decision curve analysis to determine the net benefit of using the prediction model across different risk thresholds and to identify the optimal risk threshold for clinical decision-making.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Implementation science research:</Text> Study the barriers and facilitators to implementing the risk prediction model in routine clinical practice, including clinician acceptance, workflow integration, electronic health record compatibility, and patient perspectives on risk-based care.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Cost-effectiveness analysis:</Text> Assess the value of implementing risk-based care using the prediction model, weighing monitoring costs, preventive measures, and exacerbation management against potential benefits like fewer disease flares and complications.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Prediction of specific exacerbation types:</Text> Investigate whether the model can predict specific types of exacerbations (e.g., severe vs. mild, organ-specific manifestations, treatment-requiring vs. self-limiting) to enable even more targeted preventive strategies.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Integration with other prediction tools:</Text> Assess whether combining this exacerbation risk model with other validated risk prediction tools (e.g., cardiovascular risk calculators, infection risk scores) provides a more comprehensive risk profile for patients with rheumatic diseases who face multiple health threats.
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

Example1.title = "Identification of Risk Factors Associated with Disease Exacerbation in Patients with Various Rheumatic Diseases";

export default Example1;

