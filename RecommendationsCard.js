import React from 'react';
import { View } from 'react-native';
import styles from './Styles';

const RecommendationsCard = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    );
};

export default RecommendationsCard;