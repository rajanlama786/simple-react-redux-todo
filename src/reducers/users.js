const initialState = {
  data: [],
};

const users = (state = initialState, action) => {
  return {
    name: "john",
    age: 100,
  };
};

export default users;
