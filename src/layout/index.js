import './index.less'
import { Layout } from 'antd'
import SplitPane from 'react-split-pane'
import AppRouter from '../router'
import PerformancePanel from './components/PerformancePanel'
import ErrorPanel from './components/ErrorPanel'

const { Header, Content } = Layout

function Main() {
    return (
        <Layout className="flex flex-col h-screen">
            <Header className="flex items-center h-16 px-3 text-2xl text-red-50 bg-blue-300 shadow-xl">Monitor</Header>
            <Layout className="relative flex flex-1 split-wrapper">
                <SplitPane split="vertical" minSize={200} maxSize={600} defaultSize={'30%'}>
                    <Content className="h-full rounded-l-md bg-white split-wrapper">
                        <SplitPane split="horizontal" minSize={300} defaultSize={'50%'}>
                            <PerformancePanel />
                            <ErrorPanel />
                        </SplitPane>
                    </Content>
                    <Content className="flex flex-col h-full rounded-r-md bg-white">
                        <AppRouter />
                    </Content>
                </SplitPane>
            </Layout>
        </Layout>
    )
}

export default Main
