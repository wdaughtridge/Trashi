import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

import { API, graphqlOperation } from 'aws-amplify';
import { createRegulation } from './src/graphql/mutations';
import { listRegulations } from './src/graphql/queries';

const initialState = { material: '', suggestion: '', region: '' }

const AddRegulations = ({ navigation }) => {
    const [formState, setFormState] = useState(initialState)
    const [regulations, setRegulations] = useState([])

    useEffect(() => {
        fetchRegulations()
    }, [])

    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }

    async function fetchRegulations() {
        try {
            const regData = await API.graphql(graphqlOperation(listRegulations))
            console.log(regData.data.listRegulations)
            const regulations = regData.data.listRegulations.items
            setRegulations(regulations)
        } catch (err) { console.log('error fetching regulations') }
    }

    async function addRegulations() {
        try {
            const regulation = { ...formState }
            setRegulations([...regulations, regulation])
            setFormState(initialState)
            await API.graphql(graphqlOperation(createRegulation, {input: regulation}))
        } catch (err) {
            console.log('error creating regulation:', err)
        }
    }

    return (
        <View style={styles.container}>
        <TextInput
            onChangeText={val => setInput('material', val)}
            style={styles.input}
            value={formState.material}
            placeholder="Material"
        />
        <TextInput
            onChangeText={val => setInput('suggestion', val)}
            style={styles.input}
            value={formState.suggestion}
            placeholder="Suggestion"
        />
        <TextInput
            onChangeText={val => setInput('region', val)}
            style={styles.input}
            value={formState.region}
            placeholder="Region"
        />
        <Button title="Create Regulation" onPress={addRegulations} />
        {
            regulations.map((item, index) => (
                <View key={item.id ? item.id : index} style={styles.item}>
                    <Text>{item.id}</Text>
                    <Text>{item.material}</Text>
                    <Text>{item.suggestion}</Text>
                    <Text>{item.region}</Text>
                </View>
            ))
        }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold"
    },
});

export default AddRegulations;