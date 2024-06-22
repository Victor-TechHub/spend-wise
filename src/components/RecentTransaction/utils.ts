import { faker } from "@faker-js/faker";

interface IrecentDetails {
    imgUrl: string;
    name: string;
    date: string;
    transactionType: string;
    rise: number | null
    fall: number | null
}

export const colorAccents = {
    rise: "rgb(39, 163, 65)",
    fall: "rgb(242, 126, 121)"
}

export const recentDetails: IrecentDetails[] = [
    {
        imgUrl: faker.image.urlPicsumPhotos(),
        name: faker.person.fullName(),
        date: `${faker.date.month()}`,
        transactionType: "Transfer",
        rise: 9.2,
        fall: 3.5
    },
    {
        imgUrl: faker.image.urlPicsumPhotos(),
        name: faker.person.fullName(),
        date: `${faker.date.month()}`,
        transactionType: "Transfer",
        rise: 4.6,
        fall: null
    },
    {
        imgUrl: faker.image.urlPicsumPhotos(),
        name: faker.person.fullName(),
        date: `${faker.date.month()}`,
        transactionType: "Subscription",
        rise: 6.2,
        fall: 2.6
    },
    {
        imgUrl: faker.image.urlPicsumPhotos(),
        name: faker.person.fullName(),
        date: `${faker.date.month()}`,
        transactionType: "Trip",
        rise: null,
        fall: 3.5
    },
    {
        imgUrl: faker.image.urlPicsumPhotos(),
        name: faker.person.fullName(),
        date: `${faker.date.month()}`,
        transactionType: "Trip",
        rise: 5.7,
        fall: 6.1
    },
    {
        imgUrl: faker.image.urlPicsumPhotos(),
        name: faker.person.fullName(),
        date: `${faker.date.month()}`,
        transactionType: "Subscription",
        rise: 8.4,
        fall: null
    },
    {
        imgUrl: faker.image.urlPicsumPhotos(),
        name: faker.person.fullName(),
        date: `${faker.date.month()}`,
        transactionType: "Trip",
        rise: 1.1,
        fall: 3.5
    },
    {
        imgUrl: faker.image.urlPicsumPhotos(),
        name: faker.person.fullName(),
        date: `${faker.date.month()}`,
        transactionType: "Trip",
        rise: 9.2,
        fall: 4.3
    },
    {
        imgUrl: faker.image.urlPicsumPhotos(),
        name: faker.person.fullName(),
        date: `${faker.date.month()}`,
        transactionType: "Trip",
        rise: null,
        fall: 3.5
    },
    {
        imgUrl: faker.image.urlPicsumPhotos(),
        name: faker.person.fullName(),
        date: `${faker.date.month()}`,
        transactionType: "Transfer",
        rise: 6.9,
        fall: 0.5
    },
    {
        imgUrl: faker.image.urlPicsumPhotos(),
        name: faker.person.fullName(),
        date: `${faker.date.month()}`,
        transactionType: "Transfer",
        rise: 5.3,
        fall: null
    },
]