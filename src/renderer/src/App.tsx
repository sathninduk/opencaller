import { useState } from "react";
import axios from "axios";
import RequestForm from "./components/RequestForm";
import ResponseViewer from "./components/ResponseViewer";

export default function App() {
    const [response, setResponse] = useState<string | object | null>(null);

    const sendRequest = async (method: string, url: string, headers: string, body: string) => {
        try {
            const res = await axios({
                method,
                url,
                headers: JSON.parse(headers || '{}'),
                data: body || undefined,
            });

            setResponse(res.data);
        } catch (err) {
            setResponse(err instanceof Error ? err.message : "Unknown error");
        }
    };

    return (
        <div>
            <h1>OpenCaller</h1>
            <RequestForm onSubmit={sendRequest} />
            <ResponseViewer response={response} />
        </div>
    );
}
