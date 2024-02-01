"use client";

// Import necessary libraries and components
import {
  ChangeEvent,
  FormEvent,
  useState,
  useEffect,
  useCallback,
} from "react";
import { debounce } from "lodash"; // For debouncing the search input
import dictionaryData from "./dictionary.json"; // The dictionary data
import { SearchIcon } from "lucide-react"; // The search icon component
import { Input } from "./ui/input"; // The input component
import { Command } from "@/components/ui/command"; // The command component
import { Button } from "./ui/button"; // The button component

// Define the structure of the dictionary
interface Dictionary {
  [key: string]: string;
}

// Initialize the dictionary with the imported data
const dictionary: Dictionary = dictionaryData;

// Define the Search component
export default function Search() {
  // Initialize state variables
  const [query, setQuery] = useState<string>(""); // The search query
  const [suggestions, setSuggestions] = useState<string[]>([]); // The search suggestions
  const [message, setMessage] = useState<JSX.Element | null>(null); // The message to display
  const [currentPage, setCurrentPage] = useState(1); // The current page of results
  const [matchingWords, setMatchingWords] = useState<string[]>([]); // The words that match the query
  const itemsPerPage = 10; // The number of items to display per page

  // Define the function to handle changes to the search input
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value); // Update the query state
  };

  // Define the function to get search suggestions
  const getSuggestions = useCallback(
    debounce((query: string) => {
      if (query) {
        // If there is a query, filter the dictionary for matching words
        const filteredSuggestions = Object.keys(dictionary)
          .filter((word) => word.toLowerCase().startsWith(query.toLowerCase()))
          .slice(0, 10); // Limit the number of suggestions to 10
        setSuggestions(filteredSuggestions); // Update the suggestions state
      } else {
        setSuggestions([]); // If there is no query, clear the suggestions
      }
    }, 300),
    []
  ); // Debounce the function to limit the number of calls

  // Use an effect hook to update the suggestions whenever the query changes
  useEffect(() => {
    getSuggestions(query);
  }, [query, getSuggestions]); // Add getSuggestions in the dependency array

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
  const handlePreviousClick = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); // Decrement the current page
    }
  }, [currentPage]); // Add currentPage in the dependency array

  // Define the function to handle clicks on the next button
  const handleNextClick = useCallback(() => {
    const totalPages = Math.ceil(matchingWords.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1); // Increment the current page
    }
  }, [matchingWords, itemsPerPage, currentPage]); // Add necessary dependencies

  // Define the function to handle form submission
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
  }, [matchingWords, currentPage, handleNextClick, handlePreviousClick]); // Add the functions in the dependency array

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
