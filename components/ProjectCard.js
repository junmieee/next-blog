import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, imgScr, githubUrl }) => {
    return (
        <div className="max-w-md dark:bg-white  bg-slate-300 shadow-md rounded-lg overflow-hidden transform transition-all hover:scale-105 border border-gray-300">
            <img className="object-cover h-48 w-full" src="https://via.placeholder.com/300" alt="Project" />
            <div className="p-4">
                <h3 className="text-gray-800 font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
                <div className="flex justify-between mt-4">
                    <a href="#" target="_blank" className="text-gray-500 hover:text-gray-600 transition-colors duration-300">
                        <FaGithub className="inline-block mr-1" />
                    </a>
                    <a href="#" target="_blank" className="text-gray-500 hover:text-gray-600 transition-colors duration-300">
                        <FaExternalLinkAlt className="inline-block mr-1" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;