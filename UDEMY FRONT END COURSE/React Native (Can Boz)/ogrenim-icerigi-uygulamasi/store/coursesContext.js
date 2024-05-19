import { createContext, useReducer } from "react";

export const CoursesContext = createContext({
  courses: [],
  addCourse: ({ description, amount, date }) => {},
  deleteCourse: (id) => {},
  setCourse: (courses) => {},
  updateCourse: (id, { description, amount, date }) => {},
});

function coursesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      // const id = new Date().toString() + Math.random().toString();
      return [action.payload, ...state];
    case "DELETE":
      return state.filter((course) => course.id !== action.payload);
    case "SET":
      const reversedData = action.payload.reverse();
      return reversedData;
    case "UPDATE":
      const updatableCourseIndex = state.findIndex(
        (course) => course.id === action.payload.id
      );
      const updatableCourse = state[updatableCourseIndex];
      const updatedItem = { ...updatableCourse, ...action.payload.data };
      const updatedCourses = [...state];
      updatedCourses[updatableCourseIndex] = updatedItem;
      return updatedCourses;
    default:
      return state;
  }
}

function CoursesContextProvider({ children }) {
  const [coursesState, dispatch] = useReducer(coursesReducer, []);

  function addCourse(courseData) {
    dispatch({ type: "ADD", payload: courseData });
  }
  function deleteCourse(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function setCourse(courses) {
    dispatch({ type: "SET", payload: courses });
  }
  function updateCourse(id, courseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: courseData } });
  }

  const value = {
    courses: coursesState,
    addCourse: addCourse,
    deleteCourse: deleteCourse,
    setCourse: setCourse,
    updateCourse: updateCourse,
  };

  return (
    <CoursesContext.Provider value={value}>{children}</CoursesContext.Provider>
  );
}

export default CoursesContextProvider;
