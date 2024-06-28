import Balance from "@/components/Balance"
import AnalysisCard from "@/components/Card/AnalysisCard"
import AnalysisChart from "@/components/Chart/AnalysisChart"
// import Invoice from "@/components/Invoice"
import RecentTransaction from "@/components/RecentTransaction"
import { LeftContainer, RightContainer, Wrapper } from "@/styles/private/dashboard"
import { FloatButton, Modal, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useModal } from "./utils"
import AddIncomeExpense from "@/components/AddTransaction/AddIncomeExpense"

const Dashboard = () => {
    const { isModalOpen, showModal, handleOk, handleCancel } = useModal()
    return (
        <Wrapper>
            <LeftContainer>
                <AnalysisCard />
                <AnalysisChart />
                {/* <Invoice /> */}
            </LeftContainer>

            <RightContainer>
                <Balance />
                <RecentTransaction />
            </RightContainer>

            <Tooltip title="Add Income/Expense">
                <FloatButton
                    icon={<PlusOutlined />}
                    type="default"
                    style={{ right: 24 }}
                    onClick={showModal}
                />
            </Tooltip>

            <Modal
                title="Add Income/Expense"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}>
                <AddIncomeExpense />
            </Modal>
        </Wrapper>
    )
}

export default Dashboard