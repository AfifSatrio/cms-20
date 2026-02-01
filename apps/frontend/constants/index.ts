import { Bell, File, LayoutDashboard } from "lucide-react"
import { JSX } from "react";

// Dashboard Data
export const dashboardSidebarData = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
]

export const sidebarPersonalData = [
  { title: "Personal Project", href: "/personal", icon: File },
  { title: "Notifications", href: "/notification", icon: Bell },
]

// Pie Chart Data
export interface PieChartDataItem{
  title: string;
  value: number;
  fill: string;
}

export const pieChartData: PieChartDataItem[] = [
  {title: "completed", value: 192, fill: "var(--chart-1)"},
  {title: "overdue", value: 123, fill: "var(--chart-2)"},
  {title: "pending", value: 90, fill: "var(--chart-3)"},
]

// Bar Chart Data
export interface BarChartDataItem{
  month: string;
  organizational: number;
  personal: number;
}

export const barChartData: BarChartDataItem[] = [
  { month: "January", organizational: 186, personal: 80 },
  { month: "February", organizational: 305, personal: 200 },
  { month: "March", organizational: 237, personal: 120 },
  { month: "April", organizational: 73, personal: 190 },
  { month: "May", organizational: 209, personal: 130 },
  { month: "June", organizational: 214, personal: 150 },
]

// Dropdown Data Menu
export const dropdownData = [
  { title: "Data 1" },
  { title: "Data 2" },
  { title: "Data 3" },
]

// Recent Activity Data Dummy
export const recentActivityData = [
  { id: 1, action: "Project Created", desc: "New Personal Project 'CMS Project'", time: "2 Hours Ago"},
  { id: 2, action: "Task Completed", desc: "Finished dashboard design in 'CMS Project'", time: "5 Hours Ago"},
  { id: 3, action: "New Collaborator", desc: "Irsyad Hifdhil joined 'CMS Project'", time: "10 Hours Ago"},
  { id: 4, action: "Project Deadline Update", desc: "'CMS Project' deadline was updated by Irsyad Hifdhil", time: "2 Days Ago"},
]

//Data Dummy
export interface organizationRole {
  name: string;
  color: string;
}

export interface projectStatus {
  id: number;
  name: string;
  color: string;
}

export interface organization {
  id: number;
  name: string;
  members: number;
  project: number;
  role: organizationRole;
  slug?: string;
  orgProject: organizationProject;
}

export interface organizationProject {
  length: number;
  map(arg0: (project: any) => JSX.Element): import("react").ReactNode;
  id: number;
  name: string;
  role: organizationRole;
  lastUpdate: string;
  status: string;
  collaborator: number;
}

export interface collaborator {
  id: number;
  name: string;
  status: string;
  role: organizationRole;
}

export const listOrganizationData = [
  { 
    id: 1, name: "CMLabs - 20", members: 5, project: 3, slug: "cmlabs-20", 
    role: {
        name: "Owner",
        color: "#59D7CB"
      },
    collaborator: [
      {
        id: 10000, name: "Irsyad Hifdhil", status: "Active",
        role: {
          name: "Owner",
          color: "#3A7AC3"
        }
      },
      {
        id: 10001, name: "Afif Satrio", status: "Active",
        role: {
          name: "Collaborator",
          color: "#FEC842"
        }
      },
      {
        id: 10002, name: "Andita Tiffany", status: "Active",
        role: {
          name: "Collaborator",
          color: "#FEC842"
        }
      },
      {
        id: 10003, name: "Shela Alin", status: "Pending",
        role: {
          name: "Collaborator",
          color: "#FEC842"
        }
      },
      {
        id: 10004, name: "Ananda Putra", status: "Pending",
        role: {
          name: "Collaborator",
          color: "#FEC842"
        }
      }
    ],
    orgProject: [
      {
      id: 101, name: "CMS CMLabs", lastUpdate: "10 Minutes Ago", collaborator: 4,
        role: {
          name: "Super Admin",
          color: "#3A7AC3"
        },
      status: {
          id: "002",
          name: "Pending",
          color: "#FEC842"
        }
      },
      {
      id: 102, name: "CMS Pegadaian", lastUpdate: "2 Days Ago", collaborator: 3,
        role: {
          name: "Editor",
          color: "#FEC842"
        },
        status: {
          id: "001",
          name: "Completed",
          color: "#38C0A8"
        }
      },
      {
      id: 103, name: "CMS Polinema", lastUpdate: "A Long Ago", collaborator: 5,
        role: {
          name: "SEO Manager",
          color: "#F648C0"
        },
      status: {
          id: "003",
          name: "Overdue",
          color: "#F93232"
        }
      },
    ], 
  },
  { id: 2, 
    name: "CMS Pegadaian", members: 0, project: 0, slug:"cms-pegadaian", 
      role: {
        name: "Collaborator",
        color: "#FEC842"
      },
    orgProjects: [],
    collaborator: [],
  },
  { id: 3, name: "DIGIRAYA", members: 0, project: 0, slug: "digiraya", 
      role: {
        name: "Collaborator",
        color: "#FEC842"
      },
    orgProjects: [],
    collaborator: [],
  },
]

// Notification
export const notifications = [

]

// Project Card Data
export const projectDetailData = [
  { title: "Total Personal Project", enum: "193"},
  { title: "Total Organization Project", enum: "193"},
  { title: "Total Organization", enum: "193"},
  { title: "Total Collaborator", enum: "193"},
]

// Personal Projects Data Dummy
export interface statusProject {
  status: 'completed' | 'on-going' | 'overdue';
  color: string;
}

export interface personalProjects {
  id: number;
  title: string;
  lastUpdate: string;
  status: statusProject;
}

export const personalProjectsData = [
  { 
    id: "1",title: "CMS CMLabs", lastUpdate: "03 Hours Ago", 
    status: {
      status: "Completed",
      color: "#38C0A8"
    }
  },
  { id: "2",title: "CMS Pegadaian", lastUpdate: "20 Hours Ago",
    status: {
      status: "On-Going",
      color: "#FFD016"
    }
  },
  { id: "3",title: "CMS Polinema", lastUpdate: "21 Mar 2025, 10:00",
    status: {
      status: "Overdue",
      color: "#F93232"
    }
  },
]

// Plan Data
export const plan = [
  { id: "1", plan: "Free/Demo", price:"Rp 40.000", desc: "Suitable for individual to demo and explore cmlabs CMS", features: ["1 User", "5 Personal Projects", "500K / Month API Calls", "100 File Media Assets", "SEO Integrated"]
  },
  { id: "2", plan: "Professional", price:"Rp 80.000", desc: "Suitable for individual to demo and explore cmlabs CMS", features: ["10 User for Organization (must Pro)", "50 Personal Projects", "10 Organization (20 Projects)", "5 Million / Month API Calls", "5000 File Media Assets", "SEO Integrated", "AI Assistance", "Custom Domain"]
  },
  { id: "3", plan: "Enterprise", price:"Rp160.000", desc: "Suitable for companies needing scalability, advanced features, and smooth collaboration", features: ["10 User for Organization (must Pro)", "Unlimited Personal Projects", "10 Organization (20 Projects)", "10 Million / Month API calls", "Unlimited File Media Assets", "SEO Integrated", "AI Assistance", "Custom Domain"]
  },
  { id: "4", plan: "White Label", price:"", desc: "Take full ownership of the CMS platform, deploy it under your infrastructure, with your own branding and configurations.", features: ["Full Source Code Access", "Fully Configurable Modules", "Custom Branding", "CMS Ownership", "Lifetime License"]
  },
]



5