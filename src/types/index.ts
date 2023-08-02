import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    url?: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit"
}