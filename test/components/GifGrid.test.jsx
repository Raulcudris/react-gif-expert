const { render , screen } = require('@testing-library/react');
const { GifGrid } = require('../../src/components/GifGrid');
const { useFetchGifs } = require('../../src/hooks/useFetchGifs');

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en <GifGrid />', () => { 
    const category  = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        
        render(<GifGrid category={ category } />);
        //screen.debug();
        expect( screen.getByText('Cargando....'));
        expect( screen.getByText( category ));
     });

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs',() => { 
       const gifs =[
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: 'A123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
       ]
    
       
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render(<GifGrid category={ category } />);
        //screen.debug();
        expect( screen.getAllByRole('img').length).toBe(2);

     });
     
 });