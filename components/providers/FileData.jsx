"use client";
import { createContext } from "react";

// Contextの器を作成。createContextの引数にはデフォルト値を設定できる。（とりあえず、空のオブジェクト）
export const FileDataContext = createContext({});

export const FileDataProvider = (props) => {
  const { children } = props; // propsからプロパティchildrenをchildrenに分割代入

  // 動作確認の為適当なオブジェクト作成
  const sampleObj = {
    sampleValue: "テスト",
  };
  // FileDataContextの中にProviderがあるので、それでchildrenを囲む
  // valueの中にグローバルに扱いたい値を設定
  return (
    <FileDataContext.Provider value={sampleObj}>
      {children}
    </FileDataContext.Provider>
  );
};
