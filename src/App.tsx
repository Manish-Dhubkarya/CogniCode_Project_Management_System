import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./Screens/LoginPage";
import UserProfile from "./assets/CredientialAssets/UserProfile.jpg";
import EmployeeProfile from "./Screens/EmployeeProfile";
import ClientProfile from "./Screens/ClientProfile";
import ClientProjectInfo from "./Screens/ClientProjectInfo";
import EmployeeLanding from "./Screens/EmployeeLanding";
import EmployeeProjectInfo from "./Screens/EmployeeProjectInfo";

function App() {
  interface PerformanceProps {
    label: string;
    value: string;
  }

  interface EmployeeProfileProps {
    EmployeeName: string;
    Profile: string;
    Designation: string;
    TL: string;
    ProjectStartDate: string;
    ProjectEndDate: string;
    ProjectOnGoing: number;
    ProjectCompleted: number;
    Performance: PerformanceProps[];
  }

  // Define the profileProps object
  const employeeProfile: EmployeeProfileProps = {
    EmployeeName: "Himanshu Verma",
    Profile: UserProfile,
    Designation: "CEO",
    TL: "NONE",
    ProjectStartDate: "1 June",
    ProjectEndDate: "1 Sep",
    ProjectOnGoing: 10,
    ProjectCompleted: 20,
    Performance: [
      { label: "Accuracy", value: "90%" },
      { label: "On Time Execution", value: "70%" },
      { label: "Skills", value: "80%" },
      { label: "Efficiency", value: "75%" },
    ],
  };

  interface ProjectDetailsProps {
    Workstream: string;
    Description: string;
    SubmissionDate: string;
    status: string;
  }
  interface ClientProfileProps {
    ClientName: string;
    Profile: string;
    Designation: string;
    ProjectStartDate: string;
    ProjectEndDate: string;
    ProjectOnGoing: number;
    ProjectCompleted: number;
    ProjectDetails: ProjectDetailsProps[];
  }
  const clientProfile: ClientProfileProps = {
    ClientName: "Himanshu Verma",
    Profile: UserProfile,
    Designation: "CEO CogniCode",
    ProjectStartDate: "2024",
    ProjectEndDate: "2025",
    ProjectOnGoing: 10,
    ProjectCompleted: 200,
    ProjectDetails: [
      {
        Workstream: "UI Design",
        Description: "User interface design for HR portal.",
        SubmissionDate: "10 Jan",
        status: "Completed",
      },
      {
        Workstream: "Backend API",
        Description: "RESTful API development for user module.",
        SubmissionDate: "18 Jan",
        status: "Completed",
      },
      {
        Workstream: "Authentication",
        Description: "Integrate secure login and JWT tokens.",
        SubmissionDate: "25 Jan",
        status: "Completed",
      },
      {
        Workstream: "Dashboard",
        Description: "Create admin dashboard with charts.",
        SubmissionDate: "2 Feb",
        status: "In Progress",
      },
      {
        Workstream: "Bug Fixing",
        Description: "Resolve reported UI and logic issues.",
        SubmissionDate: "5 Feb",
        status: "Completed",
      },
      {
        Workstream: "Performance",
        Description: "Optimize loading time and API response.",
        SubmissionDate: "8 Feb",
        status: "Pending",
      },
      {
        Workstream: "Testing",
        Description: "Unit and integration testing using Jest.",
        SubmissionDate: "12 Feb",
        status: "Completed",
      },
      {
        Workstream: "Deployment",
        Description: "Deploy application to staging server.",
        SubmissionDate: "15 Feb",
        status: "Completed",
      },
      {
        Workstream: "Plagiarism Removal",
        Description: "Ensure all code is original and compliant.",
        SubmissionDate: "17 Feb",
        status: "Completed",
      },
      {
        Workstream: "Code Review",
        Description: "Peer code review for all modules.",
        SubmissionDate: "19 Feb",
        status: "In Progress",
      },
      {
        Workstream: "Documentation",
        Description: "Create developer and user documentation.",
        SubmissionDate: "22 Feb",
        status: "Pending",
      },
      {
        Workstream: "Client Feedback",
        Description: "Incorporate final feedback from client.",
        SubmissionDate: "25 Feb",
        status: "Scheduled",
      },
    ],
  };

  // Client Project Info:-
  interface ChatMesssageProps {
    message: string;
  }
  interface ClientProjectInfoProps {
    EmployeeName: string;
    EmployeeDesignation: string;
    ProjectID: string;
    ProjectTitle: string;
    AboutCompany: string;
    WhatDoYouNeed: string;
    ChatMessages: ChatMesssageProps[];
  }
  const clientProject: ClientProjectInfoProps = {
    EmployeeDesignation: "Full Stack Developer",
    EmployeeName: "Manish Dhubkarya",
    ProjectID: "GHJK985GGJ99",
    ProjectTitle: "Paint & Escape UI Design Project",
    AboutCompany:"My name’s Craig, a retired Art Teacher from California and the current Founder of Paint & Escape. Paint & Escape vacations allow creative individuals, whether beginners or experts, hobbyists or professionals, to explore and share art with the world. I’ve been running this business for just over 18 months: going on over 50 art vacations, with just under 300 fantastically unique individuals. My mission is to awaken a new source of inspiration on a trip dedicated entirely to painting.",
    WhatDoYouNeed:"I’d like to make the UI on my website easier to use and work with. As I want to eventually increase the amount of travels Paint & Escape provides, and number of guests, I’ll need a smooth, operable UI to do this. The current UI is blocky, and doesn’t best suit the minimalist, flowing vision that the Paint & Escape brand encompasses.",
    ChatMessages:[
      {message:"Hi, Sasha your paper has been finished with writing will be going for plag report today."},
      {message:"Ok Sir please tell me about any remaining payments"},
      {message:"Sure, It will be updated in your profile."}
    ]
  };
  // Employee Landing

  interface EmployeeProjectDetailsProps {
  Designation: string;
  Description: string;
  SubmissionDate: string;
}

interface EmployeeLandingProps {
  ProjectDetails:EmployeeProjectDetailsProps[]
}

interface EmployeeProjectDetailsProps {
    Designation: string;
    Description: string;
    SubmissionDate: string;
    status: string; // Added status field
  }

  interface EmployeeLandingProps {
    ProjectDetails: EmployeeProjectDetailsProps[];
  }

  const employeeLanding: EmployeeLandingProps = {
    ProjectDetails: [
      {
        Designation: "Full Stack Developer",
        Description: "Website design for government project.",
        SubmissionDate: "27 May 25",
        status: "Active",
      },
      {
        Designation: "Frontend Developer",
        Description: "Developed responsive UI for healthcare portal.",
        SubmissionDate: "10 Apr 25",
        status: "Accepted",
      },
      {
        Designation: "Backend Developer",
        Description: "Created secure APIs for financial transaction system.",
        SubmissionDate: "05 Mar 25",
        status: "Requested",
      },
      {
        Designation: "Mobile App Developer",
        Description: "Built a cross-platform mobile app for e-learning.",
        SubmissionDate: "18 Feb 25",
        status: "Performance",
      },
      {
        Designation: "DevOps Engineer",
        Description: "Automated CI/CD pipelines and deployed to AWS.",
        SubmissionDate: "12 Jan 25",
        status: "Active",
      },
      {
        Designation: "UI/UX Designer",
        Description: "Redesigned dashboard interface for logistics software.",
        SubmissionDate: "30 Nov 24",
        status: "Accepted",
      },
      {
        Designation: "UI/UX Designer",
        Description: "Redesigned dashboard interface for logistics software.",
        SubmissionDate: "30 Nov 24",
        status: "Requested",
      },
    ],
  };

  return (
    <div className="font-librefranklin">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route
            path="/employeeprofile"
            element={<EmployeeProfile {...employeeProfile} />}
          ></Route>
          <Route
            path="/clientprofile"
            element={<ClientProfile {...clientProfile} />}
          ></Route>
          <Route
            path="/clientprojectinfo"
            element={<ClientProjectInfo {...clientProject}/>}
          ></Route>
          <Route
            path="/employeelanding"
            element={<EmployeeLanding {...employeeLanding} />}
          ></Route>
          <Route
            path="/employeeprojectinfo"
            element={<EmployeeProjectInfo />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
