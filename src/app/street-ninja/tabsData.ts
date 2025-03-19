import HowItWorks from "./content/how-it-works.mdx";
import Overview from "./content/overview.mdx";
import Tech from "./content/tech.mdx";
import Challenges from "./content/challenges.mdx";
import WhatsAhead from "./content/whats-ahead.mdx";
import React from "react";

interface TabData {
    name: string
    component: React.FC
}

export const tabsData: TabData[] = [
    { name: "Overview", component: Overview },
    { name: "How it works", component: HowItWorks },
    { name: "Technical breakdown", component: Tech },
    { name: "Challenges", component: Challenges },
    { name: "What's ahead", component: WhatsAhead },
]