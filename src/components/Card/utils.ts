import { IconType } from "react-icons";
import { TbBrandCashapp } from "react-icons/tb";
import { VscGraphLine } from "react-icons/vsc";
import { BsCreditCard2Front } from "react-icons/bs";
import { faker } from "@faker-js/faker";

type IDetails = DetailsObj[]

interface DetailsObj {
    field: string;
    amount: string | number;
    icon: IconType;
    rise: number | null;
    fall: number | null;
    colorAccent: string;
    colorAccentLight: string;
}

export const colorAccents = {
    rise: "rgb(39, 163, 65)",
    fall: "rgb(242, 126, 121)"
}

export const Details: IDetails = [
    {
        field: "Total Income",
        amount: faker.number.int({ min: 5, max: 500 }),
        icon: VscGraphLine,
        rise: 9.2,
        fall: null,
        colorAccent: "rgb(55, 124, 247)",
        colorAccentLight: "rgb(55, 124, 247, 0.1)"
    },
    {
        field: "Total Expense",
        amount: faker.number.int({ min: 5, max: 500 }),
        icon: BsCreditCard2Front,
        rise: null,
        fall: 5.9,
        colorAccent: "rgb(246, 55, 147)",
        colorAccentLight: "rgb(246, 55, 147, 0.1)"
    },
    {
        field: "Total Budget",
        amount: faker.number.int({ min: 5, max: 500 }),
        icon: TbBrandCashapp,
        rise: 7.5,
        fall: null,
        colorAccent: "rgb(208, 55, 246)",
        colorAccentLight: "rgb(208, 55, 246, 0.1)"
    }
]