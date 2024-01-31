# Autocomplete Search UI Component

Live website: https://search-shivkumar-raghuwanshis-projects.vercel.app/
## Overview

This project is a robust autocomplete search UI component built with a modern tech stack including Next.js 14, TypeScript, Tailwind CSS, and Shadcn UI. It provides users with word suggestions as they type in the search bar, and it also includes a dictionary lookup feature to get the definition of a word.

## Tech Stack

- **Next.js 14**: A React framework for building modern web applications.
- **TypeScript**: A statically typed superset of JavaScript that adds types and other powerful features.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **Shadcn UI**: A UI library for building high-quality, accessible design systems and web apps.

## Features

### Autocomplete Functionality

As users type in the search bar, the component suggests words that start with the input value. This is achieved by filtering the keys of a dictionary object that match the current query. The suggestions are updated at each change of the input value.

### Dictionary Lookup

When a user clicks on a suggested word, the component displays its definition. If the word does not exist in the dictionary, a message is displayed indicating that the word does not exist in our dictionary.

### Pagination

If there are many words that match the query, they are displayed in pages. Users can navigate through the pages using the "Previous" and "Next" buttons.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of Node.js and npm.

### Installation

Follow these steps to get a copy of the project up and running on your local machine for development and testing purposes:

1. Clone the repository:
  
  https://github.com/Shivkumar-Raghuwanshi/search


## Usage
To start the development server, run the following command:

npm run dev

Then, open http://localhost:3000 with your browser to see the result.

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

## Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
## License
Distributed under the MIT License. See LICENSE for more information.
