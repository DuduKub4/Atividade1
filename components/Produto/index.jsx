// components/produto/index.jsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export function Produto({ name, onRemove }) {
    return (
        <View style={styles.produtoContainer}>
            <Text style={styles.produtoName}>{name}</Text>
            <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
                <Text style={styles.removeButtonText}>Remover</Text>
            </TouchableOpacity>
        </View>
    );
}
