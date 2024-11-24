// Definiši komponente koje će pravilno renderovati različite blokove teksta
const customComponents = {
  types: {
    code: ({ value }) => {
      if (!value || !value.code) return null;

      return (
        <pre className="block bg-gray-900 text-white p-4 overflow-auto rounded-md  my-4 w-full">
          <code className={`language-${value.language}`}>{value.code}</code>
        </pre>
      );
    },
  },
  block: {
    // Renderovanje različitih stilova blokova
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold my-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold my-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold my-2">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold my-1">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg font-semibold my-1">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-lg font-semibold my-1">{children}</h6>
    ),
    normal: ({ children }) => (
      <p className="text-base leading-7 my-2">{children}</p>
    ), // Ovo je za paragrafe
  },
  marks: {
    // Renderovanje stilova unutar tekstualnih blokova
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => (
      <a href={value.href} className="text-blue-500 hover:underline">
        {children}
      </a>
    ),
  },
  list: {
    // Renderovanje listi (bullet i numbered)
    bullet: ({ children }) => <ul className="list-disc ml-6">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6">{children}</ol>,
  },
  listItem: {
    // Renderovanje stavki listi
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
};

export default customComponents;
