"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Map, LucideIcon, Building, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import ades from "../images/ades.png";
import whatsapp from "../images/whatsapp.png";
import immo1 from "../images/immo1.png";
import immo2 from "../images/immo2.png";    
import immo3 from "../images/immo3.png";
import immo4 from "../images/immo4.png";

import circuit1 from "../images/circuit1.png";
import circuit2 from "../images/circuit2.png";
import circuit3 from "../images/circuit3.png";


export const Status = () => {
    return (
        <Section className="flex flex-col max-md:flex-row items-start gap-4">
            <Card className=" flex-[2] w-full p-4 flex flex-col gap-2">
                <p className="text-lg text-muted-foreground font-bold">Side Project</p>

                <div className="flex flex-col gap-4">
                    { SIDE_PROJECTS.map((project, index) => (
                        <SideProject
                            key={index}
                            logo={project.logo}
                            title={project.title}
                            description={project.description}
                            url={project.url}
                            images={project.images}
                        />
                    ))}
                </div>
            </Card>

            <div className=" flex-1 flex flex-col w-full gap-2 h-full">
                <Card className="p-4 flex-1"> 

                <div className="flex flex-col gap-4">
                    { WORKS.map((work, index) => (
                        <Work
                            key={index}
                            image={work.image}
                            title={work.title}
                            role={work.role}
                            date ={work.date}
                            url={work.url}
                        />
                    ))}
                </div>

                </Card>
                <Card className="p-4 flex-1">
                    <p>Contact me</p>
                    <ContactCard
                        image="https://wcaustin.org/wp-content/uploads/2014/12/LinkedIn-InBug-2CRev.png"
                        mediumImage="https://wcaustin.org/wp-content/uploads/2014/12/LinkedIn-InBug-2CRev.png"
                        name="LinkedIn"
                        description="Mon contact LinkedIn"
                    />
                    <ContactCard
                        image={whatsapp.src}
                        mediumImage={whatsapp.src}
                        name="WhatsApp"
                        description="Mon contact WhatsApp"
                    />

                </Card>
            </div>

            

        </Section>
    );
}

const ContactCard = (props: {image: string, mediumImage: string, name: string, description: string}) => {
    return (
        <Card className="p-4 flex flex-row items-center gap-0 ">
            <div className="flex flex-row items-center gap-4">
                <div className="relative">
                    <img src={props.image} alt={props.name} className="w-10 h-10 " />
                    <img src={props.mediumImage} alt={props.name} className="w-5 h-5 absolute -bottom-2 -right-2 rounded-full object-contain" />
                </div>
                <div className="mr-auto">
                    <div className="flex items-center gap-2">
                        <p className="text-lg font-semibold"> {props.name}</p>
                    </div>
                    <p className="text-xs text-muted-foreground"> { props.description}</p>
                </div>
            </div>
            <ArrowUpRight size={16} />
        </Card>
    );
}

const SIDE_PROJECTS = [
    {
        logo: Building,
        title: "Immo Bazar",
        url: "#",
        description: "Une application web et mobile pour la mise en relation des clients, agents immobiliers et propriétaires.",
        images: [
            immo1.src,
            immo2.src,
            immo3.src,  
            immo4.src]
    },
    {
        logo: Map,
        title: "Mada Circuit",
        url: "#",
        description: "Un site web de réservation de circuits touristiques à Madagascar.",
        images: [
            circuit1.src,
            circuit2.src,
            circuit3.src]
    },

];

type SideProjectProps = {
    logo: LucideIcon;
    title: string;
    description: string;
    url: string
    images : Array<string>;
};

