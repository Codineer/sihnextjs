"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
    {
        id: 1,
        name: "Ramgopal Bagh ",
        designation: "Fullstack developer",
        image:
            "/images/person1.jpeg",
    },
    {
        id: 2,
        name: "Pranav singh",
        designation: "Content writer",
        image:
            "/images/person2.jpeg",
    },
    {
        id: 3,
        name: "Daisy Chowdhury ",
        designation: "App Developer",
        image:
            "/images/person3.jpeg",
    },
    {
        id: 4,
        name: "Utkarsh Shakya",
        designation: "Fullstack developer",
        image:
            "/images/person4.jpeg",
    },
    {
        id: 5,
        name: "Soumili Sarkar",
        designation: "UI/UX Developer",
        image:
            "/images/person5.jpeg",
    },
    {
        id: 6,
        name: "Bishanka Karmakar",
        designation: "Frontend Developer",
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
];

export function ToolTip() {
    return (
        (<div className=" flex flex-row items-center justify-center mt-11 mb-10 w-full">
            <AnimatedTooltip items={people} />
        </div>)
    );
}
