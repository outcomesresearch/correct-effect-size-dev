import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text tt={"uppercase"} fw={500} mt={"-0px"} z-index={500} size="sm">
        Statistically Significant Study
      </Text>
      <Text fs={"italic"} mt={0}>
        What is the difference in systolic blood pressure reduction between
        patients treated with HypoTensix and those treated with PressureEase?
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
              <Text>Randomized clinical trial</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <Text>
                The study includes 200 hypertensive patients aged 40 to 70
                recruited from a cardiology clinic.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>
                  Patients are randomly assigned to receive either HypoTensix or
                  PressureEase for hypertension management.
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>
                  The primary outcome is the difference in systolic blood
                  pressure reduction (mm Hg) between the two groups after 12
                  weeks of treatment.
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
                Median Difference in systolic Blood Pressure Reduction (mm Hg)
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Minimal Clinically Important Difference (MCID)
              </Text>
              <Text>
                A &quot;clinically meaningful difference&quot; in systolic blood
                pressure reduction can vary depending on individual patient
                characteristics, the severity of hypertension, and the overall
                treatment goals. However, in general, many doctors might
                consider a systolic blood pressure reduction of 10 mm Hg or more
                as a clinically meaningful difference in the context of
                antihypertensive treatment. This level of reduction is often
                associated with a decreased risk of cardiovascular events and
                improved health outcomes for patients with hypertension.
              </Text>
              <Text>
                10 mm Hg is determined to be the minimal clinically important
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
                The study finds that patients treated with HypoTensix
                experienced a median reduction in systolic blood pressure of 18
                mm Hg (95% CI: 15-21 mm Hg), while patients treated with
                PressureEase had a median reduction of 5 mm Hg (95% CI: 1-9 mm
                Hg).
              </Text>
              <Text>
                The median difference in systolic blood pressure reduction
                between the two groups is 13 mm Hg.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>95% CI: 11-15 mm Hg</Text>
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
                The study defines a 13 mm difference in median systolic blood
                pressure reduction between participants treated with HypoTensix
                and PressureEase. Considering the MCID in blood pressure
                reduction is 10, this difference of 13 is considered a
                clinically meaningful difference.
              </Text>
            </Stack>
            <Text>
              The width of the confidence interval is narrow, and the results
              are considered precise as all plausible values for the difference
              (i.e., 11 to 15) are greater than the MCID (10), and thus the
              investigator can conclude with confidence where the true value
              lies for the difference in blood pressure reduction based on the
              observed results from this study and that the true difference will
              be clinically meaningful.
            </Text>
            <Text>
              Since the probability value (
              <Text span fs="italic">
                p
              </Text>
              -value) is &lt;0.001, the results from this study are determined
              to be &quot;statistically significant&quot;.
            </Text>
            <Text>
              This study is considered a definitive positive study - all
              plausible results defined by the range of the CI demonstrate that
              HypoTensix reduces systolic blood pressure to a clinically
              meaningful greater degree than PressureEase.
            </Text>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results</Text>
              <Text>
                The study findings strongly suggest that HypoTensix reduces
                systolic blood pressure to a much larger amount and in
                clinically meaningful way than PressureEase.
              </Text>
            </Stack>
            <Text>
              These results can guide treatment decisions and potentially
              improve the standard of care for patients with hypertension.
            </Text>

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
                    Conduct dissemination & implementation (D&I) research to
                    translate the research findings into clinical practice by
                    bridging the gap between the development of effective
                    interventions and their widespread adoption and use in
                    real-world healthcare settings. D&I research seeks to
                    understand the factors that influence the adoption and
                    utilization of evidence-based interventions, designs and
                    tests strategies to overcome identified barriers and enhance
                    facilitators; successful D&I research actively involves
                    stakeholders such as clinicians, patients, policymakers, and
                    administrators. Consider creating a multidisciplinary team
                    of cardiologists and health service researchers with the
                    broad range of expertise and perspectives needed to address
                    the multifaceted challenges of implementation in real-world
                    healthcare settings.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Investigate the specific mechanisms or components of
                    HypoTensix to better understand why it is associated with
                    greater reduction in blood pressure than PressureEase.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Long-term follow-up studies could assess the durability of
                    blood pressure reduction with HypoTensix beyond the short
                    timeframe of this randomized trial.
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
  "Comparing Systolic Blood Pressure Reduction: HypoTensix vs. PressureEase";

export default Example1;
