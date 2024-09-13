import Users from "@/components/Users";
import Link from "next/link";

function HomePage() {
    return (
        <div className=" ">
            <Link
                href={"/1"}
                className="bg-slate-500 p-4 m-4 rounded-md align-middle"
            >
                Primera pagina
            </Link>
        </div>
    );
}

export default HomePage;
