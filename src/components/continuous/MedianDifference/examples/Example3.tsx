import { Text, Stack, Tabs } from "@mantine/core";

function Example3() {
  return (
    <Stack gap="md">
      <Text tt={"uppercase"} fw={500} mt={"-0px"} z-index={500} size="sm">
        Negative Study, Not Clinically Meaningful
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
                improved health outcomes for hypertensive patients.
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
                experienced a median systolic reduction in blood pressure of 14
                mm Hg (95% CI: 12-16 mm Hg), while patients treated with
                PressureEase had a median reduction of 9 mm Hg (95% CI: 8-10 mm
                Hg).
              </Text>
              <Text>
                The median difference in systolic blood pressure reduction
                between the two groups is 5 mm Hg.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>95% confidence interval = 3 to 7 mm Hg</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Probability Value (
                <Text span fs="italic">
                  p
                </Text>
                -value):
              </Text>
              <Text>&lt; 0.05</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <Text>
                The study defines a difference of 5 mm in median systolic blood
                pressure reduction between participants treated with HypoTensix
                and PressureEase. Considering that the MCID for blood pressure
                reduction is 10, this difference of 5 mm is clinically
                meaningless.
              </Text>
            </Stack>
            <Text>
              The confidence interval is narrow, ranging from 3 to 7, and is
              considered precise because all plausible values are below the MCID
              of 10. Therefore, the investigator can confidently conclude that
              the true difference in blood pressure reduction is clinically
              meaningless.
            </Text>
            <Text>
              Although the probability value (
              <Text span fs="italic">
                p
              </Text>
              -value) is &lt;0.05, indicating statistical significance, the
              small difference in systolic blood pressure reduction and the
              precise confidence interval that excludes a clinically meaningful
              reduction confirm that this is a clinically negative study with no
              clinically meaningful benefit of one treatment over the other.
            </Text>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results</Text>
              <Text>
                The small difference in systolic blood pressure reduction
                between the HypoTensix and PressureEase groups, combined with
                the narrow confidence interval that excludes a clinically
                meaningful reduction, indicates that there is no clinically
                meaningful benefit of one treatment over the other.
              </Text>
            </Stack>
            <Text>
              Because the lower bound of the confidence interval does not cross
              0, the investigator must conclude that the results are
              statistically significant. This example illustrates a situation
              where statistically significant results are clinically
              meaningless, a common occurrence in clinical research,
              particularly in industry-funded studies.
            </Text>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <Text>
                As this is a definitive negative study, further research is
                unlikely to find a clinically meaningful difference in blood
                pressure between these two medications.
              </Text>
              <Text>
                The investigator could choose to explore additional patient or
                clinical factors that may define unique prognostic subgroups for
                whom the chosen protocol is associated with greater blood
                pressure reduction.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

Example3.title =
  "Comparing Systolic Blood Pressure Reduction: HypoTensix vs. PressureEase";

export default Example3;
