import { component$ } from '@builder.io/qwik';
import classNames from 'classnames';


export interface ButtonProps {
    class?: string | undefined,
    label?: string
    type?: "button" | "reset" | "submit" | undefined
}

export const Button = component$<ButtonProps>((props) => {
    return (
        <button type={props.type} class={`btn-primary ${classNames(props.class)}`}>{props.label}</button>
    );
});