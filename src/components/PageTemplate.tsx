import { Container, Header } from "semantic-ui-react";
import { PageTemplateProps } from "../@types/types";

export const PageTemplate = ({ children, title }: PageTemplateProps) => {
  return (
    <Container content fluid>
      <Header textAlign="center" color="blue" as="h1">
        {title}
      </Header>

      {children}
    </Container>
  );
};
