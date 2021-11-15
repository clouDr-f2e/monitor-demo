import './index.less'
import React from 'react'
import { Layout } from 'antd'
import SplitPane from 'react-split-pane'
import PerformancePanel from './components/PerformancePanel'
import ErrorPanel from './components/ErrorPanel'

const { Header, Content } = Layout

function Main({ children }) {
    return (
        <Layout className='flex flex-col h-screen dark'>
            <Header className='flex items-center h-16 px-3 text-2xl text-red-50 bg-blue-300 shadow-xl'>Monitor</Header>
            <Layout className='relative flex flex-1 split-wrapper'>
                <SplitPane split='vertical' minSize={200} defaultSize={'50%'}>
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
