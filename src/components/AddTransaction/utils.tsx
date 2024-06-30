import type { FormProps } from 'antd';
import { toast } from 'react-toastify';
import { addTransaction } from '@/utils/addTransaction';
import { useAuthCtx } from "@/context/Auth";

export type FieldType = {
    nameOfTransaction: string;
    amount: string;
    typeOfTransaction: "income" | "expense"
};

export const useAddIncomeExpense = () => {
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

    return { onFinish, onFinishFailed }
}