import { database } from "@/lib/firebase"
import { collection, getDocs } from "firebase/firestore"

export async function getIncomeExpensePercentage(userId: string) {
    let incomePercentage, expensePercentage
    const snapShot = await getDocs(collection(database, "users", userId, "transactions"))
    const snapShotData = snapShot.docs.map(doc => doc.data())

    const allIncome = snapShotData
        .filter(item => item.typeOfTransaction === "income")
        .map(item => item.amount)

    const allExpense = snapShotData
        .filter(item => item.typeOfTransaction === "expense")
        .map(item => item.amount)

    if (snapShotData.length > 2) {
        const previousIncome = allIncome[allIncome.length - 2]
        const previousExpense = allExpense[allExpense.length - 2]
        const currentIncome = allIncome[allIncome.length - 1]
        const currentExpense = allExpense[allExpense.length - 1]


        const expenseDifference = currentExpense - previousExpense
        const expensePercentageChange = previousExpense !== 0
            ? (expenseDifference / previousExpense) * 100
            : currentExpense === 0 ? 0 : 100;

        const incomeDifference = currentIncome - previousIncome
        const incomePercentageChange = previousIncome !== 0
            ? (incomeDifference / previousIncome) * 100
            : currentIncome === 0 ? 0 : 100;


        incomePercentage = incomePercentageChange
        expensePercentage = expensePercentageChange
    } else {
        incomePercentage = 100
        expensePercentage = 100
    }

    return { incomePercentage, expensePercentage }

}