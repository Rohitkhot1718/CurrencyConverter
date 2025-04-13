# Currency Converter App

A simple Currency Converter application built using React. This app allows users to convert an amount from one currency to another by fetching real-time exchange rates from an external API. The app also displays the respective country flags for each currency.

## Features

- **Currency Conversion**: Convert an amount from one currency to another.
- **Real-Time Exchange Rates**: Fetch live exchange rates using a third-party API.
- **Flag Display**: Display country flags corresponding to each selected currency.
- **Interactive UI**: A responsive, easy-to-use interface.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **CSS (Tailwind CSS)**: Styling framework used for designing the UI.
- **Fetch API**: For fetching currency data and exchange rates.
- **Flag API**: To show flags of countries based on selected currencies.

## Setup

To get the project up and running locally, follow these steps:

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/Rohitkhot1718/CurrencyConverterr.git
cd CurrencyConverter
```

### 2. Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

### 3. Run the Application

Start the development server:

```bash
npm start
```

Open your browser and navigate to `http://localhost:5173` to see the app in action.

## How It Works

### 1. Enter Amount

You can enter the amount you want to convert in the "Enter Amount" input field.

### 2. Select Currencies

- Use the "From" dropdown to select the source currency (the currency you are converting from).
- Use the "To" dropdown to select the destination currency (the currency you are converting to).

### 3. Swap Currencies

You can swap the source and destination currencies by clicking on the arrow button between the two dropdowns.

### 4. Get Exchange Rate

Click the "Get Exchange Rate" button to fetch the real-time exchange rate for the selected currencies. The result will be displayed below the input fields.

### 5. Flags

Country flags are displayed next to the currency code for a better user experience.

## API Used

This app uses the [Currency API by Fawaz Ahmed](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1) to fetch the exchange rates for the selected currencies.

## Notes

- This app fetches data from the API every time the user selects a currency pair or changes the amount.
- The app provides exchange rates only for supported currencies (based on the API's coverage).
- The `countryList.json` file is used to map currency codes to their respective country codes for flag display.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
