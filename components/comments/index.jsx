import Comment from "@/components/comment";

const Comments = (props) => {
    return (
        <div
            className="flex flex-col  mx-60 gap-12 my-20 ">
            {props.comment.map(
                (p, index) => <Comment key={index} name={p.name}
                                              text={p.text}
                                              date={p.date} term={p.term} role={p.role}/>
            )}
        </div>
    );

}
export default Comments;