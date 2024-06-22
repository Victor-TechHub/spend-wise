import { BalanceContainer, ButtonWrapper } from "./style"
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { Button, Flex, Input, Modal, Tooltip } from "antd";
import { InfoCircleOutlined } from '@ant-design/icons';
import { useCreditCardController } from "./utils";
import React, { forwardRef } from "react";

const Balance = forwardRef((props, ref: React.LegacyRef<HTMLFormElement> | undefined) => {
    const properties = props
    console.log(properties)
    const {
        cardData,
        showModal,
        open,
        handleCancel,
        handleInputChange,
        confirmLoading,
        modalText,
        // handleInputFocus,
        handleOk
    } = useCreditCardController()

    const cardDataValues = Object.values(cardData).map((item) => item)

    return (
        <BalanceContainer ref={ref}>
            <Cards
                number={cardData.number}
                expiry={cardData.expiry}
                cvc={cardData.cvc}
                name={cardData.name}
            />
            <ButtonWrapper>
                <Button
                    type="primary"
                    onClick={showModal}>
                    {cardDataValues.includes("") ? "Add Details" : "Edit Details"}
                </Button>
            </ButtonWrapper>
            <Modal
                title="Credit/Debit Card"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
                <Flex vertical gap={12}>
                    <Input
                        type="number"
                        name="number"
                        placeholder="Card Number"
                        value={cardData.number}
                        onChange={handleInputChange}
                        // onFocus={handleInputFocus}
                        suffix={
                            <Tooltip title="Important">
                                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                            </Tooltip>
                        }
                    />
                    <Input
                        type="text"
                        name="name"
                        placeholder="Card Name"
                        value={cardData.name}
                        onChange={handleInputChange}
                    // onFocus={handleInputFocus}
                    />
                    <Input
                        type="text"
                        name="expiry"
                        placeholder="Card Expiry Date"
                        value={cardData.expiry}
                        onChange={handleInputChange}
                    // onFocus={handleInputFocus}
                    />
                </Flex>
            </Modal>
        </BalanceContainer>
    )
})

export default Balance