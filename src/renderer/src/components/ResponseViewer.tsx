interface ResponseViewerProps {
    response: string | object | null;
}

export default function ResponseViewer({ response }: ResponseViewerProps) {
    return (
        <div>
            <h3>Response</h3>
            <pre>{response ? JSON.stringify(response, null, 2) : "No response yet"}</pre>
        </div>
    );
}