export const SideProject = (props: SideProjectProps) => {
    const [open, setOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault(); // Empêche la navigation du Link
        setOpen(true);
    };

    const handleModalClose = (e: React.MouseEvent) => {
        e.stopPropagation(); // Empêche la propagation de l'événement
        setOpen(false);
        setCurrentImageIndex(0); // Reset à la première image
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            setOpen(false);
            setCurrentImageIndex(0);
        }
    };

    // Navigation du carrousel
    const goToPrevious = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? props.images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => 
            prevIndex === props.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <>
            <Link 
                onClick={handleClick}  
                href={props.url} 
                className="inline-flex items-center gap-4 bg-gray-300 rounded hover:bg-gray-100 transition-colors duration-200 p-2"
            >
                <span className="text-accent-foreground p-4 rounded bg-white">
                    <props.logo />
                </span>
                <div>
                    <p className="text-lg font-semibold">{props.title}</p>
                    <p className="text-sm font-mono text-muted-foreground">{props.description}</p>
                </div>
            </Link>

            {open && (
                <div 
                    className="fixed inset-0 flex items-center justify-center bg-black/75 z-50 p-4"
                    onClick={handleBackdropClick}
                >
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
                        {/* Header */}
                        <div className="flex justify-between items-center p-4 border-b bg-gray-50">
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">{props.title}</h2>
                                <p className="text-sm text-gray-600">{props.description}</p>
                            </div>
                            <button 
                                onClick={handleModalClose}
                                className="text-gray-500 hover:text-gray-700 text-3xl font-light w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors"
                            >
                                ×
                            </button>
                        </div>

                        {/* Carrousel principal */}
                        <div className="relative bg-gray-100">
                            {/* Image principale */}
                            <div className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden">
                                <img
                                    src={props.images[currentImageIndex]}
                                    alt={`${props.title} - Image ${currentImageIndex + 1}`}
                                    className="max-w-full max-h-full object-contain transition-opacity duration-300"
                                />
                                
                                {/* Boutons de navigation */}
                                {props.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={goToPrevious}
                                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all hover:scale-110"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={goToNext}
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all hover:scale-110"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </>
                                )}

                                {/* Indicateur de position */}
                                {props.images.length > 1 && (
                                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        {currentImageIndex + 1} / {props.images.length}
                                    </div>
                                )}
                            </div>

                            {/* Aperçus en bas (thumbnails) */}
                            {props.images.length > 1 && (
                                <div className="p-4 bg-white border-t">
                                    <div className="flex gap-2 justify-center overflow-x-auto pb-2">
                                        {props.images.map((image, index) => (
                                            <button
                                                key={index}
                                                onClick={() => goToImage(index)}
                                                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                                                    index === currentImageIndex 
                                                        ? 'border-blue-500 ring-2 ring-blue-200 scale-105' 
                                                        : 'border-gray-300 hover:border-gray-400 hover:scale-105'
                                                }`}
                                            >
                                                <img
                                                    src={image}
                                                    alt={`Aperçu ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer avec boutons d'action */}
                        <div className="p-4 border-t bg-gray-50 flex gap-2 justify-end">
                            <button 
                                onClick={handleModalClose}
                                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors font-medium"
                            >
                                Fermer
                            </button>
                            <a 
                                href={props.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium inline-flex items-center gap-2"
                            >
                                Voir le projet
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

const WORKS = [
    {
        image: "https://miroke.com/assets/images/image01.png?v=4d14d705",
        url: "https://miroke.com/",
        title: "MiroKe",
        role: "Full Stack Odoo Developer",
        date: "2022-01-01",
    },
        {
        image: ades.src,
        url: "https://ades-solaire.org/",
        title: "Lead Project",
        role: "Full Stack Django Developer",
        date: "2022-01-01",
    },
];


type WorkProps = {
    image: string;
    title: string;
    role: string;
    date:string;
    url: string
};

export const Work = (props:WorkProps) => {
    return (
       <Link href={props.url} className="inline-flex items-center gap-4 bg-gray-300 rounded hover:bg-gray-100 transition-colors duration-200">
            <span className=" text-accent-foreground p-4 rounded ">
                <img className="max-w-2xs" src = {props.image} alt={props.title} />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.role}</p>
                <p className="text-sm text-muted-foreground">{props.date}</p>
            </div>
        </Link>
    );
}