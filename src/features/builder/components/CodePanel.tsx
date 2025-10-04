import { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import { useBuilderStore } from '@/store/builderStore';
import { generateComponentCode } from '../generateCode';

const CodePanel = () => {
  const nodes = useBuilderStore((state) => state.nodes);
  const [code, setCode] = useState('// generated code will appear here\n');

  useEffect(() => {
    const generated = generateComponentCode(nodes);
    setCode(generated);
  }, [nodes]);

  return (
    <section className="mt-8 rounded-3xl border border-border bg-background/80 p-4 shadow-glow">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">Generated code</p>
          <h3 className="text-lg font-semibold text-white">Export-ready React component</h3>
        </div>
        <span className="text-xs text-text-secondary">
          Synced
        </span>
      </div>
      <Editor
        height="320px"
        theme="vs-dark"
        language="typescript"
        value={code}
        options={{
          readOnly: true,
          minimap: { enabled: false },
          fontSize: 14,
          fontFamily: 'JetBrains Mono, monospace',
          scrollBeyondLastLine: false,
        }}
      />
    </section>
  );
};

export default CodePanel;
