<div align="center">

   <h1 align="center">Welcome to Hytro! 👋</h1>

   <br />
    <img src="https://i.ibb.co/TrkdJQ3/Readme-thumbnail1-Hytro.png" alt="Project Banner">
    <br/><br/>

   <div>
      <img src="https://img.shields.io/badge/-React_Native-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="reactnative" />
      <img src="https://img.shields.io/badge/-Expo-black?style=for-the-badge&logoColor=white&logo=expo&color=000020" alt="expo" />
      <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=007ACC" alt="typescript" />
      <img src="https://img.shields.io/badge/-Stripe-black?style=for-the-badge&logoColor=white&logo=stripe&color=008CDD" alt="stripe" />
      <img src="https://img.shields.io/badge/-PostgreSQL-black?style=for-the-badge&logoColor=white&logo=postgresql&color=4169E1" alt="postgresql" />
      <img src="https://img.shields.io/badge/-Google_Maps-black?style=for-the-badge&logoColor=white&logo=googlemaps&color=4285F4" alt="googlemaps" />
      <img src="https://img.shields.io/badge/-Zustand-black?style=for-the-badge&logoColor=white&logo=zustand&color=EF5B5B" alt="zustand" />
      <img src="https://img.shields.io/badge/-Clerk-black?style=for-the-badge&logoColor=white&logo=clerk&color=4F46E5" alt="clerk" />
      <img src="https://img.shields.io/badge/-NativeWind-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=38B2AC" alt="nativewind" />
      <img src="https://img.shields.io/badge/-ESLint-black?style=for-the-badge&logoColor=white&logo=eslint&color=4B32C3" alt="eslint" />
      <img src="https://img.shields.io/badge/-Prettier-black?style=for-the-badge&logoColor=white&logo=prettier&color=F7B93D" alt="prettier" />
   </div>

   <h3 align="center">" Ready for a ride? Buckle up! 🚗💨 "</h3>

Hytro is a mobility application developed with **React Native**, offering an intuitive experience for booking rides in real-time. The app combines modern technologies to ensure optimal performance and a smooth user experience across mobile, web, and potentially desktop platforms.

</div>

## Table of Contents

