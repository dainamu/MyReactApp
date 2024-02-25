"use client";
export default function Home() {
  async function fetchData() {
    try {
      const response = await fetch("file.json");
      const data = await response.json();
      console.log(data.title); // JSONデータをコンソールに出力
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchData();
  return (
    <main>
      <h1>Home</h1>
      <button>ファイル読み込み</button>
      <button>sample</button>
    </main>
  );
}
