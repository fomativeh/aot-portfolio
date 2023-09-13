import { createBoard } from '@wixc3/react-board';
import { LearnMoreBtn } from '../../../components/learn-more-btn/learn-more-btn';

export default createBoard({
    name: 'LearnMoreBtn',
    Board: () => <LearnMoreBtn />
});
