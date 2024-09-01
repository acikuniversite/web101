import useForm from "../hooks/useForm";

interface FormValues {
    username: string;
    email: string;
}

const MyForm = () => {
    const { values, handleChange, resetForm, handleSubmit } = useForm<FormValues>({
        initialValues: {
            username: "",
            email: "",
        },
        submitCallback: (values) => {
            console.log(values);
        }
    });

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email:</label>
                <input name="email" value={values.email} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default MyForm;