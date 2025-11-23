import { Text, Stack, Tabs, List } from "@mantine/core";

function Example2() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
        What is the strength of association between CFTR gene mutations and
        measures of disease severity (PFT, sweat chloride test, and CFQ-R) in
        adolescents with Cystic Fibrosis?
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
                20 adolescents with diagnosed Cystic Fibrosis (CF) who were
                identified and recruited from a CF specialty clinic or CF
                research database. They were selected based on their
                availability and willingness to participate in the study.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study</Text>
              <Text>
                As this is a cross-sectional study, there are no independent or
                dependent variables. The variables analyzed are the cystic
                fibrosis transmembrane conductance regulator (CFTR) gene
                mutation, pulmonary function test, sweat chloride test, and the
                Cystic Fibrosis Questionnaire-Revised (CFQ-R) is a validated and
                widely used questionnaire designed to assess the health-related
                quality of life (HRQoL) in individuals with cystic fibrosis
                (CF).
              </Text>
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
                <Text span fs="italic">
                  r
                </Text>{" "}
                correlation coefficient (non-parametric) for the pairwise
                comparisons of CFTR and PFT, CFTR and Sweat Chloride Test, and
                CFTR and CFQ-R.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Pairwise Strength of Association</Text>

              <Stack gap={0}>
                <Text fw={500}>1. CFTR gene mutations and PFT</Text>
                <List spacing={2}>
                  <List.Item>
                    Point Estimate (
                    <Text span fs="italic">
                      r
                    </Text>{" "}
                    non-parametric): 0.40
                  </List.Item>
                  <List.Item>
                    95% Confidence Interval (CI): 0.20 to 0.60 (moderately
                    precise estimate)
                  </List.Item>
                </List>
              </Stack>

              <Stack gap={0}>
                <Text fw={500}>
                  2. CFTR gene mutations and sweat chloride test
                </Text>
                <List spacing={2}>
                  <List.Item>
                    Point Estimate (
                    <Text span fs="italic">
                      r
                    </Text>{" "}
                    non-parametric): 0.60
                  </List.Item>
                  <List.Item>
                    95% Confidence Interval (CI): 0.50 to 0.70 (precise
                    estimate)
                  </List.Item>
                </List>
              </Stack>

              <Stack gap={0}>
                <Text fw={500}>3. CFTR gene mutations and CFQ-R</Text>
                <List spacing={2}>
                  <List.Item>
                    Point Estimate (
                    <Text span fs="italic">
                      r
                    </Text>{" "}
                    non-parametric): 0.20
                  </List.Item>
                  <List.Item>
                    95% Confidence Interval (CI): 0.10 to 0.30 (imprecise
                    estimate)
                  </List.Item>
                </List>
              </Stack>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <Text>
                The study results indicate varying strengths of association
                between CFTR gene mutations and different measures. The
                strongest association is observed between CFTR gene mutations
                and sweat chloride test, suggesting a clear relationship between
                genetic mutations and the results of this test. Conversely, the
                association between CFTR gene mutations and CFQ-R
                patient-reported outcome measures is weaker, suggesting that
                factors other than CFTR gene mutations influence
                patient-reported outcomes. The strength of association between
                CFTR gene mutations and PFT results falls in the medium range.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implication of Results</Text>
              <Text>
                The findings emphasize the significance of genetic biomarkers,
                particularly CFTR gene mutations, in assessing disease severity
                in CF patients. The strong association between CFTR gene
                mutations and sweat chloride test results indicates that the
                extent of gene mutation can serve as a reliable and informative
                indicator of disease severity. However, the weaker association
                between CFTR gene mutations and CFQ-R scores highlights the
                importance of considering other factors that contribute to
                patient-reported outcomes in CF.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <Text>
                For future investigations, it is recommended to identify
                additional relevant biomarkers that can further enhance the
                understanding of disease severity in CF. Incorporating
                additional patient-reported outcome measures can also provide a
                more comprehensive assessment of the disease&apos;s impact on
                quality of life. Such efforts will contribute to a deeper
                understanding of CF and help improve patient care.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

Example2.title =
  "The Association between CFTR Gene Mutations and Measures of Disease Severity in Adolescents with Cystic Fibrosis: A Cross-sectional Study";

export default Example2;
