import {
  Title,
  Container,
  Text,
  UnstyledButton,
  Overlay,
  SimpleGrid,
} from "@mantine/core";
import classes from "./Categories.module.css";

export default function Categories({ categories }) {
  const items = categories.map((category) => (
    <UnstyledButton
      style={{ backgroundImage: `url(${category.image})` }}
      className={classes.categoryCard}
      key={category.label}
    >
      <Overlay color="#000" opacity={0.6} zIndex={1} />
      <Text size="xl" ta="center" fw={700} className={classes.categoryLabel}>
        {category.label}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Container className={classes.wrapper} size="lg">
      <SimpleGrid cols={{ base: 1, sm: 3 }}>{items}</SimpleGrid>
    </Container>
  );
}
