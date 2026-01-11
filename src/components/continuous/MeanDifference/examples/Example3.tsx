import { Text, Stack, Tabs, List } from "@mantine/core";

function Example3() {
  return (
    <Stack gap="md">
      <Text tt={"uppercase"} fw={500} mt={"-0px"} z-index={500} size="sm">
        Negative Study, Not Clinically Meaningful
      </Text>
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
                4.0, which means that if the difference is 4.0 points or greater
                the patient would note the difference in their anxiety.
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
                who were randomized to MBSR was 6.5 (±3.3), while the mean
                HADS-A score for the 125 adults randomized to relaxation-based
                therapy was 9.8 (±3.0), resulting in a difference in the mean
                value of 3.3.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>95% confidence interval = 2.6 to 3.9</Text>
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
                The mean difference of 3.3 points in the HADS-A between the two
                intervention arms indicates that the findings of this study are
                not clinically meaningful.
              </Text>
            </Stack>
            <Text>
              The confidence interval is narrow, and all plausible values within
              the range are consistent with clinically meaningless results.
              Specifically, the upper bound of the 95% CI is 3.9, which is
              smaller than the MCID value of 4.0 for the HADS-A.
            </Text>
            <Text>
              Despite the statistical significance of the difference
              (probability value{" "}
              <Text span fs="italic">
                p
              </Text>
              -value &lt;0.001), the investigator can conclude that MBSR does
              not produce a clinically important reduction in anxiety compared
              to relaxation therapy, as a difference of 3.9 or greater is
              extremely unlikely based on the findings from this study.
            </Text>

            <Stack gap={0}>
              <Text fw={500}>Implication of Results</Text>
              <Text>
                Because the entirety of the confidence interval lies below the
                clinically important difference value, this study provides
                definitive evidence that MBSR is not more effective at reducing
                anxiety by a clinically important difference than
                relaxation-based therapy, despite the finding of
                &quot;statistical significance&quot;.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <List spacing="xs">
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Do Not Repeat the Study:
                    </Text>{" "}
                    As judged by the fact that the upper bound of the CI rules
                    out a clinically meaningful effect, this is a definitive
                    clinically negative study despite the &quot;statistical
                    significance&quot; (i.e.,{" "}
                    <Text span fs="italic">
                      p
                    </Text>
                    -value of &lt;0.001). Further research is unlikely to find
                    clinically meaningful results. Considering that the observed
                    results are both precise and definitive, there is generally
                    no need to conduct a repeat or similarly designed study,
                    thus avoiding research waste. However, it&apos;s essential
                    to acknowledge exceptions where replication studies can be
                    particularly valuable, especially in diverse populations or
                    settings, to validate the universality of findings. In most
                    instances, prioritizing new research questions or unexplored
                    avenues is more beneficial, ensuring efficient use of
                    resources and the robustness of scientific inquiry.
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
                    helps in accurately capturing the nuances of the
                    study&apos;s outcomes.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Improve Methodological Quality and Rigor of Subsequent
                      Studies:
                    </Text>{" "}
                    Strengthen the study design, through rigorous randomization,
                    blinding, and controlling confounding variables, to confirm
                    and validate the findings of definitive negative studies. In
                    this context, enhancing methodological rigor is crucial to
                    ensure that negative results are not a product of study
                    design flaws but are indeed reflective of the
                    intervention&apos;s ineffectiveness. Such improvements are
                    key to minimizing bias and enhancing the validity of
                    conclusions. Researchers must navigate the practical
                    challenges of implementing these methodologies while
                    ensuring the study remains feasible and accurate.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Perform Subgroup or Outlier Analyses:
                    </Text>{" "}
                    Conduct detailed analyses on specific subsets of the study
                    population, such as different age groups, genders, or
                    comorbidities, to uncover variations in treatment effects.
                    This statistical exploration helps identify which subgroups
                    may benefit most or least from the intervention, enhancing
                    personalized treatment approaches. Yet, with any subgroup
                    analysis, it is crucial to be aware of the associated
                    statistical power of each analysis and consider potential
                    biases that may be present.
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

Example3.title =
  "Comparative Efficacy of Mindfulness-Based Therapy versus Relaxation-Based Therapy in Symptom Reduction Among Adults with Generalized Anxiety Disorder: A Randomized Controlled Trial";

export default Example3;
