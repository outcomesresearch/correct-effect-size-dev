import { Text, Stack, Tabs, List } from "@mantine/core";

function Example2() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
        Among pediatric patients diagnosed with acute lymphoblastic leukemia
        (ALL), do the three chemotherapy protocols (Protocol A, Protocol B, and
        Protocol C) lead to significantly different survival rates at 5 years?
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
                    390 (130 per protocol)
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Location of recruitment:
                    </Text>{" "}
                    Patients were identified through a nationwide registry of
                    pediatric cancer cases and enrolled in the study at the time
                    of their diagnosis
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Inclusion/exclusion criteria:
                    </Text>{" "}
                    Pediatric patients diagnosed with ALL
                  </Text>
                </List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables Under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/predictor/exposure:</Text>
                <Text>
                  The choice of chemotherapy protocol: Protocol A, Protocol B,
                  or Protocol C
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/outcome:</Text>
                <Text>
                  Vital status (alive/dead) of patients at 5 years after
                  receiving chemotherapy
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
                Survival rate difference was used to compare the three
                chemotherapy protocols through pairwise comparisons
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Minimal clinically important difference (MCID):
              </Text>
              <Text>
                Before the study, a physician group associated with the National
                Cancer Institute defined the MCID as a survival rate difference
                of 25% or greater
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
                  5-Year Survival Rates:
                </Text>
              </Text>
              <List spacing={2}>
                <List.Item>Protocol A: 55%</List.Item>
                <List.Item>Protocol B: 45%</List.Item>
                <List.Item>Protocol C: 25%</List.Item>
              </List>
              <Text>
                <Text span fw={500}>
                  Pairwise Survival Rate Differences:
                </Text>
              </Text>
              <List spacing={2}>
                <List.Item>
                  Protocol A vs. Protocol B: 10% (55% - 45%)
                </List.Item>
                <List.Item>
                  Protocol A vs. Protocol C: 30% (55% - 25%)
                </List.Item>
                <List.Item>
                  Protocol B vs. Protocol C: 20% (45% - 25%)
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
                <List.Item>Protocol A vs. Protocol B: -5% to 25%</List.Item>
                <List.Item>Protocol A vs. Protocol C: 20% to 40%</List.Item>
                <List.Item>Protocol B vs. Protocol C: 5% to 35%</List.Item>
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
                  Protocol A vs. Protocol B:{" "}
                  <Text span fs="italic">
                    P
                  </Text>{" "}
                  = 0.18
                </List.Item>
                <List.Item>
                  Protocol A vs. Protocol C:{" "}
                  <Text span fs="italic">
                    P
                  </Text>{" "}
                  &lt; 0.001
                </List.Item>
                <List.Item>
                  Protocol B vs. Protocol C:{" "}
                  <Text span fs="italic">
                    P
                  </Text>{" "}
                  = 0.02
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
                  Protocol A vs. Protocol B:
                </Text>
              </Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    The survival rate difference of 10% suggests a modest
                    improvement with Protocol A compared to Protocol B.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The CI includes both negative values (favoring Protocol B)
                    and positive values up to 25% (approaching clinical
                    significance). This wide CI indicates considerable
                    uncertainty about the true difference.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The results are indeterminate. No definitive conclusion can
                    be drawn about whether Protocol A offers a clinically
                    meaningful advantage over Protocol B.
                  </Text>
                </List.Item>
              </List>
              <Text>
                <Text span fw={500}>
                  Protocol A vs. Protocol C:
                </Text>
              </Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    The survival rate difference of 30% derived from a
                    randomized controlled trial illustrates a cause-and-effect
                    relationship. This demonstrates that Protocol A results in a
                    remarkable 30% increase in the 5-year survival rate compared
                    to Protocol C.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>The 95% CI (20% to 40%) is moderately wide.</Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The lower bound of the CI (20%) is less than the MCID of
                    25%, while the upper bound (40%) substantially exceeds it.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The results are uncertain. While the point estimate
                    indicates a potentially significant, clinically meaningful
                    difference, the lower bound of the CI is below the MCID
                    threshold. However, since most of the CI falls within the
                    range of a clinically meaningful effect, this study provides
                    strong evidence that Protocol A results in a meaningful
                    difference in survival compared to Protocol C.
                  </Text>
                </List.Item>
              </List>
              <Text>
                <Text span fw={500}>
                  Protocol B vs. Protocol C:
                </Text>
              </Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    The 20% difference in survival rates indicates a significant
                    improvement with Protocol B over Protocol C.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The 95% CI (5% to 35%) is quite wide, making the estimate of
                    the actual effect imprecise.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The lower bound of the CI (5%) is significantly below the
                    MCID of 25%, while the upper bound (35%) surpasses it,
                    indicating considerable uncertainty about the true value.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The results are inconclusive. The wide confidence interval
                    includes values both below and above the clinically
                    significant threshold, which prevents firm conclusions about
                    clinical importance.
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
                    Protocol A demonstrates the highest 5-year survival rate
                    (55%), followed by Protocol B (45%) and Protocol C (25%).
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The comparison between Protocol A and Protocol C provides
                    the strongest evidence, with both statistical significance
                    and a point estimate indicating substantial clinical
                    benefit. However, the imprecision in the estimate (CI: 20%
                    to 40%) means that while the preponderance of evidence
                    supports clinical meaningfulness, definitive conclusions
                    cannot be drawn.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The comparison between Protocol A and Protocol B is
                    inconclusive due to lack of statistical significance and a
                    wide confidence interval.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The comparison between Protocol B and Protocol C shows
                    statistical significance but remains unclear about clinical
                    significance because of the wide confidence interval.
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
                    Clinicians can be fairly confident that Protocol A provides
                    better outcomes than Protocol C, supported by strong
                    evidence indicating a significant survival benefit.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The decision between Protocol A and Protocol B is still
                    unclear and needs further study.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Protocol B seems to provide some benefit over Protocol C,
                    although the clinical significance of this difference
                    remains uncertain.
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
                    Conduct a larger study with a bigger sample size to gain
                    more accurate estimates of the pairwise differences.
                    Increasing the sample size will improve the precision of the
                    estimates by reducing the width of the CIs.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Reduce systematic error.
                    </Text>{" "}
                    Implement strategies, like standardizing the delivery and
                    monitoring of chemotherapy protocols, across treatment
                    sites.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Additional Factors.
                    </Text>{" "}
                    Investigate other factors that could identify unique
                    prognostic groups for whom certain protocols lead to better
                    or worse survival outcomes.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Subgroup Analysis.
                    </Text>{" "}
                    Consider performing subgroup analyses based on patient
                    characteristics (age, disease stage, genetic markers) to
                    determine which patients are most likely to benefit from
                    each protocol.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Additional Outcomes.
                    </Text>{" "}
                    Examine quality-of-life results and treatment-related
                    adverse events alongside survival outcomes to offer a
                    complete comparison of the three protocols.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Long-term follow-up.
                    </Text>{" "}
                    Conduct studies beyond 5 years to determine if survival
                    differences remain or change over time.
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
  "Efficacy of Three Chemotherapy Protocols in Pediatric Acute Lymphoblastic Leukemia: A 5-Year Survival Analysis";

export default Example2;
