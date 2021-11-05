import { Layout, Divider } from 'antd'
import PerformancePanel from './components/PerformancePanel'
import ErrorPanel from './components/ErrorPanel'

const { Header, Content } = Layout

function Main() {
    return (
        <Layout className="flex flex-col h-screen">
            <Header className="flex items-center h-16 px-3 text-2xl text-red-50 bg-blue-300 shadow-xl">Monitor</Header>
            <Layout className="flex flex-1 py-8 w-11/12 mx-auto ">
                <Content className="flex flex-col w-1/3 rounded-l-md bg-white">
                    <PerformancePanel />
                    <Divider className="h-px bg-gray-200" />
                    <ErrorPanel />
                </Content>
                <Divider className="w-px bg-gray-200" type="vertical" />
                <Content className="flex-1 rounded-r-md bg-white">Content</Content>
            </Layout>
        </Layout>
    )
}

export default Main
