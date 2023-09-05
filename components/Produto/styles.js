// components/produto/styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    produtoContainer: {
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    produtoName: {
        color: '#fff',
        fontSize: 18,
    },
    removeButton: {
        backgroundColor: '#ff0000',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    removeButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});
