import { useState } from "react";
import {
  Text,
  Card,
  Title,
  useMantineTheme,
  Modal,
  Stack,
} from "@mantine/core";

const ChoiceCard = ({
  onClick,
  title,
  description,
  isSelected,
}: {
  onClick: () => void;
  title: string;
  description: string | { short: string; long: string };
  isSelected: boolean;
}) => {
  const theme = useMantineTheme();
  const [descriptionModalOpened, setDescriptionModalOpened] = useState(false);

  // If object: show short version, if string: show full description
  const multDescriptions = typeof description === "object";
  const displayDescription = multDescriptions ? description.short : description;
  const modalDescription = multDescriptions ? description.long : description;
  const hasLongDescription = multDescriptions && description.long;

  const handleReadMoreClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDescriptionModalOpened(true);
  };

  return (
    <>
      <Card
        variant="light"
        shadow="none"
        withBorder
        styles={{
          root: {
            borderColor: isSelected
              ? theme.colors.green[5]
              : theme.colors.gray[3],
          },
        }}
        color="gray"
        p="xs"
        maw={350}
        onClick={onClick}
        bg={isSelected ? "green.1" : "unset"}
      >
        <Title c={isSelected ? "green.9" : "gray.9"} order={5} fw={500}>
          {title}
        </Title>
        <Text
          c={isSelected ? "green.9" : "gray.9"}
          style={{ whiteSpace: "pre-wrap" }}
        >
          {displayDescription}
          {hasLongDescription && (
            <Text
              fs="italic"
              size="sm"
              component="span"
              c={isSelected ? "green.7" : "blue.6"}
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={handleReadMoreClick}
              ml={4}
            >
              (read more)
            </Text>
          )}
        </Text>
      </Card>
      <Modal
        opened={descriptionModalOpened}
        styles={{
          title: {
            fontSize: 18,
            fontWeight: 500,
            lineHeight: 1.3,
            marginRight: 5,
          },
        }}
        onClose={() => setDescriptionModalOpened(false)}
        title={title}
        size="md"
      >
        <Stack gap="xs">
          {modalDescription?.split("\n").map((line, index) => (
            <Text key={index}>{line}</Text>
          ))}
        </Stack>
      </Modal>
    </>
  );
};

export default ChoiceCard;
