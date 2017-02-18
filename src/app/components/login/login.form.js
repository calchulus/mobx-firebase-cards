import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';
import {fields} from './login.fields';

let plugins = { dvr: validatorjs };

class LoginForm extends MobxReactForm {

    onSuccess(form) {
        alert('Form is valid! Send the request here.');
        // get field values
        console.log('Form Values!', form.values());
    }

    onError(form) {
        // get all form errors
        console.log('All form errors', form.errors());
        // invalidate the form with a custom error message
        form.invalidate('This is a generic error message!');
    }
}

export default new LoginForm({ fields }, { plugins });



