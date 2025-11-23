import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
        Among adults diagnosed with cancer who have recently completed or are
        currently undergoing cancer treatment, how strong is the association
        between performance status and quality of life?
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
                Cross-sectional study, collecting data from cancer patients at a
                single time point.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <Text>
                500 adults, aged 18-75 years, diagnosed with various stages of
                cancer, who have recently completed or are currently undergoing
                cancer treatment.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <List spacing="xs">
                <List.Item>
                  <Text>
                    Karnofsky Performance Status is a patient-based rating
                    system used in oncology to assess functional status. The
                    scale ranges from 10 (severe impairment) to 100 (normal
                    health), with higher scores indicating better overall
                    functioning and well-being.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Participants complete the EORTC QLQ-C30 (European
                    Organization for Research and Treatment of Cancer Quality of
                    Life Questionnaire-Core 30), a self-report questionnaire
                    designed to assess quality of life in cancer patients.
                  </Text>
                </List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Independent/Predictor/Exposure:</Text>
              <Text>
                Spearman&apos;s rho is a non-directional measure of correlation,
                so defining variables as independent (predictor/exposure) or
                dependent is not necessary. Furthermore, the cross-sectional
                study design does not inherently support the classification of
                variables as independent, predictor, or exposure.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Dependent/Outcome:</Text>
              <Text>
                Due to the cross-sectional study design, there is no dependent
                or outcome measure.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>
                Effect Size Measure used in the Analytical Approach
              </Text>
              <Text>
                Spearman&apos;s rho is calculated to evaluate the strength and
                direction of the association between the Karnofsky Performance
                Status and EORTC QLQ-C30.
              </Text>
            </Stack>
            <Text>
              95% confidence interval (CI) is reported to indicate the precision
              of the estimate.
            </Text>
            <Stack gap={0}>
              <Text fw={500}>
                Minimal Clinically Important Difference (MCID)
              </Text>
              <Text>
                Before conducting the study, the investigators determined that a
                Spearman&apos;s rho of 0.40 or greater (moderate association)
                would be clinically important.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>
                Spearman&apos;s rho between performance status and quality of
                life is 0.65
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>95% CI = 0.60 to 0.70</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Probability Value (
                <Text span fs="italic">
                  p
                </Text>
                -value):
              </Text>
              <Text>
                <Text span fs="italic">
                  P
                </Text>{" "}
                &lt; 0.0001
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <Text>
                The Spearman&apos;s rho of 0.65 indicates a strong positive
                correlation between performance status and quality of life in
                cancer patients - as the patient&apos;s performance status
                increases the quality-of-life increases.
              </Text>
            </Stack>
            <Text>
              The 95% CI suggests high precision in estimating the strength of
              this association, and thus the investigator can be confident about
              where the true value lies. Based on this study, the researchers
              can conclude with 95% confidence that the association between
              functional status and quality of life in the population of
              patients similar to those in the study falls between 0.60 and
              0.70; thus, all plausible values for the true effect size lie
              within this range, which is considered a strong association
              according to the interpretation guidelines.
            </Text>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results</Text>
              <Text>
                This cross-sectional study provides robust evidence that as
                cancer stage increases, the self-reported performance status in
                cancer patients decreases.
              </Text>
            </Stack>
            <Text>
              The results emphasize the importance of addressing functional
              status concerns, particularly in patients with advanced-stage
              cancer.
            </Text>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <List spacing="xs">
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Longitudinal Studies:
                    </Text>{" "}
                    Conduct longitudinal studies to track changes in quality of
                    life across different levels of functional performance and
                    assess factors influencing these changes.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Interventional Studies:
                    </Text>{" "}
                    Investigate the effectiveness of supportive interventions
                    (e.g., psychosocial support, palliative care) in improving
                    the quality of life for cancer patients.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Subgroup Analyses:
                    </Text>{" "}
                    Explore whether the relationship between functional
                    performance and quality of life differs by demographic
                    factors, cancer type, or treatment modality.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Patient-Reported Outcomes:
                    </Text>{" "}
                    Utilize additional patient-reported outcome measures to
                    assess quality of life domains affected by cancer
                    comprehensively.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Survivorship Care Plans:
                    </Text>{" "}
                    Develop and evaluate survivorship care plans that address
                    the unique needs of cancer survivors based on their
                    functional performance and quality of life.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Qualitative Research:
                    </Text>{" "}
                    Conduct qualitative research to gain deeper insights into
                    the lived experiences and perspectives of cancer patients.
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
  "Association Between Karnofsky Performance Status and Quality of Life in Cancer Patients: A Cross-Sectional Analysis";

export default Example1;
