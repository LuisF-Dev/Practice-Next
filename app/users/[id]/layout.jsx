import NavPiece from "@/components/NavPiece";

function Layout({ children }) {
    return (
        <>
            <nav className="flex flex-row space-x-3 ">
                {" "}
                <NavPiece href={"/"} label="Home" />
                <NavPiece href={"/1"} label="Indice" />
            </nav>
            {children}
        </>
    );
}

export default Layout;
