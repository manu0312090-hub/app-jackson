
import { FlatList, Pressable, Image, StyleSheet } from 'react-native';

export default function EmojiList({ onSelect }) {
const emojis = [
    { id: '1', imagem: require('https://www.gazetadigital.com.br/variedades/meu-bicho-e-eu/procurando-gatos-muito-fofos-para-tudo-e-confira-as-melhores-imagens/573399') },
    { id: '2', imagem: require('https://www.limesacademy.com/?p=17784016101380') },
    { id: '3', imagem: require('https://www.pawlicy.com/blog/cat-photos-for-monday/') },
    { id: '4', imagem: require('https://x.com/cutestscats') },
  ];

  return (
    <FlatList
      horizontal={true} 
      showsHorizontalScrollIndicator={false}
      data={emojis}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => {
        return (
          <Pressable onPress={() => onSelect(item.imagem)} style={({ pressed }) => [
            { opacity: pressed ? 0.7 : 1.0 } // Efeito visual ao tocar
          ]}>
            <Image source={item.imagem} style={styles.image} />
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  image: { 
    width: 80, 
    height: 80, 
    marginHorizontal: 8 
  },
});