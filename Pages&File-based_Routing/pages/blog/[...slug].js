import { useRouter } from "next/router"


const BlogPost = () => {
    const route = useRouter()
    console.log(route.query)

    return (
        <div>
            <div>ananas</div>
        </div>
    )
}

export default BlogPost