import { createBoard } from '@wixc3/react-board';
import { LetsTalk } from '../../../components/lets-talk/lets-talk';

export default createBoard({
    name: 'LetsTalkBtn',
    Board: () => <LetsTalk className="hover" />,
    environmentProps: {
        canvasHeight: 74,
    },
});
