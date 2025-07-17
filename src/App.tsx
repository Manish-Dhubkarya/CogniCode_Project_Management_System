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
import AllEmployeeList from "./Screens/AllEmployeeList";
import HeadProjectList from "./Screens/HeadProjectList";
import TeamLeaderProjectAss from "./Screens/TeamLeader/TeamLeaderProjectAss";
import HeadClientProjectInfo from "./Screens/HeadClientProjectInfo";

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
        status: "SUBMISSION PENDING",
      },
      {
        Workstream: "Backend API",
        Description: "RESTful API development for user module.",
        SubmissionDate: "18 Jan",
        status: "SUBMITTED",
      },
      {
        Workstream: "Authentication",
        Description: "Integrate secure login and JWT tokens.",
        SubmissionDate: "25 Jan",
        status: "SUBMISSION PENDING",
      },
      {
        Workstream: "Dashboard",
        Description: "Create admin dashboard with charts.",
        SubmissionDate: "2 Feb",
        status: "SUBMISSION PENDING",
      },
      {
        Workstream: "Bug Fixing",
        Description: "Resolve reported UI and logic issues.",
        SubmissionDate: "5 Feb",
        status: "SUBMITTED",
      },
      {
        Workstream: "Performance",
        Description: "Optimize loading time and API response.",
        SubmissionDate: "8 Feb",
        status: "SUBMISSION PENDING",
      },
      {
        Workstream: "Testing",
        Description: "Unit and integration testing using Jest.",
        SubmissionDate: "12 Feb",
        status: "SUBMITTED",
      },
      {
        Workstream: "Deployment",
        Description: "Deploy application to staging server.",
        SubmissionDate: "15 Feb",
        status: "SUBMISSION PENDING",
      },
      {
        Workstream: "Plagiarism Removal",
        Description: "Ensure all code is original and compliant.",
        SubmissionDate: "17 Feb",
        status: "SUBMITTED",
      },
      {
        Workstream: "Code Review",
        Description: "Peer code review for all modules.",
        SubmissionDate: "19 Feb",
        status: "SUBMISSION PENDING",
      },
      {
        Workstream: "Documentation",
        Description: "Create developer and user documentation.",
        SubmissionDate: "22 Feb",
        status: "SUBMISSION PENDING",
      },
      {
        Workstream: "Client Feedback",
        Description: "Incorporate final feedback from client.",
        SubmissionDate: "25 Feb",
        status: "SUBMITTED",
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
    Category:string
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
        Category:"Data Science Projects",
        Designation: "Full Stack Developer",
        Description: "Website design for government project.",
        SubmissionDate: "27 May 25",
        status: "Active",
        statusRemark:"",
      },
      {
        Category:"Data Science Projects",
        Designation: "Frontend Developer",
        Description: "Developed responsive UI for healthcare portal.",
        SubmissionDate: "10 Apr 25",
        status: "Accepted",
        statusRemark:"SUBMISSION PENDING",
      },
      {
        Category:"Data Science Projects",
        Designation: "Backend Developer",
        Description: "Created secure APIs for financial transaction system.",
        SubmissionDate: "05 Mar 25",
        status: "Requested",
        statusRemark:"ACCEPTED"
      },
      {
        Category:"UI Design Projects",
        Designation: "DevOps Engineer",
        Description: "Automated CI/CD pipelines and deployed to AWS.",
        SubmissionDate: "12 Jan 25",
        status: "Active",
        statusRemark:""
      },
      {
        Category:"UI Design Projects",
        Designation: "UI/UX Designer",
        Description: "Redesigned dashboard interface for logistics software.",
        SubmissionDate: "30 Nov 24",
        status: "Accepted",
        statusRemark:"SUBMITTED"
      },
      {
        Category:"UI Design Projects",
        Designation: "UI/UX Designer",
        Description: "Redesigned dashboard interface for logistics software.",
        SubmissionDate: "30 Nov 24",
        status: "Requested",
        statusRemark:"NO RESPONSE"
      },
      {
        Category:"Coding Projects",
        Designation: "Full Stack Developer",
        Description: "Website design for government project.",
        SubmissionDate: "27 May 25",
        status: "Active",
        statusRemark:"",
      },
      {
        Category:"Coding Projects",
        Designation: "Frontend Developer",
        Description: "Developed responsive UI for healthcare portal.",
        SubmissionDate: "10 Apr 25",
        status: "Accepted",
        statusRemark:"SUBMISSION PENDING",
      },
      {
        Category:"Coding Projects",
        Designation: "Backend Developer",
        Description: "Created secure APIs for financial transaction system.",
        SubmissionDate: "05 Mar 25",
        status: "Requested",
        statusRemark:"DECLINED"
      },
      {
        Category:"Research Papers",
        Designation: "DevOps Engineer",
        Description: "Automated CI/CD pipelines and deployed to AWS.",
        SubmissionDate: "12 Jan 25",
        status: "Active",
        statusRemark:""
      },
      {
        Category:"Research Papers",
        Designation: "UI/UX Designer",
        Description: "Redesigned dashboard interface for logistics software.",
        SubmissionDate: "30 Nov 24",
        status: "Accepted",
        statusRemark:"SUBMITTED"
      },
      {
        Category:"Plagarism Removal",
        Designation: "UI/UX Designer",
        Description: "Redesigned dashboard interface for logistics software.",
        SubmissionDate: "30 Nov 24",
        status: "Requested",
        statusRemark:"DECLINED"
      },
      {
        Category:"Plagarism Removal",
        Designation: "Full Stack Developer",
        Description: "Website design for government project.",
        SubmissionDate: "27 May 25",
        status: "Active",
        statusRemark:"",
      },
      {
        Category:"Plagarism Removal",
        Designation: "Frontend Developer",
        Description: "Developed responsive UI for healthcare portal.",
        SubmissionDate: "10 Apr 25",
        status: "Accepted",
        statusRemark:"SUBMISSION PENDING",
      },
      {
        Category:"Plagarism Removal",
        Designation: "Backend Developer",
        Description: "Created secure APIs for financial transaction system.",
        SubmissionDate: "05 Mar 25",
        status: "Requested",
        statusRemark:"ACCEPTED"
      },
      {
        Category:"Immediate Deadline Projects",
        Designation: "DevOps Engineer",
        Description: "Automated CI/CD pipelines and deployed to AWS.",
        SubmissionDate: "12 Jan 25",
        status: "Active",
        statusRemark:""
      },
      {
        Category:"Immediate Deadline Projects",
        Designation: "UI/UX Designer",
        Description: "Redesigned dashboard interface for logistics software.",
        SubmissionDate: "30 Nov 24",
        status: "Accepted",
        statusRemark:"SUBMISSION PENDING"
      },
      {
        Category:"Immediate Deadline Projects",
        Designation: "UI/UX Designer",
        Description: "Redesigned dashboard interface for logistics software.",
        SubmissionDate: "30 Nov 24",
        status: "Requested",
        statusRemark:"DECLINED"
      },
      {
        Category:"Immediate Deadline Projects",
        Designation: "UI/UX Designer",
        Description: "Redesigned dashboard interface for logistics software.",
        SubmissionDate: "30 Nov 24",
        status: "Accepted",
        statusRemark:"SUBMISSION PENDING"
      },
      {
        Category:"Immediate Deadline Projects",
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
      Category:string;
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
      Category: "Coding Projects",
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
      Category: "UI Design Projects",
      Designation: "UI Designer",
      Description: "Healthcare app redesign.",
      SubmissionDate: "03 Jan 25",
      status: "On-Going",
      EmployeeCredientials: [
        { Profile: "https://randomuser.me/api/portraits/men/3.jpg", name: "Amit" }
      ]
    },
    {
      Category: "Coding Projects",
      Designation: "Backend Developer",
      Description: "Inventory management APIs.",
      SubmissionDate: "06 Jan 25",
      status: "Active",
    },
    {
      Category: "Research Papers",
      Designation: "QA Engineer",
      Description: "App bug testing and report.",
      SubmissionDate: "09 Jan 25",
      status: "Completed",
      statusRemark: "SUBMISSION PENDING"
    },
    {
      Category: "Immediate Deadline Projects",
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
      Category: "UI Design Projects",
      Designation: "Frontend Dev",
      Description: "Landing page UI revamp",
      SubmissionDate: "17 Jan 25",
      status: "On-Going",
      EmployeeCredientials: [
        { Profile: "https://randomuser.me/api/portraits/women/7.jpg", name: "Riya" }
      ]
    },
    {
      Category: "Coding Projects",
      Designation: "Backend Dev",
      Description: "Secure payments integration",
      SubmissionDate: "19 Jan 25",
      status: "Active",
    },
    {
      Category: "UI Design Projects",
      Designation: "UX Designer",
      Description: "Feedback flows rework",
      SubmissionDate: "22 Jan 25",
      status: "Completed",
      statusRemark: "SUBMISSION PENDING"
    },
    {
      Category: "Data Science Projects",
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
      Category: "Research Papers",
      Designation: "Software Tester",
      Description: "Regression testing",
      SubmissionDate: "30 Jan 25",
      status: "On-Going",
      EmployeeCredientials: [
        { Profile: "https://randomuser.me/api/portraits/women/11.jpg", name: "Sneha" }
      ]
    },
    {
      Category: "Plagarism Removal",
      Designation: "System Admin",
      Description: "Firewall setup",
      SubmissionDate: "02 Feb 25",
      status: "Active",
    },
    {
      Category: "Data Science Projects",
      Designation: "Data Analyst",
      Description: "KPI dashboard",
      SubmissionDate: "04 Feb 25",
      status: "Completed",
      statusRemark: "SUBMITTED"
    },
    {
      Category: "UI Design Projects",
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
      Category: "UI Design Projects",
      Designation: "Frontend Dev",
      Description: "Marketing page",
      SubmissionDate: "10 Feb 25",
      status: "On-Going",
      EmployeeCredientials: [
        { Profile: "https://randomuser.me/api/portraits/men/14.jpg", name: "Karan" }
      ]
    },
    {
      Category: "Coding Projects",
      Designation: "Java Dev",
      Description: "Banking microservices",
      SubmissionDate: "12 Feb 25",
      status: "Active",
    },
    {
      Category: "UI Design Projects",
      Designation: "UI Intern",
      Description: "Color system revamp",
      SubmissionDate: "14 Feb 25",
      status: "Completed",
      statusRemark: "SUBMITTED"
    },
    {
      Category: "Plagarism Removal",
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
      Category: "UI Design Projects",
      Designation: "React Native Dev",
      Description: "Social app prototype",
      SubmissionDate: "20 Feb 25",
      status: "On-Going",
      EmployeeCredientials: [
        { Profile: "https://randomuser.me/api/portraits/women/17.jpg", name: "Aarti" }
      ]
    },
    {
      Category: "Coding Projects",
      Designation: "Node.js Developer",
      Description: "Socket integration",
      SubmissionDate: "22 Feb 25",
      status: "Active",
    },
    {
      Category: "Research Papers",
      Designation: "UX Intern",
      Description: "Design tokens setup",
      SubmissionDate: "24 Feb 25",
      status: "Completed",
      statusRemark: "SUBMISSION PENDING"
    },
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

  interface ProjectListProps {
  Category: string;
  Description: string;
  EmployeeName:string;
  ProjectId:string;
  SubmissionDate: string;
  ComplitionPercentage:number;
  Price:number;
}

