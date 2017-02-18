import React from 'react';
import {shallow} from 'enzyme';
import Home from './home';

describe('<Home />', () => {

    it('should render correctly', () => {
        const dom = shallow(
            <Home />
        );

        expect(dom).to.have.length(1);
    });

});
