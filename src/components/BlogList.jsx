const BlogList = ({blogPosts}) => (
    <ul id="blog-list">
        {blogPosts.map( blogPost => (
            <li className={`list-none`} key={blogPost.data.title}>
                <span>{blogPost.data.title}</span>
            </li>
        ))}
    </ul>
)

export default BlogList