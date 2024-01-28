import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import BlogPost from "../../Components/HomeComponents/BlogPost/BlogPost";

const Blog = () => {
    return (
        <>
            <CommonBanner title="Blog" subtitle="Any question or remarks? Just write us a message!" />
            <BlogPost />
        </>
    );
};

export default Blog;