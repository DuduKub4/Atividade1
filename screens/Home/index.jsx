// components/home/index.jsx
import React, { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Produto } from '../../components/Produto';

export function Home() {
    const [produtos, setProdutos] = useState([]);
    const [nomeProduto, setNomeProduto] = useState('');

    function handleProdutoAdd() {
        if (nomeProduto.trim() !== '') {
            setProdutos([...produtos, nomeProduto]);
            setNomeProduto('');
        }
    }

    function handleProdutoRemove(produto) {
         console.log( 'Teste')

        Alert.alert(
            'Removendo...',
            `Deseja realmente remover "${produto}"?`,
            [
                { text: 'Sim', onPress: () => removeProduto(produto) },
                { text: 'Não', style: 'cancel' }
            ]
        );
    }

    function removeProduto(produto) {
        setProdutos(prevProdutos => prevProdutos.filter(p => p !== produto));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.groupName}>Lista de Compras</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do Produto"
                    onChangeText={text => setNomeProduto(text)}
                    value={nomeProduto}
                />
                <TouchableOpacity style={styles.button} onPress={handleProdutoAdd}>
                    <Text style={styles.textButton}>ADICIONAR</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.groupName}>Produtos</Text>

            <FlatList
                data={produtos}
                keyExtractor={produto => produto}
                renderItem={({ item }) => (
                    <Produto name={item} onRemove={() => removeProduto(item)} />
                )}
                ListEmptyComponent={() => <Text style={styles.listEmpty}>Sem produtos informados</Text>}
            />
        </View>
    );
}
