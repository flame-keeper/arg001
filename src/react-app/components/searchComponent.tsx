import { useState } from "react";

// 型定義
type SearchResponse = {
  success: boolean;
  results: { url: string }[];
  message?: string;
};



export function SearchComponent() {
  // inputの値を React の状態として管理する
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState<SearchResponse | null>(null);

  const handleSearch = async () => {
    if (!keyword) return;
    const params = new URLSearchParams({ q: keyword });
    const url = `/api/search?${params.toString()}`;

    try {
      const res = await fetch(url);
      const data = (await res.json()) as SearchResponse;
      setResults(data);
    } catch (e) {
      console.error("通信失敗", e);
    }
  };
  return (
    <div className="card">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)} // 入力されたら state を更新
        placeholder="日本,山"
      />
      <button type="button" onClick={handleSearch} aria-label="click">
        Click
      </button>

      {/* ✅ ポイント3: 結果の表示。オブジェクトをそのまま出すと React は死ぬので注意 */}
      <div style={{ marginTop: "20px", textAlign: "left" }}>
        {results?.success
          ? (
            results.results.length > 0
              ? (
                <ul>
                  {results.results.map((r, i) => (
                    <li key={i}>
                      <a href={r.url} target="_blank" rel="noreferrer">
                        {r.url}
                      </a>
                    </li>
                  ))}
                </ul>
              )
              : <p>該当なし</p>
          )
          : (
            results?.message && (
              <p style={{ color: "red" }}>{results.message}</p>
            )
          )}
      </div>
    </div>
  );
}
