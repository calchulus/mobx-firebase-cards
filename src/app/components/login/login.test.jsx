import React from 'react';
import {shallow} from 'enzyme';
import Login from './login';

describe('<Login />', () => {

    it('should render correctly', () => {
        const dom = shallow(
            <Login />
        );

        expect(dom).to.have.length(1);
    });

});
