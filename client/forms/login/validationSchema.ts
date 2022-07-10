import * as Yup from 'yup';

export const LoginFormSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required()
});
