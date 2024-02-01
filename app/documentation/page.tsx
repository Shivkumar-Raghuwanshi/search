import CodeBlock from "@/components/CodeBlock";

const Documentation = () => {

  return(
    <div className="p-6">
    <h1 className="text-4xl font-bold mb-4">
      Autocomplete Search UI Component
    </h1>
    <h2 className="text-2xl font-semibold mt-6 mb-2">Table of Contents</h2>
    <ul className="list-disc ml-5">
      <li>
        <a href="#introduction" className="text-blue-500 hover:underline">
          Introduction
        </a>
      </li>
      <li>
        <a href="#tech-stack" className="text-blue-500 hover:underline">
          Tech Stack
        </a>
      </li>
      <li>
        <a href="#features" className="text-blue-500 hover:underline">
          Features
        </a>
      </li>
      <li>
        <a href="#components" className="text-blue-500 hover:underline">
          Components
        </a>
      </li>
      <li>
        <a href="#installation" className="text-blue-500 hover:underline">
          Installation
        </a>
      </li>
      <li>
        <a href="#usage" className="text-blue-500 hover:underline">
          Usage
        </a>
      </li>
      <li>
        <a href="#customization" className="text-blue-500 hover:underline">
          Customization
        </a>
      </li>
      <li>
        <a href="#contributing" className="text-blue-500 hover:underline">
          Contributing
        </a>
      </li>
    </ul>
    <h2 id="introduction" className="text-2xl font-semibold mt-6 mb-2">
      Introduction
    </h2>
    <p>
      The Autocomplete Search UI component is a powerful search feature that
      provides real-time word suggestions as the user types in the search bar.
      It's built using Next.js 14, TypeScript, Tailwind CSS, and Shadcn UI.
    </p>
    <h2 id="tech-stack" className="text-2xl font-semibold mt-6 mb-2">
      Tech Stack
    </h2>
    <p>This project uses the following technologies:</p>
    <ul className="list-disc ml-5">
      <li>
        <strong>Next.js 14</strong>: A React framework for building modern web
        applications.
      </li>
      <li>
        <strong>TypeScript</strong>: A statically typed superset of JavaScript
        that adds types and other powerful features.
      </li>
      <li>
        <strong>Tailwind CSS</strong>: A utility-first CSS framework for rapidly
        building custom user interfaces.
      </li>
      <li>
        <strong>Shadcn UI</strong>: A UI library for building high-quality,
        accessible design systems and web apps.
      </li>
    </ul>
    <h2 id="features" className="text-2xl font-semibold mt-6 mb-2">
      Features
    </h2>
    <h3 className="text-xl font-semibold mt-4 mb-2">
      Autocomplete Functionality
    </h3>
    <p>
      The autocomplete functionality is achieved by filtering the keys of a
      dictionary object that match the current query. The suggestions are
      updated at each change of the input value.
    </p>
    <h3 className="text-xl font-semibold mt-4 mb-2">Dictionary Lookup</h3>
    <p>
      When a user clicks on a suggested word, the component displays its
      definition. If the word does not exist in the dictionary, a message is
      displayed indicating that the word does not exist in our dictionary.
    </p>
    <h3 className="text-xl font-semibold mt-4 mb-2">Pagination</h3>
    <p>
      If there are many words that match the query, they are displayed in pages.
      Users can navigate through the pages using the "Previous" and "Next"
      buttons.
    </p>
    <h2 id="components" className="text-2xl font-semibold mt-6 mb-2">
      Components
    </h2>
    <h3 className="text-xl font-semibold mt-4 mb-2">Search Component</h3>
    <p>
      The main component is the `Search` component. It maintains the state of
      the search query, the list of suggestions, the current message, the
      current page, and the list of matching words. It also defines the event
      handlers for the form submission, the input change, and the suggestion
      click.
    </p>
    <h3 className="text-xl font-semibold mt-4 mb-2">Input Component</h3>
    <p>
      The `Input` component is a reusable component for the input field. It
      receives the current query and the change event handler as props.
    </p>
    <h3 className="text-xl font-semibold mt-4 mb-2">Button Component</h3>
    <p>
      The `Button` component is a reusable component for the buttons. It
      receives the click event handler and the button label as props.
    </p>
    <h3 className="text-xl font-semibold mt-4 mb-2">Command Component</h3>
    <p>
      The `Command` component is a reusable component for the command prompt. It
      receives the command text as a prop.
    </p>
    <h2 id="installation" className="text-2xl font-semibold mt-6 mb-2">
      Installation
    </h2>
    <p>
      Follow these steps to get a copy of the project up and running on your
      local machine for development and testing purposes:
    </p>
    <ol className="list-decimal ml-5">
      <li>
        Clone the repository:
        <CodeBlock
          code={`git clone https://github.com/your_username_/Project-Name.git`}
        />
      </li>
      <li>
        Navigate to the project directory:
        <CodeBlock code={`cd Project-Name`} />
      </li>
      <li>
        Install the dependencies:
        <CodeBlock code={`npm install`} />
      </li>
    </ol>
    <h2 id="usage" className="text-2xl font-semibold mt-6 mb-2">
      Usage
    </h2>
    <p>
      To use the Autocomplete Search UI component, create and import it in your
      component and render it as follows:
    </p>
    <h3 id="usage" className="text-xl font-semibold mt-6 mb-2">
      Search Component
    </h3>
    <CodeBlock
      code={`
"use client";
      // Import necessary libraries and components;

      import { ChangeEvent, FormEvent, useState, useEffect } from "react";
      import { debounce } from "lodash"; // For debouncing the search input
      import dictionaryData from "./dictionary.json"; // The dictionary data
      import { SearchIcon } from "lucide-react"; // The search icon component
      import { Input } from "./ui/input"; // The input component
      import { Command } from "@/components/ui/command"; // The command component
      import { Button } from "./ui/button"; // The button component
      
      // Define the structure of the dictionary;

      interface Dictionary {
        [key: string]: string;
      }
      
      // Initialize the dictionary with the imported data;
      const dictionary: Dictionary = dictionaryData;
      
      // Define the Search component
      export default function Search() {
        // Initialize state variables
        const [query, setQuery] = useState<string>(""); // The search query,
        const [suggestions, setSuggestions] = useState<string[]>([]); // The search suggestions
        const [message, setMessage] = useState<JSX.Element | null>(null); // The message to display,
        const [currentPage, setCurrentPage] = useState(1); // The current page of results,
        const [matchingWords, setMatchingWords] = useState<string[]>([]); // The words that match the query
        const itemsPerPage = 10; // The number of items to display per page
      
        // Define the function to handle changes to the search input
        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
          setQuery(event.target.value); // Update the query state
        };
      
        // Define the function to get search suggestions
        const getSuggestions = debounce((query: string) => {
          if (query) {
            // If there is a query, filter the dictionary for matching words
            const filteredSuggestions = Object.keys(dictionary)
              .filter((word) => word.toLowerCase().startsWith(query.toLowerCase()))
              .slice(0, 10); // Limit the number of suggestions to 10
            setSuggestions(filteredSuggestions); // Update the suggestions state
          } else {
            setSuggestions([]); // If there is no query, clear the suggestions
          }
        }, 300); // Debounce the function to limit the number of calls
      
        // Use an effect hook to update the suggestions whenever the query changes
        useEffect(() => {
          getSuggestions(query);
        }, [query]);
      
        // Define the function to handle clicks on the suggestions
        const handleSuggestionClick = (word: string) => {
          setQuery(word); // Set the query to the clicked word
          setSuggestions([]); // Clear the suggestions
          if (dictionary.hasOwnProperty(word)) {
            // If the word is in the dictionary, display its definition
            setMessage(
              <p className="bg-slate-50 p-2 my-4 rounded-md border">
                <strong>{word}</strong>: {dictionary[word]}
              </p>
            );
          }
        };
      
        // Define the function to handle clicks on the previous button
        const handlePreviousClick = () => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1); // Decrement the current page
          }
        };
      
        // Define the function to handle clicks on the next button
        const handleNextClick = () => {
          const totalPages = Math.ceil(matchingWords.length / itemsPerPage);
          if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1); // Increment the current page
          }
        };
      
        // Define the function to handle form submission;

        const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
          event.preventDefault(); // Prevent the default form submission behavior
          const words = Object.keys(dictionary).filter((word) =>
            word.toLowerCase().startsWith(query.toLowerCase())
          );
          setMatchingWords(words); // Update the matching words state
          setSuggestions([]); // Clear the suggestions
        };
      
        // Use an effect hook to update the message whenever the matching words or current page changes

        useEffect(() => {
          setMessage(
            <div>
              {matchingWords
                .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                .map((word) => (
                  <div key={word}>
                    <div className="bg-slate-50 p-2 my-4 rounded-md border">
                      <strong className="text-lg">{word}</strong>: {dictionary[word]}
                    </div>
                  </div>
                ))}
              {matchingWords.length >= 1 && (
                <div className="flex gap-2">
                  <Button onClick={handlePreviousClick}>Previous</Button>
                  <Button onClick={handleNextClick}>Next</Button>
                </div>
              )}
            </div>
          );
        }, [matchingWords, currentPage]);
      
        return (
          <div className="relative w-full">
            <form onSubmit={handleSubmit} className="fixed  w-full z-10 ">
              <div className="bg-gray-50 w-full h-20 p-2 drop-shadow-lg">
                <div className="flex justify-center items-center gap-2 bg-white p-2 rounded-md mx-auto md:w-1/2">
                  <SearchIcon />
                  <Input
                    type="search"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search ..."
                    required
                  />
                </div>
              </div>
              <div>
                <Command className="rounded-lg border-none shadow-md w-full md:w-1/2 mx-auto ">
                  <div>
                    {suggestions.map((suggestion) => (
                      <div
                        key={suggestion}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="flex justify-start items-center px-2 py-0.5 cursor-pointer hover:bg-slate-100 rounded-md"
                      >
                        <SearchIcon className="mr-2 h-4 w-4" />
                        <span>{suggestion}</span>
                      </div>
                    ))}
                  </div>
                </Command>
              </div>
            </form>
            <div className="px-4 py-20">
              <div>{message}</div>
            </div>
          </div>
        );
      }
       `}
    />
    <h3 id="usage" className="text-xl font-semibold mt-6 mb-2">
      HomePage
    </h3>
    <CodeBlock
      code={`
    import Search from './Search';

    function Home() {
      return (
        <div className="App">
          <Search />
        </div>
      );
    }

    export default Home;
    `}
    />
    <h2 id="customization" className="text-2xl font-semibold mt-6 mb-2">
      Customization
    </h2>
    <p>
      You can customize the Autocomplete Search UI component by modifying the
      styles in the Tailwind CSS classes an Shadcn ui. You can also modify the
      `dictionary.json` file to add or remove words and their definitions.
    </p>
  </div>
  )
}

export default Documentation;
