import { cn } from "@/lib/utils";
import { Section } from "./Section"
import { ComponentPropsWithoutRef } from "react";
import { LinkedinIcon } from "./icons/LinkedinIcon";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
    return (
        <span className={cn("bg-accent/30 border border-accent0 font-mono p-1 m-1 rounded-sm text-primary", className)} {...props} />
    )
}

export const Hero= () => {
    return (
        // flex max-md:flex-col items-start gap-4
        <Section className="flex flex-row max-md:flex-col text-gray-200">
            <div className="flex-[3]">
                <h2 className="text-2xl font-bold font-caption text-gray-400">Hasina Randriatsarafara</h2>
                <h3 className="text-xl text-gray-400"> Software Engeneer</h3>
                <p className="text-gray-400">I love creating content on <Code><LinkedinIcon className="inline" size={16}/> Linkeding</Code></p>
            </div>
            <div className="flex-1">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/male-user-image-illustration-download-in-svg-png-gif-file-formats--person-picture-profile-business-pack-illustrations-6515860.png?f=webp" alt="" 
                className="w-full h-auto max-w-sm rounded-lg"/>
            </div>
        </Section>
    )
}