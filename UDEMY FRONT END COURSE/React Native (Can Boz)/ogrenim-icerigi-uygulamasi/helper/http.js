import axios from "axios";

const url = "https://react-native-9341b-default-rtdb.firebaseio.com";

export async function storeCourse(courseDate) {
  const response = await axios.post(url + "/courses.json", courseDate);
  const id = response.data.name;
  return id;
}

export async function getCourses() {
  const response = await axios.get(url + "/courses.json");
  const courses = [];

  for (const key in response.data) {
    const courseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    courses.push(courseObj);
  }
  return courses;
}

export function updateCourseHttp(id, courseDate) {
  return axios.put(url + `/courses/${id}.json`, courseDate);
}

export function deleteCourseHttp(id) {
  return axios.delete(url + `/courses/${id}.json`);
}
