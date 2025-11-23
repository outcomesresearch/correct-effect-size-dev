import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
        What is the difference in the restricted mean survival time (RMST) among
        patients with coronary artery disease (CAD) treated with Drug A as
        compared with those treated with Drug B over a 5-year follow-up period?
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
                    300
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Location of recruitment:
                    </Text>{" "}
                    Patients were recruited from a cardiology clinic and
                    identified through medical records and referrals
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Inclusion/exclusion criteria:
                    </Text>{" "}
                    Patients diagnosed with CAD
                  </Text>
                </List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables Under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/predictor/exposure:</Text>
                <Text>Drug treatment assignment: Drug A vs. Drug B</Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/outcome:</Text>
                <Text>RMST over a 5-year follow-up period</Text>
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
                The difference in RMST was used to compare patients treated with
                Drug A and those treated with Drug B
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Minimal clinically important difference (MCID):
              </Text>
              <Text>
                Before the study, experts defined the MCID as a difference in
                the RMST of 3 years or more
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>
                The study found a difference in RMST between patients treated
                with Drug A and those treated with Drug B of 1.5 years. Patients
                treated with Drug A survived an average of 1.5 years longer over
                the 5-year follow-up period as compared with the patients
                treated with Drug B.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>
                The 95% confidence interval (CI) for the RMST was 0.3 to 2.7
                years.
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
                = 0.035
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results:</Text>
              <Text>
                The point estimate for the difference in RMST (1.5 years) is
                smaller than the predetermined value for clinical significance
                (3 years).
              </Text>
              <Text>
                The CI is narrow, which indicates that the study estimate is
                precise.
              </Text>
              <Text>
                All values in the CI are below the clinical significance
                threshold of 3 years, which suggests that there is no clinically
                important difference in RMST between Drug A and Drug B.
              </Text>
              <Text>
                Since the{" "}
                <Text span fs="italic">
                  P
                </Text>{" "}
                value of 0.035 is less than 0.05, the results from this study
                are statistically significant.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results:</Text>
              <Text>
                <Text span fw={500}>
                  Understanding Statistical Significance vs. Clinical
                  Significance:
                </Text>
              </Text>
              <Text>
                This study illustrates a critical distinction in research
                interpretation that students often find confusing. Although the
                results are statistically significant (
                <Text span fs="italic">
                  P
                </Text>{" "}
                = 0.035), the study is classified as &quot;definitively
                negative.&quot; This apparent contradiction highlights the
                difference between statistical and clinical significance:
              </Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Statistical Significance (
                      <Text span fs="italic">
                        P
                      </Text>{" "}
                      &lt; 0.05)
                    </Text>{" "}
                    simply means that the observed difference is unlikely to be
                    due to random chance alone. It answers the question:
                    &quot;Is there a real difference between the groups?&quot;
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Clinical Significance
                    </Text>{" "}
                    depends on whether the difference is large enough to matter
                    in clinical practice. It answers the question: &quot;Is this
                    difference meaningful to patients and clinicians?&quot;
                  </Text>
                </List.Item>
              </List>
              <Text>In this study:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    The{" "}
                    <Text span fs="italic">
                      P
                    </Text>
                    -value of 0.035 indicates statistical significance,
                    confirming that Drug A and Drug B likely produce different
                    outcomes—this is not due to chance.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    However, the point estimate (1.5 years) and the entire 95%
                    CI (0.3 to 2.7 years) fall below the predefined MCID of 3
                    years. This indicates that the results are not compatible
                    with a clinically significant difference in long-term
                    survival between patients with CAD treated with Drug A
                    versus those treated with Drug B.
                  </Text>
                </List.Item>
              </List>
              <Text>
                <Text span fw={500}>
                  Classification as &quot;Definitively Negative&quot;:
                </Text>
              </Text>
              <Text>
                This study is classified as &quot;definitively negative&quot;
                because we can be confident (based on the narrow, precise
                confidence interval) that the true difference does not reach the
                threshold for clinical importance. All plausible results, as
                defined by the range of the 95% CI, are below the clinically
                meaningful threshold. While the difference is statistically
                significant, it is not clinically meaningful.
              </Text>
              <Text>
                <Text span fw={500}>
                  Clinical Application:
                </Text>{" "}
                Cardiologists can be confident that the choice between Drug A
                and Drug B does not lead to a clinically important difference in
                RMST over a 5-year period, despite the statistical significance
                of the findings.
              </Text>
              <Text>
                <Text span fw={500}>
                  Key Takeaway:
                </Text>{" "}
                This study definitively shows that while a difference exists
                (statistically significant), that difference is not large enough
                to be clinically important (definitively negative for clinical
                significance). This demonstrates why effect sizes, confidence
                intervals, and predetermined MCIDs are essential for
                interpreting research—
                <Text span fs="italic">
                  P
                </Text>
                -values alone cannot tell us whether findings matter in clinical
                practice.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Additional Outcomes.
                    </Text>{" "}
                    Future research could explore other outcomes (such as
                    quality of life, adverse events, or cost-effectiveness) or
                    subgroups of CAD patients to investigate the effectiveness
                    of different drug treatments further.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Longer Follow-up.
                    </Text>{" "}
                    Long-term follow-up studies extending beyond 5 years may
                    reveal survival differences that emerge over an even longer
                    period.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Unique Patient Factors.
                    </Text>{" "}
                    Consider exploring whether particular patient traits or
                    disease severity influence the treatment effect.
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
  "Comparing Restricted Mean Survival Time Among Patients with Coronary Artery Disease: Drug A vs. Drug B";

export default Example1;
