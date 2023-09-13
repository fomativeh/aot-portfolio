import { createBoard } from '@wixc3/react-board';
import { HeroSection } from '../../../components/hero-section/hero-section';

export default createBoard({
    name: 'HeroSection',
    Board: () => <HeroSection />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
