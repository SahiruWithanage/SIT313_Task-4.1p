import React from "react";
import { Card, Image, Container, Header, Rating } from "semantic-ui-react";

const tutorials = [
  {
    title: "Tutorial's Name",
    description: "JS6",
    imageUrl: "https://picsum.photos/200?random=4",
    rating: 5,
    username: "username1",
  },
  {
    title: "Tutorial's Name",
    description: "React Router",
    imageUrl: "https://picsum.photos/200?random=5",
    rating: 5,
    username: "username2",
  },
  {
    title: "Tutorial's Name",
    description: "Express",
    imageUrl: "https://picsum.photos/200?random=6",
    rating: 4.9,
    username: "username3",
  },
];

const buttonStyle = {
  backgroundColor: "#b3b3b3",
  border: "none",
  borderRadius: "20px",
  padding: "10px 20px",
  cursor: "pointer",
  fontFamily: "monospace",
};

const Tutorials = () => (
  <Container>
    <Header as="h2" style={{ marginTop: "2em", textAlign: "center" }}>
      Featured Tutorials
    </Header>
    <Card.Group itemsPerRow={3}>
      {tutorials.map((tutorial, index) => (
        <Card
          key={index}
          style={{ boxShadow: "none", border: "1px solid #000" }}
        >
          <Image src={tutorial.imageUrl} style={{ padding: "1em" }} />
          <Card.Content>
            <Card.Header style={{ fontFamily: "monospace" }}>
              {tutorial.title}
            </Card.Header>
            <Card.Meta style={{ fontFamily: "monospace" }}>
              <span>Description __________</span>
              <br />
              <span style={{ color: "#999" }}>
                e.g., {tutorial.description}
              </span>
            </Card.Meta>
            <Card.Description>
              <Rating
                icon="star"
                defaultRating={tutorial.rating}
                maxRating={5}
                disabled
              />
              <span style={{ marginLeft: "0.5em" }}>{tutorial.rating}</span>
              <span style={{ marginLeft: "1em", fontFamily: "monospace" }}>
                {tutorial.username}
              </span>
            </Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
    <Container
      textAlign="center"
      style={{ marginTop: "1em", marginBottom: "5em" }}
    >
      <button style={buttonStyle}>See all tutorials</button>
    </Container>
  </Container>
);

export default Tutorials;
