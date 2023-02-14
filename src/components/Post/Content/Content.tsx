import React from "react";

import { Aside } from "../Aside";

import * as styles from "./Content.module.scss";

interface Props {
  title: string;
  body: string;
}

const Content: React.FC<Props> = (props: Props) => {
  console.log(props)
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.body_box}>
        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        <Aside />
      </div>
    </div>
  );
}

export default Content;
