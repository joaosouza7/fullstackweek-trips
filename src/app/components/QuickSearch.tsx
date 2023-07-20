import React from "react";
import Link from "next/link";
import Image from "next/image";

const QuickSearch = () => {
    return (
        <div className="container mx-auto p-5">
            <div className="flex items-center">
                <div className="w-full h-[1px] bg-grayLighter"></div>
                <h2 className="font-medium text-primaryGray whitespace-nowrap px-5">
                    Tente pesquisar por
                </h2>
                <div className="w-full h-[1px] bg-grayLighter"></div>
            </div>

            <div className="flex w-full justify-between mt-5 lg:mt-10 lg:justify-center gap-40">
                <div className="flex flex-col items-center gap-1">
                    <Link
                        href={`/trips/search?text=hotel`}
                        className="flex flex-col items-center hover:text-primary transition-all"
                    >
                        <Image
                            width={35}
                            height={35}
                            src="/hotel-icon.png"
                            alt="Hotel"
                        />
                        <p className="text-sm lg:text-base text-primaryGray">
                            Hotel
                        </p>
                    </Link>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <Link
                        href="/trips/search?text=fazenda"
                        className="flex flex-col items-center hover:text-primary transition-all"
                    >
                        <Image
                            width={35}
                            height={35}
                            src="/farm-icon.png"
                            alt="Fazenda"
                        />
                        <p className="text-sm lg:text-base text-primaryGray">
                            Fazenda
                        </p>
                    </Link>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <Link
                        href="/trips/search?text=Chalé"
                        className="flex flex-col items-center hover:text-primary transition-all"
                    >
                        <Image
                            width={35}
                            height={35}
                            src="/cottage-icon.png"
                            alt="Chalé"
                        />
                        <p className="text-sm lg:text-base text-primaryGray">
                            Chalé
                        </p>
                    </Link>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <Link
                        href="/trips/search?text=pousada"
                        className="flex flex-col items-center hover:text-primary transition-all"
                    >
                        <Image
                            width={35}
                            height={35}
                            src="/inn-icon.png"
                            alt="Pousada"
                        />
                        <p className="text-sm lg:text-base text-primaryGray">
                            Pousada
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default QuickSearch;
