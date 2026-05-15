import { expect, test, describe } from "vitest";
import app from "./index";

interface SearchResponse {
	success: boolean;
	meta?: {
		query: string[];
		total: number;
	};
	results?: { url: string }[];
	message?: string;
}

describe("Worker API", () => {
	test("GET /api/search with keywords", async () => {
		const res = await app.request("/api/search?q=日本,山");
		expect(res.status).toBe(200);
		const body = (await res.json()) as SearchResponse;
		expect(body.success).toBe(true);
		expect(body.results?.length).toBeGreaterThan(0);
	});

	test("GET /api/search without keywords", async () => {
		const res = await app.request("/api/search");
		expect(res.status).toBe(400);
		const body = (await res.json()) as SearchResponse;
		expect(body.success).toBe(false);
		expect(body.message).toBe("キーワードなし");
	});

	test("GET /api/search with multiple keywords (AND search)", async () => {
		const res = await app.request("/api/search?q=日本,海");
		expect(res.status).toBe(200);
		const body = (await res.json()) as SearchResponse;
		expect(body.success).toBe(true);
		expect(body.results).toContainEqual({ url: "https://example.com/okinawa" });
		expect(body.results).not.toContainEqual({ url: "https://example.com/fuji" });
	});
});
