import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Table, Form, Input } from 'antd'
import metricsMap from 'src/constants/metrics'

const EditableContext = React.createContext(null)

const columns = [
    {
        title: 'metrics',
        dataIndex: 'metrics',
        key: 'metrics',
        render: (text) => <div>{`${metricsMap[text]}（${text}）`}</div>,
    },
    { title: 'median(ms)', dataIndex: 'median', key: 'median', width: '20%', editable: true },
    { title: 'p10(ms)', dataIndex: 'p10', key: 'p10', width: '20%', editable: true },
    { title: 'weight', dataIndex: 'weight', key: 'weight', width: '20%', editable: true },
]

function EditableRow({ index, ...props }) {
    const [form] = Form.useForm()

    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    )
}

function EditableCell({ title, editable, children, dataIndex, record, handleSave, ...restProps }) {
    const [editing, setEditing] = useState(false)
    const inputRef = useRef(null)
    const form = useContext(EditableContext)
    useEffect(() => {
        if (editing) {
            inputRef.current.focus()
        }
    }, [editing])

    const toggleEdit = () => {
        setEditing(!editing)
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        })
    }

    const save = async () => {
        try {
            const values = await form.validateFields()
            toggleEdit()
            handleSave({ ...record, ...values, ...restProps })
        } catch (errInfo) {
            console.log('Save failed:', errInfo)
        }
    }

    let childNode = children

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div
                className='editable-cell-value-wrap'
                style={{
                    paddingRight: 24,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        )
    }

    return <td {...restProps}>{childNode}</td>
}

function MetricsTable({ metricsConfig, onMetricsChange }) {
    const dataSource = useMemo(() => {
        return Object.entries(metricsConfig).map(([k, v]) => ({ metrics: k, ...v, key: k }))
    }, [metricsConfig])

    const adaptColumns = useMemo(() => {
        return columns.map((col, i) => {
            if (!col.editable) {
                return { ...col, key: i }
            }
            return {
                ...col,
                key: i,
                onCell: (record) => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    index: i,
                    handleSave: ({ key, weight, median, p10 }) => {
                        onMetricsChange({ [key]: { weight, median, p10 } })
                    },
                }),
            }
        })
    }, [])

    return (
        <Table
            pagination={false}
            bordered
            rowClassName={() => 'editable-row'}
            components={{
                body: {
                    row: EditableRow,
                    cell: EditableCell,
                },
            }}
            columns={adaptColumns}
            dataSource={dataSource}
        />
    )
}

export default MetricsTable
