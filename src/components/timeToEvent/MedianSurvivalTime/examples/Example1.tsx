import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text tt={"uppercase"} fw={500} mt={"-0px"} z-index={500} size="sm">
        Statistically Significant Study, Clinically Meaningful
      </Text>
      <Text fs={"italic"} mt={0}>
        Among patients diagnosed with glioblastoma multiforme (GBM), does the
        use of an experimental immunotherapy approach lead to a significant
        difference in median survival time over the study period as compared
        with standard therapy?
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
              <Text>Randomized controlled trial.</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Number of participants:
                    </Text>{" "}
                    450
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Location of recruitment:
                    </Text>{" "}
                    Patients were identified through collaboration with multiple
                    cancer centers and hospitals specializing in neuro-oncology
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Inclusion/exclusion criteria:
                    </Text>{" "}
                    Patients diagnosed with GBM
                  </Text>
                </List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables Under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/predictor/exposure:</Text>
                <Text>
                  Treatment approach: standard therapy vs. experimental
                  immunotherapy
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/outcome:</Text>
                <Text>
                  Median survival time (in months) after receiving either
                  immunotherapy or standard chemotherapy
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>
                Effect size measure used in the analytical approach:
              </Text>
              <Text>
                Median survival time was used to compare the two treatment
                protocols
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Minimal clinically important difference (MCID):
              </Text>
              <Text>
                Before the study, members of the National Brain Tumor Study
                defined the MCID as a difference in median survival time of 6
                months or more
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>
                The median survival time for the experimental immunotherapy is
                22 months (i.e., at 22 months, half of the subjects who received
                this therapy died). The median survival time for the standard
                therapy approach is 12 months. The point estimate for the median
                survival time difference is 10 months, which indicates a large
                effect size.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>
                The 95% confidence interval (CI) for the median survival time
                difference is 7 months to 13 months. The narrow range of the CI
                allows for a precise estimate of the actual value of the effect
                of the experimental immunotherapy.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Probability Value (
                <Text span fs="italic">
                  P
                </Text>
                -Value):
              </Text>
              <Text>
                <Text span fs="italic">
                  P
                </Text>{" "}
                &lt; 0.001
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    The study findings indicate a statistically significant and
                    clinically meaningful difference in median survival time
                    between patients treated with standard therapy and those
                    treated with the experimental immunotherapy approach.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The lower bound of the CI (7 months) exceeds the threshold
                    value of 6 months identified by members of the National
                    Brain Tumor Study as the MCID.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Therefore, the results demonstrate statistical significance
                    and highlight a substantial clinical benefit associated with
                    the immunotherapy approach.
                  </Text>
                </List.Item>
              </List>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    These results have significant clinical implications,
                    suggesting that the experimental immunotherapy approach
                    offers a substantial increase in median survival time
                    compared to standard therapy for patients with GBM.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    These findings have the potential to revolutionize the
                    treatment of GBM and to improve patient outcomes
                    significantly.
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
                      Dissemination & Implementation Research.
                    </Text>{" "}
                    Conduct dissemination and implementation (D&I) research to
                    translate the research findings into clinical practice by
                    bridging the gap between the development of effective
                    interventions and their widespread adoption and use in
                    real-world health care settings. D&I research seeks to
                    understand the factors that influence the adoption and
                    utilization of evidence-based interventions. It also designs
                    and tests strategies to overcome identified barriers and
                    enhance facilitators. Successful D&I research actively
                    involves stakeholders such as clinicians, patients, policy
                    makers, and administrators. Consider creating a
                    multidisciplinary team of scientists and health service
                    researchers with the broad range of expertise and
                    perspectives needed to address the multifaceted challenges
                    of implementation in real-world health care settings.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Refine the Treatment Approach.
                    </Text>{" "}
                    Future research could focus on further refining the
                    immunotherapy approach, identifying predictive biomarkers,
                    and investigating potential combination therapies to enhance
                    efficacy even further.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Long-Term Safety.
                    </Text>{" "}
                    Studies exploring the long-term safety profile of the
                    immunotherapy protocol and quality-of-life outcomes for
                    patients receiving this treatment would provide a
                    comprehensive understanding of its overall impact.
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
  "Comparing Median Survival Time Among Patients with Glioblastoma Multiforme: Immunotherapy vs. Standard Therapy";

export default Example1;
