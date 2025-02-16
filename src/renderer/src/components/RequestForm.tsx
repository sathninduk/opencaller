import { useState } from "react";

interface RequestFormProps {
    onSubmit: (method: string, url: string, headers: string, body: string) => void;
}

export default function RequestForm({ onSubmit }: RequestFormProps) {
    const [method, setMethod] = useState<string>("GET");
    const [url, setUrl] = useState<string>("");
    const [headers, setHeaders] = useState<string>("{}");
    const [body, setBody] = useState<string>("{}");
    const [activeTab, setActiveTab] = useState<"headers" | "body">("headers");

    const methodColors: { [key: string]: string } = {
        GET: "bg-green-600",
        POST: "bg-yellow-600",
        PUT: "bg-blue-600",
        DELETE: "bg-red-600"
    };

    return (
        <div className="flex flex-col gap-4 p-4 bg-gray-900 text-gray-100 h-screen">
            {/* URL Bar */}
            <div className="flex gap-2">
                <select
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                    className={`px-4 py-2 rounded ${methodColors[method]} text-white font-semibold appearance-none`}
                >
                    <option>GET</option>
                    <option>POST</option>
                    <option>PUT</option>
                    <option>DELETE</option>
                </select>

                <input
                    type="text"
                    placeholder="Enter request URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="flex-1 px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
                />

                <button
                    onClick={() => onSubmit(method, url, headers, body)}
                    className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 font-semibold transition-colors"
                >
                    Send
                </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 border-b border-gray-700">
                <button
                    onClick={() => setActiveTab("headers")}
                    className={`pb-2 px-4 ${activeTab === "headers" ? "border-b-2 border-blue-500" : ""}`}
                >
                    Headers
                </button>
                <button
                    onClick={() => setActiveTab("body")}
                    className={`pb-2 px-4 ${activeTab === "body" ? "border-b-2 border-blue-500" : ""}`}
                >
                    Body
                </button>
            </div>

            {/* Editor Area */}
            <div className="flex-1 flex flex-col gap-4">
                {activeTab === "headers" ? (
                    <div className="flex-1 flex flex-col">
                        <label className="text-sm font-mono mb-2">Request Headers (JSON)</label>
                        <textarea
                            value={headers}
                            onChange={(e) => setHeaders(e.target.value)}
                            className="flex-1 p-4 bg-gray-800 rounded font-mono text-sm focus:outline-none resize-none"
                            spellCheck={false}
                        />
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col">
                        <label className="text-sm font-mono mb-2">Request Body (JSON)</label>
                        <textarea
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            className="flex-1 p-4 bg-gray-800 rounded font-mono text-sm focus:outline-none resize-none"
                            spellCheck={false}
                        />
                    </div>
                )}
            </div>

            {/* Status Bar */}
            <div className="text-sm text-gray-400 flex justify-between items-center">
                <span>Content-Type: application/json</span>
                <div className="flex items-center gap-4">
                    <span>Pretty</span>
                    <span>JSON</span>
                    <span>UTF-8</span>
                </div>
            </div>
        </div>
    );
}