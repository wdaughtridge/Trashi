import React from 'react';
import { View, Image} from 'react-native';
import styles from './Styles';

const RecommendationsCard = (props) => {
    return (
        <View>
            <Image />
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    );
};

export default RecommendationsCard;