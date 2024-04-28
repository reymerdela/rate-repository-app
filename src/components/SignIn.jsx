import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import Text from './Text';
import theme from '../theme';
import * as yup from 'yup';
import { useFormik } from 'formik';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.textInput,
          formik.errors.username &&
            formik.touched.username && { borderColor: theme.colors.alert },
        ]}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.alertMsg} color="alert">
          {formik.errors.username}
        </Text>
      )}
      <TextInput
        secureTextEntry
        style={[
          styles.textInput,
          formik.errors.password &&
            formik.touched.password && { borderColor: theme.colors.alert },
        ]}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.alertMsg} color="alert">
          {formik.errors.password}
        </Text>
      )}
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.text}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  container: {
    paddingHorizontal: 15,
    paddingTop: 30,
    gap: 18,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  alertMsg: {
    marginTop: -15,
  },
});
export default SignIn;
