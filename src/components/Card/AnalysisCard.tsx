import { Card, CardWrapper, Rate } from "./style"
import { useAnalysisCard } from "./utils"
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

const AnalysisCard = () => {
    const { Details } = useAnalysisCard()


    return (
        <CardWrapper>
            {Details.map((item, idx) => (
                <Card key={idx}>
                    <div>
                        <i style={{ background: item.colorAccentLight as any }}>
                            <item.icon size={16} color={item.colorAccent} />
                        </i>
                        <span><PiDotsThreeVerticalBold size={16} /></span>
                    </div>

                    <div>
                        <p>{item.field}</p>
                    </div>

                    <div>
                        <b>N{item.amount}</b>
                        <Rate $type={item.rise ? "rise" : "fall"}>
                            {item.rise ? <BsArrowUp /> : <BsArrowDown />}
                            {item.rise ? item.rise : item.fall}%
                        </Rate>
                    </div>
                </Card>
            ))}
        </CardWrapper>
    )
}
export default AnalysisCard