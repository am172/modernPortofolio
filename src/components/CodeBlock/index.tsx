import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import './CodeBlock.css'

type IcodeBlock = {
    code: string;
    language: string;
}

const CodeBlock = (props:IcodeBlock) => {
    const { code, language } = props;
    return (
        <div className='code__block'>
            <div className="flex__centrer dot__container">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
            <SyntaxHighlighter
                language={language}
                style={a11yLight}
                customStyle={{
                    background: 'rgba(var(--bg-base-rgb), 0.6)',
                    padding: '20px',
                    color: 'var(--color-primary-light)',

                }}
                wrapLongLines={true}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    )
}

export default CodeBlock
