# 🍿 usePopcorn

A modern, interactive movie discovery and rating application built with React. Search for movies, explore detailed information, rate them with a star system, and maintain a personal watched list—all in a sleek, user-friendly interface.

![usePopcorn Screenshot](./public/screenshot.png) <!-- Add a screenshot if available -->

## 🚀 Features

- **Movie Search**: Instantly search through a vast database of movies using the OMDB API
- **Detailed Movie Information**: View comprehensive movie details including plot, cast, director, runtime, and IMDb ratings
- **Interactive Rating System**: Rate movies on a 10-star scale with an intuitive star rating component
- **Watched List Management**: Keep track of movies you've watched with personal ratings and statistics
- **Persistent Storage**: Your watched list is automatically saved to local storage
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Keyboard Shortcuts**: Use 'Enter' to quickly focus the search bar and 'Escape' to close movie details
- **Loading States & Error Handling**: Smooth user experience with proper loading indicators and error messages

## 🛠️ Tech Stack

- **Frontend**: React 18 with Hooks
- **Styling**: CSS Modules (component-scoped styling)
- **API**: OMDB API for movie data
- **State Management**: React's built-in useState and useEffect
- **Custom Hooks**: 
  - `useMovies` - Handles movie search and API calls
  - `useLocalStorageState` - Manages persistent state
  - `useKey` - Keyboard event handling
- **Build Tool**: Create React App
- **Testing**: React Testing Library

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OMDB API Key (free from [omdbapi.com](http://www.omdbapi.com/))

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/usePopcorn.git
   cd usePopcorn
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up API Key**
   - Get your free API key from [OMDB API](http://www.omdbapi.com/)
   - Open `src/App.js`
   - Replace the `KEY` constant with your API key:
     ```javascript
     const KEY = "your-api-key-here";
     ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

1. **Search for Movies**: Type in the search bar to find movies by title
2. **Browse Results**: Scroll through the list of matching movies
3. **View Details**: Click on any movie to see detailed information
4. **Rate Movies**: Use the star rating component to give your personal rating
5. **Add to Watched**: Click "Add to list" to save the movie to your watched collection
6. **Manage Watched List**: View statistics and remove movies from your watched list
7. **Keyboard Shortcuts**:
   - Press `Enter` to focus the search bar
   - Press `Escape` to close movie details

## 📁 Project Structure

```
usePopcorn/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── App.js              # Main application component
│   ├── index.js            # Application entry point
│   ├── index.css           # Global styles
│   ├── starRating.js       # Star rating component
│   ├── useMovies.js        # Custom hook for movie search
│   ├── useLocalStorageState.js  # Custom hook for local storage
│   ├── useKey.js           # Custom hook for keyboard events
│   └── App-v1.js to App-v3.js  # Previous versions (for reference)
├── package.json
└── README.md
```

## 🧪 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

## 🤝 Contributing

Contributions are welcome! This project is part of Jonas Schmedtmann's Ultimate React Course. If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

**Happy movie watching! 🍿🎬**



### Live demo : 


https://github.com/user-attachments/assets/5671fe47-6efc-4c19-9562-fe7d513494f6


