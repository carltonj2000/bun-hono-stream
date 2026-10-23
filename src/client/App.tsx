import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const startStream = async () => {
    setText("");
    const res = await fetch("http://localhost:3000/api/stream");
    const reader = res.body?.getReader();
    const decoder = new TextDecoder();

    while (reader) {
      const { done, value } = await reader.read();
      if (done) break;
      setText((prev) => prev + decoder.decode(value));
    }
  };

  return (
    <div>
      <button onClick={startStream}>Start Stream</button>
      <pre>{text}</pre>
    </div>
  );
}
