import React from 'react';
import {shallow} from 'enzyme';
import Dashboard from './dashboard';

describe('<Dashboard />', () => {

    it('should render correctly', () => {
        const dom = shallow(
            <Dashboard />
        );

        expect(dom).to.have.length(1);
    });

});
