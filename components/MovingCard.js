import React, { CSSProperties, useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from "next/link";


const SCard = styled.div`
  user-select: none;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  display: flex;
  perspective: 500px;
`;

const Content = styled.div`
  position: absolute;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: transform 0.3s linear;
  background-color: #f5f6fa;
`;

const View = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

const MovingCard = ({
    width = 400,
    height = 300,
    limit = 24,
    title = { title },
    description = { description },
    imgSrc = { imgSrc },
    githubUrl = { githubURl },
}) => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const onMousemoveHandler = useCallback((ev) => {
        const { pageX: mousePointX, pageY: mousePointY } = ev;
        const target = ev.target;
        const { x, y, width, height } = target.getBoundingClientRect();

        const cardX = Math.floor(mousePointX - x);
        const cardY = Math.floor(mousePointY - y);
        const halfW = Math.floor(width / 2);
        const halfH = Math.floor(height / 2);
        const ny = parseFloat(((cardX - halfW) / halfW).toFixed(1)) * limit;
        const nx = -parseFloat(((cardY - halfH) / halfH).toFixed(1)) * limit;

        setRotate({ x: nx, y: ny }); // 위치 수정
    },
        [limit]
    );

    // 마우스가 card 에서 벗어나면 초기화
    const onMouseleaveHandler = () => {
        setRotate({ x: 0, y: 0 });
    };

    const style = {
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
    };


    return (
        <Link target="_blank" href={githubUrl} >
            <SCard width={width} height={height} >
                <View onMouseMove={onMousemoveHandler} onMouseLeave={onMouseleaveHandler}>
                    <Content style={style} className="bg-gray-500 hover:drop-shadow-basic transition duration-500 hover:ease-in-out duration-300">
                        <div className="w-8/12 h-5/6 items-center justify-items-center">
                            <h3 className="text-gray-600 font-semibold text-xl mb-2">{title}</h3>
                            <p className="text-gray-500 text-sm h-10">{description}</p>
                            <Image src={imgSrc}
                                className="rounded-xl shadow-lg shadow-slate-500 mt-4"
                                width={500}
                                height={300}
                                alt="Netflix" />
                            {/* <div cl ="#" target="_blank" className="text-gray-500 hover:text-gray-600 transition-colors duration-300">
                                    <FaGithub className="inline-block mr-1" size={20} />
                                </a>
                                <a href="#" target="_blank" className="text-gray-500 hover:text-gray-600 transition-colors duration-300">
                                    <FaExternalLinkAlt className="inline-block mr-1" size={20} />
                                </a>
                            </div> */}
                        </div>
                    </Content>
                </View>
            </SCard>
        </Link >

    )
}

export default MovingCard;
