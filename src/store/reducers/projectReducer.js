const initState = {
  projects: [
    { id: 1, title: "Hello", content: "blah blah blah" },
    { id: 2, title: "Hello", content: "blah blah blah" },
    { id: 3, title: "Hello", content: "blah blah blah" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      break;
    default:
      return state;
  }
};

export default projectReducer;
