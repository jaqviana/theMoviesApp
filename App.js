import React, { useEffect, useState } from "react"; //useEffect para qdo abrir o app mostrar os filmes qdo o componente app for montado na tela ele busca info da api
                                                    //use state para aramzenar em um state

import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import api from "./src/services/api";
import Filmes from "./src/Filmes";


export default function App(){
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    async function loadFilmes(){ //parra fazer algo asyncrono para esperar a requisicao e ai utilizar entao precisa criar uma funcao dentro
      const response = await api.get('r-api/?api=filmes')//essa val const vai aramazenar a resposta da nossa requisicao, await vai esperar e qdo tiver a info vai jogar nessa val 
      //console.log(response.data);//axios da a resposta dentro da propriedade data/dentro de data tem o array com tdas info
      setFilmes(response.data)
      setLoading(false);
    }

    loadFilmes();//ja chama ela aqui a funcao q criou
  
  }, []);//nosso array de dependencia vai continuar vazio pq nossa useEffect vai ser chamada qdo o componente for aberto montada para o usuario qdo o usuario ver a tela busca api
 
  if (loading){ //loading tiver como true vai exibir apenas a view do activityIndicator (q eh o simbolo de carregando), else a lista
    return(
      <View style={{ alignItems: 'center', justifyContent: 'center', flex:1 }}>
        <ActivityIndicator color="#121212" size={45}/> 
      </View>
    )
  }else{
    return(
      <View style={styles.container}>
      <FlatList
      data={filmes}
      keyExtractor={item => String(item.id)}//convertendo o id inter para string
      renderItem={({ item }) => <Filmes data={item}/> }
      />
      
      </View>
      
        );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})



//pra fazer a requisicao http usa a biblioteca axios 
//pasta services algo relacionado a API