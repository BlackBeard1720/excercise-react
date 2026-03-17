interface UserDisplayProps {
    userName: string,
    countClick: number,
    onUpdateClick: () => void
}

function UserDisplay(props: UserDisplayProps){
    console.log(props)
    return (
        <>
            <h1>User Display</h1>
            <p>Name: {props.userName}</p>
            <p>Count: {props.countClick}</p>
            <button onClick={props.onUpdateClick}>Click me</button>
        </>
    )
}

export default UserDisplay