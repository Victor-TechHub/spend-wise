export interface IuseCreditCardController {
    cardData: IcardData
    open: boolean;
    confirmLoading: boolean;
    modalText: string;
    handleCancel: () => void;
    handleInputChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
    // handleInputFocus: (evt: React.ChangeEvent<HTMLInputElement>) => void;
    handleOk: () => void;
    showModal: () => void;
}

export interface IcardData {
    number: string;
    expiry: string;
    cvc: string;
    name: string;
    // focus: string;
}