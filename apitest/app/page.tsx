import Image from "next/image";
import * as React from "react"
import FData from "./data/page";

export default function Home(){
  return(
    <div>
      <FData params={{id: "5"}}/>
    </div>
  )
}