import { roboto } from "@/app/fonts";
import clsx from "clsx";
import Image from "next/image";
import arrow from "@/app/img/arrow.png";
import Link from "next/link";

function Users({ data, num }) {
    let plusOne = parseInt(num) + 1;
    let minusOne = parseInt(num) - 1;
    return (
        <ul className="inline-flex justify-center flex-col ">
            {data.map((users) => (
                <Link
                    className="m-5"
                    key={users.id}
                    href={`/users/${users.id}`}
                >
                    <li
                        key={users.id}
                        className={clsx(
                            roboto.className,
                            "bg-stone-700  p-2 rounded-md font-bold inline-grid grid-cols-2 grid-rows-2 place-items-center min-w-auto liClass"
                        )}
                    >
                        <h3 className="">
                            {users.id}. {users.first_name} {users.last_name}
                        </h3>{" "}
                        <p className="order-2">Email: {users.email}</p>
                        <Image
                            className="row-span-2 order-1 rounded-md "
                            src={users.avatar}
                            alt="imagen de usuario"
                            height={128}
                            width={128}
                        />
                    </li>
                </Link>
            ))}
            <div className="grid grid-cols-3 liClass place-items-center">
                {!(num <= 1) ? (
                    <Link className="" href={`/${minusOne.toString()}`}>
                        <Image
                            className="row-span-2 order-1 rounded-md cursor-pointer "
                            src={arrow}
                            alt="imagen de usuario"
                            height={128}
                            width={128}
                        />
                    </Link>
                ) : (
                    <div></div>
                )}
                <h3>{num}/2</h3>
                {!(num >= 2) ? (
                    <Link href={`/${plusOne.toString()}`}>
                        <Image
                            className="row-span-2 order-1 rounded-md scale-x-[-1] cursor-pointer "
                            src={arrow}
                            alt="imagen de usuario"
                            height={128}
                            width={128}
                        />
                    </Link>
                ) : (
                    <div></div>
                )}
            </div>
        </ul>
    );
}

export default Users;
