// @ts-nocheck
import { useState, useEffect } from "react";
import {
  Stack,
  Title,
  Button,
  Group,
  Progress,
  Card,
  Modal,
  Divider
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import rootTree from "../assets/rootTree";
import { ROOT } from "../assets/ids.tsx";
import ChoiceCard from "../components/ChoiceCard";
import { Link } from "react-router";
import { useParams } from "react-router";
import { findLongestPath, findPreviousSteps } from "../utils";

const buttonProps = {
  variant: "subtle",
  color: "gray",
  tt: "uppercase" as const,
};

const StepperWrapper = () => {
  const [progress, setProgress] = useState(0);
  const { step: currentStep } = useParams();
  const [path, setPath] = useState<string[]>([]);
  const [currentlySelectedChoice, setCurrentlySelectedChoice] =
    useState<string>();
  const [currentConfig, setCurrentConfig] = useState(
    rootTree[currentStep || ROOT]
  );
  const [examples, setExamples] = useState([]);
  const [selectedExample, setSelectedExample] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const effectiveStep = Object.keys(rootTree).includes(currentStep)
      ? currentStep
      : ROOT;

    // When url param is available, initialize the current step and path sequence

    const current = rootTree[effectiveStep];
    const path = current.inputs.length
      ? findPreviousSteps(current.inputs[0])
      : [];

    setCurrentlySelectedChoice(undefined);
    setCurrentConfig(current);
    setPath(path);
    setSelectedExample(null);
    setModalOpened(false);

    // Set examples if available
    setExamples(current.examples || []);

    // Calculate progress
    const longestNextPath = findLongestPath(effectiveStep, rootTree) - 1;
    const totalPathLength = longestNextPath + path.length;
    const pathDoneSoFar = path.length;
    setProgress((pathDoneSoFar / totalPathLength) * 100);
  }, [currentStep]);

  // can be either Back, Back To Intro
  function getBackButton() {
    // Back
    if (path.length > 0) {
      return (
        <Link to={`/decision-tree/${path[path.length - 1]}`}>
          <Button {...buttonProps}>Back</Button>
        </Link>
      );
    }

    return (
      // Back to Intro
      <Link to={{ pathname: "/intro" }}>
        <Button {...buttonProps}>Back to intro</Button>
      </Link>
    );
  }

  // can be either Next, Continue, or Start Over
  function getForwardButton() {
    if (currentConfig.choices) {
      return (
        <Link to={`/decision-tree/${currentlySelectedChoice}`}>
          <Button {...buttonProps} disabled={!currentlySelectedChoice}>
            Next
          </Button>
        </Link>
      );
    }

    if (
      !currentConfig.choices && // if no configured choices
      !currentConfig.next // if no configured next step
    ) {
      return (
        <Link to="/decision-tree">
          <Button {...buttonProps}>Start over</Button>
        </Link>
      );
    }

    if (currentConfig.type === "statement" && currentConfig.next) {
      return (
        <Link to={`/decision-tree/${currentConfig.next}`}>
          <Button {...buttonProps}>Continue</Button>
        </Link>
      );
    }
  }

  if (!currentConfig) return;

  return (
    <Card
      shadow="sm"
      padding="lg"
      my={{ base: "lg", md: "48px" }}
      w="100%"
      radius="md"
      withBorder
    >
      <Card.Section pb="md">
        <Progress value={progress} w="100%" radius={0} />
      </Card.Section>
      <Group justify="center" w="100%">
        <Stack w="100%">
          <Group justify="space-between" w="100%" align="center">
            <Title order={4}>{currentConfig.title}</Title>
            {examples.length > 0 && (
              <Group gap="xs">
                {examples.map((ExampleComponent, index) => (
                  <Button
                    key={index}
                    size="xs"
                    variant="outline"
                    onClick={() => {
                      setSelectedExample({
                        component: ExampleComponent,
                        index: index + 1,
                      });
                      setModalOpened(true);
                    }}
                  >
                    Example
                    {index > 0 || examples.length > 1 ? ` #${index + 1}` : ""}
                  </Button>
                ))}
              </Group>
            )}
          </Group>
          <DynamicComponent component={currentConfig.component} />
          {currentConfig?.choices ? (
            (() => {
              // Group choices by group field if present
              const groupedChoices = currentConfig.choices.reduce(
                (acc, choice) => {
                  const group = choice.group || "default";
                  if (!acc[group]) {
                    acc[group] = [];
                  }
                  acc[group].push(choice);
                  return acc;
                },
                {} as Record<string, typeof currentConfig.choices>
              );

              const hasGroups =
                Object.keys(groupedChoices).length > 1 ||
                (Object.keys(groupedChoices).length === 1 &&
                  Object.keys(groupedChoices)[0] !== "default");

              if (hasGroups) {
                return (

                  <Stack gap="lg">

                    {Object.entries(groupedChoices).map(([groupName, choices]) => (
                      <Stack key={groupName} gap="md">
                        <Divider mx={-20} />
                        <Title order={5} c="dimmed" fw={500}>
                          {groupName}
                        </Title>

                        <Group justify="center">
                          {choices.map((choice) => (
                            <ChoiceCard
                              key={choice.answer}
                              title={choice.answer}
                              description={choice.option_description}
                              isSelected={currentlySelectedChoice === choice.next}
                              onClick={() => {
                                setCurrentlySelectedChoice(choice.next);
                              }}
                            />
                          ))}
                        </Group>
                      </Stack>
                    ))}
                  </Stack>
                );
              } else {
                return (
                  <Group justify="center">
                    {currentConfig.choices.map((choice) => (
                      <ChoiceCard
                        key={choice.answer}
                        title={choice.answer}
                        description={choice.option_description}
                        isSelected={currentlySelectedChoice === choice.next}
                        onClick={() => {
                          setCurrentlySelectedChoice(choice.next);
                        }}
                      />
                    ))}
                  </Group>
                );
              }
            })()
          ) : null}
          <Group justify="space-between" w="100%">
            {getBackButton()}
            {getForwardButton()}
          </Group>
        </Stack>
      </Group>
      {selectedExample && (
        <Modal
          opened={modalOpened}
          styles={{
            close: { marginBottom: "auto" },
            title: {
              fontSize: 18,
              fontWeight: 500,
              lineHeight: 1.3,
              marginRight: 5,
            },
          }}
          onClose={() => {
            setModalOpened(false);
            setSelectedExample(null);
          }}
          title={
            selectedExample.component.title ||
            selectedExample.component.displayName ||
            `Example ${selectedExample.index}`
          }
          size={isMobile ? "100%" : 1200}
          fullScreen={isMobile}
        >
          <DynamicComponent component={selectedExample.component} />
        </Modal>
      )}
    </Card>
  );
};

function DynamicComponent(props) {
  const { component: Component, ...rest } = props;

  return <Component {...rest} />;
}

export default StepperWrapper;
