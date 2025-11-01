import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Card = ({ cards }) => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <>
            <SectionTitle title={'Whats is Provide?'} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6">
                {
                    cards.map(card => (
                        <div
                            key={card.id}
                            onMouseEnter={() => setHoveredId(card.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            style={{
                                boxShadow:
                                    hoveredId === card.id
                                        ? "0 2px 8px #3BB77E"
                                        : "0 1px 3px rgba(0,0,0,0.1)",
                                transform: hoveredId === card.id ? "scale(1.02)" : "",
                                transition: "all 0.3s ease",
                                borderRadius: "12px",
                                backgroundColor: "#fff",
                                cursor: "pointer"
                            }}
                            className="card bg-base-100 shadow-sm hover:shadow-md">
                            <figure className="overflow-hidden">
                                <img
                                    src={card.imageUrl}
                                    alt={card.title}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                            </figure>

                            <div className="card-body place-items-center text-center px-3 py-4">
                                <h2 className="card-title font-bold text-base sm:text-lg md:text-xl">
                                    {card.title}
                                </h2>
                                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                                    {card.description}
                                </p>
                                <div className="card-actions justify-end">
                                    <button className="mt-3 text-[#3BB77E] font-semibold text-sm sm:text-base">
                                        {card.text}
                                    </button>
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
