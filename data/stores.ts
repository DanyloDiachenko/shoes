interface Store {
    image: string;
    title: string;
    address: string;
    phone: string;
    wordDaysAndHours: {
        day: string;
        hours: string;
    }[];
    lat: number;
    lng: number;
}

export const stores: Store[] = [
    {
        image: "/images/banners/store-1.png",
        title: "Wall Street Plaza",
        address: "88 Pine St, New York, NY 10005, USA",
        phone: "+1 987-876-6543",
        wordDaysAndHours: [
            {
                day: "Monday - Saturday",
                hours: "11am to 7pm",
            },
            {
                day: "Sunday",
                hours: "11am to 6pm",
            },
        ],
        lat: 40.705669,
        lng: -74.006073,
    },
    {
        image: "/images/banners/store-2.png",
        title: "Wall Street Plaza",
        address: "88 Pine St, New York, NY 10005, USA",
        phone: "+1 987-876-6543",
        wordDaysAndHours: [
            {
                day: "Monday - Friday",
                hours: "9am to 8pm",
            },
            {
                day: "Saturday",
                hours: "9am to 8pm",
            },
            {
                day: "Sunday",
                hours: "Closed",
            },
        ],
        lat: 40.705461,
        lng: -74.006432,
    },
];
