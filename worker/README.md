# 繪本 AI 後端部署

這個 Cloudflare Worker 使用 Cloudflare Workers AI 的開源模型，並依 IP 與角色限制每人每天各 10 次對話（拉利 10 次、阿班 10 次、狗狗 10 次）。不需要 OpenAI API 金鑰。

部署時需要：

1. 建立 Cloudflare Worker 與 KV namespace，綁定名稱設為 `CHAT_LIMITS`。
2. 新增 Workers AI binding，名稱設為 `AI`。
3. 部署 `src/index.js`。
4. 把 Worker 網址填入網站根目錄的 `ai-config.js`。

`wrangler.toml.example` 是設定範例，複製為 `wrangler.toml` 後再填入實際 KV ID。模型使用 Cloudflare 託管的 `@cf/meta/llama-3.1-8b-instruct-fp8`。
