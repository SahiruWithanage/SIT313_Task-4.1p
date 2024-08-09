import React from "react";
import { Container, Image } from "semantic-ui-react";
import Header from "./components/Header";
import FeaturedArticles from "./components/FeaturedArticles";
import Tutorials from "./components/Tutorials";
import SubsForm from "./components/SubscibeForm";
import Footer from "./components/Footer";

const App = () => (
  <Container>
    <Header />
    <Image
      src="https://picsum.photos/1200/400?random=7"
      style={{ marginTop: "2em", marginBottom: "2em" }}
    />
    <FeaturedArticles />
    <Tutorials />
    <SubsForm />
    <Footer />
  </Container>
);

export default App;
