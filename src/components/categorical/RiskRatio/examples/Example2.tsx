import { Text, Stack, Tabs, List } from "@mantine/core";

function Example2() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
        In adult patients with no history of hepatitis, what is the association
        between long-term use of acetaminophen, long-term use of ibuprofen, or
        no pain medication use and the development of liver failure?
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
              <Text>Prospective cohort study</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <Text>
                The study sample consisted of 10,000 adult patients with no
                history of hepatitis or liver failure at baseline who were
                enrolled from a tertiary medical center between 2010 and 2012
                and followed through 2020. Participants were divided into three
                groups based on their pain medication use patterns at
                enrollment. The cohort included 3,000 patients with long-term
                acetaminophen use (Group 1), 3,500 patients with long-term
                ibuprofen use (Group 2), and 3,500 patients with no long-term
                pain medication use (Group 3). All groups were balanced for
                history of alcohol consumption, age, sex, and history of
                hepatitis C.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>
                  The independent variable is long-term pain medication exposure
                  at baseline. Group 1 had long-term exposure to acetaminophen,
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
                  The dependent variable is the development of liver failure
                  during the follow-up period (yes/no).
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
                The effect size measure used in this study is the relative risk
                (RR). It quantifies the strength and direction of association
                between different pain medication exposures and the occurrence
                of liver failure.
              </Text>
              <Text>
                The relative risk and 95% confidence intervals can be calculated
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
                Investigators determined that a relative risk of 2.0 or greater
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
                    Group 1 (Acetaminophen) vs. Group 3 (No pain medication): RR
                    = 2.7, indicating that the risk of liver failure is 2.7
                    times higher in acetaminophen users compared to non-users.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Group 2 (Ibuprofen) vs. Group 3 (No pain medication): RR =
                    1.4, indicating that the risk of liver failure is 1.4 times
                    higher in ibuprofen users compared to non-users.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Group 1 (Acetaminophen) vs. Group 2 (Ibuprofen): RR = 1.9,
                    indicating that the risk of liver failure is 1.9 times
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
                    95% CI [2.4, 3.0], indicating a precise estimate.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Group 2 (Ibuprofen) vs. Group 3 (No pain medication): 95% CI
                    [1.2, 1.7], indicating a precise estimate.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Group 1 (Acetaminophen) vs. Group 2 (Ibuprofen): 95% CI
                    [1.6, 2.3], indicating a precise estimate.
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
                strongest association with liver failure, with risk 2.7 times
                higher compared to no pain medication use. Long-term ibuprofen
                use also shows an association with liver failure, though weaker,
                with risk 1.4 times higher compared to no pain medication use.
                When comparing the two medications directly, acetaminophen users
                have 1.9 times higher risk of liver failure compared to
                ibuprofen users.
              </Text>
              <Text>
                The effect sizes indicate a clinically meaningful difference
                between acetaminophen use and no medication use (RR = 2.7,
                exceeding the MCID of 2.0), a smaller but still significant
                difference between ibuprofen use and no medication use (RR =
                1.4, below the MCID), and a borderline clinically meaningful
                difference between acetaminophen and ibuprofen use (RR = 1.9,
                approaching the MCID).
              </Text>
              <Text>
                All confidence intervals are narrow and indicate precise
                estimates. The confidence interval for acetaminophen versus no
                medication (2.4 to 3.0) is entirely above the MCID of 2.0,
                confirming both statistical and clinical significance for this
                comparison.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results:</Text>
              <Text>
                These findings indicate clinically meaningful associations
                between long-term pain medication use and increased risk of
                liver failure, with acetaminophen showing the strongest
                association. Healthcare providers should be aware of these
                associations when considering recommending long-term pain
                medication use for their patients. For patients with the need
                for long-term pain relief, these results suggest that ibuprofen
                may present a lower risk for liver failure compared to
                acetaminophen, though both medications show elevated risk
                compared to no medication use. Alternative pain relief options
                or careful monitoring for liver function should be considered,
                particularly for patients requiring long-term acetaminophen.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research:</Text>
              <List spacing={2}>
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
                    population, such as different age groups, genders, body mass
                    indices, or comorbidities, to uncover variations in
                    medication-related liver failure risk. This prognostic
                    stratification approach enhances personalized treatment
                    approaches. Yet, with any subgroup analysis, it is crucial
                    to be aware of the associated statistical power of each
                    analysis and consider potential biases that may be present.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Extended follow-up studies:
                    </Text>{" "}
                    While the current cohort study provides valuable
                    longitudinal data over 8-10 years, longer follow-up periods
                    could reveal late-onset effects and assess cumulative
                    exposure impacts. Such studies could also examine whether
                    changes in medication use patterns over time affect liver
                    failure risk.
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
                      Cost-effectiveness analysis:
                    </Text>{" "}
                    Evaluate the cost-effectiveness of different pain management
                    strategies, including monitoring protocols, when accounting
                    for the risk of liver failure. Understanding the economic
                    implications alongside clinical outcomes can assist in
                    healthcare resource allocation and policy development.
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
  "Association Between Long-Term Acetaminophen Use, Ibuprofen Use, and Liver Failure: A Multi-Group Comparison";

export default Example2;
