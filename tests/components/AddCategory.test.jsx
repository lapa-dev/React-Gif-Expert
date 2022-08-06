import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Prueba en <AddCategory />', () => { 
    test('debe de cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onNewCategory={ () => {} }/>);
        //screen.debug();
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'Luigi' } } );
        expect( input.value ).toBe('Luigi');
     });

     test('debe de llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue = 'Luigi';

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
      })

      test('no debe de llamar onNewCategory si el input esta vacio', () => { 
        const inputValue = '';

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);

        //expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
      })
 });
 