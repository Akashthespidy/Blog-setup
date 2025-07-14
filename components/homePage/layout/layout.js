import { Fragment } from "react/jsx-runtime";
import MainNavigation from "./mainNavigation";
export default function Layout(props) {
  return (
    <Fragment>
      <mainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
}
