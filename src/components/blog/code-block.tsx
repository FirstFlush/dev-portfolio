export default function CodeBlock({ children }: { children: string }) {
    return (
      <pre className="bg-gray-900 text-gray-100 py-0 px-4 rounded-md overflow-x-auto">
        <code>{children}</code>
      </pre>
    );
  }