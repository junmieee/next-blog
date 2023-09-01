
import dayjs from 'dayjs'
import IconWithText from 'components/IconWithText'
import { AiOutlineCalendar } from "react-icons/ai";


const MDXComponent = ({ children, post }) => {
    const formattedDate = dayjs(post.date).format("YYYY-MM-DD")


    return (
        <div className="w-full flex flex-col prose dark:prose-invert mt-10 text-gray-900 dark:text-gray-100">
            <h1 className=" text-gray-900 dark:text-gray-100 mb-2">{post.title}</h1>
            <IconWithText
                Icon={AiOutlineCalendar} size={14} text={formattedDate} />

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