'use client'
import clsx from 'clsx';
import classNames from 'clsx';

import { useEffect, useState } from "react"

export function Header() {





    return (
        <div className={clsx('w-fit mx-auto')}>
            <h1 className={clsx('text-6xl font-bold hover:text-amber-300 transition duration-1000')}>
                My Blog
            </h1>
        </div>
    )
}