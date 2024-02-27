"use client";
import { useState, useContext } from "react";
// コンテキストをimport
import { FileDataContext } from "@/components/providers/FileData";
import MyFile from "../components/myfile";

export default function Home() {
  // useContextの引数に参照するContextをしていする
  const contextValue = useContext(FileDataContext);
  console.log(contextValue);
  const [data, setData] = useState();
  return (
    <main>
      <h1>Home</h1>
      <div>
        <button>ファイル読み込み</button>
        <button>sample</button>
      </div>
      <MyFile></MyFile>
      <div>{data}</div>
    </main>
  );
}
