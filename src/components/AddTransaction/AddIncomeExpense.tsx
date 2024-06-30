import {
    Button,
    Form,
    Input,
    Radio
} from 'antd';
import { FieldType, useAddIncomeExpense } from './utils';

const AddIncomeExpense = () => {
    const { onFinish, onFinishFailed } = useAddIncomeExpense()
    return (
        <Form
            name="addIncomeExpense"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Name"
                name="nameOfTransaction"
                rules={[{ required: true, message: 'Please enter a transaction!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Amount"
                name="amount"
                rules={[{ required: true, message: 'Please enter an amount!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Type"
                name="typeOfTransaction"
                rules={[{ required: true, message: 'Enter a transaction type' }]}
            >
                <Radio.Group>
                    <Radio value="income"> Income </Radio>
                    <Radio value="expense"> Expense </Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
};

export default AddIncomeExpense;