import * as Yup from 'yup';

export const RegistrationFormSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  middleName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  phoneNumber: Yup.number().required()
});
