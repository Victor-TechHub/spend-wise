import { IconType } from "react-icons";
import { TbBrandCashapp } from "react-icons/tb";
import { VscGraphLine } from "react-icons/vsc";
import { BsCreditCard2Front } from "react-icons/bs";
import { useAuthCtx } from "@/context/Auth";
import { useEffect, useState } from "react";
import { getUserTransactions } from "@/utils/getUserTransactions";
import { UserTransactionData } from "@/types/transactions";

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

    useEffect(() => {
        const fetchData = async () => {
            const res = await getUserTransactions(currentUser?.uid as string)
            setData(res)
        }
        fetchData()
    }, [data])

    const Details: IDetails = [
        {
            field: "Total Income",
            amount: data?.totalIncome,
            icon: VscGraphLine,
            rise: 9.2,
            fall: null,
            colorAccent: "rgb(55, 124, 247)",
            colorAccentLight: "rgb(55, 124, 247, 0.1)"
        },
        {
            field: "Total Expense",
            amount: data?.totalExpense,
            icon: BsCreditCard2Front,
            rise: null,
            fall: 5.9,
            colorAccent: "rgb(246, 55, 147)",
            colorAccentLight: "rgb(246, 55, 147, 0.1)"
        },
        {
            field: "Total Balance",
            amount: data?.balance,
            icon: TbBrandCashapp,
            rise: 7.5,
            fall: null,
            colorAccent: "rgb(208, 55, 246)",
            colorAccentLight: "rgb(208, 55, 246, 0.1)"
        }
    ]

    return { Details }

}

