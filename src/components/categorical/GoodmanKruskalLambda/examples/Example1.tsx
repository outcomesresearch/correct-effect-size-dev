import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
        In patients presenting with movement-related symptoms suggestive of
        Parkinson&apos;s disease, is the XYZ test more accurate in detecting
        stage-specific (none, early, or late) Parkinson&apos;s disease compared
        to standard clinical assessment, as measured by diagnostic accuracy
        parameters including sensitivity, specificity, and AUC-ROC?
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
              <Text>
                This is a randomized clinical trial comparing the diagnostic
                accuracy of the XYZ test versus standard clinical assessment for
                detecting stage-specific Parkinson&apos;s disease.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <Text>
                Patients recruited from a tertiary referral center specializing
                in movement disorders. Participants are identified through
                outpatient clinic referrals, advertisements, and electronic
                medical record screening. Inclusion criteria include being over
                40 years old, having at least two cardinal signs of
                Parkinsonism, lacking secondary Parkinsonism causes, and being
                willing to undergo both the XYZ test and standard clinical
                assessment. Exclusion criteria include a known Parkinson&apos;s
                disease diagnosis, other significant neurological or psychiatric
                disorders, and inability to provide informed consent.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>
                  Participants undergo both the XYZ test and standard clinical
                  assessment within a predefined timeframe. The XYZ test results
                  are interpreted by blinded radiologists or neurologists who
                  are not involved in the clinical evaluation.
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>
                  The reference standard for diagnosing stage-specific (none,
                  early, or late) Parkinson&apos;s disease is a comprehensive
                  clinical assessment conducted by movement disorder
                  specialists, including medical history review, physical
                  examination, and standardized rating scales such as the
                  Unified Parkinson&apos;s Disease Rating Scale (UPDRS).
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
                Goodman and Kruskal&apos;s Lambda (λ) is used as a measure of
                the strength of the association between the results of the XYZ
                tests and the diagnostic severity category of Parkinson&apos;s
                disease. Goodman and Kruskal&apos;s Lambda (λ) measures the
                strength of association between two nominal or categorical
                variables in a contingency table. It is beneficial when dealing
                with multivariate categorical data, such as when examining
                relationships between multiple categories or groups within a
                dataset. Goodman and Kruskal&apos;s Lambda ranges from 0 to 1,
                with a larger value indicating a stronger association between
                the categorical variables.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Minimal Clinically Important Difference (MCID):
              </Text>
              <Text>
                Not applicable for Goodman and Kruskal&apos;s Lambda, as it
                measures the overall association strength rather than a specific
                threshold difference.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>
                Goodman and Kruskal&apos;s Lambda (λ): λ = 0.80, indicating a
                very large association between the XYZ test results and the
                diagnostic severity category of Parkinson&apos;s disease.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>
                95% CI [0.70, 0.90], indicating a precise estimate of the actual
                effect size value.
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
                &lt; 0.001, indicating a statistically significant association.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results:</Text>
              <Text>
                The Goodman and Kruskal&apos;s Lambda value of 0.80 suggests a
                very large association between the results of the XYZ test and
                the diagnostic severity category of Parkinson&apos;s disease.
                This indicates that 80% of the agreement between the XYZ test
                results and the diagnostic severity category can be attributed
                to a true association beyond chance alone.
              </Text>
              <Text>
                With a 95% confidence level, we estimate that the actual value
                of Goodman and Kruskal&apos;s Lambda for the association between
                the XYZ test results and the diagnostic severity category of
                Parkinson&apos;s disease falls between 0.70 and 0.90. This range
                provides a precise estimate of the actual effect size value,
                indicating a very large association beyond chance alone. The
                entire confidence interval falls within the &quot;very large
                association&quot; range (0.71-0.99), though the lower bound
                (0.70) reaches into the &quot;large association&quot; range
                (0.51-0.70), suggesting consistently strong predictive utility
                of the XYZ test across the plausible range of true effect sizes.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results:</Text>
              <Text>
                The very large association observed between the XYZ test results
                and the diagnostic severity category of Parkinson&apos;s disease
                indicates the potential utility of the XYZ test as a reliable
                diagnostic tool for staging Parkinson&apos;s disease. The high
                Lambda value suggests that knowledge of the XYZ test results
                substantially improves the prediction of disease severity
                category compared to prediction without this information. This
                strong association supports the clinical implementation of the
                XYZ test as an adjunct to standard clinical assessment for more
                accurate staging of Parkinson&apos;s disease, which could
                facilitate earlier intervention and more tailored treatment
                approaches.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Multicenter validation:
                    </Text>{" "}
                    Validate these findings in larger, multicenter cohorts to
                    assess the generalizability of the XYZ test&apos;s
                    diagnostic accuracy across different clinical settings,
                    patient populations, and geographic regions.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Clinical impact assessment:
                    </Text>{" "}
                    Evaluate the clinical impact of implementing the XYZ test in
                    routine practice, including its effect on treatment
                    decisions, patient outcomes, healthcare costs, and clinical
                    workflow integration.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Mechanistic investigation:
                    </Text>{" "}
                    Further investigate the mechanisms underlying the
                    association between XYZ test results and disease severity to
                    provide insights into the pathophysiology of
                    Parkinson&apos;s disease progression. Understanding why the
                    test correlates so strongly with disease staging could
                    reveal new therapeutic targets.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Longitudinal studies:
                    </Text>{" "}
                    Conduct longitudinal studies to assess whether the XYZ test
                    can predict disease progression over time and whether early
                    detection through this test leads to improved long-term
                    outcomes with earlier intervention.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Comparative effectiveness:
                    </Text>{" "}
                    Compare the XYZ test with other emerging diagnostic
                    technologies for Parkinson&apos;s disease staging to
                    determine relative advantages, cost-effectiveness, and
                    optimal combinations of diagnostic approaches.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Subgroup analyses:
                    </Text>{" "}
                    Examine whether the association between XYZ test results and
                    disease severity varies across patient subgroups defined by
                    age, sex, genetic factors, or disease subtypes. This could
                    help identify populations where the test is most valuable.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Diagnostic algorithm development:
                    </Text>{" "}
                    Develop and validate diagnostic algorithms that integrate
                    XYZ test results with clinical assessment data to optimize
                    diagnostic accuracy and create standardized protocols for
                    clinical implementation.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Patient-centered outcomes:
                    </Text>{" "}
                    Investigate how improved diagnostic accuracy through the XYZ
                    test affects patient-reported outcomes, quality of life,
                    treatment satisfaction, and psychological well-being,
                    particularly in relation to diagnosis clarity and early
                    intervention opportunities.
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
  "Diagnostic Accuracy of XYZ Test for Early Detection of Parkinson's Disease: A Prospective Study";

export default Example1;
