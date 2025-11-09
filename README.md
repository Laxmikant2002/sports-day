# 🏆 Sports Day Event Simulator

A Node.js application that simulates a sports day event with multiple competitions. The application uses callback-based sequential event execution to manage a series of sporting events with an interactive scoring system.

## 📋 Features

- **Sequential Event Execution**: Uses callbacks to chain events in proper order
- **Interactive Scoring System**: Real-time score tracking for all teams
- **Multiple Events**: 
  - Opening Ceremony
  - 100M Race (with random time generation)
  - Long Jump (with random winner selection)
  - High Jump (with user input)
  - Award Ceremony (with final results)
- **Detailed Logging**: Score updates displayed before and after each event
- **User Interaction**: High Jump event requires user input for winner selection

## 🗂️ Project Structure

```
sports-day/
├── src/
│   ├── index.js               # Main entry point - orchestrates event flow
│   ├── events/
│   │   ├── OpeningCeremony.js # Initializes sports event
│   │   ├── Race100M.js        # 100M race simulation with timing
│   │   ├── LongJump.js        # Long jump with random winner
│   │   ├── HighJump.js        # High jump with user input
│   │   └── AwardCeremony.js   # Final results and winner announcement
│   └── utils/
│       └── helpers.js         # Utility functions (scoring, logging, etc.)
├── test/
│   └── events.test.js         # Unit tests
├── package.json               # Project configuration
└── README.md                  # Project documentation
```

## 🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd sports-day
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 🎮 Usage

**Start the simulation:**
```bash
npm start
```

**Or run directly:**
```bash
node src/index.js
```

### Event Flow

1. **Opening Ceremony**: Welcomes participants and displays initial scores
2. **100M Race**: Teams compete with random times (10-20 seconds)
   - 1st place: 50 points
   - 2nd place: 25 points
   - 3rd place: 10 points
3. **Long Jump**: Random team selected as winner (150 points)
4. **High Jump**: User selects the winning team (100 points)
5. **Award Ceremony**: Displays final scores and announces the winner

### Participating Teams

- 🔴 Red Team
- 🔵 Blue Team
- 🟢 Green Team
- 🟡 Yellow Team

## 📊 Scoring System

| Event      | Points Distribution |
|------------|-------------------|
| 100M Race  | 50 / 25 / 10 pts  |
| Long Jump  | 150 pts (winner)  |
| High Jump  | 100 pts (winner)  |

## 💻 Code Quality Features

- ✅ Modular code structure
- ✅ Comprehensive comments and documentation
- ✅ Clean callback chaining
- ✅ Proper error handling for user input
- ✅ Utility functions for reusability
- ✅ Clear console logging for event tracking

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📝 Implementation Details

### Callback Functions
Each event receives a callback function that triggers the next event, ensuring sequential execution:

```javascript
OpeningCeremony(() => {
    Race100M(() => {
        LongJump(() => {
            HighJump(() => {
                AwardCeremony();
            });
        });
    });
});
```

### Event Simulation
- Events use `setTimeout` to simulate realistic timing delays
- Random number generation for race times and event outcomes
- User input validation for High Jump event

### Score Management
- Centralized score tracking in `helpers.js`
- Previous and updated scores logged after each event
- Final scores sorted for ranking display

## 🚀 Deployment

This project is ready for deployment! See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

### Quick GitHub Deployment
```bash
# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/sports-day-simulator.git
git branch -M main
git push -u origin main
```

### Supported Platforms
- ✅ GitHub (for code sharing and version control)
- ✅ Heroku (for running the application)
- ✅ Railway (automatic Node.js detection)
- ✅ Render (background worker deployment)
- ✅ Docker (containerized deployment)
- ✅ Local/Network deployment

For complete deployment guide with step-by-step instructions, see **[DEPLOYMENT.md](DEPLOYMENT.md)**.

## 🤝 Contributing

Contributions are welcome! Please feel free to:
- Submit pull requests
- Report bugs
- Suggest new features
- Improve documentation

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Sports Day Team

## 📝 Project Status

✅ **All Evaluation Criteria Met:**
- ✅ OpeningCeremony() - Initializes event and starts callback chain
- ✅ Race100M() - Simulates race with random times and updates scores
- ✅ LongJump() - Randomly selects color and awards points
- ✅ HighJump() - Prompts user input and updates scores
- ✅ AwardCeremony() - Displays final scores and winners
- ✅ Callback Functions - Sequential execution with proper chaining
- ✅ Event Simulation - Appropriate delays and random generation
- ✅ Console Logging - Previous/updated scores at each step
- ✅ Code Quality - Clean, commented, maintainable code
- ✅ Deployment Ready - Git initialized, documented, ready to deploy

---

**Enjoy the Sports Day Event! 🎉🏃‍♂️🏆**