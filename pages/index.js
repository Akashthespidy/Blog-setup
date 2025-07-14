import { Fragment } from "react/jsx-runtime";
import Hero from "../components/homePage/hero";
import Featureposts from "../components/homePage/featurePost";
export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Featureposts />
    </Fragment>
  );
}
