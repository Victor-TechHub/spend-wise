import { database } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export const addTransaction = async (
    userId: string,
    nameOfTransaction: string,
    amount: string,
    typeOfTransaction: string
): Promise<void> => {
    try {
        await addDoc(collection(database, "users", userId, "transactions"), {
            userId,
            nameOfTransaction,
            amount,
            typeOfTransaction,
            dateAdded: serverTimestamp(),
        })
    } catch (err) {
        console.error("Error adding transaction", err)
    }
}