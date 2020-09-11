import React from "react";
import { Button } from "semantic-ui-react";
import styles from "./homepage.module.css";

const Homepage: React.FC = () => {
  return (
    <div className={styles.background}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <text className={styles.title}>Justin's Blog</text>
          <Button size="huge" inverted>
            Explore
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
