import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Form from "./";

describe('testing component', () => {
    it('should render', function () {
        render(<Form />)
        expect(screen.getByText(/Tipo sanguíneo/i)).toBeInTheDocument();
    });

    it('rendering and submitting a basic Formik form', async () => {
        const handleSubmit = jest.fn()
        const { container } = render(<Form onSubmit={handleSubmit} />)

        fireEvent.change(container.querySelector('#name'), {
            target: {
                value: 'Flávio Augusto Faleiros'
            }
        });

        fireEvent.change(container.querySelector('#email'), {
            target: {
                value: 'flavio.faleiros@gmail.com'
            }
        });

        fireEvent.change(container.querySelector('#age'), {
            target: {
                value: '20'
            }
        });

        userEvent.click(screen.getByRole('button', { name: /Confirmar/i }))

        await waitFor(() =>
            expect(screen.getByText(/flavio.faleiros@gmail.com/i)).toBeInTheDocument()
        )
    })
})
