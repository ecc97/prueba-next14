"use client"

import React from 'react';
import { Control, Controller, FieldError, FieldValues, Path } from 'react-hook-form';
import InputFile from '../../atoms/inputFile/InputFile';

interface FormFieldFileProps<T extends FieldValues> {
    label: string;
    name: Path<T>;
    control: Control<T>;
    error?: FieldError;
    id?: string;
    placeholder?: string;
    onChange: (file: File | null) => void; // Nueva prop para manejar cambios
}

const FormFieldFile = <T extends FieldValues>({
    label,
    name,
    control,
    error,
    id,
    placeholder,
    onChange,
}: FormFieldFileProps<T>) => {
    return (
        <div className='w-full flex flex-col mb-4'>
            <label htmlFor={id || label.toLowerCase()} className={`text-sm font-medium`}>{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <InputFile
                        id={id || label.toLowerCase()}
                        error={error?.message}
                        placeholder={placeholder || `Seleccione un ${label.toLowerCase()}`}
                        onChange={(e) => {
                            const file = e.target.files?.[0] || null;
                            field.onChange(file); 
                            onChange(file); 
                        }}
                    />
                )}
            />
        </div>
    );
};

export default FormFieldFile;