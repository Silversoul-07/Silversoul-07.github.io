import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Projects",
    description: "Projects of Praveen Kumar",
    keywords: "projects, Praveen Kumar, Silversoul07",
}

export default function Page() {
    // website under construction
    return(
        <div className="flex flex-col items-center justify-center h-screen bg-cover bg-no-repeat transition-all duration-1000 bg-gradient-to-r to-blue-500 from-green-500">
        <h2 className="text-2xl text-center text-white">Website under construction...</h2>
    </div>    )
}