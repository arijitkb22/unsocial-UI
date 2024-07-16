import { createContext, useState } from "react";

export const UserContext = createContext({
  userName: "Arijit Bera",
  userTag: "@arijit-bera",
  bio: "I am social as a politician and unsocial as you are.",
  recentFollowersList: [
    "Sumana Kayal",
    "Immanuel C",
    "SoumyaJit bera",
    "Saikat kayal",
  ],
  followings: 10,
  followers: 10,
});

const UserContextProveider = ({ childern }) => {
  const [userName, setUserName] = useState("Arijit Bera");
  const [userTag, setUserTag] = useState("@arijit-bera");
  const [bio, setBio] = useState(
    "I am social as a politician and unsocial as you are."
  );
  const [recentFollowersList, setRecentFollowersList] = useState([
    "Sumana Kayal",
    "Immanuel C",
    "SoumyaJit bera",
    "Saikat kayal",
  ]);
  const [followings, setFolowings] = useState(10);
  const [followers, setFollowers] = useState(10);
  return (
    <UserContext.Provider
      value={{
        userName,
        recentFollowersList,
        userTag,
        followers,
        followings,
        bio,
      }}
    >
      {childern}
    </UserContext.Provider>
  );
};
