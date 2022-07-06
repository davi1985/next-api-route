import Head from "next/head";
import { Card, CardGroup, GridColumn, Icon, Image } from "semantic-ui-react";
import { UsersProps } from "../@types/types";
import { PageTemplate } from "./PageTemplate";

export const Users = ({ users }: UsersProps) => {
  return (
    <PageTemplate title="Users">
      <Head>
        <title>Users</title>
      </Head>

      <CardGroup CardGroup centered>
        {users.map((user) => (
          <Card key={user.id} style={{ padding: "1rem" }}>
            <Card.Content>
              <Card.Header
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1rem",
                }}
              >
                <Image
                  src={user.thumbnailUrl}
                  bordered
                  avatar
                  ui={true}
                  alt=""
                />
                <p>{user.name}</p>
              </Card.Header>

              <Card.Description>
                <span>CellPhone: {user.phone}</span>
              </Card.Description>
              <Card.Description>
                <span>Email: {user.email}</span>
              </Card.Description>
            </Card.Content>

            <Card.Content extra>
              <a>
                <Icon name="share square outline" />
                {user.website}
              </a>
            </Card.Content>
          </Card>
        ))}
      </CardGroup>
    </PageTemplate>
  );
};
