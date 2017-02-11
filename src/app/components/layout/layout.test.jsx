import React from 'react';
import {shallow} from 'enzyme';
import MainLayout from './main-layout';

describe('<MainLayout />', () => {

    it('should render correctly', () => {
        const dom = shallow(
            <MainLayout />
        );

        expect(dom).to.have.length(1);
    });

});
