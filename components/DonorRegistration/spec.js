import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Scheduling from "./index";

describe('testing component', () => {
    it('should ', function () {
        render(<Scheduling />)
        screen.debug();
    });
})
