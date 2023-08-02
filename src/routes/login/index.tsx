
/* eslint-disable @typescript-eslint/no-unused-vars */
import { $, component$ } from '@builder.io/qwik';
import { routeLoader$, z } from '@builder.io/qwik-city';
import type { InitialValues, SubmitHandler } from '@modular-forms/qwik';
import { formAction$, useForm, zodForm$ } from '@modular-forms/qwik';
import { Button } from '~/components/Button';
import type { InputProps } from '~/components/Input';
import { Input } from '~/components/Input';

const loginSchema = z.object({
    email: z
        .string()
        .min(1, 'Please enter your email.')
        .email('The email address is badly formatted.'),
    password: z
        .string()
        .min(1, 'Please enter your password.')
        .min(8, 'You password must have 8 characters or more.'),
});

const fields: InputProps[] = [
    {
        name: 'email',
        label: 'Correo',
    },
    {
        name: 'password',
        label: 'Contraseña'
    },

]
type LoginForm = z.infer<typeof loginSchema>;

export const useFormLoader = routeLoader$<InitialValues<LoginForm>>(() => ({
    email: '',
    password: '',
}));

export const useFormAction = formAction$<LoginForm>((values) => {
    // Runs on server
    console.log(values)
}, zodForm$(loginSchema));



export default component$(() => {
    const [, { Form, Field }] = useForm<LoginForm>({
        loader: useFormLoader(),
        action: useFormAction(),
        validate: zodForm$(loginSchema),
        validateOn: 'change'
    });
    const handleSubmit: any = $((values: any, event: any) => {
        // Runs on client
        console.log(values);
    });

    return <div class='w-full h-screen flex flex-col justify-center items-center'>
        <Form onSubmit$={handleSubmit} class='flex flex-col gap-4 text-black'
        >
            {fields.map((input: any) => (
                <Field name={input.name} key={input.name}>
                    {(field: any, props: any) => {
                        console.log(field, props)
                        return <Input
                            fieldProps={...props}
                            class={input.class}
                            classLabel={input.classLabel}
                            label={input.label}
                            classErrors={input.classErrors}
                            name={input.name}
                            value={field.value}
                            errors={field.error} />
                    }}
                </Field>
            ))}


            <Button
                type='submit'
                label='Ingresar'
            />



        </Form>

    </div>
});