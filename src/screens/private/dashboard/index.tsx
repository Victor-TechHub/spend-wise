import Balance from "@/components/Balance"
import AnalysisCard from "@/components/Card/AnalysisCard"
import AnalysisChart from "@/components/Chart/AnalysisChart"
// import Invoice from "@/components/Invoice"
import RecentTransaction from "@/components/RecentTransaction"
import { LeftContainer, RightContainer, Wrapper } from "@/styles/private/dashboard"
import { FloatButton, Tooltip, Tour } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useState } from "react"
import { useTourSteps } from "./utils"

const Dashboard = () => {
    const [open, setOpen] = useState<boolean>(false);
    const { ref1, ref2, ref3, ref4, steps } = useTourSteps()
    return (
        <Wrapper>
            <LeftContainer>
                <AnalysisCard ref={ref1} />
                <AnalysisChart ref={ref2} />
                {/* <Invoice /> */}
            </LeftContainer>

            <RightContainer>
                <Balance ref={ref3} />
                <RecentTransaction ref={ref4} />
            </RightContainer>

            <Tooltip title="Need Help?">
                <FloatButton
                    icon={<QuestionCircleOutlined />}
                    type="default"
                    style={{ right: 24 }}
                    onClick={() => setOpen(true)}
                />
            </Tooltip>

            <Tour
                open={open}
                onClose={() => setOpen(false)}
                steps={steps}
            />
        </Wrapper>
    )
}

export default Dashboard