import React, {useEffect} from 'react';
import axios from 'axios';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import GuncelDepremler from './components/GuncelDepremler';
import SearchBar from './components/SearchBar';
let originalList = [];

console.log(originalList);

const Main = () => {
  const [listDeprem, setListDeprem] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const fetchData = async () => {
    setLoading(true);
    const {data} = await axios.get(
      'https://deprem.odabas.xyz/api/pure_api.php',
    );
    console.log(data);
    setListDeprem(data);
    originalList = [...data];
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const renderItemList = ({item}) => {
    return <GuncelDepremler items={item} />;
  };

  function searchCity(search) {
    const filteredCities = originalList.filter((x) => {
      const text = search.toUpperCase();
      const cityName = x.yer.toUpperCase();

      return cityName.indexOf(text) > -1;
    });

    setListDeprem(filteredCities);
  }
  return (
    <View>
      <Text style={styles.header}> GUNCEL DEPREMLER </Text>
      <SearchBar
        placeholder="  🔄   Search a city..."
        onSearch={(value) => searchCity(value)}
      />
      <View style={{borderWidth: 0.5, borderColor: '#bdbdbd'}} />
      {isLoading ? (
        <ActivityIndicator
          style={{marginVertical: 200}}
          size="large"
          color="#80d6ff"
        />
      ) : (
        <FlatList
          data={listDeprem}
          renderItem={renderItemList}
          ItemSeparatorComponent={() => (
            <View style={{borderWidth: 0.5, borderColor: '#bdbdbd'}} />
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00766c',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    borderRadius: 5,
    margin: 5,
    padding: 8,
  },
});
