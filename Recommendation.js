import React from 'react';
import { StyleSheet, View, Image} from 'react-native';

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