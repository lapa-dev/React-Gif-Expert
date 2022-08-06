import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp/>', () => { 
     test('no debe de llamar setCategories si la categoria esta vacía', () => { 
        render(<GifExpertApp/>);
        screen.debug();
      })
 });

