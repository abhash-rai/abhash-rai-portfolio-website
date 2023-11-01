import { useContext } from "react";
import MainContext from "./MainContext";

import TrafficImageClassifier from "../Project_banners/traffic_image_classifier.png";
import FaceRecognitionAttendanceSystemImage from "../Project_banners/face_recognition_attendance_system.png";

const projects = [
  {
    ProjectImage: TrafficImageClassifier,
    ProjectName: "Traffic Image Classifier",
    ProjectDescription:
      "A web-based solution for precise traffic condition classification, leveraging machine learning techniques, including Convolutional Neural Network and Transfer Learning (Xception), delivering 95% accuracy in discerning traffic scenarios.  It encompasses a comprehensive workflow, from Data Collection (Manual, Web Scrapping), EDA, Data Augmentation, Model Training (ML Algorithms, CNN, Transfer Learning), Hyperparameter Tuning, Model Validation, and Deployment (UI Design, React and FastAPI).",
    TechnologiesUsed: [
      "Python",
      "Keras (Tensorflow)",
      "scikit-learn",
      "Matplotlib",
      "OpenCV",
      "Pandas",
      "FastAPI",
      "Figma",
      "ReactJs",
      "HTML",
      "CSS",
    ],
    ProjectLink: "https://github.com/abhash-rai/",
    ProjectLinkPlatform: "Github",
  },
  {
    ProjectImage: FaceRecognitionAttendanceSystemImage,
    ProjectName: "Face Recognition Attendance System",
    ProjectDescription:
      "A modern solution that leverages computer vision technology to automate and streamline the process of recording attendance. It encodes faces numerically, compares known and unknown faces, records timestamps of each recognition with a set duration in between consecutive recognition, makes attendance and stores image of detected faces which are not recognized.",
    TechnologiesUsed: ["Python", "Face-recognition", "OpenCV", "MySql"],
    ProjectLink:
      "https://github.com/abhash-rai/face-recognition-attendance-system",
    ProjectLinkPlatform: "Github",
  },
];

const Projects = () => {
  const { normal_classes, small_classes, gray_color } = useContext(MainContext);
  return (
    <div className={`${small_classes} flex flex-col gap-16 lg:gap-5`}>
      <div className="text-left lg:hidden font-bold">PROJECTS</div>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`${gray_color} projects_cards flex flex-col sm:flex-row gap-5 box-border rounded-xl p-0 lg:p-6 lg:hover:bg-[#1c283c46] lg:hover:shadow-md transition-all duration-300 ease-in-out`}
        >
          <div className="w-full sm:w-[30%] text-[14px] text-left">
            <img
              src={project.ProjectImage}
              alt={project.ProjectName}
              className="w-full shadow-md border-[#242D3E] border-2 rounded-md"
            />
          </div>
          <div className="w-full sm:w-[70%] flex flex-col gap-4">
            <div
              className={`${normal_classes} projects_titles text-left text-white`}
            >
              {project.ProjectName}
            </div>
            <div className="text-left">{project.ProjectDescription}</div>

            <div className="text-left flex flex-wrap gap-2">
              {project.TechnologiesUsed.map((Tech, index) => (
                <span
                  key={index}
                  className="bg-[#122C3E] text-[#45DBE2] py-1 px-2 rounded-xl"
                >
                  {Tech}
                </span>
              ))}
            </div>
            <div
              className={`${small_classes} p-2 bg-[#1c3751] shadow-md text-white hover:scale-105 transition-all duration-300 ease-in-out`}
            >
              <a
                className="w-full h-full"
                href={project.ProjectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on {project.ProjectLinkPlatform}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
