import { Text, Stack, Tabs, List } from "@mantine/core";

function Example2() {
  return (
    <Stack gap="md">
      <Text fs={'italic'} mt={0}>
        Among adults between the ages of 40 and 65, what is the impact of cigarette smoking on lung function?
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
              <Text>Observational cohort</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <Text>
                Cohort of 1,000 adults aged 40-65 recruited from the general population.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>Smoking Status: Participants are categorized into three groups based on their smoking status:</Text>
                <List spacing={2}>
                  <List.Item>Non-Smokers</List.Item>
                  <List.Item>Current Smokers</List.Item>
                  <List.Item>Former Smokers</List.Item>
                </List>
                <Text>Potential Confounding Variables:</Text>
                <List spacing={2}>
                  <List.Item>Age</List.Item>
                  <List.Item>Gender</List.Item>
                  <List.Item>Body Mass Index (BMI)</List.Item>
                  <List.Item>Occupational Exposure to Lung Irritants (e.g., occupational dust or fumes)</List.Item>
                  <List.Item>Socioeconomic Status (e.g., income, education)</List.Item>
                </List>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>
                  Lung function as measured by Forced Expiratory Volume in one second (FEV1), a common marker of lung health.
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Effect Size Measure used in the Analytical Approach</Text>
              <Text>
                A multiple linear regression model is used to examine the relationship between smoking status and lung function (FEV1), while controlling for potential confounding variables. LS Means are calculated for each smoking status group (Non-Smokers, Current Smokers, Former Smokers) to estimate the adjusted means of FEV1, considering the influence of age, gender, BMI, occupational exposure, and socioeconomic status. 95% confidence intervals (CIs) are reported around the LS Means, indicating precise estimates.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Minimal Clinically Important Difference</Text>
              <Text>
                In general, a difference in FEV1 of at least 150 milliliters (0.15 liters) or more has been suggested as a clinically meaningful difference.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate</Text>
              <Text>The study reports the following LS Means for FEV1, along with 95% CIs:</Text>
              <List spacing={2}>
                <List.Item>Non-Smokers: LS Mean FEV1 = 2.94 L (95% CI [2.92, 2.96])</List.Item>
                <List.Item>Former Smokers: LS Mean FEV1 = 2.78 L (95% CI [2.77, 2.79])</List.Item>
                <List.Item>Current Smokers: LS Mean FEV1 = 2.60 L (95% CI [2.58, 2.62])</List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval</Text>
              <Text>The confidence intervals are quite narrow, indicating precise estimates.</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <Text>
                Non-Smokers have the highest adjusted LS Mean FEV1 (2.94 L) followed by Former Smokers (2.78 L). Current Smokers have the lowest adjusted LS Mean FEV1 (2.60 L). The differences between Non-Smokers and Former Smokers (0.16 L) and Former Smokers and Current Smokers (0.18 L) are considered clinically meaningful.
              </Text>
              <Text>
                These LS Means are adjusted for potential confounding variables.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results</Text>
              <Text>
                Controlling for confounding variables in the analysis enables the researcher to estimate the true impact of smoking on lung function, independent of factors such as age, gender, BMI, occupational exposure, and socioeconomic status. The precise LS Means (as demonstrated by the narrow CIs) enhance the reliability of the estimates, providing more confidence in the observed associations and their clinical significance.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <Text>
                Future studies could include longitudinal follow-up to assess the trajectory of lung function decline in smokers over several decades, a comparative analysis of various smoking patterns, including intensity and duration, an exploration of behavioral and psychosocial factors, and an investigation of genetic factors that may influence individual susceptibility to lung function decline due to smoking.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

Example2.title = "Impact of Cigarette Smoking on Lung Function in Middle-Aged Adults";

export default Example2;

