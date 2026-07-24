import { useMDXComponent } from 'next-contentlayer/hooks';

const mdxComponents = {};

interface MdxProps {
  code: string;
}

export function UpdateMdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="prose max-w-none text-slate-400 prose-p:leading-relaxed prose-a:text-purple-500 prose-a:no-underline hover:prose-a:underline prose-strong:font-medium prose-strong:text-slate-50">
      <Component components={{ ...mdxComponents }} />
    </div>
  );
}
