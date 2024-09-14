import { roboto } from "@/app/fonts";
import clsx from "clsx";
import Image from "next/image";
clsx;

async function get_data(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await res.json();
    return data.data;
}

async function User_page({ params }) {
    const data = await get_data(params.id);
    console.log("que paso");

    return (
        <div className="bg-orange-600 rounded-md p-5 my-40">
            <h2>Usuario #{data.id}:</h2>
            <h2 className={clsx(roboto.class, "font-bold")}>
                {data.first_name} {data.last_name}
            </h2>
            <p className={clsx(roboto.class, "font-bold")}>
                Email: {data.email}
            </p>
            <Image
                alt="imagen de usuario"
                src={data.avatar}
                width={256}
                height={256}
                className="m-auto"
            />
        </div>
    );
}

export default User_page;