interface HeadProjectListProps {
  ProjectDetails: ProjectListProps[];
}
  const headProjectList:HeadProjectListProps={
ProjectDetails: [
  {
    Category: "Data Science Projects",
    Description: "Design for office use application.",
    EmployeeName: "Manish Dhubkarya",
    ProjectId: "GHTY565PL",
    SubmissionDate: "27 May 25",
    ComplitionPercentage: 40,
    Price: 3480
  },
  {
    Category: "UI Design Projects",
    Description: "Mobile UI for eCommerce app.",
    EmployeeName: "Riya Sharma",
    ProjectId: "UIDS782MN",
    SubmissionDate: "30 Jul 25",
    ComplitionPercentage: 75,
    Price: 4100
  },
  {
    Category: "Coding Projects",
    Description: "Backend API integration with Node.js.",
    EmployeeName: "Amit Singh",
    ProjectId: "CODE291AX",
    SubmissionDate: "12 Aug 25",
    ComplitionPercentage: 60,
    Price: 5200
  },
  {
    Category: "Research Papers",
    Description: "AI in modern education system.",
    EmployeeName: "Sneha Verma",
    ProjectId: "RSCH103QW",
    SubmissionDate: "03 Sep 25",
    ComplitionPercentage: 90,
    Price: 2750
  },
  {
    Category: "Plagarism Removal",
    Description: "Rewriting and uniqueness improvement.",
    EmployeeName: "Mohit Yadav",
    ProjectId: "PLGR856ZD",
    SubmissionDate: "18 Jul 25",
    ComplitionPercentage: 100,
    Price: 2200
  },
  {
    Category: "Immediate Deadline Projects",
    Description: "Urgent business report formatting.",
    EmployeeName: "Kavya Mehra",
    ProjectId: "IMM874TD",
    SubmissionDate: "15 Jul 25",
    ComplitionPercentage: 95,
    Price: 3900
  },
  {
    Category: "Data Science Projects",
    Description: "Data visualization for financial trends.",
    EmployeeName: "Vivek Choudhary",
    ProjectId: "DS325KLP",
    SubmissionDate: "29 Aug 25",
    ComplitionPercentage: 55,
    Price: 6300
  },
  {
    Category: "UI Design Projects",
    Description: "Dashboard UI for admin panel.",
    EmployeeName: "Tanvi Joshi",
    ProjectId: "UID204XZ",
    SubmissionDate: "21 Aug 25",
    ComplitionPercentage: 45,
    Price: 4800
  },
  {
    Category: "Coding Projects",
    Description: "Authentication system using Firebase.",
    EmployeeName: "Raj Malhotra",
    ProjectId: "CODE674WM",
    SubmissionDate: "02 Sep 25",
    ComplitionPercentage: 70,
    Price: 5100
  },
  {
    Category: "Research Papers",
    Description: "Study of Quantum Computing methods.",
    EmployeeName: "Simran Kaur",
    ProjectId: "RSCH210GY",
    SubmissionDate: "14 Sep 25",
    ComplitionPercentage: 30,
    Price: 3000
  },
  {
    Category: "Plagarism Removal",
    Description: "Remove duplication from thesis.",
    EmployeeName: "Aakash Jain",
    ProjectId: "PLGR984ND",
    SubmissionDate: "17 Jul 25",
    ComplitionPercentage: 100,
    Price: 1800
  },
  {
    Category: "Immediate Deadline Projects",
    Description: "Final year project report submission.",
    EmployeeName: "Shruti Deshmukh",
    ProjectId: "IMM903TR",
    SubmissionDate: "16 Jul 25",
    ComplitionPercentage: 88,
    Price: 4400
  },
  {
    Category: "Data Science Projects",
    Description: "Predictive model for traffic data.",
    EmployeeName: "Pranav Mishra",
    ProjectId: "DS590BYT",
    SubmissionDate: "05 Sep 25",
    ComplitionPercentage: 35,
    Price: 5900
  },
  {
    Category: "UI Design Projects",
    Description: "App design for meditation tracker.",
    EmployeeName: "Neha Rathi",
    ProjectId: "UID778QE",
    SubmissionDate: "10 Aug 25",
    ComplitionPercentage: 50,
    Price: 4600
  },
  {
    Category: "Coding Projects",
    Description: "To-do list app with React & Redux.",
    EmployeeName: "Arjun Kumar",
    ProjectId: "CODE340LP",
    SubmissionDate: "20 Aug 25",
    ComplitionPercentage: 40,
    Price: 3900
  },
  {
    Category: "Research Papers",
    Description: "Blockchain impact on data security.",
    EmployeeName: "Roshni Agarwal",
    ProjectId: "RSCH561VU",
    SubmissionDate: "22 Aug 25",
    ComplitionPercentage: 65,
    Price: 3200
  },
  {
    Category: "Plagarism Removal",
    Description: "Research paper paraphrasing.",
    EmployeeName: "Karan Kapoor",
    ProjectId: "PLGR212AD",
    SubmissionDate: "19 Jul 25",
    ComplitionPercentage: 85,
    Price: 2500
  },
  {
    Category: "Immediate Deadline Projects",
    Description: "Emergency bio project completion.",
    EmployeeName: "Divya Rana",
    ProjectId: "IMM182KT",
    SubmissionDate: "15 Jul 25",
    ComplitionPercentage: 97,
    Price: 3700
  },
  {
    Category: "Data Science Projects",
    Description: "Customer churn prediction model.",
    EmployeeName: "Rahul Tripathi",
    ProjectId: "DS908PLX",
    SubmissionDate: "11 Sep 25",
    ComplitionPercentage: 42,
    Price: 6700
  },
  {
    Category: "UI Design Projects",
    Description: "Modern portfolio UI for freelancers.",
    EmployeeName: "Isha Jain",
    ProjectId: "UID654QW",
    SubmissionDate: "18 Aug 25",
    ComplitionPercentage: 58,
    Price: 4300
  },
  {
    Category: "Coding Projects",
    Description: "REST API for task management system.",
    EmployeeName: "Yash Meena",
    ProjectId: "CODE490XP",
    SubmissionDate: "28 Aug 25",
    ComplitionPercentage: 66,
    Price: 5000
  }
]
  }
  const headClientProjectInfo = {
     HeadName:"Avinash",
  HeadDesignation:"Data Scientist",
    EmployeeDesignation: "Full Stack Developer",
    EmployeeName: "Manish Dhubkarya",
    ProjectID: "GHJK985GGJ99",
    SubmissionData:"20 Aug 2025",
  AmountLeft:2000,
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
    Employees:[
      {employeeName:"Manish Dhubkarya"},
      {employeeName:"Manish Dhubkarya"},
      {employeeName:"Manish Dhubkarya"},
      {employeeName:"Manish Dhubkarya"},
      {employeeName:"Manish Dhubkarya"},
      {employeeName:"Manish Dhubkarya"},
      {employeeName:"Manish Dhubkarya"},
      {employeeName:"Manish Dhubkarya"},
      {employeeName:"Manish Dhubkarya"},
      {employeeName:"Manish Dhubkarya"},
      {employeeName:"Manish Dhubkarya"},
      {employeeName:"Manish Dhubkarya"},
    ]
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
          <Route
            path="/allemployeelist"
            element={<AllEmployeeList />}
          />
          <Route
            path="/headprojectlist"
            element={<HeadProjectList {...headProjectList} />}
          />
           <Route
            path="/teamleaderprojectass"
            element={<TeamLeaderProjectAss {...employeeProjectInfo} />}
          />
            <Route
            path="/headclientprojectinfo"
            element={<HeadClientProjectInfo {...headClientProjectInfo} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
