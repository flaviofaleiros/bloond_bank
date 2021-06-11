import React, { useState } from 'react';
import { render, screen } from '@testing-library/react'
import DonorRegistration from './index';


describe('Register components should be rendered', () => {

    it('should render field component with id name', () => {
      const { container } = render(<DonorRegistration  />)

        const name = container.querySelector('#name');

        expect(name).toBeDefined()

    })

    it('should render field component with id email', () => {
      const { container } = render(<DonorRegistration />)
      
      const email = container.querySelector('#email');
      expect(email).toBeDefined()
    })

    it('should render field component with id age', () => {
      const { container } = render(<DonorRegistration />)
      
      const age = container.querySelector('#age');
      expect(age).toBeDefined()
    })

    it('should render field component with id bloodType', () => {
      const { container } = render(<DonorRegistration />)

      const bloodType = container.querySelector('#bloodType');
      expect(bloodType).toBeDefined()
    })

    it('should render button component with id submitButton', () => {
        const { container } = render(<DonorRegistration />)
  
        const submitButton = container.querySelector('#submitButton');
        expect(submitButton).toBeDefined()
      })
    
})

describe('Field contents should exist', () => {

    it('should render field component with id name', () => {
        const { container } = render(<DonorRegistration  />) 
          const name = container.querySelector('#name');
          name.value = "teste";
          expect(name).not.toBeNull()
  
      })
  
      it('should render field component with id email', () => {
        const { container } = render(<DonorRegistration />)
        
        const email = container.querySelector('#email');
        email.value = "teste";
        expect(email).not.toBeNull()
      })
  
      it('should render field component with id age', () => {
        const { container } = render(<DonorRegistration />)
        
        const age = container.querySelector('#age');
        age.value = "teste";
        expect(age).not.toBeNull()
      })
  
      it('should render field component with id bloodType', () => {
        const { container } = render(<DonorRegistration />)
  
        const bloodType = container.querySelector('#bloodType');
        bloodType.value = "teste";
        expect(bloodType).not.toBeNull()
      })

})
