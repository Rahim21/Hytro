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

---
