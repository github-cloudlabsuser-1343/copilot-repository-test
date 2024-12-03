import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <textarea
                value={markdown}
                onChange={handleChange}
                style={{ width: '80%', height: '200px', marginBottom: '20px' }}
            />
            <div style={{ width: '80%', border: '1px solid #ddd', padding: '10px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}
export default function Home() {
    return (
        <div>
            <Head>
                <title>Markdown Editor</title>
                <meta name="description" content="A simple markdown editor built with Next.js" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MarkdownEditor />
        </div>
    );
}
function reverseSentence(sentence) {
    return sentence
        .split(' ')
        .reverse()
        .join(' ')
        .replace(/^\w/, (c) => c.toUpperCase());
}

console.log(reverseSentence("hello world from copilot")); // Output: "Copilot from world hello"
const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const names = data.map(person => person.name);
console.log(names); // Output: ["Alice", "Bob", "Charlie"]
const nestedData = [
    [
        { name: 'John', age: 28 },
        { name: 'Jane', age: 22 }
    ],
    [
        { name: 'Bob', age: 34 }
    ]
];

const nestedNames = nestedData.flatMap(group => group.map(person => person.name));
console.log(nestedNames); // Output: ['John', 'Jane', 'Bob']