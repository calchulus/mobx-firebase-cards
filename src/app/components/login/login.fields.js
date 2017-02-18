export const fields = [{
    name: 'email',
    floatingLabelText: 'Email Address',
    floatingLabelFixed: true,
    placeholder: '',
    rules: 'required|email|string|between:5,25',
}, {
    name: 'password',
    floatingLabelText: 'Password',
    floatingLabelFixed: true,
    placeholder: '',
    rules: 'required|string|between:5,25',
}];
