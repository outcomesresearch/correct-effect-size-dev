import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text tt={"uppercase"} fw={500} mt={"-0px"} z-index={500} size="sm">
        Statistically Significant Study, Clinically Meaningful
      </Text>
      <Text fs={"italic"} mt={0} style={{ lineHeight: 1.3 }}>
        Among adults with generalized anxiety disorder, does participation in a
        mindfulness-based stress reduction therapy program result in a greater
        reduction in symptom severity when compared to a more traditional,
        relaxation-based therapy program?
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
              <Text>Randomized controlled trial (RCT)</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <Text>
                250 adults with generalized anxiety disorder (GAD) recruited
                from an outpatient behavioral clinic in an academic medical
                center.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>
                  Type of therapy program - mindfulness-based stress reduction
                  therapy (MBSR) program or relaxation-based therapy.
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>
                  Hospital Anxiety and Depression Scale (HADS), a widely used
                  patient-reported questionnaire to assess symptoms of anxiety
                  and depression.
                </Text>
              </Stack>
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
                The difference in the post-intervention mean HADS-A value for
                the subjects randomized to MBSR versus the mean HADS-A value for
                those who received relaxation therapy.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Minimal Clinically Important Difference (MCID)
              </Text>
              <Text>
                The minimal clinically important difference (MCID) for HADS-A is
                4.0, which means that if the difference is 4.0 points or
                greater, the patient would note the difference in their anxiety.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>
                The post-intervention mean (±SD) HADS-A score for the 125 adults
                who were randomized to MBSR was 6.5 (±1.0), while the mean
                HADS-A score for the 125 adults randomized to relaxation-based
                therapy was 11.0 (±1.4), resulting in a mean difference of 4.5.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>95% confidence interval = 4.2 to 4.8</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Probability Value (
                <Text span fs="italic">
                  p
                </Text>
                -value):
              </Text>
              <Text>&lt; 0.001</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <Text>
                The mean difference between the two intervention arms in the
                HADS-A of 4.5 points, which exceeds the minimal clinically
                important difference, indicates a clinically important
                difference was observed in this study.
              </Text>
            </Stack>
            <Text>
              The estimates of this study are precise (narrow range of 95% CI).
              The lower bound of the 95% CI of 4.2 is greater than the MCID for
              HADS-A, indicating that all the plausible differences in the
              population are clinically meaningful.
            </Text>
            <Text>
              The probability value (
              <Text span fs="italic">
                p
              </Text>
              -value) is &lt;0.001 so the results from this study are considered
              &quot;statistically significant.&quot;
            </Text>
            <Text>
              This is a definitive study (both statistically significant and
              clinically meaningful) in favor of MBSR.
            </Text>

            <Stack gap={0}>
              <Text fw={500}>Implication of Results</Text>
              <Text>
                Based on these findings, this study provides strong evidence
                that MBSR is better at anxiety reduction, as defined by the
                HADS-A, than relaxation-based therapy.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <Text>
                As this is a definitive study, additional trials are unlikely to
                produce different results. Therefore, the investigator should
                move on to translating the results from this study to clinical
                practice.
              </Text>
              <List spacing="xs">
                <List.Item>
                  <Text>
                    Investigating the specific mechanisms or components of MBSR
                    to understand better why it is associated with reduced
                    anxiety as compared to relaxation-based therapy.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Long-term follow-up studies could assess the durability of
                    MBSR beyond the short timeframe of this randomized trial and
                    explore potential interventions to sustain mindfulness
                    practice, if it wanes over time.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Progress to Dissemination & Implementation (D&I).
                    </Text>{" "}
                    Translate the research findings into clinical practice by
                    bridging the gap between the development of effective
                    interventions and their widespread adoption and use in
                    real-world healthcare settings. D&I research aims to
                    understand the factors that influence the adoption and
                    utilization of evidence-based interventions, designs, and
                    testing strategies to overcome identified barriers and
                    enhance facilitators. Successful D&I research actively
                    involves stakeholders, including clinicians, patients,
                    policymakers, and administrators. Consider creating a
                    multidisciplinary team of clinical psychologists and health
                    service researchers with the broad range of expertise and
                    perspectives needed to address the multifaceted challenges
                    of implementation in real-world healthcare settings.
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
  "Comparative Efficacy of Mindfulness-Based Therapy versus Relaxation-Based Therapy in Symptom Reduction Among Adults with Generalized Anxiety Disorder: A Randomized Controlled Trial";

export default Example1;
