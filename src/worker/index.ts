import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

const dataList = [
	{ keywords: ["日本", "山", "富士山"], url: "https://example.com/fuji" },
	{ keywords: ["日本", "海", "沖縄"], url: "https://example.com/okinawa" },
	{
		keywords: ["海外", "山", "エベレスト"],
		url: "https://example.com/everest",
	},
	{
		keywords: ["道"],
		url: "https://example.com/route",
	},
];

// https://developer.mozilla.org/ja/docs/Web/HTTP/Reference/Status

app.get("/api/search", (c) => {
	let queryRaw = c.req.query("q");
	if (!queryRaw) {
		return c.json({ success: false, message: "キーワードなし" }, 400);
	}
	queryRaw = queryRaw.replace(/=+$/, "");
	const searchWords = queryRaw.split(/[,\s　]+/).filter(Boolean); // 空文字を除去
	const results = dataList.filter((item) => {
		return searchWords.every((word) => item.keywords.includes(word));
	});

	return c.json({
		success: true,
		meta: { query: searchWords, total: results.length },
		results: results.map((r) => ({ url: r.url })),
	});
});
export default app;
