import * as React from "react";
import SigIn from "./sigin";

export interface IPageProps {}

export default function Page(props: IPageProps) {
  return (
    <div>
     <SigIn/>
    </div>
  );
}
