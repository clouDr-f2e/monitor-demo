import { Layout } from 'antd'
import Highlight, { defaultProps } from 'prism-react-renderer'
import PageHeader from 'src/components/PageHeader'
import withBaseContent from 'src/hoc/baseContent'
// eslint-disable-next-line import/no-webpack-loader-syntax
import perfCode from '!!raw-loader!src/utils/reportPerf'
// eslint-disable-next-line import/no-webpack-loader-syntax
import errorCode from '!!raw-loader!src/utils/reportError'

const { Content } = Layout

function CodeRender({ code }) {
    return (
        <Highlight {...defaultProps} code={code} language='jsx'>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={{ ...style, padding: 10 }}>
                    {tokens.map((line, i) => (
                        <div className='table-row' key={i} {...getLineProps({ line, key: i })}>
                            <div className='table-cell text-right pr-3 select-none opacity-50'>{i + 1}</div>
                            <div className='table-cell'>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    )
}

function Example() {
    return (
        <Content className='overflow-auto'>
            <PageHeader title='Example' />
            <Content>
                <section className='flex flex-col mb-5'>
                    <h1 className='mb-4 text-2xl text-gray-700'> Performance </h1>
                    <div className='block mb-5'>
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <a
                            className='underline'
                            href='https://github.com/clouDr-f2e/monitor-demo/blob/main/src/utils/reportPerf.js'
                            target='_blank'
                        >
                            source code
                        </a>
                    </div>
                    <CodeRender code={perfCode} />
                </section>
                <section className='flex flex-col mb-5'>
                    <h1 className='mb-4 text-2xl text-gray-700'> Error </h1>
                    <div className='block mb-5'>
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <a
                            className='underline'
                            href='https://github.com/clouDr-f2e/monitor-demo/blob/main/src/utils/reportError.js'
                            target='_blank'
                        >
                            source code
                        </a>
                    </div>
                    <CodeRender code={errorCode} />
                </section>
            </Content>
        </Content>
    )
}

export default withBaseContent(Example)
