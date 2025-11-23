import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
        In adult patients, is there an association between long-term use of
        acetaminophen, long-term use of ibuprofen, or no pain medication use and
        the development of liver failure?
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
              <Text>Case-control study</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <Text>
                The study sample consisted of 1,500 adult patients with no
                history of hepatitis who were seen at a tertiary medical center
                between 2010 and 2020. The cases were 500 patients diagnosed
                with liver failure. The controls were 1,000 patients without
                liver failure who were matched with cases based on history of
                alcohol consumption, age, sex, and history of hepatitis C.
                Participants were categorized into three groups based on their
                pain medication use history: Group 1 (long-term acetaminophen
                use), Group 2 (long-term ibuprofen use), and Group 3 (no
                long-term pain medication use).
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>
                  The independent variable is long-term pain medication exposure
                  history. Group 1 had long-term exposure to acetaminophen,
                  defined as use of the recommended dosage of acetaminophen (325
                  mg every 3-4 hours) or higher every day for at least a month.
                  Group 2 had long-term exposure to ibuprofen, defined as use of
                  the recommended dosage of ibuprofen (200-400 mg every 4-6
                  hours) or higher every day for at least a month. Group 3 had
                  no long-term pain medication use.
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>
                  The dependent variable is the occurrence of liver failure
                  (yes/no).
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>
                Effect Size Measure used in the Analytical Approach:
              </Text>
              <Text>
                The effect size measure used in this study is the odds ratio
                (OR). It quantifies the strength and direction of association
                between different pain medication exposures and the occurrence
                of liver failure.
              </Text>
              <Text>
                The odds ratio and 95% confidence intervals can be calculated
                for the pair-wise comparisons between the three groups (Group 1
                vs. Group 2, Group 1 vs. Group 3, Group 2 vs. Group 3). These
                values provide estimates of the effect size and the precision of
                the estimates between the exposure groups.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Minimal Clinically Important Difference (MCID):
              </Text>
              <Text>
                Investigators determined that an odds ratio of 2.0 or greater
                would be clinically meaningful for the association between pain
                medication use and liver failure.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    Group 1 (Acetaminophen) vs. Group 3 (No pain medication): OR
                    = 2.7, indicating that the odds of liver failure are 2.7
                    times higher in acetaminophen users compared to non-users.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Group 2 (Ibuprofen) vs. Group 3 (No pain medication): OR =
                    1.5, indicating that the odds of liver failure are 1.5 times
                    higher in ibuprofen users compared to non-users.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Group 1 (Acetaminophen) vs. Group 2 (Ibuprofen): OR = 1.8,
                    indicating that the odds of liver failure are 1.8 times
                    higher in acetaminophen users compared to ibuprofen users.
                  </Text>
                </List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    Group 1 (Acetaminophen) vs. Group 3 (No pain medication):
                    95% CI [1.9, 3.7], indicating a relatively narrow confidence
                    interval and a precise estimate.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Group 2 (Ibuprofen) vs. Group 3 (No pain medication): 95% CI
                    [1.1, 2.1], indicating a relatively narrow confidence
                    interval and a precise estimate.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Group 1 (Acetaminophen) vs. Group 2 (Ibuprofen): 95% CI
                    [1.3, 2.5], indicating a relatively narrow confidence
                    interval and a precise estimate.
                  </Text>
                </List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Probability Value (
                <Text span fs="italic">
                  P
                </Text>
                -value):
              </Text>
              <Text>
                All comparisons:{" "}
                <Text span fs="italic">
                  p
                </Text>{" "}
                &lt; 0.0001, indicating statistically significant results.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results:</Text>
              <Text>
                These results suggest that long-term acetaminophen use has the
                strongest association with liver failure, with odds 2.7 times
                higher compared to no pain medication use. Long-term ibuprofen
                use also shows an association with liver failure, though weaker,
                with odds 1.5 times higher compared to no pain medication use.
                When comparing the two medications directly, acetaminophen users
                have 1.8 times higher odds of liver failure compared to
                ibuprofen users.
              </Text>
              <Text>
                The effect sizes indicate a clinically meaningful difference
                between acetaminophen use and no medication use (OR = 2.7,
                exceeding the MCID of 2.0). The comparison between ibuprofen use
                and no medication use shows a smaller difference (OR = 1.5,
                below the MCID), though the lower bound of the confidence
                interval (1.1) is close to 1.0, suggesting some uncertainty
                about clinical meaningfulness. The comparison between
                acetaminophen and ibuprofen use shows a borderline clinically
                meaningful difference (OR = 1.8, approaching the MCID).
              </Text>
              <Text>
                All confidence intervals are relatively narrow and indicate
                precise estimates. The confidence interval for acetaminophen
                versus no medication (1.9 to 3.7) has a lower bound just barely
                below the MCID of 2.0, meaning it is possible that long-term
                acetaminophen exposure is not associated with a clinically
                meaningful increase in liver failure, although the vast majority
                of the confidence interval is above the MCID of 2.0. The
                confidence interval for ibuprofen versus no medication (1.1 to
                2.1) crosses the MCID, indicating uncertainty about whether this
                association is clinically meaningful, though it remains
                statistically significant.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results:</Text>
              <Text>
                These findings indicate clinically meaningful associations
                between long-term pain medication use and increased risk of
                liver failure, with acetaminophen showing the strongest
                association. Healthcare providers should exercise caution when
                recommending long-term pain medication use, particularly
                acetaminophen, and consider alternative pain relief options,
                especially for individuals at risk of liver disease. For
                patients with the need for long-term pain relief, these results
                suggest that ibuprofen may present a lower risk for liver
                failure compared to acetaminophen. However, both medications
                show an elevated risk compared to no medication use. Further
                research with larger sample sizes is needed to more conclusively
                determine if these associations represent clinically significant
                relationships, particularly for the ibuprofen comparison.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Larger sample size studies:
                    </Text>{" "}
                    Conduct studies with larger sample sizes to narrow the
                    confidence intervals and more definitively determine if
                    these associations represent clinically meaningful
                    relationships, particularly for the comparisons that
                    approach or cross the MCID threshold.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Dose-response relationship:
                    </Text>{" "}
                    Investigate whether there is a threshold dose below which
                    acetaminophen or ibuprofen use might be considered safer for
                    long-term use. Establishing safe dosage guidelines could
                    help clinicians balance pain management needs with liver
                    safety.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Interaction effects:
                    </Text>{" "}
                    Examine the potential interaction of acetaminophen and
                    ibuprofen with other risk factors for liver failure, such as
                    alcohol consumption patterns, concurrent medication use,
                    nutritional status, and genetic predispositions.
                    Understanding these interactions could help identify
                    particularly vulnerable patient populations.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Comparative effectiveness of alternative pain management:
                    </Text>{" "}
                    Evaluate the effectiveness and safety profiles of other pain
                    relief options, including other NSAIDs, opioid medications,
                    topical analgesics, and non-pharmacological interventions.
                    This research would provide healthcare providers with a
                    broader evidence base for informed decision-making regarding
                    long-term pain management.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Subgroup and stratification analyses:
                    </Text>{" "}
                    Conduct detailed analyses on specific subsets of the study
                    population (i.e., prognostic stratification), such as
                    different age groups, genders, body mass indices, or
                    comorbidities, to uncover variations in medication-related
                    liver failure risk. This statistical exploration helps
                    identify which subgroups may be at elevated (or reduced)
                    risk of liver failure, and thus, alternative therapies
                    should be (or not) explored. This prognostic stratification
                    approach enhances personalized treatment approaches. Yet,
                    with any subgroup analysis, it is crucial to be aware of the
                    associated statistical power of each analysis and consider
                    potential biases that may be present.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Prospective cohort studies:
                    </Text>{" "}
                    While the current case-control design provides valuable
                    association data, prospective cohort studies could establish
                    temporal relationships more definitively and reduce
                    potential recall bias regarding medication use history.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Mechanistic studies:
                    </Text>{" "}
                    Explore the biological mechanisms by which acetaminophen and
                    ibuprofen contribute to liver failure, including metabolic
                    pathways, oxidative stress, and cellular damage patterns.
                    Understanding these mechanisms could lead to preventive
                    strategies or protective interventions.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Comparative Effectiveness Research (CER):
                    </Text>{" "}
                    Compare the effectiveness of these pain medications with
                    alternative treatments or strategies to provide healthcare
                    providers with evidence for informed decision-making. In
                    CER, it&apos;s crucial to address biases specific to
                    comparative studies, such as ensuring comparability between
                    study groups and choosing relevant comparators and
                    endpoints.
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
  "Association Between Long-Term Pain Medication Use and Liver Failure: A Multi-Group Case-Control Analysis";

export default Example1;
