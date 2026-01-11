import { Text, Stack, Tabs } from "@mantine/core";

function Example4() {
  return (
    <Stack gap="md">
      <Text tt={"uppercase"} fw={500} mt={"-0px"} z-index={500} size="sm">
        Indeterminate study
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
                experienced a median reduction in systolic blood pressure of 12
                mm Hg (95% CI: 3 - 21 mm Hg), while patients treated with
                PressureEase had a median reduction of 10 mm Hg (95% CI: 1 - 19
                mm Hg).
              </Text>
              <Text>
                The median difference in systolic blood pressure reduction
                between the two groups is 2 mm Hg.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>95% confidence interval = -8 to 12 mm Hg</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Probability Value (
                <Text span fs="italic">
                  p
                </Text>
                -value):
              </Text>
              <Text>0.05</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <Text>
                The study defines a difference of 2 mm in median systolic blood
                pressure reduction between participants treated with HypoTensix
                and PressureEase. Considering that the MCID for blood pressure
                reduction is 10, this difference of 2 mm is clinically
                meaningless.
              </Text>
            </Stack>
            <Text>
              The confidence interval is wide, ranging from -8 to 12, and is
              considered imprecise. This determination of imprecision is because
              the interval includes values suggesting no difference between the
              treatments, PressureEase being better than HypoTensix, HypoTensix
              being better than PressureEase, and HypoTensix offering a
              clinically meaningful improvement. Thus, the investigator cannot
              make a definitive conclusion about the comparative impact of these
              two treatments on blood pressure reduction.
            </Text>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results</Text>
              <Text>
                The small difference in systolic blood pressure reduction
                between participants who received HypoTensix and those who
                received PressureEase, combined with the wide confidence
                interval and the upper bound of the CI that crosses the
                clinically meaningful threshold, prevents definitive conclusions
                about whether the intervention is associated with a clinically
                meaningful risk reduction. Therefore, the findings of this study
                on the effect of HypoTensix and PressureEase on blood pressure
                reduction are referred to as &quot;indeterminate.&quot;
              </Text>
            </Stack>
            <Text>
              Even though the study results are deemed indeterminate regarding
              the benefit of HypoTensix and PressureEase on blood pressure
              reduction, much of the confidence interval lies within the
              clinically meaningless effect size range (&lt;10 mm Hg). Thus,
              this study suggests that HypoTensix and PressureEase do not have
              clinically meaningful differences in blood pressure reduction.
              However, no definitive conclusion can be made.
            </Text>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <Text>
                As the results suggest there is only a very small probability of
                a clinically meaningful difference in systolic blood pressure
                reduction between HypoTensix and PressureEase, the investigator
                is unlikely to consider conducting additional studies with the
                same research question. The investigator would need special
                reasons to propose conducting a similar study again in hopes of
                finding clinically meaningful results.
              </Text>
              <Text>
                It may be beneficial to explore additional factors that may
                interact with medication and blood pressure control, such as
                diet modification, exercise, and sleep.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

Example4.title =
  "Comparing Systolic Blood Pressure Reduction: HypoTensix vs. PressureEase";

export default Example4;
