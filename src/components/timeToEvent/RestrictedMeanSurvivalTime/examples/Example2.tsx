import { Text, Stack, Tabs, List } from "@mantine/core";

function Example2() {
  return (
    <Stack gap="md">
      <Text fs={'italic'} mt={0}>
        What are the differences in the restricted mean survival time (RMST) among patients with coronary artery disease (CAD) treated with Drug A, Drug B, or Drug C over a 5-year follow-up period?
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
                    <Text span fw={500}>Number of participants:</Text> 450 (150 per treatment group)
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Location of recruitment:</Text> Patients were recruited from multiple cardiology clinics and identified through medical records and referrals
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Inclusion/exclusion criteria:</Text> Patients diagnosed with CAD
                  </Text>
                </List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables Under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/predictor/exposure:</Text>
                <Text>Drug treatment assignment: Drug A vs. Drug B vs. Drug C</Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/outcome:</Text>
                <Text>RMST over a 5-year follow-up period</Text>
              </Stack>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Effect size measure used in the analytical approach:</Text>
              <Text>The difference in RMST was used to compare the three drug treatments through pairwise comparisons</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Minimal clinically important difference (MCID):</Text>
              <Text>
                Prior to the study, experts defined the MCID as a difference in the RMST of 3 years or more
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>
                <Text span fw={500}>Restricted Mean Survival Times (over 5 years):</Text>
              </Text>
              <List spacing={2}>
                <List.Item>Drug A: 4.2 years</List.Item>
                <List.Item>Drug B: 3.5 years</List.Item>
                <List.Item>Drug C: 2.7 years</List.Item>
              </List>
              <Text>
                <Text span fw={500}>Pairwise RMST Differences:</Text>
              </Text>
              <List spacing={2}>
                <List.Item>Drug A vs. Drug B: 0.7 years (4.2 - 3.5)</List.Item>
                <List.Item>Drug A vs. Drug C: 1.5 years (4.2 - 2.7)</List.Item>
                <List.Item>Drug B vs. Drug C: 0.8 years (3.5 - 2.7)</List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Intervals:</Text>
              <Text>
                <Text span fw={500}>95% Confidence Intervals for Pairwise Differences:</Text>
              </Text>
              <List spacing={2}>
                <List.Item>Drug A vs. Drug B: -0.1 to 1.5 years</List.Item>
                <List.Item>Drug A vs. Drug C: 0.3 to 2.7 years</List.Item>
                <List.Item>Drug B vs. Drug C: 0.1 to 1.5 years</List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Probability Values (<Text span fs="italic">P</Text>-Values):</Text>
              <Text>
                <Text span fw={500}>Pairwise Comparisons:</Text>
              </Text>
              <List spacing={2}>
                <List.Item>Drug A vs. Drug B: <Text span fs="italic">P</Text> = 0.08</List.Item>
                <List.Item>Drug A vs. Drug C: <Text span fs="italic">P</Text> = 0.015</List.Item>
                <List.Item>Drug B vs. Drug C: <Text span fs="italic">P</Text> = 0.04</List.Item>
              </List>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results:</Text>
              <Text>
                <Text span fw={500}>Drug A vs. Drug B:</Text>
              </Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    The RMST difference of 0.7 years suggests a modest improvement with Drug A compared to Drug B. Patients treated with Drug A survived an average of 0.7 years longer over the 5-year follow-up period.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The point estimate (0.7 years) is well below the predetermined MCID of 3 years.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The 95% CI (-0.1 to 1.5 years) crosses 0, indicating the results are not statistically significant (<Text span fs="italic">P</Text> = 0.08).
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    All values in the CI are below the clinical significance threshold of 3 years, suggesting no clinically important difference in RMST between Drug A and Drug B.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The results are indeterminate due to lack of statistical significance and the inclusion of both negative and positive values in the CI.
                  </Text>
                </List.Item>
              </List>
              <Text>
                <Text span fw={500}>Drug A vs. Drug C:</Text>
              </Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    The RMST difference of 1.5 years demonstrates that Drug A provides longer average survival compared to Drug C. Patients treated with Drug A survived an average of 1.5 years longer over the 5-year follow-up period.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The point estimate (1.5 years) is smaller than the predetermined MCID of 3 years.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The 95% CI (0.3 to 2.7 years) is narrow and does not cross 0, indicating statistical significance (<Text span fs="italic">P</Text> = 0.015).
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    All values in the CI are below the clinical significance threshold of 3 years, suggesting that while the difference is statistically significant, it is not clinically meaningful.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    This is a definitively negative study. The results are statistically significant, but all plausible estimates fall below the MCID threshold.
                  </Text>
                </List.Item>
              </List>
              <Text>
                <Text span fw={500}>Drug B vs. Drug C:</Text>
              </Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    The RMST difference of 0.8 years suggests a modest improvement with Drug B compared to Drug C. Patients treated with Drug B survived an average of 0.8 years longer over the 5-year follow-up period.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The point estimate (0.8 years) is well below the predetermined MCID of 3 years.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The 95% CI (0.1 to 1.5 years) is narrow and just barely does not cross 0, indicating marginal statistical significance (<Text span fs="italic">P</Text> = 0.04).
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    All values in the CI are below the clinical significance threshold of 3 years, suggesting no clinically important difference in RMST between Drug B and Drug C.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    This is a definitively negative study. While statistically significant, all plausible estimates are below the MCID threshold.
                  </Text>
                </List.Item>
              </List>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results:</Text>
              <Text>
                <Text span fw={500}>Understanding Statistical Significance vs. Clinical Significance:</Text>
              </Text>
              <Text>
                This study illustrates an important distinction in research interpretation. Two comparisons (Drug A vs. Drug C and Drug B vs. Drug C) achieved statistical significance, yet the study conclusions for these comparisons are classified as &quot;definitively negative.&quot; This highlights the critical difference between statistical and clinical significance:
              </Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Statistical Significance (<Text span fs="italic">P</Text> &lt; 0.05)</Text> simply means that the observed difference is unlikely to be due to random chance alone. It answers the question: &quot;Is there a real difference between the groups?&quot;
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Clinical Significance</Text> depends on whether the difference is large enough to matter in clinical practice. It answers the question: &quot;Is this difference meaningful to patients and clinicians?&quot;
                  </Text>
                </List.Item>
              </List>
              <Text>
                In this study:
              </Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    The comparisons of Drug A vs. Drug C (<Text span fs="italic">P</Text> = 0.015) and Drug B vs. Drug C (<Text span fs="italic">P</Text> = 0.04) show statistical significance, confirming that these drugs likely produce different outcomes—this is not due to chance.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    However, the point estimates (1.5 years and 0.8 years, respectively) and the entire confidence intervals for both comparisons fall below the predefined MCID of 3 years.
                  </Text>
                </List.Item>
              </List>
              <Text>
                <Text span fw={500}>Classification as &quot;Definitively Negative&quot;:</Text>
              </Text>
              <Text>
                These comparisons are classified as &quot;definitively negative&quot; because we can be confident (based on the narrow, precise confidence intervals) that the true differences do not reach the threshold for clinical importance. All plausible values for the true effects are below what was predetermined to be clinically meaningful.
              </Text>
              <Text>
                <Text span fw={500}>Overall Findings:</Text>
              </Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    Drug A demonstrates the longest RMST (4.2 years), followed by Drug B (3.5 years) and Drug C (2.7 years).
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Despite numerical differences in survival times, none of the pairwise comparisons demonstrate clinically meaningful differences based on the predetermined MCID of 3 years.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The comparison between Drug A and Drug C, while statistically significant, is definitively negative for clinical significance. All plausible estimates are below the MCID.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The comparison between Drug B and Drug C is also definitively negative despite statistical significance.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The comparison between Drug A and Drug B is not statistically significant and shows no clinically meaningful difference.
                  </Text>
                </List.Item>
              </List>
              <Text>
                <Text span fw={500}>Clinical Application:</Text>
              </Text>
              <Text>
                Cardiologists can be confident that the choice among Drug A, Drug B, or Drug C does not lead to clinically important differences in RMST over a 5-year period. While Drug A shows the highest average survival time, the differences are not large enough to be clinically meaningful according to the predetermined threshold.
              </Text>
              <Text>
                <Text span fw={500}>Key Takeaway:</Text> This study definitively shows that while differences exist among the three drugs (particularly between Drug A and Drug C, and between Drug B and Drug C, which are statistically significant), these differences are not large enough to be clinically important (definitively negative for clinical significance). This demonstrates why effect sizes, confidence intervals, and predetermined MCIDs are essential for interpreting research—<Text span fs="italic">P</Text>-values alone cannot tell us whether findings matter in clinical practice.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    Future research could explore other outcomes (such as quality of life, cardiovascular events, adverse effects, or cost-effectiveness) that may differ among the three drug treatments even if RMST differences are not clinically meaningful.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Investigate subgroups of CAD patients (based on disease severity, comorbidities, age, or genetic factors) to determine whether certain populations may derive greater differential benefit from specific drugs.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Long-term follow-up studies beyond 5 years may provide insights into survival differences that may become apparent over an even longer time frame, potentially reaching clinical significance.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Consider conducting studies with larger sample sizes to increase precision, though given that the current confidence intervals are already narrow and entirely below the MCID, increased precision is unlikely to change the clinical interpretation.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Explore combination therapies or novel treatment approaches that may achieve clinically meaningful improvements in RMST beyond what these three drugs individually provide.
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

Example2.title = "Comparing Restricted Mean Survival Time Among Patients with Coronary Artery Disease: Three Drug Treatments";

export default Example2;

