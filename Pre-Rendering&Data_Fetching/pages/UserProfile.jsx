

const UserProfile = (props) => {

    return (
        <div>
            <p>{props.username}</p>
        </div>
    )
}

export default UserProfile


export async function getServerSideProps(context) {
    const { params, req, res } = context

    return {
        props: {
            username: "max"
        }
    }
}