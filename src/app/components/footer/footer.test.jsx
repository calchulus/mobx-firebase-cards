import React from 'react';
import {shallow} from 'enzyme';
import Footer from './footer';

describe('<Footer />', () => {

    it('should render correctly', () => {
        const dom = shallow(
            <Footer />
        );

        expect(dom).to.have.length(1);
    });

});
