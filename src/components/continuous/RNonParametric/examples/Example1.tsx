import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
        What is the strength of association between CFTR gene mutations and
        disease severity, as defined by results of pulmonary function tests
        (PFTs), in adolescents with Cystic Fibrosis (CF)?
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
                200 adolescents with diagnosed Cystic Fibrosis (CF) who were
                identified and recruited from a CF specialty clinic or CF
                research database. They were selected based on their
                availability and willingness to participate in the study.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Text>
                As this is a cross-sectional study, there are no independent or
                dependent variables. The two variables analyzed are the cystic
                fibrosis transmembrane conductance regulator (CFTR) gene
                mutation and results of pulmonary function test. CFTR is a
                well-known genetic biomarker used to assess the severity of the
                disease. PFTs assess lung function and provide objective
                measures of respiratory impairment in CF patients.
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
                correlation coefficient (nonparametric)
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>0.50</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>95% confidence interval = 0.38 to 0.62</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Probability Value (
                <Text span fs="italic">
                  p
                </Text>
                -value):
              </Text>
              <Text>&lt; 0.00001</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results:</Text>
              <Text>
                The findings of the study suggest a moderate association between
                CFTR gene mutations and disease severity in adolescents with CF.
                Specifically, certain CFTR gene mutations are moderately linked
                to the observed airflow obstruction severity in pulmonary
                function tests (PFTs). The extremely low probability value (
                <Text span fs="italic">
                  p
                </Text>
                -value) (&lt;0.00001) indicates a highly improbable chance of
                obtaining these results by random variation alone, therefore
                demonstrating statistical significance.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implication of Results:</Text>
              <Text>
                CFTR gene mutations can provide valuable insights into disease
                prognosis and guide treatment decisions, particularly for
                adolescents with CF. However, it is important to consider that
                other factors may also contribute to disease severity, and CFTR
                gene mutations may not fully account for all variations observed
                in PFT results.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research:</Text>
              <Text>
                It is recommended for further investigations to explore the
                interplay between CFTR gene mutations and other potential
                determinants of disease severity, including patient-reported
                outcome measures. Additionally, larger sample sizes and more
                diverse populations can enhance the generalizability of these
                findings and provide more precise estimates of the association.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

Example1.title =
  "The Association between CFTR Gene Mutations and Disease Severity Measured by Pulmonary Function Tests in Adolescents with Cystic Fibrosis: A Cross-sectional Study";

export default Example1;
