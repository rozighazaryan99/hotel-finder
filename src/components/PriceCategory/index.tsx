import { Text, View } from 'react-native';
import globalStyles from '../../assets/styles/global-styles';
import typography from '../../assets/styles/typography';

interface Props {
    category: number;
}

const PriceCategory: React.FC<Props> = ({ category }) => {
    const getColor = (index: number) => {
        return index < category ? '#1C8E00' : '#BBEFAD';
    };

    const dollarSigns = Array.from({ length: 4 }, (_, index) => (
        <Text
            key={index}
            style={{
                color: getColor(index),
                ...typography.bodyS.semibold,
                fontFamily: 'Poppins-SemiBold',
            }}>
            $
        </Text>
    ));

    return (
        <View style={globalStyles.fullBetween}>
            {dollarSigns}
        </View>
    );
};

export default PriceCategory;
