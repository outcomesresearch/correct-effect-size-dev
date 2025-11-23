import { Text, Stack, Tabs } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
        In patients undergoing knee replacement surgery, how does the
        post-operative day 1 pain score compare between those who receive
        traditional open knee replacement and those who receive minimally
        invasive knee replacement?
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
              <Text>Cross-sectional</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <Text>
                40 adults undergoing knee replacement surgery; recruited from a
                multi-center orthopedic surgery department.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>
                  Type of knee replacement surgery (Traditional open, minimally
                  invasive).
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>
                  Post-operative day 1 (POD 1) pain score using the Visual
                  Analog Scale (VAS) where 0 indicates no pain and 10 indicates
                  the worst pain imaginable.
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
                Cohen&apos;s{" "}
                <Text span fs="italic">
                  d
                </Text>
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Minimal Clinically Important Difference (MCID)
              </Text>
              <Text>
                The minimal clinically important difference (MCID) (smallest
                difference that a patient would notice) was determined pre-study
                through a discussion with experts of an absolute difference of
                0.45 points or greater on the VAS scale.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Stack gap={5}>
                <Text>
                  Of the 20 adults undergoing traditional open knee replacement,
                  the mean (±SD) VAS score was 5 (1.5) and for the 20 adults
                  undergoing minimally invasive knee replacement the mean (±SD)
                  VAS score was 4 (1.0).
                </Text>
                <Text>The difference in means is 1 (95% CI: 0.64 to 1.4)</Text>
                <Text>
                  The Cohen&apos;s{" "}
                  <Text span fs="italic">
                    d
                  </Text>{" "}
                  value is 0.78
                </Text>
              </Stack>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>
                95% confidence interval around the Cohen&apos;s{" "}
                <Text span fs="italic">
                  d
                </Text>{" "}
                = 0.13 to 1.41
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Probability Value (
                <Text span fs="italic">
                  p
                </Text>
                -value):
              </Text>
              <Text>0.018</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <Text>
                The investigators found a 1-point difference on the VAS between
                subjects undergoing traditional open knee replacement and those
                undergoing minimally invasive knee replacement, favoring the
                minimally invasive procedure. Considering the MCID of an
                absolute difference of 0.45 points or greater on the VAS scale,
                the observed difference of 1 is considered a clinically
                meaningful difference. The width of the confidence interval and
                thus the imprecision of the estimate prevents making a
                definitive conclusion about whether the true difference exceeds
                the minimal clinically important difference, as the lower bound
                of the CI (0.64) is below 1.
              </Text>
            </Stack>
            <Text>
              The value for Cohen&apos;s{" "}
              <Text span fs="italic">
                d
              </Text>{" "}
              of 0.78 is consistent with a large effect size. Unfortunately, the
              width of the confidence interval around the Cohen&apos;s{" "}
              <Text span fs="italic">
                d
              </Text>{" "}
              estimate and resultant imprecision in the estimate of the true
              value prevent making a definitive conclusion. Based on the range
              of the CI around the Cohen&apos;s{" "}
              <Text span fs="italic">
                d
              </Text>{" "}
              estimate, the true value for the Cohen&apos;s{" "}
              <Text span fs="italic">
                d
              </Text>{" "}
              could be as small as 0.13, interpreted as a negligible effect, all
              the way to 1.41, which represents a very large effect.
            </Text>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results</Text>
              <Text>
                The magnitude of the difference in pain scores highlights the
                potential advantage of minimally invasive procedures in
                immediate post-operative pain management. The imprecision in the
                effect size estimate, however, prevents making definitive
                conclusions. Furthermore, as this was a cross-sectional study
                and treatment was not randomly assigned, no causal inference can
                be made regarding the effect of the type of knee replacement on
                post-operative pain.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <Text>
                Given the notable difference in POD 1 pain scores, additional
                research, including the possible pursuit of an experimental
                study where the investigator randomly assigns patients to
                minimally invasive knee replacement or traditional replacement,
                on immediate post-operative pain, other post-operative
                complications, and long-term outcomes between the two surgical
                approaches is warranted.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

Example1.title =
  "Minimally Invasive vs. Traditional Knee Replacement: A Cross-Sectional Analysis of Immediate Post-Operative Pain";

export default Example1;
