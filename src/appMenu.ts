import { barChart, home, people, pieChart, speedometer } from "ionicons/icons";

export interface MenuItem {
  label: string;
  url?: string;
  icon?: string;
  img?: string;
  children?: MenuItem[];
  condition?: boolean | (() => Promise<boolean> | boolean);
}

export const appMenu: MenuItem[] = [
  { 
    label: "Home", 
    url: "/home", 
    icon: home 
  },
  { 
    label: "About", 
    url: "/about", 
    icon: people 
  },
  {
    label: "Reports",
    icon: barChart,
    children: [
      {
        label: "Clinic",
        icon: pieChart,
        children: [
          {
            label: "Report One",
            url: "/reports/report1",
            icon: pieChart,
          },
          {
            label: "Report Two",
            url: "/reports/report2",
            icon: speedometer
          }
        ]
      },
      {
        label: "Report Two",
        url: "/reports/report2",
        icon: speedometer
      }
    ]
  },
  {
    label: "Users",
    icon: people,
    children: [
      {
        label: "Add User",
        url: "/home",
        icon: people,
      },
      {
        label: "All Users",
        url: "/about",
        icon: speedometer
      }
    ]
  }
]