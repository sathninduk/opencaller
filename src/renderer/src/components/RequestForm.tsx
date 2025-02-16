import { useState } from "react";

interface RequestFormProps {
    onSubmit: (method: string, url: string, headers: string, body: string) => void;
}

export default function RequestForm({ onSubmit }: RequestFormProps) {
    const [method, setMethod] = useState<string>("GET");
    const [url, setUrl] = useState<string>("");
    const [headers, setHeaders] = useState<string>("");
    const [body, setBody] = useState<string>("");

    return (
        <div>
            <input type="text" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} />
            <select value={method} onChange={(e) => setMethod(e.target.value)}>
                <option>GET</option>
                <option>POST</option>
                <option>PUT</option>
                <option>DELETE</option>
            </select>
            <textarea placeholder="Headers (JSON)" value={headers} onChange={(e) => setHeaders(e.target.value)} />
            <textarea placeholder="Body (JSON)" value={body} onChange={(e) => setBody(e.target.value)} />
            <button onClick={() => onSubmit(method, url, headers, body)}>Send Request</button>
        </div>
    );
}

