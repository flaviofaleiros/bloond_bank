import React from 'react';
import { render, screen } from '@testing-library/react';

import DonorRegistration from "./";
describe('testing component', () => {
    it('should render', function () {
        render(<DonorRegistration />)
        expect(screen.getByText(/Tipo sanguinio/i)).toBeInTheDocument();

    });
})
