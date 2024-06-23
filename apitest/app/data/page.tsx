import Image from "next/image";
import * as React from "react"

const FData = async ({params}:{params:{id:string}})=>{
  const data = await fetch('https://fakestoreapi.com/products/${params.id}');
  const response = await data.json();
  return response;
}

export default FData;