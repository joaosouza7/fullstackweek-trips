import React from "react";

interface TripDescriptionProps {
    description: string;
}

const TripDescription = ({ description }: TripDescriptionProps) => {
    return (
        <div className="flex flex-col p-5">
            <h2 className="text-primaryDarker font-semibold">Sobre a viagem</h2>
            <p className="text-xs leading-6 text-primaryDarker mt-1">{description}</p>
        </div>
    );
};

export default TripDescription;