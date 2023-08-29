import { allTags } from "../constants/dataset";
import Tag from "./Tag";
import dayjs from 'dayjs';
import { AiOutlineCalendar } from "react-icons/ai";
import IconWithText from "./IconWithText";

const MDXComponent = ({ children, post }) => {
    const formattedDate = dayjs(post.date).format("YYYY-MM-DD")
    return (
        <div className="w-full flex flex-col prose dark:prose-invert mt-10 text-gray-900 dark:text-gray-100">
            <h1 className=" text-gray-900 dark:text-gray-100 mb-2">{post.title}</h1>
            {/* <IconWithText Icon={AiOutlineCalendar} size={14} text={formattedDate} /> */}
            <div className=" mt-4 flex flex-wrap gap-2 mb-20">
                {post.tags.map((tag, i) => (
                    <Tag key={i} tag={tag} />
                ))}
            </div>
            {children}
        </div>
    );
};

export default MDXComponent;