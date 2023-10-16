"use client"
import Billboard from "../components/Billboard";
import MovieList from "../components/MovieList";
import NavBar from "../components/Navbar";

const getMovieList = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/movies")
        const data = await res.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error)
    }
}

const Home=async()=>{
    let data = await getMovieList();
    return (
        <>
            <NavBar />
            <Billboard />
            <div className="pb-40">
                <MovieList title="Trending Now" data={data} />
            </div>
        </>
    );
}
export default Home;