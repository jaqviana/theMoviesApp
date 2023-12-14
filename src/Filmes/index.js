import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';

import Detalhes from "../Detalhes";

export default function Filmes({ data } ){
    const [visibleModal, setVisibleModal ] = useState(false); //false modal comeca fechado

    return(
<View>

   <View style={styles.card}>
    <Text style={styles.titulo}>{data.nome}</Text>

    <Image
    source={{ uri: data.foto }}
    style={styles.capa}
    />

   </View>

   <View style={styles.areaBotao}>
    <TouchableOpacity style={styles.botao} onPress={() => setVisibleModal(true) }> 
       <Text style={styles.botaoTexto}>Leia Mais</Text>
    </TouchableOpacity>
   </View>

   <Modal transparent={true} animationType="slide" visible={visibleModal}> 
    <Detalhes filme={data} voltar={ () => setVisibleModal(false)}/>
   </Modal>

</View>

//visible vou controlar atraves de uma useState
//no setVisibleModl precisa estar true para abrir o botao
//transparente pq vamos criar o estilo no componente Modal/Detalhes
//false fecha o modal

    );
}

const styles = StyleSheet.create({
    card:{
       backgroundColor: '#FFF',
       margin: 15,
       elavation: 2
    },
    capa:{
        height: 250,
        zIndex: 2,
     
    },
    titulo:{
        padding: 15,
        fontSize: 18
    },
    areaBotao:{ //para mexer na view 
        alignItems: 'flex-end', //onde a 'caixa' (neste caso botao vai ficar)
        marginTop: -55,
        marginEnd: 15,
        zIndex: 9
    },
    botao:{
        width: 100,
        backgroundColor: '#09A6FF',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5

    },
    botaoTexto: {
        color: '#FFF',
        textAlign: 'center' //alinhar o texto

    }


});