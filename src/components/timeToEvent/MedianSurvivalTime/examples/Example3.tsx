import { Text, Stack, Tabs, List } from "@mantine/core";

function Example3() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
        Among patients diagnosed with glioblastoma multiforme (GBM), do three
        different treatment approaches (standard therapy, experimental
        immunotherapy, and combination therapy) lead to significantly different
        median survival times over the study period?
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
                    600 (200 per treatment group)
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Location of recruitment:
                    </Text>{" "}
                    Patients were identified through collaboration with multiple
                    cancer centers and hospitals specializing in neuro-oncology
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Inclusion/exclusion criteria:
                    </Text>{" "}
                    Patients diagnosed with GBM
                  </Text>
                </List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables Under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/predictor/exposure:</Text>
                <Text>
                  Treatment approach: standard therapy vs. experimental
                  immunotherapy vs. combination therapy (immunotherapy plus
                  standard therapy)
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/outcome:</Text>
                <Text>
                  Median survival time (in months) after receiving treatment
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
                Median survival time was used to compare the three treatment
                protocols through pairwise comparisons
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Minimal clinically important difference (MCID):
              </Text>
              <Text>
                Prior to the study, members of the National Brain Tumor Study
                defined the MCID as a difference in median survival time of 6
                months or more
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>
                <Text span fw={500}>
                  Median Survival Times:
                </Text>
              </Text>
              <List spacing={2}>
                <List.Item>Standard Therapy: 12 months</List.Item>
                <List.Item>Experimental Immunotherapy: 22 months</List.Item>
                <List.Item>Combination Therapy: 26 months</List.Item>
              </List>
              <Text>
                <Text span fw={500}>
                  Pairwise Median Survival Time Differences:
                </Text>
              </Text>
              <List spacing={2}>
                <List.Item>
                  Immunotherapy vs. Standard Therapy: 10 months (22 - 12)
                </List.Item>
                <List.Item>
                  Combination Therapy vs. Standard Therapy: 14 months (26 - 12)
                </List.Item>
                <List.Item>
                  Combination Therapy vs. Immunotherapy: 4 months (26 - 22)
                </List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Intervals:</Text>
              <Text>
                <Text span fw={500}>
                  95% Confidence Intervals for Pairwise Differences:
                </Text>
              </Text>
              <List spacing={2}>
                <List.Item>
                  Immunotherapy vs. Standard Therapy: 7 to 13 months
                </List.Item>
                <List.Item>
                  Combination Therapy vs. Standard Therapy: 10 to 18 months
                </List.Item>
                <List.Item>
                  Combination Therapy vs. Immunotherapy: 0 to 8 months
                </List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Probability Values (
                <Text span fs="italic">
                  P
                </Text>
                -Values):
              </Text>
              <Text>
                <Text span fw={500}>
                  Pairwise Comparisons:
                </Text>
              </Text>
              <List spacing={2}>
                <List.Item>
                  Immunotherapy vs. Standard Therapy:{" "}
                  <Text span fs="italic">
                    P
                  </Text>{" "}
                  &lt; 0.001
                </List.Item>
                <List.Item>
                  Combination Therapy vs. Standard Therapy:{" "}
                  <Text span fs="italic">
                    P
                  </Text>{" "}
                  &lt; 0.001
                </List.Item>
                <List.Item>
                  Combination Therapy vs. Immunotherapy:{" "}
                  <Text span fs="italic">
                    P
                  </Text>{" "}
                  = 0.048
                </List.Item>
              </List>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results:</Text>
              <Text>
                <Text span fw={500}>
                  Immunotherapy vs. Standard Therapy:
                </Text>
              </Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    The 10-month difference in median survival time from a
                    randomized controlled trial shows a cause-and-effect link.
                    This indicates that experimental immunotherapy leads to a
                    significant 10-month increase in median survival compared to
                    standard treatment.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The 95% CI (7 to 13 months) is narrow, showing a precise
                    estimate of the true effect.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The lower bound of the CI (7 months) surpasses the MCID
                    threshold of 6 months, and the upper bound (13 months)
                    significantly exceeds it.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    This is a definitely positive study. All plausible results,
                    as defined by the range of the 95% CI, are clinically
                    meaningful, and the observed difference is statistically
                    significant.
                  </Text>
                </List.Item>
              </List>
              <Text>
                <Text span fw={500}>
                  Combination Therapy vs. Standard Therapy:
                </Text>
              </Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    The 14-month median survival time difference shows that
                    combination therapy leads to a significant 14-month increase
                    in median survival compared to standard therapy.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The 95% CI (10 to 18 months) is narrow, showing a precise
                    estimate of the actual effect.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The lower bound of the CI (10 months) significantly
                    surpasses the MCID threshold of 6 months.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    This is a definitively positive study. All plausible results
                    are clinically meaningful, and the observed difference is
                    statistically significant. Combination therapy provides the
                    strongest evidence of clinical benefit compared to standard
                    therapy.
                  </Text>
                </List.Item>
              </List>
              <Text>
                <Text span fw={500}>
                  Combination Therapy vs. Immunotherapy:
                </Text>
              </Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    The median survival time difference of 4 months indicates a
                    modest benefit of combination therapy over immunotherapy
                    alone.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The 95% CI (0 to 8 months) is somewhat wide and imprecise.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The lower bound of the CI (0 months) is well below the MCID
                    threshold of 6 months, while the upper bound (8 months)
                    slightly surpasses it.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The results are inconclusive. Although the point estimate (4
                    months) and the lower bound of the confidence interval fall
                    below the MCID threshold, the upper bound indicates the
                    potential for a clinically significant benefit. The
                    uncertainty in the estimate prevents firm conclusions about
                    whether combination therapy provides a clinically meaningful
                    improvement over immunotherapy alone.
                  </Text>
                </List.Item>
              </List>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results:</Text>
              <Text>
                <Text span fw={500}>
                  Overall Findings:
                </Text>
              </Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    Combination therapy shows the longest median survival time
                    (26 months), followed by experimental immunotherapy (22
                    months) and standard therapy (12 months).
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Both immunotherapy alone and combination therapy show
                    definitively positive results compared to standard therapy,
                    with all plausible estimates indicating clinically
                    meaningful survival benefits.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Combination therapy seems more effective than standard
                    therapy, with the biggest effect size of 14 months and high
                    accuracy.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The comparison between combination therapy and immunotherapy
                    alone remains uncertain. While combination therapy shows a
                    numerically longer median survival time, the clinical
                    significance of this 4-month difference is unclear because
                    it falls below the MCID threshold and the confidence
                    interval includes both clinically insignificant and
                    potentially significant values.
                  </Text>
                </List.Item>
              </List>
              <Text>
                <Text span fw={500}>
                  Clinical Application:
                </Text>
              </Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    These results have important clinical implications. Both
                    experimental immunotherapy and combination therapy provide
                    notable improvements in median survival time compared to
                    standard treatment for patients with GBM.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Clinicians can be very confident that either immunotherapy
                    alone or combination therapy is a significant improvement
                    over standard treatment.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The choice between immunotherapy alone and combination
                    therapy requires careful consideration. Although combination
                    therapy offers the longest median survival, its additional
                    benefit over immunotherapy alone might not be clinically
                    significant. Factors such as treatment toxicity, quality of
                    life, cost, and patient preferences should guide this
                    decision.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    These findings could revolutionize GBM treatment and
                    significantly improve patient outcomes.
                  </Text>
                </List.Item>
              </List>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Larger Study.
                    </Text>{" "}
                    Conduct a larger study focused specifically on comparing
                    immunotherapy alone versus combination therapy to obtain
                    more precise estimates of the difference between these two
                    promising approaches. A larger sample size will increase the
                    precision of the estimate by decreasing the width of the CI.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Benefit vs. Adverse Effects.
                    </Text>{" "}
                    Determine if the small additional survival benefit of
                    combination therapy (4 months) is meaningful when weighed
                    against potential increases in treatment-related side
                    effects, costs, and effects on quality of life.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Dissemination & Implementation.
                    </Text>{" "}
                    Conduct dissemination and implementation (D&I) research to
                    translate research findings into clinical practice by
                    bridging the gap between developing effective interventions
                    and their widespread adoption and use in real-world
                    healthcare settings. D&I research aims to understand the
                    factors that influence the adoption and utilization of
                    evidence-based interventions, and it designs and tests
                    strategies to overcome identified barriers and improve
                    facilitators. Successful D&I research actively involves
                    stakeholders such as clinicians, patients, policymakers, and
                    administrators. Consider forming a multidisciplinary team of
                    scientists and health services researchers with diverse
                    expertise and perspectives needed to address the complex
                    challenges of implementation in real-world healthcare
                    settings.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Explore Biomarkers.
                    </Text>{" "}
                    Explore predictive biomarkers that can identify which
                    patients are most likely to benefit from immunotherapy alone
                    versus combination therapy.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Subgroup Analysis.
                    </Text>{" "}
                    Perform subgroup analyses based on patient characteristics
                    (age, performance status, molecular markers) to identify if
                    some populations gain more benefit from specific treatment
                    approaches.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Long-Term Survival Outcomes.
                    </Text>{" "}
                    Examine long-term survival outcomes beyond the median
                    survival point to determine whether survival curves continue
                    to diverge or converge over time.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Long-Term Safety.
                    </Text>{" "}
                    Studies examining long-term safety, treatment-related
                    toxicities, and quality-of-life outcomes for patients
                    receiving these treatments would offer a comprehensive
                    understanding of their overall impact and assist in guiding
                    treatment choices.
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
  "Comparing Median Survival Time Among Patients with Glioblastoma Multiforme: Three Treatment Approaches";

export default Example3;
