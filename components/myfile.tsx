export default function MyFile() {
  const getFile = (e: React.ChangeEvent<HTMLInputElement>): any => {
    const files = e.currentTarget.files;
    // ファイルが泣ければ終了
    if (!files || files.length === 0) return;
    // 先頭のファイルを取得
    const file = files[0];
    console.log(file);
  };
  return <input type="file" accept=".json" onChange={getFile} />;
}

function MyTable() {
  return (
    <div>
      <MyFile></MyFile>
      <table></table>
    </div>
  );
}
