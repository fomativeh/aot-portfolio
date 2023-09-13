import { createBoard } from '@wixc3/react-board';
import { Navbar } from '../../../components/navbar/navbar';

export default createBoard({
    name: 'Navbar',
    Board: () => <Navbar />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
