import { component$ } from '@builder.io/qwik';
import classNames from 'classnames';

export interface InputProps {
    errors?: string,
    name: string,
    class?: string,
    classErrors?: string,
    classLabel?: string,
    label?: string,
    value?: string,
    fieldProps?: any
}

export const Input = component$<InputProps>((props: InputProps) => {

    return (<div class='flex flex-col gap-2 transition-all duration-300'>
        <p class={`${classNames(props.classLabel)}`}>{props.label}</p>
        <input {...props.fieldProps} class={`input-primary ${classNames(props.class)}`} value={props.value} />
        <p class={`errors ${classNames(props.classErrors)}`}>
            {props.errors}
        </p>
    </div>
    );
});