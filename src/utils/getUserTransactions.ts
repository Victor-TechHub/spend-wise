import { database } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export const getUserTransactions = async (userId: string) => {
    try {
        const snapShot = await getDocs(collection(database, "users", userId, "transactions"))
        const snapShotData = snapShot.docs.map(doc => doc.data())

        const totalIncome = snapShotData
            .filter(item => item.typeOfTransaction === "income")
            .map(item => item.amount)
            .reduce((acc, cur) => acc + Number(cur), 0)

        const totalExpense = snapShotData
            .filter(item => item.typeOfTransaction === "expense")
            .map(item => item.amount)
            .reduce((acc, cur) => acc + Number(cur), 0)

        const balance = totalIncome - totalExpense

        return { totalExpense, totalIncome, balance }
    } catch (err) {
        console.error("Error fetching user's transactions", err)
    }
}