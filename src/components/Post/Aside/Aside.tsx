import React, { FC } from "react";

import { graphql } from "gatsby";

import * as styles from "./Aside.module.scss";

interface AsideProps {
  subTitle: string;
}

const Aside: FC<AsideProps> = ({subTitle}) => (
  <div>
    <h1>目錄</h1>
    <div>
      <ul>
        <li>{subTitle}</li>
      </ul>
    </div>
  </div>
);

// 搜尋子句
// export const query = graphql`
//   query siteMetadata {
//     subtitle
//   }
// `;

export default Aside;
