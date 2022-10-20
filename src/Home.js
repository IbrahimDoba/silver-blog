import BlogList from "./Bloglist";
import useFetch from './useFetch';
import BlogComp from "./Components/BlogComponents";

const Home = () =>{
  return (
    <>
    <BlogComp />
    </>
  );
};

export default Home;







// const Home = () => {
//   const {data: blogs, isPending, error} = useFetch ('http://localhost:8000/blogs');


//  <div className="home">
// {error && <div>{error}</div>}
// {isPending && <div>Loading...</div>}
// {blogs && <BlogList blogs={blogs} title='All Blogs!' />}
// </div> 