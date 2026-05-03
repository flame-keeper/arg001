import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import "./App.css";

// 型定義（以前作成したもの）
type SearchResponse = {
	success: boolean;
	results: { url: string }[];
	message?: string;
};

export const Route = createFileRoute("/")({
	component: Index,
});

export function Index() {
	// inputの値を React の状態として管理する
	const [keyword, setKeyword] = useState("");
	const [results, setResults] = useState<SearchResponse | null>(null);

	const handleSearch = async () => {
		if (!keyword) return;

		// ✅ ポイント1: URLSearchParams には「キー(q)」と「値(keyword)」をセットで渡す
		const params = new URLSearchParams({ q: keyword });

		// ✅ ポイント2: search の後のスラッシュの有無を Hono 側と合わせる
		// 恐らくサーバー側は /api/search なので、/api/search?q=... にする
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
		<div className="p-2">
			<>
				<h1>検索テスト</h1>
				<div className="card">
					<input
						type="text"
						value={keyword}
						onChange={(e) => setKeyword(e.target.value)} // 入力されたら state を更新
						placeholder="日本,山"
					/>
					<button onClick={handleSearch} aria-label="click">
						Click
					</button>

					{/* ✅ ポイント3: 結果の表示。オブジェクトをそのまま出すと React は死ぬので注意 */}
					<div style={{ marginTop: "20px", textAlign: "left" }}>
						{results?.success ? (
							results.results.length > 0 ? (
								<ul>
									{results.results.map((r, i) => (
										<li key={i}>
											<a href={r.url} target="_blank" rel="noreferrer">
												{r.url}
											</a>
										</li>
									))}
								</ul>
							) : (
								<p>該当なし</p>
							)
						) : (
							results?.message && (
								<p style={{ color: "red" }}>{results.message}</p>
							)
						)}
					</div>
				</div>
			</>
		</div>
	);
}
