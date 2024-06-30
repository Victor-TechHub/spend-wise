import { IconType } from "react-icons";
import { TbBrandCashapp } from "react-icons/tb";
import { VscGraphLine } from "react-icons/vsc";
import { BsCreditCard2Front } from "react-icons/bs";
import { useAuthCtx } from "@/context/Auth";
import { useEffect, useState } from "react";
import { getUserTransactions } from "@/utils/getUserTransactions";
import { UserTransactionData } from "@/types/transactions";
import { getIncomeExpensePercentage } from "@/utils/getIncomeExpensePercentage";


type IDetails = DetailsObj[]

interface DetailsObj {
    field: string;
    amount: number | undefined;
    icon: IconType;
    rise: number | null;
    fall: number | null;
    colorAccent: string;
    colorAccentLight: string;
}

export const colorAccents = {
    rise: "rgb(39, 163, 65)",
    fall: "rgb(242, 126, 121)"
}

export const useAnalysisCard = () => {
    const { currentUser } = useAuthCtx()
    const [data, setData] = useState<UserTransactionData | undefined>(undefined)
    const [incomePercentage, setIncomePercentage] = useState(0)
    const [expensePercentage, setExpensePercentage] = useState(0)


    useEffect(() => {
        const fetchData = async () => {
            const res = await getUserTransactions(currentUser?.uid as string)
            const percentageRes = await getIncomeExpensePercentage(currentUser?.uid as string)
            setData(res)
            setIncomePercentage(Number(percentageRes.incomePercentage.toFixed(2)))
            setExpensePercentage((Number(percentageRes.expensePercentage.toFixed(2))))
        }
        fetchData()
    }, [data])

    const Details: IDetails = [
        {
            field: "Total Income",
            amount: data?.totalIncome,
            icon: VscGraphLine,
            rise: incomePercentage > 0 ? incomePercentage : null,
            fall: incomePercentage < 0 ? incomePercentage : null,
            colorAccent: "rgb(55, 124, 247)",
            colorAccentLight: "rgb(55, 124, 247, 0.1)"
        },
        {
            field: "Total Expense",
            amount: data?.totalExpense,
            icon: BsCreditCard2Front,
            rise: expensePercentage > 0 ? expensePercentage : null,
            fall: expensePercentage < 0 ? expensePercentage : null,
            colorAccent: "rgb(246, 55, 147)",
            colorAccentLight: "rgb(246, 55, 147, 0.1)"
        },
        {
            field: "Total Balance",
            amount: data?.balance,
            icon: TbBrandCashapp,
            rise: 100,
            fall: null,
            colorAccent: "rgb(208, 55, 246)",
            colorAccentLight: "rgb(208, 55, 246, 0.1)"
        }
    ]

    return { Details }

}

