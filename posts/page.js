"use client";
import { useEffect, useState } from "react";

export async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data
}

export default async function Posts({ posts }) {
    const mappingData = await getData()
  return (
    <>
      <h1>This is Posts</h1>
      {mappingData?.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </>
  );
}
