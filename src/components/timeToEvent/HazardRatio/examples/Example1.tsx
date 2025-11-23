import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
        Is increased physical activity among older adults associated with time
        to first hip fracture?
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
                Cohort. This is a longitudinal study conducted over several
                years, tracking a cohort of older adults.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Number of participants:
                    </Text>{" "}
                    200
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Location of recruitment:
                    </Text>{" "}
                    Community health centers across several regions
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Inclusion/exclusion criteria:
                    </Text>{" "}
                    Older adults aged 65 and above
                  </Text>
                </List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables Under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/predictor/exposure:</Text>
                <Text>Physical activity level (measured continuously)</Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/outcome:</Text>
                <Text>
                  Time to the first hip fracture event (time-to-event)
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
                Hazard ratio (HR) was used to quantify the effect size
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Minimal clinically important difference (MCID):
              </Text>
              <Text>
                The MCID was defined as a 10% reduction in hip fracture risk
                (i.e., HR = 0.90)
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>The HR point estimate is 0.80.</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>
                The 95% confidence interval (CI) for the HR ranges from 0.75 to
                0.85, which is a precise estimate of the actual value of the HR.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results:</Text>
              <Text>
                The HR point estimate is 0.80, which corresponds to a 20%
                reduction in hip fracture risk among those with increased
                physical activity.
              </Text>
              <Text>
                The 95% CI ranges from 0.75 to 0.85. This provides a precise
                estimate of the actual risk reduction, showing that the true
                difference in the population could be as small as 15% or as
                large as 25%.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results:</Text>
              <Text>
                The narrow CI and the accurate estimate of the true effect
                indicate that the actual impact of increased physical activity
                is likely to be clinically significant, as all plausible results
                within the range of the 95% CI are greater than the clinically
                meaningful difference of 10%.
              </Text>
              <Text>
                Because the upper bound of the CI (HR = 0.85) does not cross
                unity (HR = 1), the results of this study are statistically
                significant.
              </Text>
              <Text>
                This study is a definitively positive study. All plausible
                results are clinically meaningful, and the observed difference
                is statistically significant.
              </Text>
              <Text>
                This study provides strong evidence that increasing physical
                activity among older adults is associated with a clinically
                meaningful reduction in the risk of hip fractures.
              </Text>
              <Text>
                Because this is an observational study, alternative explanations
                for the positive findings can include confounding (a third
                factor causes both increased physical activity and a reduction
                in hip fracture), bias (a systematic error in one or more
                aspects of the conduct of the study), chance (a random effect),
                and effect-cause (a reversal of effect).
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Conduct a randomized controlled trial (RCT) to validate
                      these findings.
                    </Text>{" "}
                    RCTs are regarded as the gold standard for establishing
                    causality because they involve random assignment, which
                    reduces selection bias, control over the independent
                    variable (treatment or exposure), and help minimize
                    potential confounding factors.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Conduct a systematic review
                    </Text>{" "}
                    to thoroughly assess the existing literature on the topic,
                    including various studies that may offer different
                    perspectives.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Conduct a meta-analysis,
                    </Text>{" "}
                    which is a quantitative approach to combine data from
                    multiple studies that yields summary effect estimates with
                    increased statistical power.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Conduct dissemination and implementation (D&I) research
                    </Text>{" "}
                    to translate research findings into clinical practice by
                    bridging the gap between developing effective interventions
                    and their widespread adoption in real-world health care
                    settings. D&I research aims to understand the factors that
                    influence the adoption and use of evidence-based
                    interventions. It also designs and tests strategies to
                    overcome barriers and boost facilitators. Successful D&I
                    research actively involves stakeholders such as clinicians,
                    patients, policymakers, and administrators. Consider
                    assembling a multidisciplinary team of scientists and health
                    service researchers with diverse expertise and perspectives
                    to address the complex challenges of implementation in
                    real-world health care settings.
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
  "Impact of Physical Activity on Hip Fracture Risk in Older Adults";

export default Example1;
