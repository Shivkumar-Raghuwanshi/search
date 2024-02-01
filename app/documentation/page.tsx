import MyCodeBlock from "@/components/CodeBlock";
import Link from "next/link";

const listItems = [
  {
    id: 1,
    name: "Introduction",
    href: "#introduction",
  },
  {
    id: 2,
    name: "Tech Stack",
    href: "#tech-stack",
  },
  {
    id: 3,
    name: "Features",
    href: "#features",
  },
  {
    id: 4,
    name: " Components",
    href: "#components",
  },
  {
    id: 5,
    name: "Installation",
    href: "#installation",
  },
  {
    id: 6,
    name: "Usage",
    href: "#usage",
  },
  {
    id: 7,
    name: "Customization",
    href: "#customization",
  },
];
const Documentation = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">
        Autocomplete Search UI Component
      </h1>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Table of Contents</h2>
      <ul className="list-disc ml-5">
        {listItems.map((item) => (
          <li key={item.id}>
            <Link href={item.href} className="text-blue-500 hover:underline">
              {item.name}
            </Link>
          </li>
        ))}
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
        Tech Stackwr
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
          <strong>Tailwind CSS</strong>: A utility-first CSS framework for
          rapidly building custom user interfaces.
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
        If there are many words that match the query, they are displayed in
        pages. Users can navigate through the pages using the "Previous" and
        "Next" buttons.
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
        The `Command` component is a reusable component for the command prompt.
        It receives the command text as a prop.
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
          <MyCodeBlock
            code={`git clone https://github.com/Shivkumar-Raghuwanshi/search`}
          />
        </li>
        <li>
          Navigate to the project directory:
          <MyCodeBlock code={`cd Project-Name`} />
        </li>
        <li>
          Install the dependencies:
          <MyCodeBlock code={`npm install`} />
        </li>
      </ol>
      <h2 id="usage" className="text-2xl font-semibold mt-6 mb-2">
        Usage
      </h2>
      <p>
        To use the Autocomplete Search UI component, create and import it in
        your component and render it .
      </p>

      <h2 id="customization" className="text-2xl font-semibold mt-6 mb-2">
        Customization
      </h2>
      <p>
        You can customize the Autocomplete Search UI component by modifying the
        styles in the Tailwind CSS classes an Shadcn ui. You can also modify the
        `dictionary.json` file to add or remove words and their definitions.
      </p>
    </div>
  );
};

export default Documentation;
