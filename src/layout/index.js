import './index.less'
import React from 'react'
import { Layout } from 'antd'
import SplitPane from 'react-split-pane'
import PerformancePanel from './components/PerformancePanel'
import ErrorPanel from './components/ErrorPanel'

const { Header, Content } = Layout

function Main({ children }) {
    return (
        <Layout className='flex flex-col h-screen'>
            <Header className='flex items-center justify-between  h-16 px-5 text-2xl text-red-50 bg-blue-300 shadow-xl'>
                <div>Monitor</div>
                <a href='https://github.com/clouDr-f2e/monitor' target='_blank' rel='noreferrer'>
                    <i className='icon iconfont icon-github-fill text-3xl text-white' />
                </a>
            </Header>
            <Layout className='relative flex flex-1 split-wrapper'>
                <SplitPane split='vertical' minSize={200} defaultSize={'40%'}>
                    <Content className='h-full rounded-l-md bg-white split-wrapper'>
                        <SplitPane
                            split='horizontal'
                            minSize={300}
                            maxSize={600}
                            defaultSize={'50%'}
                            pane2Style={{ overflow: 'hidden' }}
                        >
                            <PerformancePanel />
                            <ErrorPanel />
                        </SplitPane>
                    </Content>
                    <Content className='flex flex-col h-full rounded-r-md bg-white'>{children}</Content>
                </SplitPane>
            </Layout>
        </Layout>
    )
}

export default Main
