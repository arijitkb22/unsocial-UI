import { createContext, useState } from "react";

export const suggestionContext = createContext({
  similarInterestPeople: ["Manan Desai", "Rhea Benny", "Archana Chanda"],
  similarTechnologyPeople: ["Manan Desai", "Rhea Benny", "Archana Chanda"],
  similarCareerPeople: ["Manan Desai", "Rhea Benny", "Archana Chanda"],
  similarCollagePeople: ["Manan Desai", "Rhea Benny", "Archana Chanda"],
});

const SuggestionProvider = ({ children }) => {
  const [similarInterestPeople, setSimilarInterestPeople] = useState([
    "Manan Desai",
    "Rhea Benny",
    "Archana Chanda",
  ]);
  const [similarTechnologyPeople, setSimilarTechnologyPeople] = useState([
    "Manan Desai",
    "Rhea Benny",
    "Archana Chanda",
  ]);
  const [similarCareerPeople, setSimilarCareerPeople] = useState([
    "Manan Desai",
    "Rhea Benny",
    "Archana Chanda",
  ]);
  const [similarCollagePeople, setSimilarCollagePeople] = useState([
    "Manan Desai",
    "Rhea Benny",
    "Archana Chanda",
  ]);
  return (
    <suggestionContext.Provider
      value={{
        similarInterestPeople,
        similarTechnologyPeople,
        similarCareerPeople,
        similarCollagePeople,
      }}
    >
      {children}
    </suggestionContext.Provider>
  );
};

export default SuggestionProvider;
