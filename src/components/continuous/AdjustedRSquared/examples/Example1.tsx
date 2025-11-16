import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={'italic'} mt={0}>
        How much variation in 5-year mortality for older adults can be defined by demographic data, lifestyle factors, and genetic markers.
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
              <Text>Cohort study</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <Text>
                1000 adults recruited from a large urban healthcare center.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent / Predictor/Exposure:</Text>
                <List spacing={2}>
                  <List.Item>Demographic data (age, gender, race/ethnicity, socioeconomic status)</List.Item>
                  <List.Item>Lifestyle factors (smoking status, physical activity, diet)</List.Item>
                  <List.Item>Genetic markers (identified through genotyping).</List.Item>
                </List>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/ Outcome</Text>
                <Text>
                  The primary outcome is mortality, measured as the occurrence of death within the 5-year follow-up period after baseline assessment.
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Effect size Measure used in the Analytical Approach</Text>
              <Text>
                Conduct a multiple regression analysis where mortality is the dependent variable, and demographics, lifestyle factors, and genetic markers are independent variables. Calculate the adjusted R-squared value from the multiple regression model. Account for potential confounding variables such as baseline health status, comorbidities (e.g., diabetes, hypertension), and access to healthcare.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate</Text>
              <Text>Adjusted R-squared: 0.55.</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <Text>
                The adjusted R-squared value of 0.55 indicates that approximately 55% of the variance in mortality can be explained by the predictors — demographics, lifestyle factors, and genetic markers, while adjusting for confounding variables. This suggests that the model has substantial explanatory power. Demographic characteristics, lifestyle choices, and genetic markers collectively provide valuable information for predicting mortality in this population.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results</Text>
              <Text>
                The study suggests that a combination of factors, including demographics, lifestyle, and genetics, plays a significant role in predicting mortality. Understanding these predictors can help identify individuals at higher risk and potentially inform targeted preventive strategies. The results could guide the development of personalized healthcare interventions tailored to an individual&apos;s risk profile, including lifestyle modifications and genetic counseling.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <List spacing={2}>
                <List.Item>Conduct longitudinal studies to assess the predictive value of these factors over longer periods and explore potential changes in the significance of predictors over time.</List.Item>
                <List.Item>Validate the predictive model in different populations to assess its generalizability and robustness.</List.Item>
                <List.Item>Investigate the biological mechanisms through which genetic markers interact with demographic and lifestyle factors to influence mortality risk.</List.Item>
                <List.Item>Design and test interventions based on identified risk profiles to assess their effectiveness in reducing mortality.</List.Item>
                <List.Item>Explore ethical implications, such as issues related to genetic data privacy and informed consent, in implementing predictive models in healthcare.</List.Item>
              </List>
            </Stack>
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

Example1.title = "Integrated Predictors of Mortality: Demographics, Lifestyle Factors, and Genetic Markers in an Urban Healthcare Cohort";

export default Example1;

