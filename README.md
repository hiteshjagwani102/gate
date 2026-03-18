# GATE 2026 Result Portal

A React application simulating the GATE 2026 result/scorecard portal for IIT Guwahati.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```

---

## 🗂️ Project Structure

```
gate2026/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Top navigation bar
│   │   ├── HomePage.jsx            # Landing page with notices
│   │   ├── LoginPage.jsx           # Candidate login with captcha
│   │   ├── ResultPage.jsx          # Result page with download/print buttons
│   │   ├── Scorecard.jsx           # Full scorecard document layout
│   │   ├── ChairmanSignature.jsx   # SVG chairman signature
│   │   ├── CandidateSignature.jsx  # SVG candidate signature
│   │   ├── PhotoBox.jsx            # Candidate photo placeholder
│   │   └── QRCode.jsx              # SVG QR code
│   ├── data/
│   │   └── constants.js            # Candidate data & credentials
│   ├── App.jsx                     # Root component & routing
│   ├── index.js                    # React entry point
│   └── index.css                   # Global styles & animations
├── package.json
└── README.md
```

---

## 🔑 Demo Credentials

| Field         | Value           |
|---------------|-----------------|
| Enrollment ID | `PI26S53016056` |
| Password      | `GATE@2026`     |

---

## ✨ Features

- **Home page** with scrolling notice marquee and quick links
- **Login page** with dynamic captcha validation
- **Scorecard** matching official GATE 2025 format:
  - Candidate details table
  - GATE Score & Marks out of 100
  - All India Rank (AIR) with total candidates
  - Qualifying marks table (General / OBC-NCL/EWS / SC/ST/PwD)
  - SVG QR code for verification
  - Validity banner
  - Chairman signature & official seal
  - GATE Score Computation formula (Page 2)
- **PDF Download** using `html2canvas` + `jsPDF`
- **Print** support with buttons hidden in print view

---

## 🛠️ Customisation

To update the candidate data, edit `src/data/constants.js`:

```js
export const RESULT_DATA = {
  name: "YOUR NAME",
  registrationNumber: "YOUR_REG_NO",
  // ...
};

export const VALID_CREDS = {
  enrollment: "YOUR_REG_NO",
  password: "YOUR_PASSWORD",
};
```
