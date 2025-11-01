import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Card = ({ cards }) => {
    const [hoveredId, setHoveredId] = useState(null)
    return (
        <>
            <SectionTitle title={'whats is Provide?'}></SectionTitle>
            <div className='grid grid-cols-3 gap-5'>
                {
                    cards.map(card => (
                        <div
                            onMouseEnter={() => setHoveredId(card.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            style={{
                                boxShadow:
                                    hoveredId === card.id
                                        ? "0 2px 4px #3BB77E"
                                        : " ",
                                transform: hoveredId === card.id ? "scale(1.02)" : "",
                                transition: "all 0.3s ease",
                                borderRadius: "12px",
                                backgroundColor: "#fff",
                                padding: "16px",
                                cursor: "pointer"
                            }}
                            className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img
                                    src={card.imageUrl}
                                    alt={card.title} />
                            </figure>
                            <div className="card-body place-items-center">
                                <h2 className="card-title text-wrap font-bold">{card.title}</h2>
                                <p className='text-gray-500'>{card.description}</p>
                                <div className="card-actions justify-end">
                                    <button className="mt-3 text-[#3BB77E]">{card.text}</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Card;