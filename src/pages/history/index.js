import React from "react";
import HistoryRoll from "../../components/HistoryRoll";

import Layout from "../../components/Layout";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <HistoryRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
