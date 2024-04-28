import { Text } from 'react-native';
import { Link } from 'react-router-native';

const AppBarTab = ({ label, labelStyles, path }) => {
  return (
    <Link to={path}>
      <Text style={labelStyles}>{label}</Text>
    </Link>
  );
};

export default AppBarTab;
