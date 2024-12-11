import Svg, { Path } from 'react-native-svg';

const ArrowLeft: React.FC = () => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
                d="M20 12H4M4 12L10 18M4 12L10 6"
                stroke="#111827"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default ArrowLeft;