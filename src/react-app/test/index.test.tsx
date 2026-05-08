import { render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react";
import { expect, test, describe, vi, beforeEach, afterEach } from "vitest";
import { Index } from "@/react-app/routes/index";

describe("Index Component", () => {
	beforeEach(() => {
		// fetch をモックする
		global.fetch = vi.fn();
	});

	afterEach(() => {
		cleanup();
	});

	test("renders initial state", () => {
		render(<Index />);
		expect(screen.getByText("検索テスト")).toBeDefined();
		expect(screen.getByPlaceholderText("日本,山")).toBeDefined();
		expect(screen.getByRole("button", { name: "click" })).toBeDefined();
	});

	test("updates keyword on input change", () => {
		render(<Index />);
		const input = screen.getByPlaceholderText("日本,山") as HTMLInputElement;
		fireEvent.change(input, { target: { value: "富士山" } });
		expect(input.value).toBe("富士山");
	});

	test("performs search and displays results", async () => {
		const mockResponse = {
			success: true,
			results: [{ url: "https://example.com/fuji" }],
		};

		(global.fetch as any).mockResolvedValue({
			json: vi.fn().mockResolvedValue(mockResponse),
		});

		render(<Index />);
		const input = screen.getByPlaceholderText("日本,山");
		const button = screen.getByRole("button", { name: "click" });

		fireEvent.change(input, { target: { value: "富士山" } });
		fireEvent.click(button);

		await waitFor(() => {
			expect(screen.getByText("https://example.com/fuji")).toBeDefined();
		});

		expect(global.fetch).toHaveBeenCalledWith("/api/search?q=%E5%AF%8C%E5%A3%AB%E5%B1%B1");
	});

	test("shows error message on failure", async () => {
		const mockResponse = {
			success: false,
			message: "キーワードなし",
		};

		(global.fetch as any).mockResolvedValue({
			json: vi.fn().mockResolvedValue(mockResponse),
		});

		render(<Index />);
		const input = screen.getByPlaceholderText("日本,山");
		const button = screen.getByRole("button", { name: "click" });

		fireEvent.change(input, { target: { value: "none" } });
		fireEvent.click(button);

		await waitFor(() => {
			expect(screen.getByText("キーワードなし")).toBeDefined();
		});
	});
});
