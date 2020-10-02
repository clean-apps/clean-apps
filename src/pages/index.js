import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ValueProp from "../components/ValueProp";
import ProductApps from "../components/ProductApps";
import ProductFeatures from "../components/ProductFeatures";
import CallToAction from "../components/CallToAction";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ValueProp />
    <ProductApps />
    <ProductFeatures />
    <CallToAction />
  </Layout>
);

export default IndexPage;
