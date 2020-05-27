import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import Card from "./Card";
import Content from "./Content";
function App() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <Body />
      <br />
      <br />
      <Card className={"styles.Card"} />
      <br />
      <br />
      <Content />
      <br />
      <br />
      <Footer />
    </div>
  );
}
export default App;
