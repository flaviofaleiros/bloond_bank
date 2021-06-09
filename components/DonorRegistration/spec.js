import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import DonorRegistration from "./";

describe('testing component', () => {
    it('should render', function () {
        render(<DonorRegistration />)
        expect(screen.getByText(/Tipo sanguinio/i)).toBeInTheDocument();
    });

    test('rendering and submitting a basic Formik form', async () => {
        const handleSubmit = jest.fn()
        render(<DonorRegistration onSubmit={handleSubmit} />)

        userEvent.type(screen.getAllByAltText(/name/i), 'John')
        userEvent.type(screen.getAllByAltText(/age/i), '19')
        userEvent.type(screen.getAllByAltText(/email/i), 'john.dee@someemail.com')

        userEvent.click(screen.getByRole('button', { name: /Confirmar/i }))

        await waitFor(() =>
            expect(handleSubmit).toHaveBeenCalledWith({
                email: 'john.dee@someemail.com',
                firstName: 'John',
                lastName: 'Dee',
            }, expect.anything())
        )
    })
})
