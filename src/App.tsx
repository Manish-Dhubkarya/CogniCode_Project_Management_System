import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./Screens/LoginPage";
import UserProfile from "./assets/CredientialAssets/UserProfile.jpg";
import EmployeeProfile from "./Screens/EmployeeProfile";
import ClientProfile from "./Screens/ClientProfile";
import ClientProjectInfo from "./Screens/ClientProjectInfo";
import EmployeeLanding from "./Screens/EmployeeLanding";
import EmployeeProjectInfo from "./Screens/EmployeeProjectInfo";
import TeamLeaderLanding from "./Screens/TeamLeader/TeamLeaderLanding";

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
        status: "Submitted",
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
        status: "Submittted",
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
        status: "Submitted",
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
    AboutCompany:
      "My name’s Craig, a retired Art Teacher from California and the current Founder of Paint & Escape. Paint & Escape vacations allow creative individuals, whether beginners or experts, hobbyists or professionals, to explore and share art with the world. I’ve been running this business for just over 18 months: going on over 50 art vacations, with just under 300 fantastically unique individuals. My mission is to awaken a new source of inspiration on a trip dedicated entirely to painting.",
    WhatDoYouNeed:
      "I’d like to make the UI on my website easier to use and work with. As I want to eventually increase the amount of travels Paint & Escape provides, and number of guests, I’ll need a smooth, operable UI to do this. The current UI is blocky, and doesn’t best suit the minimalist, flowing vision that the Paint & Escape brand encompasses.",
    ChatMessages: [
      {
        message:
          "Hi, Sasha your paper has been finished with writing will be going for plag report today.",
      },
      { message: "Ok Sir please tell me about any remaining payments" },
      { message: "Sure, It will be updated in your profile." },
    ],
  };
  // Employee Landing

  interface EmployeeProjectDetailsProps {
    Designation: string;
    Description: string;
    SubmissionDate: string;
  }

  interface EmployeeLandingProps {
    ProjectDetails: EmployeeProjectDetailsProps[];
  }

  interface EmployeeProjectDetailsProps {
    Designation: string;
    Description: string;
    SubmissionDate: string;
    status: string; // Added status field
    statusRemark:string;
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
        statusRemark:"",
      },
      {
        Designation: "Frontend Developer",
        Description: "Developed responsive UI for healthcare portal.",
        SubmissionDate: "10 Apr 25",
        status: "Accepted",
        statusRemark:"SUBMISSION PENDING",
      },
      {
        Designation: "Backend Developer",
        Description: "Created secure APIs for financial transaction system.",
        SubmissionDate: "05 Mar 25",
        status: "Requested",
        statusRemark:"ACCEPTED"
      },
      {
        Designation: "Mobile App Developer",
        Description: "Built a cross-platform mobile app for e-learning.",
        SubmissionDate: "18 Feb 25",
        status: "Performance",
        statusRemark:"Good"
      },
      {
        Designation: "Mobile App Developer",
        Description: "Built a cross-platform mobile app for e-learning.",
        SubmissionDate: "18 Feb 25",
        status: "Performance",
        statusRemark:"Excellent"
      },
      {
        Designation: "DevOps Engineer",
        Description: "Automated CI/CD pipelines and deployed to AWS.",
        SubmissionDate: "12 Jan 25",
        status: "Active",
        statusRemark:""
      },
      {
        Designation: "UI/UX Designer",
        Description: "Redesigned dashboard interface for logistics software.",
        SubmissionDate: "30 Nov 24",
        status: "Accepted",
        statusRemark:"Submitted"
      },
      {
        Designation: "UI/UX Designer",
        Description: "Redesigned dashboard interface for logistics software.",
        SubmissionDate: "30 Nov 24",
        status: "Requested",
        statusRemark:"NO RESPONSE"
      },
    ],
  };

  interface EmployeeCredientialsProps{
    Profile:string;
    name:string;
}
interface MultipleEmployeeProps{
    Profile:string[];
}
    interface TeamLeaderProjectDetailsProps {
    Designation: string;
    Description: string;
    SubmissionDate: string;
    status: string;
    statusRemark?:string;
    MultipleEmployee?:MultipleEmployeeProps[]
    EmployeeCredientials?:EmployeeCredientialsProps[]
  }

  interface TeamLeaderLandingProps {
    ProjectDetails: TeamLeaderProjectDetailsProps[];
  }
  const teamLeaderLanding: TeamLeaderLandingProps = {
  ProjectDetails: [
    {
      Designation: "Full Stack Developer",
      Description: "Government e-portal design.",
      SubmissionDate: "01 Jan 25",
      status: "Requests",
      MultipleEmployee: [
        {
          Profile: [
            "https://randomuser.me/api/portraits/men/1.jpg",
            "https://randomuser.me/api/portraits/women/2.jpg",
            "https://randomuser.me/api/portraits/women/2.jpg",
            "https://randomuser.me/api/portraits/women/2.jpg",
            "https://randomuser.me/api/portraits/women/2.jpg",
          ]
        }
      ]
    },
    {
      Designation: "UI Designer",
      Description: "Healthcare app redesign.",
      SubmissionDate: "03 Jan 25",
      status: "On-Going",
      EmployeeCredientials: [
        { Profile: "https://randomuser.me/api/portraits/men/3.jpg", name: "Amit" }
      ]
    },
    {
      Designation: "Backend Developer",
      Description: "Inventory management APIs.",
      SubmissionDate: "06 Jan 25",
      status: "Active",
    },
    {
      Designation: "QA Engineer",
      Description: "App bug testing and report.",
      SubmissionDate: "09 Jan 25",
      status: "Completed",
      statusRemark: "Reports Submitted"
    },
    {
      Designation: "Mobile App Dev",
      Description: "E-learning app build",
      SubmissionDate: "12 Jan 25",
      status: "Employees",
      MultipleEmployee: [
        {
          Profile: [
            "https://randomuser.me/api/portraits/men/4.jpg",
            "https://randomuser.me/api/portraits/women/5.jpg"
          ]
        }
      ]
    },
    {
      Designation: "DevOps Engineer",
      Description: "CI/CD pipeline setup",
      SubmissionDate: "15 Jan 25",
      status: "Requests",
      MultipleEmployee: [
        {
          Profile: [
            "https://randomuser.me/api/portraits/men/6.jpg",
            "https://randomuser.me/api/portraits/men/6.jpg",
            "https://randomuser.me/api/portraits/men/6.jpg",
            "https://randomuser.me/api/portraits/men/6.jpg",
            "https://randomuser.me/api/portraits/men/6.jpg",
            "https://randomuser.me/api/portraits/men/6.jpg",
            
          ]
        }
      ]
    },
    {
      Designation: "Frontend Dev",
      Description: "Landing page UI revamp",
      SubmissionDate: "17 Jan 25",
      status: "On-Going",
      EmployeeCredientials: [
        { Profile: "https://randomuser.me/api/portraits/women/7.jpg", name: "Riya" }
      ]
    },
    {
      Designation: "Backend Dev",
      Description: "Secure payments integration",
      SubmissionDate: "19 Jan 25",
      status: "Active",
    },
    {
      Designation: "UX Designer",
      Description: "Feedback flows rework",
      SubmissionDate: "22 Jan 25",
      status: "Completed",
      statusRemark: "Design handoff done"
    },
    {
      Designation: "iOS Developer",
      Description: "Health tracker app",
      SubmissionDate: "25 Jan 25",
      status: "Employees",
      MultipleEmployee: [
        {
          Profile: [
            "https://randomuser.me/api/portraits/men/8.jpg",
            "https://randomuser.me/api/portraits/women/9.jpg"
          ]
        }
      ]
    },
    {
      Designation: "ML Engineer",
      Description: "Prediction model for sales",
      SubmissionDate: "28 Jan 25",
      status: "Requests",
      MultipleEmployee: [
        {
          Profile: ["https://randomuser.me/api/portraits/men/10.jpg"]
        }
      ]
    },
    {
      Designation: "Software Tester",
      Description: "Regression testing",
      SubmissionDate: "30 Jan 25",
      status: "On-Going",
      EmployeeCredientials: [
        { Profile: "https://randomuser.me/api/portraits/women/11.jpg", name: "Sneha" }
      ]
    },
    {
      Designation: "System Admin",
      Description: "Firewall setup",
      SubmissionDate: "02 Feb 25",
      status: "Active",
    },
    {
      Designation: "Data Analyst",
      Description: "KPI dashboard",
      SubmissionDate: "04 Feb 25",
      status: "Completed",
      statusRemark: "Dashboard live"
    },
    {
      Designation: "Flutter Dev",
      Description: "Attendance app",
      SubmissionDate: "06 Feb 25",
      status: "Employees",
      MultipleEmployee: [
        {
          Profile: ["https://randomuser.me/api/portraits/women/12.jpg"]
        }
      ]
    },
    {
      Designation: "Product Designer",
      Description: "Design system audit",
      SubmissionDate: "08 Feb 25",
      status: "Requests",
      MultipleEmployee: [
        {
          Profile: ["https://randomuser.me/api/portraits/men/13.jpg"]
        }
      ]
    },
    {
      Designation: "Frontend Dev",
      Description: "Marketing page",
      SubmissionDate: "10 Feb 25",
      status: "On-Going",
      EmployeeCredientials: [
        { Profile: "https://randomuser.me/api/portraits/men/14.jpg", name: "Karan" }
      ]
    },
    {
      Designation: "Java Dev",
      Description: "Banking microservices",
      SubmissionDate: "12 Feb 25",
      status: "Active",
    },
    {
      Designation: "UI Intern",
      Description: "Color system revamp",
      SubmissionDate: "14 Feb 25",
      status: "Completed",
      statusRemark: "Merged in master"
    },
    {
      Designation: "Backend Dev",
      Description: "Database schema refactor",
      SubmissionDate: "16 Feb 25",
      status: "Employees",
      MultipleEmployee: [
        {
          Profile: ["https://randomuser.me/api/portraits/women/15.jpg"]
        }
      ]
    },
    {
      Designation: "Security Engineer",
      Description: "Pen-testing tools",
      SubmissionDate: "18 Feb 25",
      status: "Requests",
      MultipleEmployee: [
        {
          Profile: ["https://randomuser.me/api/portraits/men/16.jpg"]
        }
      ]
    },
    {
      Designation: "React Native Dev",
      Description: "Social app prototype",
      SubmissionDate: "20 Feb 25",
      status: "On-Going",
      EmployeeCredientials: [
        { Profile: "https://randomuser.me/api/portraits/women/17.jpg", name: "Aarti" }
      ]
    },
    {
      Designation: "Node.js Developer",
      Description: "Socket integration",
      SubmissionDate: "22 Feb 25",
      status: "Active",
    },
    {
      Designation: "UX Intern",
      Description: "Design tokens setup",
      SubmissionDate: "24 Feb 25",
      status: "Completed",
      statusRemark: "Project closed"
    },
    {
      Designation: "Cloud Architect",
      Description: "Infrastructure setup on GCP",
      SubmissionDate: "26 Feb 25",
      status: "Employees",
      MultipleEmployee: [
        {
          Profile: ["https://randomuser.me/api/portraits/men/18.jpg"]
        }
      ]
    }
  ]
};

  // 
  interface EmployeeProjectInfoProps {
    EmployeeDesignation: string;
    SubmissionDate: string;
    ProjectId: string;
    ProjectTitle: string;
    About_the_company: string;
    Needs: string;
    Vision: string;
    links: string[];
    ContentUse: string;
    Target_Audiance: string;
    Deadline: string;
  }
  const employeeProjectInfo: EmployeeProjectInfoProps = {
    EmployeeDesignation: "Full Stack Developer",
    SubmissionDate: "27 May 25",
    ProjectId: "HJJIU666HH",
    ProjectTitle: "Paint & Escape UI Design Project",
    About_the_company: `About the company: My name’s Craig, a retired Art Teacher from
        California and the current Founder of Paint & Escape. Paint &
        Escape vacations allow creative individuals, whether beginners or
        experts, hobbyists or professionals, to explore and share art with the
        world. I’ve been running this business for just over 18 months: going on
        over 50 art vacations, with just under 300 fantastically unique
        individuals. My mission is to awaken a new source of inspiration on a
        trip dedicated entirely to painting.`,
    Needs: ` What do you need?:  I’d like to make the UI on my website easier to use
        and work with. As I want to eventually increase the amount of travels
        Paint & Escape provides, and number of guests, I’ll need a smooth,
        operable UI to do this. The current UI is blocky, and doesn’t best suit
        the minimalist, flowing vision that the Paint & Escape brand
        encompasses.`,
    Vision: `Your vision for the project: I have a list of brand guidelines (logo,
        colors, fonts) that I will share with the chosen freelancer. I work with
        customers of all age groups, so would need the final UI product to be
        easily accessible to users of all kinds, including high-contrast text
        that’s easy to read. I’d like to simplify the application process, and
        have an animated form that responds quickly to the user’s commands, i.e.
        “next, back, send application”. I’ve also taken plenty of photographs
        over the last 18 months that I’d like to incorporate into the final
        product – potentially having a waterfall effect that appears when
        viewing “previous trips”.`,
    links: [
      "http://www.airbnb.com",
      "http://www.rallyinteractive.com",
      "http://www.omio.com&nbsp;",
    ],
    ContentUse:"On my website: Paint&Escape.co",
    Target_Audiance:"My customers are aged anywhere from their 20s to late 70s. They're all professionals with expendable income, and a love for art, culture, and traveling",
    Deadline:"I'm looking to get this UI fully operational within 2 weeks from the project start date."
  };

  return (
    <div className="font-librefranklin">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route
            path="/employeeprofile"
            element={<EmployeeProfile {...employeeProfile} />}
          />
          <Route
            path="/clientprofile"
            element={<ClientProfile {...clientProfile} />}
          />
          <Route
            path="/clientprojectinfo"
            element={<ClientProjectInfo {...clientProject} />}
          />
          <Route
            path="/employeelanding"
            element={<EmployeeLanding {...employeeLanding} />}
          />
          <Route
            path="/employeeprojectinfo"
            element={<EmployeeProjectInfo {...employeeProjectInfo} />}
          />
           <Route
            path="/teamleaderlanding"
            element={<TeamLeaderLanding {...teamLeaderLanding} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
