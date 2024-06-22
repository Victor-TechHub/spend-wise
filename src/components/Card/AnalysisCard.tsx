import { Card, CardWrapper, Rate } from "./style"
import { Details } from "./utils"
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { forwardRef } from "react";

const AnalysisCard = forwardRef((props, ref: React.LegacyRef<HTMLElement> | undefined) => {
    const properties = props
    console.log(properties)
    return (
        <CardWrapper ref={ref}>
            {Details.map((item, idx) => (
                <Card key={idx}>

                    <div>
                        <i style={{ background: item.colorAccentLight as any }}><item.icon size={16} color={item.colorAccent} /></i>
                        <span><PiDotsThreeVerticalBold size={16} /></span>
                    </div>

                    <div>
                        <p>{item.field}</p>
                    </div>

                    <div>
                        <b>${item.amount}</b>
                        <Rate $type={item.rise ? "rise" : "fall"}>
                            {item.rise ? <BsArrowUp /> : <BsArrowDown />}
                            {item.rise ? item.rise : item.fall}%
                        </Rate>
                    </div>

                </Card>
            ))}
        </CardWrapper>
    )
})

export default AnalysisCard