import React from 'react';
import {shallow} from 'enzyme';
import Loading from './loading';

describe('<Loading />', () => {

    it('should render correctly', () => {
        const dom = shallow(
            <Loading />
        );

        expect(dom).to.have.length(1);
    });

});
