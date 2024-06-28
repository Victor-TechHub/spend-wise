import type { FormProps } from 'antd';
import { Button, Form, Input, Radio } from 'antd';
import { toast } from 'react-toastify';
import { addTransaction } from '@/utils/addTransaction';
import { useAuthCtx } from "@/context/Auth";

type FieldType = {
    nameOfTransaction: string;
    amount: string;
    typeOfTransaction: "income" | "expense"
};

const AddIncomeExpense = () => {
    const { currentUser } = useAuthCtx()

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        if (currentUser) {
            const { nameOfTransaction, amount, typeOfTransaction } = values
            await addTransaction(currentUser?.uid as string, nameOfTransaction, amount, typeOfTransaction)
            setTimeout(() => toast.success(`Your ${values.typeOfTransaction} is recorded successfully!`), 2 * 1000)
        }
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

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