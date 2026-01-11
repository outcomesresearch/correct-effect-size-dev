import { Text, List, Stack } from "@mantine/core";

export default function PseudoRSquared() {
  return (
    <Stack gap="lg">
      <Stack gap={4}>
        <Text>
          The pseudo R-squared (R²) measures the goodness-of-fit for models that
          do not inherently provide a traditional pseudo R² value, like logistic
          regression. Specifically, it provides an indication of how well the
          chosen model explains the variation in the response variable. While it
          borrows its name from the pseudo R² of linear regression, it is
          important to understand that these two values are not directly
          comparable.
        </Text>
      </Stack>
      <Stack gap={6}>
        <Stack gap={0}>
          <Text fw={500}>Range of pseudo R²</Text>
          <Text>
            Values for pseudo R² can range between 0 and 1, but the interpretation
            is not always as straightforward as that of the traditional R²:
          </Text>
        </Stack>
        <List spacing={2}>
          <List.Item>
            <Text>
              <Text span fw={500}>
                Closer to 1:
              </Text>{" "}
              This means that the model provides a better fit to the data as
              compared with a null model (i.e., a model without predictors). The
              closer the pseudo R² is to 1, the stronger the model&apos;s
              explanatory power.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <Text span fw={500}>
                Around 0.5:
              </Text>{" "}
              The model&apos;s fit is comparable to that of a null model, which
              suggests that the predictors in the model are not contributing much
              to explaining the variance in the dependent variable.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <Text span fw={500}>
                Closer to 0, but not 0:
              </Text>{" "}
              This implies that the model provides some explanatory power, but it
              may still be weak. It suggests that the predictors have some
              influence, but the overall fit is not strong.
            </Text>
          </List.Item>
        </List>
      </Stack>
      <Stack gap={6}>
        <Stack gap={0}>
          <Text fw={500}>Interpretation of pseudo R² values</Text>
          <Text>
            The interpretation of pseudo R² values between variables is as
            follows:
          </Text>
        </Stack>
        <List spacing={2}>
          <List.Item>
            <Text>
              <Text span fw={500}>
                &lt;0.10:
              </Text>{" "}
              Low. These values suggest a weak association between the predictors
              and the outcome. The predictors collectively explain a small
              proportion of the variance in the outcome.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <Text span fw={500}>
                0.10 to 0.30:
              </Text>{" "}
              Moderate. These values suggest that the predictors contribute a
              moderate proportion of the variance in the outcome.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <Text span fw={500}>
                &gt;0.30:
              </Text>{" "}
              High. These values suggest that the predictors collectively explain
              a substantial proportion of the variance in the outcome.
            </Text>
          </List.Item>
        </List>
        <Text mt={4}>
          Keep in mind that several versions of the pseudo R² exist (e.g.,
          McFadden&apos;s, Nagelkerke&apos;s).
        </Text>
      </Stack>
    </Stack>
  );
}
