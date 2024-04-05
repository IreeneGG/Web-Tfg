import Link from "next/link";
import { Button } from "@/components/ui/button";

export function NavBar() {
    return (
        <>
            <nav
                className="bg-[#2F2F2F] bg-cover bg-center h-1/4 flex flex-col justify-center items-center"
                style={{
                    backgroundImage: "url('/fondo1.jpeg')",
                    backgroundBlendMode: 'soft-light'
                }}
            >
                <div className="container mx-auto text-center mb-8 ">
                    <h1 className="text-white text-7xl">Brot</h1>
                </div>
                <div className="flex space-x-3" >
                    <Link href="/estadistica">
                        <Button variant="secondary">Estadística</Button>
                    </Link>
                    <Link href="/sensores">
                        <Button variant="secondary">Sensores</Button>
                    </Link>
                    <Link href="/tiempo">
                        <Button variant="secondary">Tiempo</Button>
                    </Link>
                </div>
            </nav>


        </>
    );
}
