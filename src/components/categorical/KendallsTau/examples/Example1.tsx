import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={'italic'} mt={0}>
        In patients with psoriasis, what is the comparative efficacy and impact on patient-reported outcomes of topical corticosteroids, phototherapy (UVB Therapy), and systemic biologic medications?
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
              <Text>Randomized clinical trial</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <Text>
                Patients with psoriasis recruited from dermatology clinics or specialized research centers in a large Midwestern city. Participants were identified through clinic referrals, dermatology department databases, and community outreach. Inclusion criteria include adults aged 18-75 years with moderate to severe plaque psoriasis, stable disease for at least 3 months, and willingness to undergo treatment for the study duration. Exclusion criteria include pregnancy, active malignancy, uncontrolled infections, previous biologic therapy within 6 months, and contraindications to any of the study treatments.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>
                  Three different treatment modalities: Group A received topical corticosteroids, Group B received phototherapy (UVB therapy), and Group C received systemic biologic medications.
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>
                  Dermatology Life Quality Index (DLQI). The DLQI is a validated questionnaire that evaluates the impact of a skin condition on a patient&apos;s quality of life. It assesses aspects such as symptoms and feelings, daily activities, leisure, work/education, personal relationships, and treatment burden.
                </Text>
                <Text>
                  The total DLQI score ranges from 0 to 30, representing an ordinal scale. The higher the score, the greater the impact of the skin condition on the patient&apos;s quality of life.
                </Text>
                <Text>Interpretation of DLQI scores:</Text>
                <List spacing={2}>
                  <List.Item>0-1: No effect on the patient&apos;s life</List.Item>
                  <List.Item>2-5: Small impact on the patient&apos;s life</List.Item>
                  <List.Item>6-10: Moderate impact on the patient&apos;s life</List.Item>
                  <List.Item>11-20: Huge effect on the patient&apos;s life</List.Item>
                  <List.Item>21-30: Huge impact on the patient&apos;s life</List.Item>
                </List>
              </Stack>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Effect Size Measure used in the Analytical Approach:</Text>
              <Text>
                Kendall&apos;s Tau (τ) is used to assess the strength and direction of the association between treatment group and change in DLQI scores. Kendall&apos;s Tau (τ) is a non-parametric correlation coefficient used to quantify the strength and direction of the relationship between two ordinal or ranked variables. Specifically, it measures the degree of concordance or discordance between two variables. It is beneficial when dealing with data that has ranks or categories, but the intervals between the ranks are not meaningful.
              </Text>
              <Text>
                Kendall&apos;s Tau ranges from -1 to +1. The sign of the coefficient indicates the direction of the relationship, while the magnitude indicates the strength of the relationship. A positive τ (0 to +1) indicates a positive association between the variables, where as the values of one variable increase, the ranks of the other variable tend to increase as well. A negative τ (0 to -1) indicates a negative association between the variables, where as the values of one variable increase, the ranks of the other variable tend to decrease.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Minimal Clinically Important Difference (MCID):</Text>
              <Text>
                The MCID for DLQI is a difference in score of 4 or greater.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Average change in DLQI scores (within subject pre- to post-intervention):</Text>
              <List spacing={2}>
                <List.Item>Group A (Topical corticosteroids): 3-point reduction</List.Item>
                <List.Item>Group B (Phototherapy UVB): 7-point reduction</List.Item>
                <List.Item>Group C (Systemic biologic medications): 9-point reduction</List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>
                Kendall&apos;s Tau (τ) = 0.49, indicating a moderate positive association between treatment group and improvement in DLQI scores.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>
                95% CI [0.40, 0.59], demonstrating a precise estimate of the actual value for tau.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Probability Value (<Text span fs="italic">P</Text>-value):</Text>
              <Text><Text span fs="italic">p</Text> &lt; 0.001, indicating a statistically significant association.</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results:</Text>
              <Text>
                The Kendall&apos;s Tau value of 0.49 indicates a moderate positive association between the treatment group and the change in DLQI scores. This suggests a meaningful ordered relationship between the type of treatment received and the degree of improvement in quality of life, with more intensive therapies generally associated with greater improvements.
              </Text>
              <Text>
                The 95% confidence interval (0.40 to 0.59) demonstrates a precise estimate of the actual value for tau, with the entire interval falling within the moderate association range. This narrow confidence interval provides confidence that the actual effect size is indeed in the moderate range.
              </Text>
              <Text>
                Examining the average changes in DLQI scores reveals a clear pattern: Group C (systemic biologic medications) achieved the greatest improvement with a 9-point reduction, Group B (phototherapy UVB) achieved a 7-point reduction, and Group A (topical corticosteroids) achieved the smallest improvement with a 3-point reduction. Notably, only Groups B and C exceeded the MCID of 4 points, indicating that phototherapy and systemic biologics achieved clinically meaningful improvements in quality of life. At the same time, topical corticosteroids alone did not reach this threshold.
              </Text>
              <Text>
                The ordered nature of these improvements (Group A &lt; Group B &lt; Group C) supports the moderate positive Kendall&apos;s Tau value, indicating that treatment intensity is associated with greater quality of life improvements in psoriasis patients.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results:</Text>
              <Text>
                These findings suggest that there is a significant relationship between the treatment modality and the improvement in DLQI scores for psoriasis patients. The larger change in DLQI scores in Group C compared to Groups A and B indicates that systemic biologic medications may be the most effective treatment option among the three interventions studied for achieving clinically meaningful improvements in quality of life.
              </Text>
              <Text>
                However, considering the moderate association observed (τ = 0.49), it is essential to note that other factors, such as individual patient characteristics, disease severity, comorbidities, treatment adherence, and psychosocial factors, may also influence treatment outcomes. Treatment selection should consider not only efficacy but also factors such as cost, accessibility, safety profile, patient preferences, and practical considerations like frequency of administration and monitoring requirements.
              </Text>
              <Text>
                For patients with moderate to severe psoriasis, these results suggest a stepped approach may be appropriate: starting with topical corticosteroids for milder cases or as adjunctive therapy, progressing to phototherapy for patients requiring greater efficacy, and reserving systemic biologic medications for those needing the most substantial quality of life improvements or those who have failed other treatments. However, for patients with severe disease and significant quality of life impairment, earlier initiation of systemic biologics may be warranted given their superior efficacy.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Geographic generalizability:</Text> Increase the number of recruitment sites to include participants from across the entire country, not just the Midwest. This will enhance the generalizability of the findings across diverse populations, healthcare settings, and geographic regions with varying climate conditions that may affect psoriasis severity.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Long-term follow-up:</Text> Assess the long-term effects and sustainability of treatment outcomes over 1, 2, and 5 years. This would provide valuable insights into the durability of therapeutic responses, maintenance of quality of life improvements, relapse rates after treatment discontinuation, and long-term safety profiles.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Combination therapy investigations:</Text> Investigate the potential synergistic effects of combining treatments from different modalities (e.g., topical corticosteroids plus phototherapy, or phototherapy plus biologics). This may lead to improved therapeutic strategies that maximize efficacy while potentially reducing doses and costs.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Cost-effectiveness analysis:</Text> Conduct comprehensive economic evaluations comparing the cost-effectiveness of each treatment modality, considering direct medical costs, indirect costs (work productivity, quality-adjusted life years), and the value of quality of life improvements achieved.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Patient-reported outcomes expansion:</Text> Expand the assessment of patient-reported outcomes beyond DLQI to include other relevant measures such as the Psoriasis Area and Severity Index (PASI), pruritus severity scales, pain assessments, treatment satisfaction, adherence measures, and general health-related quality of life instruments. This would provide a more comprehensive understanding of treatment effectiveness.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Predictive biomarkers:</Text> Identify clinical, genetic, or biomarker predictors of treatment response to enable personalized treatment selection. This could include investigating whether baseline disease characteristics, inflammatory markers, genetic polymorphisms, or patient demographics predict differential responses to specific treatments.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Subgroup analyses:</Text> Conduct detailed subgroup analyses examining whether treatment effects vary by patient characteristics such as age, sex, body mass index, disease duration, baseline disease severity, presence of psoriatic arthritis, or comorbid conditions like metabolic syndrome or depression.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Safety and tolerability assessment:</Text> Systematically evaluate and compare the safety profiles, adverse event rates, and tolerability of the three treatment modalities to provide a balanced risk-benefit analysis for clinical decision-making.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Treatment sequencing studies:</Text> Investigate optimal treatment sequencing strategies, including when to escalate therapy, whether specific sequences are more effective than others, and how to manage patients who fail initial treatments.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Patient preference and shared decision-making:</Text> Explore patient preferences for different treatment modalities, considering factors such as treatment burden, route of administration, monitoring requirements, and lifestyle impacts. Develop decision aids to facilitate shared decision-making between patients and providers.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Mechanism of action studies:</Text> Investigate the biological mechanisms underlying the differential effectiveness of these treatments, including their effects on inflammatory pathways, immune cell populations, and skin barrier function, which could inform the development of novel therapeutic approaches.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Domain-specific analyses:</Text> Analyze which specific domains of the DLQI (symptoms, daily activities, leisure, work, personal relationships) are most improved by each treatment modality to understand better their differential impacts on various aspects of patients&apos; lives.
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

Example1.title = "Comparative Study of Topical Corticosteroids, Phototherapy, and Systemic Biologic Medications in the Treatment of Psoriasis: Assessing Efficacy and Patient-Reported Outcomes";

export default Example1;

