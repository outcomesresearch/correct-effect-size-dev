import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
        Among individuals diagnosed with generalized anxiety disorder (GAD),
        does participation in a 12-week aerobic exercise program lead to a
        greater reduction in anxiety levels compared to standard care without
        exercise?
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
                The study population consists of 200 adults diagnosed with
                generalized anxiety disorder (GAD). These participants were
                identified through clinical settings, such as mental health
                clinics or hospitals, where they received a diagnosis based on
                standardized criteria for GAD.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <List spacing={2}>
                  <List.Item>
                    Primary Independent Variable: Exercise participation
                    (exercise group vs. control group).
                  </List.Item>
                  <List.Item>
                    Confounding Variables: Age, gender, medication use.
                  </List.Item>
                </List>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>
                  Change in anxiety scores, measured by the Hamilton Anxiety
                  Rating Scale (HARS).
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
                Part correlation is used as the effect size measure to quantify
                the unique contribution of exercise participation to the
                reduction in anxiety levels among individuals with generalized
                anxiety disorder (GAD), while controlling for the effects of
                other potential confounding variables such as age, gender, and
                medication use. By controlling for the effects of age, gender,
                and medication use, part correlation helps isolate the specific
                impact of exercise on anxiety reduction, ensuring that these
                other variables do not confound the observed effect.
              </Text>
              <Text>
                The 95% confidence interval (CI) around the part correlation
                coefficient provides a range within which the true value of the
                part correlation is expected to lie with 95% confidence. This
                interval offers additional context to the point estimate,
                indicating the precision and reliability of the measured effect
                size.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Minimal Clinically Important Difference (MCID)
              </Text>
              <Text>Not applicable</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate</Text>
              <Text>
                The part correlation coefficient (
                <Text span fs="italic">
                  r
                </Text>
                _part) for anxiety was found to be -0.40 (
                <Text span fs="italic">
                  p
                </Text>{" "}
                &lt; 0.01)
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval</Text>
              <Text>95% CI = -0.55 to -0.25</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <Text>
                The results of the study suggest that there is a moderate
                negative association between exercise participation and the
                reduction in anxiety levels among individuals with GAD, even
                when controlling for the effects of age, gender, and medication
                use. Specifically, the part correlation of -0.40 indicates that
                participants in the 12-week exercise program experienced a
                significant reduction in their anxiety levels compared to those
                who did not engage in the exercise program. This significant
                reduction in anxiety, as measured by the HARS, highlights the
                therapeutic potential of exercise as an adjunctive treatment for
                GAD.
              </Text>
              <Text>
                The 95% confidence interval (CI) around this point estimate is
                very precise, meaning the true value of the effect is
                confidently estimated to be close to -0.40. The consistent
                negative values within the CI imply that exercise has a reliably
                negative association with anxiety levels. Even the lower bound
                of -0.25 still suggests a meaningful reduction in anxiety due to
                exercise.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results</Text>
              <Text>
                The findings imply that incorporating regular aerobic exercise
                into the treatment regimen for individuals with GAD can be
                beneficial in reducing anxiety levels. Given the moderate effect
                size and the precision of the results, healthcare providers
                might consider recommending exercise as part of a comprehensive
                treatment plan for GAD.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <Text>
                Future research should investigate whether the anxiety-reducing
                benefits of exercise are sustained over extended periods beyond
                the initial 12 weeks. Additional studies could explore the
                effects of various forms of exercise, such as strength training
                and yoga, on anxiety to identify specific activities that are
                particularly effective for anxiety reduction.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

Example1.title =
  "The Impact of Exercise on Anxiety Levels: A Randomized Controlled Trial";

export default Example1;
