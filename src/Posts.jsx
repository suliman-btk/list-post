import './Posts.css'
function Posts({title,children}){
    return (
        <div className="border">
            <h1 className='post-title'>{title}</h1>
            <hr/>
            {children}
        </div>
    )
}
export default Posts;