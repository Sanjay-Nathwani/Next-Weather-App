"use client";

import { useGlobalContext } from '@/app/context/globalContext';
import { gauge } from '@/app/utils/Icons';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'

function Pressure() {

    const {forecast} = useGlobalContext();

    if(!forecast || !forecast?.main || !forecast?.main?.pressure){
        return <Skeleton className='h-[12rem] w-full' />
    }

    const {pressure} = forecast?.main;

    const getPressureDescription = (pressure:number) => {
        if(pressure < 1000){
            return "Very low pressure";
        }
        if(pressure >= 1000 && pressure < 1015){
            return "Low pressure. Exprect weather changes"
        }
        if(pressure >= 1015 && pressure < 1025){
            return "Normal pressure. Expect weather changes"
        }
        if(pressure >= 1025 && pressure < 1040){
            return "High pressure. Expect weather changes"
        }
        if(pressure >= 1040){
            return "Very high pressure. Expect weather changes"
        }
        return "Unavailable";
    }

  return (
    <div className="pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-5 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="top">
        <h2 className="flex items-center gap-2 font-medium">
          {gauge} Pressure
        </h2>
        <p className="text-2xl pt-4">{pressure} hPa</p>
      </div>
      <p className="text-sm">{getPressureDescription(pressure)}.</p>
    </div>
  );
}

export default Pressure