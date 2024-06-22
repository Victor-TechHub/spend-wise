import { IcardData, IuseCreditCardController } from "@/types/balance";
import { useState } from "react";

export const useCreditCardController = (): IuseCreditCardController => {
    const [cardData, setCardData] = useState<IcardData>({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        // focus: 'name',
    });
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');


    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target;

        setCardData((prev) => ({ ...prev, [name]: value }));
    }

    // const handleInputFocus = (evt: React.ChangeEvent<HTMLInputElement>) => {
    //     setCardData((prev) => ({ ...prev, focus: evt.target.name }));
    // }

    const showModal = () => {
        setOpen(true);
        setModalText("Enter valid details for efficiency!")
    };

    const handleOk = () => {
        setModalText('This form will be closed after 2 seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setOpen(false);
        setModalText("Enter valid details for efficiency!")
    };

    return {
        cardData,
        open,
        confirmLoading,
        modalText,
        handleCancel,
        handleInputChange,
        // handleInputFocus,
        handleOk,
        showModal
    }
}