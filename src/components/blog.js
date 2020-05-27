import React from "react";
import styled from "@emotion/styled";
import Header from "./header";
import Container from "./container"

const Site = (props) => {
  const Blog = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 100px auto auto;
    grid-template-areas:
      "header header header header"
      "main main main sidebar"
      "footer footer footer footer";
  `
  return (
    <Blog>
      <Header>
        <Container>
          <div className="logo-nav">
            <div className="logo">
              <img src="./images/logo.png" alt="computer-science-logo" />
            </div>
            <p className="title-blog">web development projects</p>
          </div>
          <nav className="navbar">
            <ul>
              <li>home</li>
              <li>about</li>
              <li>projects</li>
              <li>sign in</li>
              <li>sign up</li>
            </ul>
          </nav>
        </Container>
      </Header>
      <main>
        <section>
          <h2>These are all projects</h2>
          <div className="all-posts">
            <article>
              <div className="post">
                <p>post</p>
                <div>
                  <p>view post</p>
                </div>
              </div>
              <p>Title</p>
            </article>
          </div>
        </section>
      </main>

      <aside>
        <p>he</p>
      </aside>

      <footer>
        <p>this is my footer</p>
      </footer>
    </Blog>
  );
};
export default Site;
