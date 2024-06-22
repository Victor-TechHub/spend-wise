import { useRef } from "react";


interface TourSteps {
    title: string;
    description: string;
    target: () => null;
}

export const useTourSteps = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    const steps: TourSteps[] = [
        {
            title: 'Finance Overview',
            description: 'Displays your total income and expenses.',
            target: () => ref1.current,
        },
        {
            title: 'Cash Flow Chart',
            description: 'Represents your monthly/yearly financial flow.',
            target: () => ref2.current,
        },
        {
            title: 'Credit Card Unit',
            description: "Visually presents the details of your credit card, such as the card number, expiration date, cardholder name, and possibly the card's security code (CVV/CVC)..",
            target: () => ref3.current,
        },
        {
            title: 'Your recent transactions',
            description: 'Displays the history of financial transactions, helping you track your spending, payments, or transfers over time..',
            target: () => ref4.current,
        },
    ];

    return { ref1, ref2, ref3, ref4, steps }
}
