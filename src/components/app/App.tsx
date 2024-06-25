import * as React from "react";
import Auth from "../../app/auth/auth";

export interface IAppProps {}

export default function AppComponent(props: IAppProps) {
  return (
    <div>
      <Auth></Auth>
    </div>
  );
}
