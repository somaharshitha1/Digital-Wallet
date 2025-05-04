export const initialData = 
    [
        {
            email: "harshi@gmail.com",
            password: "harshi",
            name: "Harshitha",
            money: 380,
            transactions: [
                {
                    type: "deposit",
                    beneficiaryEmail: "harshi@gmail.com",
                    beneficiaryName: "Harshitha",
                    amount: 500,
                    balance: 500,
                    date: "10/03/2025 17:08"
                },
                {
                    type: "transference",
                    senderEmail: "harshi@gmail.com",
                    senderName: "Harshitha",
                    receptorEmail: "siva@gmail.com",
                    receptorName: "Siva Kumar",
                    amount: -120,
                    balance: 380,
                    date: "10/03/2025 22:34"
                }
            ],
        },
        {
            email: "siva@gmail.com",
            password: "siva",
            name: "Siva Kumar",
            money: 620,
            transactions: [
                {
                    type: "deposit",
                    beneficiaryEmail: "siva@gmail.com",
                    beneficiaryName: "Siva Kumar",
                    amount: 500,
                    balance: 500,
                    date: "10/04/2025 19:56"
                },
                {
                    type: "transference",
                    senderEmail: "siva@gmail.com",
                    senderName: "Siva Kumar",
                    receptorEmail: "harshi@gmail.com",
                    receptorName: "Harshitha",
                    amount: 120,
                    balance: 620,
                    date: "10/04/2025 22:34"
                }
            ],
        },
    ];