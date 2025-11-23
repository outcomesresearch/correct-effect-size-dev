import { Text, Stack, Tabs, List } from "@mantine/core";

function Example2() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
        Among adults with moderate acne vulgaris, does the application of
        benzoyl peroxide gel, salicylic acid, or topical retinoid result in a
        greater reduction in the number of inflammatory acne lesions?
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
              <Text>Randomized Controlled Trial (RCT)</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <Text>
                Adults with moderate acne vulgaris; recruited from a
                dermatological outpatient clinic in an academic medical center.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>
                  Type of acne treatment - benzoyl peroxide gel (n=18),
                  salicylic acid (n=13), topical retinoid (n=21)
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>
                  Reduction in the number of inflammatory acne lesions.
                </Text>
              </Stack>
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
                Glass&apos;s delta will be used to compare the difference in the
                mean number of inflammatory acne lesions among participants
                using benzoyl peroxide gel, salicylic acid, and topical
                retinoid.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Minimal Clinically Important Difference (MCID)
              </Text>
              <Text>
                The MCID was determined pre-study by an expert panel of
                dermatologists and is a difference of 1 or greater in the mean
                number of inflammatory acne lesions.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Text fw={500}>
              Values represent the mean (±SD) number of inflammatory acne
              lesions
            </Text>

            <Stack gap={0}>
              <Text fw={500}>Benzoyl Peroxide vs Salicylic Acid</Text>
              <List spacing={2}>
                <List.Item>Benzoyl peroxide gel: 5.7 (±0.6)</List.Item>
                <List.Item>Salicylic acid: 5.9 (±0.9)</List.Item>
                <List.Item>
                  Mean difference: 0.2 (95% CI: -0.39 to 0.79)
                </List.Item>
                <List.Item>
                  Probability value (
                  <Text span fs="italic">
                    p
                  </Text>
                  -value): 0.464
                </List.Item>
                <List.Item>Effect Size: Glass&apos; ∆ 0.33</List.Item>
                <List.Item>95% Confidence Interval: -0.98 to 0.46</List.Item>
              </List>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Benzoyl Peroxide vs Topical Retinoid</Text>
              <List spacing={2}>
                <List.Item>Benzoyl peroxide gel: 5.7 (±0.6)</List.Item>
                <List.Item>Topical Retinoid: 4.9 (±0.9)</List.Item>
                <List.Item>
                  Mean difference: 0.8 (95% CI: 0.29 to 1.30)
                </List.Item>
                <List.Item>
                  Probability value (
                  <Text span fs="italic">
                    p
                  </Text>
                  -value): 0.002
                </List.Item>
                <List.Item>Point Estimate: Glass&apos; ∆ 1.33</List.Item>
                <List.Item>95% CI: 0.38 to 1.72</List.Item>
              </List>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Salicylic Acid vs Topical Retinoid</Text>
              <List spacing={2}>
                <List.Item>Salicylic acid: 5.9 (±0.9)</List.Item>
                <List.Item>Topical Retinoid: 4.9 (±0.9)</List.Item>
                <List.Item>
                  Mean Difference: 1.0 (95% CI 0.35 to 1.65)
                </List.Item>
                <List.Item>
                  Probability value (
                  <Text span fs="italic">
                    p
                  </Text>
                  -value): 0.004
                </List.Item>
                <List.Item>Point Estimate: Glass&apos; ∆ 1.11</List.Item>
                <List.Item>95% CI: 0.39 to 1.83</List.Item>
              </List>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <Text>
                <Text span fw={500}>
                  Benzoyl Peroxide vs Salicylic Acid:
                </Text>{" "}
                The mean difference of 0.2 and Glass&apos;s Delta of 0.33
                indicate a small difference in the change in the number of
                inflammatory acne lesions based on treatment. However, the wide
                95% confidence interval (-0.39 to 0.79) suggests that the
                observed result from this study provides an imprecise estimate
                of the true difference.
              </Text>
              <Text>
                The upper bound of the 95% confidence interval for the
                difference in inflammatory lesions is 0.79, which is below the
                minimal clinically important difference (MCID) of 1 or greater
                acne lesions.
              </Text>
              <Text>
                With a{" "}
                <Text span fs="italic">
                  p
                </Text>
                -value of 0.464, there is a high probability that the observed
                mean difference of 0.2 is not significantly different from 0,
                assuming no actual difference. Therefore, the difference between
                the two treatments is considered &quot;not significant&quot;
                using a commonly used significance level of 0.05.
              </Text>
              <Text>
                <Text span fw={500}>
                  Benzoyl Peroxide vs Topical Retinoid:
                </Text>{" "}
                The mean difference of 0.8 and Glass&apos;s Delta of 1.33
                indicate a very large difference in the number of inflammatory
                acne lesions based on treatment. However, the wide 95%
                confidence interval (0.29 to 1.30) shows imprecision in
                estimating the true difference. Importantly, the upper bound of
                the 95% confidence interval exceeds the threshold value of 1 for
                minimal clinically important difference (MCID), suggesting that
                clinically meaningful differences may be present.
              </Text>
              <Text>
                With a{" "}
                <Text span fs="italic">
                  p
                </Text>
                -value of 0.002, there is a low probability that the observed
                mean difference of 0.8 is due to chance alone, assuming no
                actual difference. Therefore, the difference is considered
                &quot;significant&quot; using a commonly used significance level
                of 0.05.
              </Text>
              <Text>
                <Text span fw={500}>
                  Salicylic Acid vs Topical Retinoid:
                </Text>{" "}
                The mean difference of 1.0 and Glass&apos;s Delta of 1.11
                suggest a very large difference in the number of inflammatory
                acne lesions based on treatment. However, the wide 95%
                confidence interval (0.35 to 1.65) shows imprecision in
                estimating the true difference. It is important to note that the
                wide range of the confidence interval encompasses both
                clinically meaningful and meaningless values. Although the
                observed result indicates a substantial difference and includes
                clinically meaningful differences in its plausible range, the
                imprecise estimate arising from the wide confidence interval
                introduces uncertainty.
              </Text>
              <Text>
                The{" "}
                <Text span fs="italic">
                  p
                </Text>
                -value of 0.004 indicates a low probability that the observed
                mean difference of 1.0 is due to chance alone, assuming no
                actual difference. This classifies the difference as
                &quot;significant&quot; using a commonly used significance level
                of 0.05.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implication of Results</Text>
              <Text>
                <Text span fw={500}>
                  Benzoyl Peroxide vs Salicylic Acid:
                </Text>{" "}
                Based on these findings, the investigators conclude that there
                is only a minor difference between benzoyl peroxide gel and
                salicylic acid in reducing inflammatory acne lesions and that
                this difference is not clinically meaningful. However, due to
                imprecise estimates, the exact magnitude of the difference
                cannot be determined from this study.
              </Text>
              <Text>
                <Text span fw={500}>
                  Benzoyl Peroxide vs Topical Retinoid:
                </Text>{" "}
                This study is indeterminate due to the imprecision of the
                results, which prevents the investigator from reaching a
                definitive conclusion. The 95% confidence interval includes a
                range of values that encompass both clinically meaningful and
                meaningless differences.
              </Text>
              <Text>
                <Text span fw={500}>
                  Salicylic Acid vs Topical Retinoid:
                </Text>{" "}
                Despite the &quot;statistically significant&quot; finding, this
                study is still considered indeterminate due to the imprecision
                of the results. The wide confidence interval prevents the
                investigator from reaching a definitive conclusion. Within the
                plausible range defined by the 95% confidence interval, both
                clinically meaningful and meaningless differences exist.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <Text>
                <Text span fw={500}>
                  Benzoyl Peroxide vs Salicylic Acid:
                </Text>{" "}
                Given the small difference in the number of inflammatory lesions
                between the two treatments and the fact that the range of the
                confidence interval rules out a clinically meaningful
                difference, additional studies with these two drugs may not be
                warranted.
              </Text>
              <Text>
                <Text span fw={500}>
                  Benzoyl Peroxide vs Topical Retinoid:
                </Text>{" "}
                Since these results demonstrate a large reduction in the number
                of inflammatory acne lesions with topical retinoid, but a wide
                confidence interval with an imprecise estimate, additional
                studies with a larger sample size and adherence to strict
                research methodology to reduce systematic bias seem warranted.
              </Text>
              <Text>
                <Text span fw={500}>
                  Salicylic Acid vs Topical Retinoid:
                </Text>{" "}
                Since these results demonstrate a large reduction in the number
                of inflammatory acne lesions with topical retinoid, but a wide
                confidence interval with an imprecise estimate, additional
                studies with a larger sample size and adherence to strict
                research methodology to reduce systematic bias seem warranted.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

Example2.title =
  "Efficiency of Benzoyl Peroxide Gel, Salicylic Acid, and Topical Retinoid in Reducing Inflammatory Acne Lesions: An RCT Perspective on Treatment Outcomes";

export default Example2;
