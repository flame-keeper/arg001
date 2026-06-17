import { atom, useAtom } from "jotai";

type SearchResponse = {
  success: boolean;
  results: { url: string }[];
  message?: string;
};

const visibilityAtom = atom(false);
const keywordAtom = atom("");
const resultsAtom = atom<SearchResponse | null>(null);

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ResultsList() {
  const [, setvisible] = useAtom(visibilityAtom);
  const [results, setResults] = useAtom(resultsAtom);

  return (
    <div
      className="absolute right-0 top-[calc(100%+12px)] w-80 md:w-96 bg-white rounded-hero shadow-elevated px-6 py-5 z-50"
      role="dialog"
      aria-label="検索結果"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="heading-card m-0 text-lg">検索結果</h2>
        <button
          type="button"
          className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-ink/20 bg-transparent text-ink cursor-pointer hover:bg-canvas transition-colors"
          onClick={() => {
            setResults(null);
            setvisible(false);
          }}
          aria-label="閉じる"
        >
          ×
        </button>
      </div>
      <ul className="list-none m-0 p-0 space-y-2">
        {results?.success
          ? (
            results.results.length > 0
              ? (
                results.results.map((r, i) => (
                  <li key={i}>
                    <a
                      className="text-link-blue text-sm break-all hover:underline"
                      href={r.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {r.url}
                    </a>
                  </li>
                ))
              )
              : <li className="text-slate text-sm">該当なし</li>
          )
          : (
            results?.message && (
              <li className="text-signal-orange text-sm">{results.message}</li>
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
    <div className="relative">
      <div className="flex items-center gap-2 bg-white border border-ink/50 rounded-pill pl-4 pr-1.5 py-1.5 min-w-[200px] md:min-w-[260px]">
        <span className="text-ink shrink-0" aria-hidden="true">
          <SearchIcon />
        </span>
        <input
          id="search-input"
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="検索"
          tabIndex={0}
          className="flex-1 min-w-0 bg-transparent border-0 outline-none text-base text-ink placeholder:text-dust-taupe font-normal"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button
          type="button"
          className="btn-primary shrink-0 text-sm px-5 py-1.5"
          onClick={handleSearch}
          aria-label="click"
        >
          検索
        </button>
      </div>
      {visible && <ResultsList />}
    </div>
  );
}
