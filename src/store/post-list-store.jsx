import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  handleLike: () => {},
});

const postListReducer = (state, action) => {
  let newState = state;
  if (action.type === "ADD_POST") {
    newState = [action.payload, ...state];
  }
  if (action.type === "UPDATE_LIKE") {
    newState.map((post) => {
      if (post.id === action.payload.id) {
        console.log(`Before ${post.likes}`);
        post.likes += 1;
        console.log(`After ${post.likes}`);
      }
    });
  }
  return newState;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userTag, postBody) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now,
        userTag: userTag,
        body: postBody,
        likes: 0,
        comments: 0,
        userId: userTag,
        tags: ["vacation", "Mumbai", "Enjoying"],
      },
    });
  };

  const handleLike = (postId) => {
    console.log(`Liked ${postId}`);
    dispatchPostList({
      type: "UPDATE_LIKE",
      payload: {
        id: postId,
      },
    });
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, handleLike }}>
      {children}
    </PostListContext.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    userTag: "@arijit-bera",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
    likes: 1000,
    comments: 125,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    userTag: "@immanuel-c",
    body: "4 saal ki masti k baad bhi ho gya hain pass. hard to believe.",
    likes: 1005,
    comments: 125,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
  },
];
export default PostListProvider;
