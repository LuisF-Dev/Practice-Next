import Users from "@/components/Users";

async function getData(num) {
    const res = await fetch(`https://reqres.in/api/users?page=${num}`);
    const users = await res.json();

    return users.data;
}

async function HomePage({ params }) {
    let data = await getData(params.page);

    return (
        <div>
            <Users data={data} num={params.page} />
        </div>
    );
}

export default HomePage;
