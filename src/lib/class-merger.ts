import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cm = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
