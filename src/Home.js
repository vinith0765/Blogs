import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }
    return ( 
        <div className="home">
            { <h2>All blogs</h2> }
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} />}         
        </div>
     );
}
export default Home;
