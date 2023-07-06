"use client";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";
import React from "react";

interface TripReservationProps {
    trip: Trip;
}

const TripReservation = ({ trip }: TripReservationProps) => {
    return (
        <div className="flex flex-col px-5">
            <div className="flex gap-4">
                <DatePicker className="w-full" placeholderText="Data de inicio" onChange={() => {}} />
                <DatePicker className="w-full" placeholderText="Data Final" onChange={() => {}} />
            </div>

            <Input placeholder={`Número de hóspedes (máx: ${trip?.maxGuests})`} className="mt-4" />
                
            <div className="flex justify-between mt-3">
                <p className="font-medium text-primaryDarker text-sm">Total: </p>
                <p className="font-medium text-primaryDarker text-sm">R$2500: </p>
            </div>
            
            <Button className="mt-3">Reservar agora</Button>
        </div>
    );
};

export default TripReservation;