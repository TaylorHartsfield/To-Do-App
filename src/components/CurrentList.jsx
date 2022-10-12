export default function CurrentList({ list }) {

    return (
        <div>
            <ul>
                {list.map(item => { return (<li>{item}</li>)})}
            </ul>
        </div>
    )
}