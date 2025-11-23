import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
        Among adults who suffer a myocardial infarction and are placed on
        standard antithrombotic treatment (i.e., aspirin, clopidogrel, or a
        vitamin K antagonist), what is the risk of subsequent gastrointestinal
        bleeding among adults who also receive a non-steroidal anti-inflammatory
        drug?
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
                Cohort. This is a longitudinal observational study from a
                10-year period, tracking a cohort of older adults who suffered
                their first myocardial infarction. The cohort was restricted to
                individuals alive 30 days after discharge, which was the date of
                study inclusion.
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
                    62,125 patients aged 30 years or older.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Location of recruitment:
                    </Text>{" "}
                    National registry
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Inclusion/exclusion criteria:
                    </Text>{" "}
                    Inclusion: Adults who suffered first MI. Exclusion: Prior
                    diagnosis of intracranial bleeding, gastrointestinal
                    bleeding (bleeding ulcer, hematemesis, melena, and
                    unspecified gastrointestinal bleeding), bleeding from the
                    respiratory or urinary tract, and anemia caused by bleeding.
                  </Text>
                </List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables Under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <List spacing={2}>
                  <List.Item>
                    <Text>
                      Antithrombotic therapy defined by prescription claims from
                      the registry.
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text>
                      Monotherapy defined by claimed prescriptions for aspirin,
                      clopidogrel, or vitamin K antagonists alone.
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text>
                      Dual therapy defined as the use of non-steroidal
                      anti-inflammatory drug (NSAID) in addition to aspirin,
                      clopidogrel, or vitamin K.
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text>
                      Confounders: Overall burden of comorbidities (e.g.,
                      diabetes) as defined by the Adult Comorbidity
                      Evaluation-27 were identified.
                    </Text>
                  </List.Item>
                </List>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>
                  The primary outcome of bleeding was defined as admission or
                  death from diagnoses of intracranial bleeding,
                  gastrointestinal bleeding (bleeding ulcer, hematemesis,
                  melena, and unspecified gastrointestinal bleeding), bleeding
                  from the respiratory or urinary tract, and anemia caused by
                  bleeding.
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
              <Text>Risk ratio (RR) was used to quantify the effect size.</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Minimal Clinically Important Difference (MCID):
              </Text>
              <Text>
                The MCID was defined as a 20% increase in bleeding risk (i.e.,
                RR = 1.2).
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>
                The number of bleeding events among the 43,487 subjects treated
                with monotherapy was 539 for a risk of 1.24% (95% CI 1.14 to
                1.35).
              </Text>
              <Text>
                The number of bleeding events among the 18,638 subjects treated
                with dual therapy was 582 for a risk of 3.12% (95% CI 2.88 to
                3.38).
              </Text>
              <Text>The risk ratio or relative risk is 2.52.</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>
                The 95% confidence interval for the RR ranges from 2.24 to 2.83,
                which is a precise estimate of the true value of the RR.
              </Text>
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
                <Text span fs="italic">
                  P
                </Text>{" "}
                &lt; 0.0001
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results:</Text>
              <Text>
                The RR point estimate is 2.52, which corresponds to a 152%
                increase [(RR point estimate – 1)*100] in the number of bleed
                events among those who were taking a non-steroidal
                anti-inflammatory drug in addition to aspirin, clopidogrel, or
                vitamin K.
              </Text>
              <Text>
                The 95% CI ranges from 2.24 to 2.83. This is a precise estimate
                of the true risk increase, indicating that the actual risk
                increase can range from 124% to 183%.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    The risk ratio or relative risk is 2.52, which greatly
                    exceeds the MCID of 1.2, so the results are clinically
                    meaningful.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The relatively narrow confidence interval indicates a
                    precise estimate of the true effect and all plausible
                    results, defined by the range of the 95% CI, are clinically
                    meaningful (i.e., the lower bound of the CI is 2.24).
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    This study is a definitively positive study. All plausible
                    results are clinically meaningful, and the observed
                    difference is statistically significant.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    This study provides strong evidence that adding a
                    non-steroidal anti-inflammatory drug in addition to aspirin,
                    clopidogrel, or vitamin K is associated with a clinically
                    meaningful increase in bleeding events.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Because this is an observational study, alternative
                    explanations for the positive findings can include
                    confounding (a third factor causes both increased use of
                    NSAIDs and an increase in GI bleeding events), bias (a
                    systematic error in one or more aspects of the conduct of
                    the study), chance (a random effect), and effect-cause (a
                    reversal of effect).
                  </Text>
                </List.Item>
              </List>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    Conduct dissemination and implementation (D&I) research to
                    translate the research findings into clinical practice by
                    bridging the gap between the development of effective
                    interventions and their widespread adoption and use in
                    real-world health care settings. D&I research seeks to
                    understand the factors that influence the adoption and
                    utilization of evidence-based interventions, and it designs
                    and tests strategies to overcome identified barriers and
                    enhance facilitators. Successful D&I research actively
                    involves stakeholders such as clinicians, patients, policy
                    makers, and administrators. Consider creating a
                    multidisciplinary team of scientists and health service
                    researchers with the broad range of expertise and
                    perspectives needed to address the multifaceted challenges
                    of implementation in real-world health care settings.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Further research could explore unique prognostic subgroups
                    for whom the risk of NSAIDs is particularly elevated or
                    reduced.
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
  "Association of Antithrombotic Treatment After Myocardial Infarction (MI) and Risk of Gastrointestinal Bleeding";

export default Example1;
