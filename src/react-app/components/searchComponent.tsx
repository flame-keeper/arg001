import { atom, useAtom } from "jotai";

// 型定義
type SearchResponse = {
  success: boolean;
  results: { url: string }[];
  message?: string;
};

const visibilityAtom = atom(false);
const keywordAtom = atom("");
const resultsAtom = atom<SearchResponse | null>(null);

function ResultsList() {
  const [, setvisible] = useAtom(visibilityAtom);
  const [results, setResults] = useAtom(resultsAtom);
  return (
    <div className="border-rounded-lg bg-stone-300 bg-opacity-70 position-absolute px-2 py-2 w-80 top-8 position-right-0">
      <button
        type="button"
        onClick={() => {
          setResults(null);
          setvisible(false);
        }}
      >
        ×
      </button>
      <h1 className="m-0 mb-3 font-size-4 border border-b-1">検索結果</h1>
      <ul className="list-none m-0 p-0">
        {results?.success
          ? (
            results.results.length > 0
              ? (
                results.results.map((r, i) => (
                  <li key={i}>
                    <a
                      className="text-stone-900"
                      href={r.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {r.url}
                    </a>
                  </li>
                ))
              )
              : <li>該当なし</li>
          )
          : (
            results?.message && (
              <li style={{ color: "red" }}>{results.message}</li>
            )
          )}
      </ul>
    </div>
  );
}

export function SearchComponent() {
  const [visible, setvisible] = useAtom(visibilityAtom);
  const [keyword, setKeyword] = useAtom(keywordAtom);
  const [, setResults] = useAtom(resultsAtom);

  const handleSearch = async () => {
    if (!keyword) return;
    const params = new URLSearchParams({ q: keyword });
    const url = `/api/search?${params.toString()}`;

    try {
      const res = await fetch(url);
      const data = (await res.json()) as SearchResponse;
      setvisible(true);
      setResults(data);
    } catch (e) {
      console.error("通信失敗", e);
    }
  };

  return (
    <div className="card position-relative">
      <input
        id="search-input"
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)} // 入力されたら state を更新
        placeholder="検索"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button type="button" onClick={handleSearch} aria-label="click">
        Click
      </button>
      {visible && <ResultsList />}
    </div>
  );
}