- [⚙️ Tech Stack](#tech-stack)
- [🔋 Features](#features)
- [🚀 Getting Started](#getting-started)
- [📜 Environment Variables](#environment-variables)
- [📋 Snippets (Code to Copy)](#snippets)
- [🔗 Links](#links)

## <a name="tech-stack">⚙️ Tech Stack</a>

- **React Native**: A cross-platform framework for building mobile applications targeting iOS, Android, and can also support the web.  
  ![React Native](https://img.shields.io/badge/-React_Native-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB)

- **Expo**: Simplifies the development, deployment, and testing of React Native apps.  
  ![Expo](https://img.shields.io/badge/-Expo-black?style=for-the-badge&logoColor=white&logo=expo&color=000020)

- **TypeScript**: A programming language that adds static typing to JavaScript, helping prevent errors before runtime and improving overall code quality.  
  ![TypeScript](https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=007ACC)

- **Stripe**: Secure payment gateway for handling ride payments.  
  ![Stripe](https://img.shields.io/badge/-Stripe-black?style=for-the-badge&logoColor=white&logo=stripe&color=008CDD)

- **PostgreSQL (NeonDB)**: A serverless database with support for native SQL queries, used for managing the app's critical data without overburdening the infrastructure.  
  ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-black?style=for-the-badge&logoColor=white&logo=postgresql&color=4169E1)

- **Google Maps**: Integrated for live location tracking, ride selection, and route estimation.  
  ![Google Maps](https://img.shields.io/badge/-Google_Maps-black?style=for-the-badge&logoColor=white&logo=googlemaps&color=4285F4)

- **Zustand**: A lightweight state management library used for managing the app's global state, ensuring a clear and responsive structure while maintaining a smooth and scalable data flow across the app.  
  ![Zustand](https://img.shields.io/badge/-Zustand-black?style=for-the-badge&logoColor=white&logo=zustand&color=007ACC)

- **Clerk**: Provides a complete, handless solution for user management and authentication, allowing users to sign in easily and securely.  
  ![Clerk](https://img.shields.io/badge/-Clerk-black?style=for-the-badge&logoColor=white&logo=clerk&color=4B5BCE)

- **NativeWind**: A solution based on Tailwind CSS, making it easy to apply consistent UI elements.  
  ![NativeWind](https://img.shields.io/badge/-NativeWind-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=38B2AC)

- **ESLint & Prettier**: Tools that ensure clean and readable code by automating error checking and formatting, making it easier for developers to collaborate.  
  ![ESLint](https://img.shields.io/badge/-ESLint-black?style=for-the-badge&logoColor=white&logo=eslint&color=4B32C3) ![Prettier](https://img.shields.io/badge/-Prettier-black?style=for-the-badge&logoColor=white&logo=prettier&color=F7B93D)

## <a name="features">🔋 Features</a>

- **Onboarding Flow**: Quick and easy user registration.
- **Email Password Authentication with Verification**: Secure login process.
- **OAuth Using Google**: Simplified login via Google credentials.
- **Authorization**: Controlled access based on user roles.
- **Real-time location (Google Maps)**: Allows users to view nearby available rides, enter their destination, and receive cost estimates, all updated in real-time.
- **Secure payments with Stripe**: Stripe integration enables users to securely pay for their rides directly within the app.
- **Data optimization with custom hooks**: Data fetching and management through custom hooks, ensuring quick and smooth rendering of real-time information.
- **Profile Management**: Users can update their account details.
- **Ride History**: Quick access to previously booked rides.
- **Responsive Design**: Optimized for Android and iOS devices.

...and more features focused on code architecture and reusability.

## <a name="getting-started">🚀 Getting Started</a>

### 1. Clone the repository

```bash
git clone https://github.com/Rahim21/Hytro.git
cd hytro
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the app

```bash
npx expo start
```

In the output, you'll find options to open the app in a:

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo. Download the app and scan the QR code on your respective device to view the project.

## <a name="environment-variables">📜 Environment Variables</a>

To create a new `.env` file in the root of your project, start by making a copy of the existing `.env.example` file. You can do this by running the following command:

```bash
cp .env.example .env
```

Next, open the `.env` file and replace the placeholder values with your actual keys:

```bash
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here

EXPO_PUBLIC_PLACES_API_KEY=your_places_api_key_here
EXPO_PUBLIC_DIRECTIONS_API_KEY=your_directions_api_key_here

DATABASE_URL=your_database_url_here

EXPO_PUBLIC_SERVER_URL=https://hytro.dev/

EXPO_PUBLIC_GEOAPIFY_API_KEY=your_geoapify_api_key_here

EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
STRIPE_SECRET_KEY=your_stripe_secret_key_here
```

Make sure to replace `your_x_key_here` with your actual Clerk, Stripe, NeonDB, Google Maps, and Geoapify credentials. You can obtain these credentials by signing up on:

- [Clerk](https://clerk.com/)
- [Stripe](https://stripe.com/)
- [NeonDB](https://neon.tech/)
- [Google Maps](https://console.cloud.google.com/)
- [Geoapify](https://www.geoapify.com/)

## <a name="snippets">📋 Snippets</a>

Here are some code snippets from the project to help you get started quickly.

### Setup

<details>
<summary><code>.vscode/settings.json</code></summary>

```json
{
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

</details>

### Schema

<details>
<summary><code>CREATE Drivers Table SQL Query</code></summary>

```sql
CREATE TABLE drivers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    profile_image_url TEXT,
    car_image_url TEXT,
    car_seats INTEGER NOT NULL CHECK (car_seats > 0),
    rating DECIMAL(3, 2) CHECK (rating >= 0 AND rating <= 5)
);
```

</details>

<details>
<summary><code>CREATE Rides Table SQL Query</code></summary>

```sql
CREATE TABLE rides (
    ride_id SERIAL PRIMARY KEY,
    origin_address VARCHAR(255) NOT NULL,
    destination_address VARCHAR(255) NOT NULL,
    origin_latitude DECIMAL(9, 6) NOT NULL,
    origin_longitude DECIMAL(9, 6) NOT NULL,
    destination_latitude DECIMAL(9, 6) NOT NULL,
    destination_longitude DECIMAL(9, 6) NOT NULL,
    ride_time INTEGER NOT NULL,
    fare_price DECIMAL(10, 2) NOT NULL CHECK (fare_price >= 0),
    payment_status VARCHAR(20) NOT NULL,
    driver_id INTEGER REFERENCES drivers(id),
    user_id VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

</details>

<details>
<summary><code>CREATE Users Table SQL</code></summary>

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    clerk_id VARCHAR(50) UNIQUE NOT NULL
);
```

</details>

## <a name="links">🔗 Links</a>

Here are some useful links to resources and documentation for setting up and integrating the main technologies used in this project:

- <a href="https://www.nativewind.dev/quick-starts/expo" target="_blank">Expo NativeWind Setup</a>
- <a href="https://www.nativewind.dev/v4/getting-started/typescript" target="_blank">TypeScript Support for
  NativeWind</a>
- <a href="https://docs.expo.dev/guides/using-eslint/" target="_blank">Eslint and Prettier Setup</a>
- <a href="https://neon.tech/" target="_blank">Serverless NeonDB</a>
- <a href="https://go.clerk.com/DtiSBEI" target="_blank">Clerk Auth</a>
- <a href="https://clerk.com/docs/quickstarts/expo" target="_blank">Clerk Expo Quickstart</a>
- <a href="https://clerk.com/docs/custom-flows/oauth-connections" target="_blank">Clerk Expo OAuth</a>
- <a href="https://www.geoapify.com/" target="_blank">Geoapify Map</a>
- <a href="https://docs.stripe.com/payments/accept-a-payment?platform=react-native&ui=payment-sheet" target="_blank">
  Stripe React Native SDK</a>
- <a href="https://docs.stripe.com/payments/accept-a-payment-deferred" target="_blank">Stripe</a>

---
