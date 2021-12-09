import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

import { API, graphqlOperation } from 'aws-amplify';
import { createItem } from './src/graphql/mutations';
import { listItems } from './src/graphql/queries';

const initialState = { id: '', name: '', material: '', description: '' }

const AddItems = ({ navigation }) => {
    const [formState, setFormState] = useState(initialState)
    const [items, setItems] = useState([])

    useEffect(() => {
        fetchItems()
    }, [])

    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }

    async function fetchItems() {
        try {
            const itemData = await API.graphql(graphqlOperation(listItems))
            const items = itemData.data.listItems.items
            setItems(items)
        } catch (err) { console.log('error fetching items') }
    }

    async function addItem() {
        try {
            const item = { ...formState }
            setItems([...items, item])
            setFormState(initialState)
            await API.graphql(graphqlOperation(createItem, {input: item}))
        } catch (err) {
            console.log('error creating item:', err)
        }
    }

    return (
        <View style={styles.container}>
        <TextInput
            onChangeText={val => setInput('id', val)}
            style={styles.input}
            value={formState.id}
            placeholder="ID"
        />
        <TextInput
            onChangeText={val => setInput('name', val)}
            style={styles.input}
            value={formState.name}
            placeholder="Name"
        />
        <TextInput
            onChangeText={val => setInput('material', val)}
            style={styles.input}
            value={formState.material}
            placeholder="Material"
        />
        <TextInput
            onChangeText={val => setInput('description', val)}
            style={styles.input}
            value={formState.description}
            placeholder="Description"
        />
        <Button title="Create Item" onPress={addItem} />
        {
            items.map((item, index) => (
            <View key={item.id ? item.id : index} style={styles.item}>
                <Text>{item.id}</Text>
                <Text>{item.name}</Text>
                <Text>{item.material}</Text>
                <Text>{item.description}</Text>
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

export default AddItems;