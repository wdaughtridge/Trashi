import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function RecommendationsCard(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
        elevation: 3,
        shadowOffset: { width: 1, heigh: 1 },
        width: 325,
        padding: 25
    },
    cardContent: {

    },
})

