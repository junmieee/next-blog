import { allTags } from "../constants/dataset";
import Tag from "./Tag";
import { AiOutlineCalendar } from "react-icons/ai";
import IconWithText from "./IconWithText";

const MDXComponent = ({ children, post }) => {
    return (
        <div className="w-full flex flex-col prose dark:prose-invert mt-10 text-gray-900 dark:text-gray-100">
            <h1 className=" text-gray-900 dark:text-gray-100 mb-2">{post.title}</h1>
            <div className=" mt-4 flex flex-wrap gap-2 mb-20">
                {post.tags.map((tag, i) => (
                    <div
                        key={i}
                        className="bg-gray-400 dark:bg-gray-600 text-neutral-100 rounded-lg px-2 transition-colors py-0.5">
                        {tag}
                    </div>
                ))}
            </div>
            {children}
        </div>
    );
};

export default MDXComponent;