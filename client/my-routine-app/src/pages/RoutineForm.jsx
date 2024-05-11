import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

const RoutineForm = () => {
  const [formData, setFormData] = useState({
    facultyFile: null,
    courseFile: null,
    sectionFile: null,
    roomFile: null,
  });

  const [error, setError] = useState(null);
  const history = useHistory();

  const handleFileChange = (event, fileType) => {
    setFormData({
      ...formData,
      [fileType]: event.target.files[0],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();

    formDataToSend.append("facultyFile", formData.facultyFile);
    formDataToSend.append("courseFile", formData.courseFile);
    formDataToSend.append("sectionFile", formData.roomFile);
    formDataToSend.append("roomFile", formData.sectionFile);

    try {
      const response = await axios.post(
        "http://localhost:8000/generate_routine/",
        formDataToSend
      );
      // console.log(response);
      localStorage.setItem("routineData", JSON.stringify(response.data));
      // history.push({
      //   pathname: "/display",
      //   state: { response: response.data },
      // });
      window.location.href = "/display";
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center h-screen bg-blue-500">
          <div className="py-6 px-7 w-full rounded-2xl bg-white max-w-96">
            <p className="text-2xl text-blue-800 font-bold pb-2 mb-4 border-b-2 border-blue-600">
              Routine Creation System
            </p>

            <div className="text-lg relative flex flex-col mb-2.5 md:text-base xl:text-base">
              <label className="flex text-base mb-0.5 xl:text-lg">
                Faculty Details
              </label>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "facultyFile")}
                className="
      file:mr-2.5 file:py-1.5 file:px-4
      file:rounded-md file:border file:border-gray-300
      file:text-sm file:text-gray-500
      file:bg-white hover:file:bg-gray-200"
              />
            </div>

            <div className="text-sm relative flex flex-col mb-2.5 md:text-base xl:text-base">
              <label className="flex text-base mb-0.5 xl:text-lg">
                Subject Details
              </label>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "courseFile")}
                className="
      file:mr-2.5 file:py-1.5 file:px-4
      file:rounded-md file:border file:border-gray-300
      file:text-sm file:text-gray-500
      file:bg-white hover:file:bg-gray-200"
              />
            </div>

            <div className="text-sm relative flex flex-col mb-2.5 md:text-base xl:text-base">
              <label for="" className="flex text-base mb-0.5 xl:text-lg">
                Section Details
              </label>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "sectionFile")}
                className="
      file:mr-2.5 file:py-1.5 file:px-4
      file:rounded-md file:border file:border-gray-300
      file:text-sm file:text-gray-500
      file:bg-white hover:file:bg-gray-200"
              />
            </div>

            <div className="text-sm relative flex flex-col mb-2.5 md:text-base xl:text-base">
              <label for="" className="flex text-base mb-0.5 xl:text-lg">
                Room Details
              </label>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "roomFile")}
                className="
      file:mr-2.5 file:py-1.5 file:px-4
      file:rounded-md file:border file:border-gray-300
      file:text-sm file:text-gray-500
      file:bg-white hover:file:bg-gray-200"
              />
            </div>

            <div className="text-base cursor-pointer font-medium text-center bg-blue-700 text-white mt-4 py-2.5 border-none outline-none rounded-md hover:bg-blue-600">
              <input type="submit" value="Submit" className="cursor-pointer"/>
            </div>
          </div>
        </div>
      </form>
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default RoutineForm;
