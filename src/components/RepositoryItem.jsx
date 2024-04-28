import { Image, Pressable, StyleSheet, View } from 'react-native';
import Text from './Text';
import theme from '../theme';
const RepositoryItem = ({ item }) => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      gap: 16,
    },
  });

  const fixedNumber = (number) => {
    if (number >= 1000) {
      return `${(number / 1000).toFixed(1)}k`;
    }
    return number;
  };

  return (
    <View style={{ padding: 18 }}>
      <View style={styles.container}>
        <Image
          source={{
            uri: item.ownerAvatarUrl,
          }}
          style={{ width: 50, height: 50 }}
          borderRadius={10}
        />
        <View style={{ flex: 1, gap: 5 }}>
          <Text fontWeight="bold" fontSize="subheading">
            {item.fullName}
          </Text>
          <Text color="secondary">{item.description}</Text>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Pressable
              style={{
                backgroundColor: theme.colors.primary,
                paddingVertical: 6,
                paddingHorizontal: 8,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: '#fff' }}>{item.language}</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 16,
        }}
      >
        <View>
          <Text fontWeight="bold">{fixedNumber(item.stargazersCount)}</Text>
          <Text color="secondary">Stars</Text>
        </View>
        <View>
          <Text fontWeight="bold">{fixedNumber(item.forksCount)}</Text>
          <Text color="secondary">Forks</Text>
        </View>
        <View>
          <Text fontWeight="bold" style={{ textAlign: 'center' }}>
            {fixedNumber(item.reviewCount)}
          </Text>
          <Text color="secondary">Reviews</Text>
        </View>
        <View>
          <Text fontWeight="bold" style={{ textAlign: 'center' }}>
            {fixedNumber(item.ratingAverage)}
          </Text>
          <Text color="secondary">Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
