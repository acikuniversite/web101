import { ChangeEvent, FormEvent, useState } from "react";

interface FormState<T> {
    values: T;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    resetForm: () => void;
    handleSubmit: (e: FormEvent) => void;
}
type FormOptions<T> = {
    submitCallback?: (values: T) => void;
    initialValues: T;
}
const useForm = <T extends {}>({ submitCallback, initialValues }: FormOptions<T>): FormState<T> => {
    const [values, setValues] = useState<T>(initialValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        submitCallback && submitCallback(values);
        resetForm();
    }

    const resetForm = () => {
        setValues(initialValues);
    };

    return { values, handleChange, resetForm, handleSubmit };
};

export default useForm;