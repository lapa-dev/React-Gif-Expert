import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pueba en <GifGrid/>', () => { 

    const category = 'Dragon Ball';

    test('debe de mostar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render( <GifGrid category={ category } /> );

        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );
     });

     test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'Goku',
                url: 'https://goku.com'
            },
            {
                id: '123',
                title: 'Vegeta',
                url: 'https://vegeta.com'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true,
        });

        render( <GifGrid category={ category } /> );

        expect( screen.getAllByRole('img').length ).toBe(2);

      })
 });
