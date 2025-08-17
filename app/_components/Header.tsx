import { Section } from "./Section"
import { GithubIcon } from "./icons/GithubIcon"
import Link from "next/dist/client/link"
import { LinkedinIcon } from "./icons/LinkedinIcon"
import { VercelIcon } from "./icons/VercelIcon"


export const Header = () => {
    return (
        <header className="sticky top-0 py-4 bg-gray-800">
            <Section className="flex items-baseline">
                <h1 className="text-4xl font-bold text-gray-200">Hasina Randriatsarafara</h1>
                <div className="flex-1"/>
                <ul className="flex items-center gap-6">
                    <Link className="size-6" href="https://linkedin.com/">
                        <LinkedinIcon size={24} className="text-gray-200" />
                    </Link>
                    <Link className="size-6" href="https://github.com/">
                        <GithubIcon size={24} className="text-gray-200" />
                    </Link>
                    <Link className="size-6" href="https://vercel.com/">
                        <VercelIcon size={30} className="text-gray-200" />
                    </Link>
                </ul>
            </Section>
        </header>
    )
}