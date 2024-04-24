import * as yup from "yup";

export const userSchema = yup.object().shape({
    name: yup.string().required(),
    eail: yup.string().email().required(),
    password: yup.string().min(6).max(8).required()
})