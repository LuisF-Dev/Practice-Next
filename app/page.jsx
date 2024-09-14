import NavPiece from "@/components/NavPiece";
import Users from "@/components/Users";
import Link from "next/link";

function HomePage() {
    return (
        <nav className=" ">
            <NavPiece
                href={"/1"}
                className="bg-slate-500 p-4 m-4 rounded-md align-middle"
                label={"Indice"}
            />
        </nav>
    );
}

export default HomePage;
