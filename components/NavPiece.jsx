import Link from "next/link";

function NavPiece({ href, label }) {
    return (
        <div className="">
            {" "}
            <Link className="p-4 rounded-md bg-slate-500  " href={href}>
                {label}
            </Link>
        </div>
    );
}

export default NavPiece;
