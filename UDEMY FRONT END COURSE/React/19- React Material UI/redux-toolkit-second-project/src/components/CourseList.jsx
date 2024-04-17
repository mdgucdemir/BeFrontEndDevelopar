import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCourse } from "../store/slices/courseSlice";

const CourseList = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector(({ form, courses: { searchTerm, data } }) => {
    const filteredCourses = data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      courses: filteredCourses,
    };
    // return state.courses.data;
  });

  const renderedCourses = courses.map((course) => (
    <div key={course.id} className="panel">
      <h1>{course.name}</h1>
      <p>{course.description}</p>
      <p>
        {course.cost} <span>TL</span>
      </p>
      <button
        className="button is-danger"
        onClick={() => {
          dispatch(removeCourse(course.id));
        }}
      >
        Sil
      </button>
    </div>
  ));

  return <div className="courseList mt-5">{renderedCourses}</div>;
};

export default CourseList;
