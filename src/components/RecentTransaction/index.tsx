import { Tooltip } from "antd";
import { Rate, RecentTransactionContainer, Recents } from "./style"
import { IoIosMore } from "react-icons/io";
import { recentDetails } from "./utils";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { forwardRef } from "react";


const RecentTransaction = forwardRef((props, ref: React.LegacyRef<HTMLElement> | undefined) => {
    return (
        <RecentTransactionContainer ref={ref}>
            <header>
                <p>Recent</p>
                <Tooltip title="See all">
                    <i><IoIosMore size={16} /></i>
                </Tooltip>
            </header>
            {recentDetails.map((data, idx) => {
                return (
                    <Recents key={idx} $type={data.rise ? "rise" : "fall"}>
                        <div>
                            <img src={data.imgUrl} alt="Image here" />
                            <div>
                                <b>{data.name}</b>
                                <p>{data.date}</p>
                            </div>
                        </div>

                        <div>
                            <Rate $type={data.rise ? "rise" : "fall"}>
                                {data.rise ? <BsArrowUp /> : <BsArrowDown />}
                                ${data.rise ? data.rise : data.fall}%
                            </Rate>
                            <span>{data.transactionType}</span>
                        </div>
                    </Recents>
                )
            })}
        </RecentTransactionContainer>
    )
})

export default RecentTransaction