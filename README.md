# MyGallery App - React Native

**MyGallery** is a modern and responsive photo gallery app built with **React Native** and **Expo**. Users can log in using Google, view their uploaded photos, and manage their profile in a clean, intuitive interface.  

This project is built using **Expo Prebuild**, which allows native code customization while maintaining the ease of Expo development. It supports **Android, iOS, and Web** platforms.

---

## Table of Contents

- [Features](#features)
- [App Flow](#app-flow)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API & Authentication](#api--authentication)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Google Sign-In authentication  
- View uploaded photos in a gallery layout  
- Responsive UI for mobile and web  
- User profile management  
- Smooth navigation between screens  
- Speech Recognition for audio captions  

---

## App Flow

LoginScreen → GoogleAuth → HomeScreen → ProfileScreen → ImageDetailScreen

yaml
Copy code

---

## Technologies Used

- **React Native** – Cross-platform mobile framework  
- **Expo** – Simplified build and development  
- **Expo Prebuild** – For native code support  
- **React Navigation** – Stack navigation  
- **Google OAuth** – Authentication  
- **Speech Recognition** – Audio Caption  

---

## Installation

**Prerequisite:** Complete the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup).

1. Clone the repository:

```bash
git clone https://github.com/Tabish-Farooq/MyGallery.git
cd MyGallery
Install dependencies:

bash
Copy code
npm install
# or
yarn install
Start the Expo server:

bash
Copy code
npx expo start
Run the app on Android:

bash
Copy code
npx expo run:android
Run the app on iOS (Mac only):

bash
Copy code
npx expo run:ios
Open on Web:

bash
Copy code
npx expo start --web
Usage
Launch the app on your device or emulator

Log in using Google account

Browse uploaded photos on the Home screen

Tap on any image to view details

Update profile information from Profile screen

Folder Structure
graphql
Copy code
MyGallery/
│
├── android/                 # Android native files (Expo Prebuild)
├── ios/                     # iOS native files (Expo Prebuild)
├── app/                     # App specific native folders
│   ├── auth/                # Authentication related code
│   └── gallery/             # Gallery related native code
├── src/
│   ├── assets/              # Images, icons, fonts
│   ├── components/          # Reusable components
│   ├── navigation/          # Stack navigation configuration
│   ├── screens/             # All app screens
│   ├── services/            # API calls & authentication logic
│   └── utils/               # Helper functions
├── App.js                   # Main app entry point
├── package.json
├── app.json                 # Expo configuration
└── README.md
API & Authentication
Uses Google OAuth for authentication

API calls and authentication logic are handled in src/services

Troubleshooting
Ensure all dependencies are installed correctly

Metro/Expo server must be running before launching the app

If login fails, check SHA-1 configuration and Google OAuth credentials

Reset cache if needed:

bash
Copy code
npx expo start -c
Contributing
Fork the repository

Create a branch:

bash
Copy code
git checkout -b feature/YourFeature
Commit your changes:

bash
Copy code
git commit -m 'Add some feature'
Push the branch:

bash
Copy code
git push origin feature/YourFeature
Open a Pull Request

License
This project is licensed under the MIT License - see LICENSE for details.
