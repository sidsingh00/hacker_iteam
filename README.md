# Item List Manager

A simple and elegant React application that allows users to manage a list of items. Built with React, TypeScript, and Tailwind CSS.

## Features

- Add items to a list through a user-friendly interface
- Clean and modern design
- Responsive layout that works on all devices
- Input validation to prevent empty items
- Support for keyboard navigation (Enter to add items)

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite (Build tool)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Usage

1. Enter an item in the input field
2. Click "Add Item" or press Enter to add the item to the list
3. The item will appear in the list below
4. Empty items are automatically filtered out

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── src/
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Application entry point
│   └── index.css      # Global styles and Tailwind imports
├── public/
├── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request