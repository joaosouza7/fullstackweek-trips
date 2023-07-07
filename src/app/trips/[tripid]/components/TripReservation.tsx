"use client";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { differenceInDays } from "date-fns";
import React from "react";
import { useForm, Controller } from "react-hook-form";

interface TripReservationProps {
    tripId: string;
    tripStartDate:Date;
    tripEndDate: Date;
    maxGuests: number;
    pricePerDay: number;
}

interface TripReservationForm {
    guests: number;
    startDate: Date | null;
    endDate: Date | null;
}

const TripReservation = ({ tripId, tripStartDate, tripEndDate, maxGuests, pricePerDay }: TripReservationProps) => {

    const { register, handleSubmit, control, formState: { errors }, watch, setError } = useForm<TripReservationForm>();

    const onSubmit = async (data: TripReservationForm) => {
        const response = await fetch("http://localhost:3000/api/trips/check", {
            method: "POST",
            body: Buffer.from(
                JSON.stringify({
                    startDate: data.startDate,
                    endDate: data.endDate,
                    tripId,
                })
            ),
        });

        const res = await response.json();

        if (res?.error?.code === "TRIP_ALREADY_RESERVED") {
            setError("startDate", {
                type: "manual",
                message: "Esta data já está reservada!",
            });

            setError("endDate", {
                type: "manual",
                message: "Esta data já está reservada!",
            });
        }

        if (res?.error?.code === "INVALID_START_DATE") {
            setError("startDate", {
                type: "manual",
                message: "Data inválida",
            });
        }

        if (res?.error?.code === "INVALID_END_DATE") {
            setError("endDate", {
                type: "manual",
                message: "Data inválida",
            });
        }
    }

    const startDate = watch("startDate");
    const endDate = watch("endDate");

    return (
        <div className="flex flex-col px-5">
            <div className="flex gap-4">
                <Controller 
                    name="startDate"
                    rules={{
                        required: {
                            value: true,
                            message: "Data inicial é obrigatória."
                        },
                    }}
                    control={control}
                    render={({ field }) => (
                        <DatePicker 
                            selected={field.value} 
                            className="w-full" 
                            placeholderText="Data de inicio" 
                            error={!!errors?.startDate}
                            errorMessage={errors?.startDate?.message}
                            onChange={field.onChange}
                            minDate={tripStartDate}
                            />
                    )}
                />
                <Controller 
                    name="endDate"
                    rules={{
                        required: {
                            value: true,
                            message: "Data final é obrigatória."
                        },
                    }}
                    control={control}
                    render={({ field }) => (
                        <DatePicker 
                            selected={field.value} 
                            className="w-full" 
                            placeholderText="Data de inicio" 
                            error={!!errors?.endDate}
                            errorMessage={errors?.endDate?.message}
                            onChange={field.onChange}
                            maxDate={tripEndDate}
                            minDate={startDate ?? tripStartDate}
                            />
                    )}
                />
            </div>

            <Input {...register("guests", {
                required: {
                    value: true,
                    message: "Número de hóspedes é obrigatório."
                }
            })} 
            placeholder={`Número de hóspedes (máx: ${maxGuests})`} 
            className="mt-4" 
            error={!!errors?.guests}
            errorMessage={errors?.guests?.message}
            />
                
            <div className="flex justify-between mt-3">
                <p className="font-medium text-primaryDarker text-sm">Total: </p>
                <p className="font-medium text-primaryDarker text-sm">
                    {(startDate && endDate) ? 
                        `R$${differenceInDays(endDate, startDate) * pricePerDay}` ?? 1
                    : "R$0"}
                </p>
            </div>
            <div className="pb-10 border-b border-b-grayLighter w-full">
                <Button onClick={() => handleSubmit(onSubmit)()} className="mt-3 w-full">Reservar agora</Button>
            </div>
            
        </div>
    );
};

export default TripReservation;