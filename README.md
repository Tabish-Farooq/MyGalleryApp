# MyGallery App

A modern and responsive photo gallery app built with **React Native** and **Expo**. Users can log in using Google, view their uploaded photos, and manage their profile in a clean, intuitive interface.

This project uses **Expo Prebuild**, which allows native code customization while maintaining the ease of Expo development. It supports **Android, iOS, and Web** platforms.

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

- 🔐 Google Sign-In authentication
- 📱 Responsive UI for mobile and web
- 🧭 Smooth navigation between screens
- 🎤 Speech Recognition for audio captions

---

## App Flow

```
LoginScreen → GoogleAuth → HomeScreen → ProfileScreen → ImageDetailScreen
```

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

### 1. Clone the repository

```bash
git clone https://github.com/Tabish-Farooq/MyGallery.git
cd MyGallery
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the Expo server

```bash
npx expo start
```

### 4. Run the app on Android

```bash
npx expo run:android
```

### 5. Run the app on iOS (Mac only)

```bash
npx expo run:ios
```

### 6. Open on Web

```bash
npx expo start --web
```

---

## Usage

1. Launch the app on your device or emulator
2. Log in using your Google account
3. Browse uploaded photos on the Home screen
4. Tap on any image to view details
5. Update profile information from Profile screen

---

## Folder Structure

```
MyGallery/
│
├── android/                 # Android native files (Expo Prebuild)
├── ios/                     # iOS native files (Expo Prebuild)
├── app/                     # App specific native folders
│   ├── auth/                # Authentication related code
│   └── gallery/             # Gallery related native code
|   └── _layout.jsx          # Main app entry point
|   └── _index.jsx           # Root Layout for Navigation
├── src/
│   ├── assets/              # Images, icons, fonts
│   ├── components/          # Reusable components
├── package.json
├── app.json                 # Expo configuration
└── README.md
```

---

## API & Authentication

- Uses **Google OAuth** for authentication
- API calls and authentication logic are handled in `src/services`

---

## Troubleshooting

- Ensure all dependencies are installed correctly
- Metro/Expo server must be running before launching the app
- If login fails, check SHA-1 configuration and Google OAuth credentials
- Reset cache if needed:

```bash
npx expo start -c
```

---

## Contributing

1. Fork the repository
2. Create a branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a Pull Request

---

## License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) for details.

---

## Author

**Tabish Farooq**  
[GitHub](https://github.com/Tabish-Farooq)

---

## Acknowledgments

- Thanks to the Expo team for their amazing framework
- Google OAuth for seamless authentication
- React Native community for continuous support
