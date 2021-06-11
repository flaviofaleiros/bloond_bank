import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import DonorRegistration from "./";

describe(`should test component <DonorRegistration/>`, () => {

    describe('should render component', function () {
        it('should testing input bloodType', function () {
            render(<DonorRegistration />)
            expect(screen.getByText(/Tipo sanguíneo/i)).toBeInTheDocument();
            expect(screen.getByText(/O-/i)).toBeInTheDocument();
        });

        it('should testing input e-mail', function () {
            render(<DonorRegistration />)
            expect(screen.getByPlaceholderText(/E-mail do doador/i)).toBeInTheDocument();
        });

        it('should testing button confirm', function () {
            render(<DonorRegistration />)
            expect(screen.getByText(/Confirmar/i)).toBeInTheDocument();
        });

    });

    describe('should test screen usability ',  function () {
        it('should Register success', async function () {
            render(<DonorRegistration />)

            const name = screen.getByPlaceholderText(/Nome do doador/i);
            userEvent.type(name, 'Flávio Augusto Faleiros');

            const email = screen.getByPlaceholderText(/E-mail do doador/i);
            userEvent.type(email, 'flavio.faleiros@gmail.com');

            const age = screen.getByPlaceholderText(/Idade do doador/i);
            userEvent.type(age, '20');

            const bloodType = screen.getByPlaceholderText(/Tipo sanguíneo/i);
            userEvent.selectOptions(bloodType, 'O-')

            userEvent.click(screen.getByRole('button', { name: /Confirmar/i }))

            await waitFor(() =>
                expect(screen.getByText('flavio.faleiros@gmail.com')).toBeInTheDocument()
            )
        });

        it('should Register error email invalid', async function () {
            render(<DonorRegistration />)

            const name = screen.getByPlaceholderText(/Nome do doador/i);
            userEvent.type(name, 'Flávio Augusto Faleiros');

            const email = screen.getByPlaceholderText(/E-mail do doador/i);
            userEvent.type(email, 'flavio.faleirosgmail.com');

            const age = screen.getByPlaceholderText(/Idade do doador/i);
            userEvent.type(age, '20');

            const bloodType = screen.getByPlaceholderText(/Tipo sanguíneo/i);
            userEvent.selectOptions(bloodType, 'O-')

            userEvent.click(screen.getByRole('button', { name: /Confirmar/i }))

            await waitFor(() =>
                expect(screen.getByText('Informe um e-mail válido!')).toBeInTheDocument()
            )
        });

        it('should test Register name not informed ', async function () {
            render(<DonorRegistration />)

            const name = screen.getByPlaceholderText(/Nome do doador/i);
            userEvent.type(name, '');

            const email = screen.getByPlaceholderText(/E-mail do doador/i);
            userEvent.type(email, 'flavio.faleiros@gmail.com');

            const age = screen.getByPlaceholderText(/Idade do doador/i);
            userEvent.type(age, '20');

            const bloodType = screen.getByPlaceholderText(/Tipo sanguíneo/i);
            userEvent.selectOptions(bloodType, 'O-')

            userEvent.click(screen.getByRole('button', { name: /Confirmar/i }))

            await waitFor(() =>
                expect(screen.getByText('O nome do doador é obrigatório!')).toBeInTheDocument()
            )
        });

        it('should test the registry under the minimum age ', async function () {
            render(<DonorRegistration />)

            const name = screen.getByPlaceholderText(/Nome do doador/i);
            userEvent.type(name, 'Flavio Augusto Faleiros');

            const email = screen.getByPlaceholderText(/E-mail do doador/i);
            userEvent.type(email, 'flavio.faleiros@gmail.com');

            const age = screen.getByPlaceholderText(/Idade do doador/i);
            userEvent.type(age, '10');

            const bloodType = screen.getByPlaceholderText(/Tipo sanguíneo/i);
            userEvent.selectOptions(bloodType, 'O-')

            userEvent.click(screen.getByRole('button', { name: /Confirmar/i }))

            await waitFor(() =>
                expect(screen.getByText('O doador deve ter no minimo 18 anos!')).toBeInTheDocument()
            )
        });

    });
})
