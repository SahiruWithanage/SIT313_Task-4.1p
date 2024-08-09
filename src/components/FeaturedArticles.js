import React from "react";
import { Card, Image, Container, Header, Rating } from "semantic-ui-react";

const articles = [
  {
    title: "Article's Name",
    description: "React OR Vue",
    imageUrl: "https://picsum.photos/200?random=1",
    rating: 5,
    author: "Author 1",
  },
  {
    title: "Article's Name",
    description: "NodeJS",
    imageUrl: "https://picsum.photos/200?random=2",
    rating: 5,
    author: "Author 2",
  },
  {
    title: "Article's Name",
    description: "React Hooks",
    imageUrl: "https://picsum.photos/200?random=3",
    rating: 5,
    author: "Author 3",
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

const FeaturedArticles = () => (
  <Container>
    <Header as="h2" style={{ marginTop: "2em", textAlign: "center" }}>
      Featured Articles
    </Header>
    <Card.Group itemsPerRow={3}>
      {articles.map((article, index) => (
        <Card
          key={index}
          style={{ boxShadow: "none", border: "1px solid #000" }}
        >
          <Image src={article.imageUrl} style={{ padding: "1em" }} />
          <Card.Content>
            <Card.Header style={{ fontFamily: "monospace" }}>
              {article.title}
            </Card.Header>
            <Card.Meta style={{ fontFamily: "monospace" }}>
              <span>Description __________</span>
              <br />
              <span style={{ color: "#999" }}>e.g., {article.description}</span>
            </Card.Meta>
            <Card.Description>
              <Rating
                icon="star"
                defaultRating={article.rating}
                maxRating={5}
                disabled
              />
              <span style={{ marginLeft: "0.5em" }}>{article.rating}</span>
              <span style={{ marginLeft: "1em", fontFamily: "monospace" }}>
                {article.author}
              </span>
            </Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
    <Container textAlign="center" style={{ marginTop: "1em" }}>
      <button style={buttonStyle}>See all articles</button>
    </Container>
  </Container>
);

export default FeaturedArticles;
