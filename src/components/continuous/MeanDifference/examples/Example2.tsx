import { Text, Stack, Tabs, List } from "@mantine/core";

function Example2() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
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
              <Text>Randomized Controlled Trial (RCT)</Text>
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
                who were randomized to MBSR was 6.5 (±4), while the mean (±SD)
                HADS-A score for the 125 adults randomized to relaxation-based
                therapy was 11.0 (±6), resulting in a mean difference of 4.5.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>95% confidence interval = 3.2 to 5.8</Text>
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
                The mean difference of 4.5 points in the HADS-A between the two
                intervention arms suggests a clinically important difference.
              </Text>
            </Stack>
            <Text>
              Although the confidence interval is relatively narrow, it is not
              considered precise because it includes both clinically meaningful
              and clinically meaningless results. The lower bound of the 95% CI
              is 3.2, which is smaller than the MCID for HADS-A (4.0),
              indicating that not all plausible differences in the population
              would be clinically important.
            </Text>
            <Text>
              The probability value (
              <Text span fs="italic">
                p
              </Text>
              -value) is &lt;0.001, making the results statistically
              significant. However, despite this statistical significance, the
              imprecision around the clinically meaningful difference and the
              inclusion of clinically meaningless differences make the results
              of this study &quot;indeterminate.&quot;
            </Text>

            <Stack gap={0}>
              <Text fw={500}>Implication of Results</Text>
              <Text>
                Because the preponderance of the confidence interval is within
                the MCID effect size range, this study provides some evidence
                that MBSR is more effective at anxiety reduction than
                relaxation-based therapy. Still, no definitive conclusion can be
                made regarding whether the difference is clinically meaningful.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <List spacing="xs">
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Conduct Additional Research with Increased Sample Size:
                    </Text>{" "}
                    To obtain more precise estimates of the effect size, conduct
                    the study with a larger sample size. This approach enables
                    authors and readers to be more certain of where the actual
                    effect size value lies and whether the results are
                    compatible with clinically meaningful effects. However,
                    it&apos;s essential to consider that increasing sample size
                    may not always be feasible in every research context.
                    Resource constraints, such as funding, time, and participant
                    availability, can significantly limit the ability to expand
                    the study. Therefore, while planning to increase the sample
                    size, researchers should also work to ensure that the study
                    remains viable and efficient.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Improve Study Quality via Reduction of Error:
                    </Text>{" "}
                    Enhance the reliability and precision of effect size
                    estimates by reducing both random and systematic errors.
                    Adherence to Good Clinical Practice (GCP) guidelines, as
                    described in the FDA&apos;s Code of Federal Regulations, is
                    one effective strategy. GCP promotes standardized processes,
                    data quality, patient safety, and rigorous oversight, all
                    contributing to improved clinical research and
                    evidence-based medicine. However, it&apos;s also vital to
                    acknowledge that the potential for error reduction is
                    influenced by the specific nature and inherent variability
                    of the study population, making a one-size-fits-all approach
                    impractical.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The investigator can implement strategies to reduce
                    systematic error, such as ensuring each intervention is
                    provided in a standardized way and with true fidelity to
                    establish practice.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Explore additional factors that may define unique prognostic
                    subgroups for whom the chosen protocol is associated with
                    better (or worse) anxiety reduction outcome.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Improve Methodological Quality and Rigor of Subsequent
                      Studies:
                    </Text>{" "}
                    Enhance the study design, via randomization, blinding, and
                    control of confounding variables, to address the
                    uncertainties in indeterminate study outcomes. In such
                    studies, focusing on methodological improvements is
                    essential for clarifying ambiguous findings. These
                    enhancements are critical for reducing bias and increasing
                    the reliability of results, providing clearer direction for
                    future research. While pursuing these methodological ideals,
                    researchers should also consider the practical challenges,
                    such as logistical constraints and participant-related
                    hurdles, to conduct feasible yet robust studies.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Reduce Variability in the Measurement of Key Variables:
                    </Text>{" "}
                    To diminish variability and enhance precision, standardize
                    measurements through methods like a Standard Operating
                    Procedure (SOP) manual, validated assessments, and
                    calibrated instruments. Additionally, evaluate the
                    sensitivity and specificity of these measurement tools to
                    ensure they can detect small but clinically significant
                    changes. While promoting consistency is crucial, it&apos;s
                    equally important to consider potential limitations of
                    standardization, such as missing context-specific factors
                    that might influence results. This comprehensive approach
                    enables the accurate capture of the study&apos;s
                    outcomes&apos; nuances.
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

Example2.title =
  "Comparative Efficacy of Mindfulness-Based Therapy versus Relaxation-Based Therapy in Symptom Reduction Among Adults with Generalized Anxiety Disorder: A Randomized Controlled Trial";

export default Example2;
