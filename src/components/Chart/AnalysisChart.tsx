import { ActionButtons, Chart } from "./style"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip as ChartTooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { data, options } from "./utils";
import { Tooltip, Button, Flex } from "antd";
import { PlusOutlined } from "@ant-design/icons"
import { IoIosMore } from "react-icons/io";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    ChartTooltip,
    Legend
);

const AnalysisChart = () => {
    return (
        <Chart>
            <ActionButtons>
                <Flex wrap gap="small">
                    <Tooltip title="Add to your finances">
                        <Button type="primary" shape="circle" icon={<PlusOutlined />} />
                    </Tooltip>

                    <Tooltip title="more">
                        <Button type="primary" shape="circle" icon={<IoIosMore />} />
                    </Tooltip>
                </Flex>
            </ActionButtons>
            <Bar options={options} data={data} />
        </Chart>
    )
}

export default AnalysisChart