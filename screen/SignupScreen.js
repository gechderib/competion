import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal, Image } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import tw from 'tailwind-react-native-classnames';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import competitionContext from '../store/competitionContext';

const modalBlueIcon = require("../assets/images/blueIcon.png")

const CustomHeader = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View className='bg-white p-4 items-center justify-start flex-row shadow-none gap-3'>
      {/* Back Button Icon */}
      <TouchableOpacity onPress={handleBackPress} className='ml-2 rounded-full border border-gray-300 p-2'>
        <Ionicons name="arrow-back-outline" size={24} color={"gray"} />
      </TouchableOpacity>
      <Text className="text-xl font-extrabold">Create Account</Text>
    </View>
  );
};

const SignupSchema = yup.object().shape({
  company: yup.string().required('Company is required'),
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^&*()_\-+=?])[A-Za-z\d~`!@#$%^&*()_\-+=?]{8,}$/,
      'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  termsAccepted: yup.bool().oneOf([true], 'Terms must be accepted'),
});

const SignupScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {selectedCompetition, setSelectedComption} = useContext(competitionContext);

  const handleSignup = (values) => {
    // Handle signup logic here
    console.log(values);
    setModalVisible(true);
  };
  const handleCompanySelect = () => {
    navigation.navigate('Competition');
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  // React.useEffect(()=>{}, [selectedCompetition])
  return (
    <SafeAreaView className='flex-1'>
      <CustomHeader navigation={navigation} />
      <ScrollView className="bg-white">
        <Formik
          initialValues={{
            company: selectedCompetition.title,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            termsAccepted: false,
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSignup}
        >
          {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
            <View style={tw`flex-1 justify-start items-start p-5 bg-white`}>

              <View style={tw`w-full mb-5`}>
                {/* Dropdown for Company Selection */}
                <TouchableOpacity onPress={handleCompanySelect} style={tw`bg-gray-100 p-4 rounded-3xl flex-row justify-between items-center`}>
                  <TextInput
                    style={tw``}
                    placeholder="Competition to sign up * "
                    value={selectedCompetition.title}
                    // onChangeText={()=>{console.log("changin i")}}
                    onBlur={handleBlur('company')}
                    editable={false} 
                  />
                  <Ionicons name="chevron-down-outline" size={24} color="gray" />
                </TouchableOpacity>
                {touched.company && errors.company && (
                  <Text style={tw`text-red-500 mt-1`}>{errors.company}</Text>
                )}
              </View>

              <View style={tw`w-full mb-5`}>
                {/* First Name */}
                <TextInput
                  style={tw`bg-gray-100 p-4 rounded-3xl`}
                  placeholder="First Name"
                  value={values.firstName}
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                />
                {touched.firstName && errors.firstName && (
                  <Text style={tw`text-red-500 mt-1`}>{errors.firstName}</Text>
                )}
              </View>
              <View style={tw`w-full mb-5`}>
                {/* Last Name */}
                <TextInput
                  style={tw`bg-gray-100 p-4 rounded-3xl`}
                  placeholder="Last Name"
                  value={values.lastName}
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                />
                {touched.lastName && errors.lastName && (
                  <Text style={tw`text-red-500 mt-1`}>{errors.lastName}</Text>
                )}
              </View>
              <View style={tw`w-full mb-5`}>
                {/* Email */}
                <TextInput
                  style={tw`bg-gray-100 p-4 rounded-3xl`}
                  placeholder="Email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"
                />
                {touched.email && errors.email && (
                  <Text style={tw`text-red-500 mt-1`}>{errors.email}</Text>
                )}
              </View>
              <View style={tw`w-full mb-5`}>
                {/* Password */}
                <View style={tw`relative`}>
                  <TextInput
                    style={tw`bg-gray-100 p-4 rounded-3xl pr-10`}
                    placeholder="Password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    secureTextEntry
                  />
                  <TouchableOpacity
                    style={tw`absolute top-0 right-0 m-3`}
                    onPress={() => { }}
                  >
                    {/* Eye icon for password visibility (add toggle logic if needed) */}
                    <Text>👁️</Text>
                  </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                  <Text style={tw`text-red-500 mt-1`}>{errors.password}</Text>
                )}
              </View>
              <View style={tw`w-full mb-5`}>
                {/* Confirm Password */}
                <TextInput
                  style={tw`bg-gray-100 p-4 rounded-3xl`}
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  secureTextEntry
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={tw`text-red-500 mt-1`}>{errors.confirmPassword}</Text>
                )}
              </View>
              <View style={tw`flex-row items-center mb-5`}>
                {/* Terms and Conditions Checkbox */}
                <TouchableOpacity
                  style={tw`flex-row items-center`}
                  onPress={() => setFieldValue('termsAccepted', !values.termsAccepted)}
                >
                  <View
                    style={tw`w-6 h-6 border border-gray-300 rounded mr-2 flex items-center justify-center`}
                  >
                    {values.termsAccepted && (
                      <Text style={tw`text-green-500 font-bold text-lg`}>✓</Text>
                    )}
                  </View>
                  <Text className="">I agree to the Terms and Conditions</Text>
                </TouchableOpacity>
                {touched.termsAccepted && errors.termsAccepted && (
                  <Text style={tw`text-red-500 mt-1`}>{errors.termsAccepted}</Text>
                )}
              </View>


              <TouchableOpacity
                onPress={handleSubmit}
                disabled={!values.termsAccepted}

                className='flex-row justify-between items-center w-full bg-blue-600 py-3 px-4 rounded-full mb-4'>
                <View className="flex-row gap-2">
                  <Ionicons name="person-outline" size={24} color="white" className='mr-2' />
                  <Text className='text-white text-lg'>Sign Up for free</Text>
                </View>
                <Ionicons name="arrow-forward-circle-outline" size={40} color="white" className='ml-2' />
              </TouchableOpacity>

            </View>
          )}
        </Formik>
      </ScrollView>


      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-40`}>
          <View style={tw`bg-white p-5 rounded-3xl w-11/12 max-w-md`}>
            <View style={tw`flex-row justify-between`}>

              <View>
                <Image source={modalBlueIcon} />
              </View>

              <View className='rounded-full border border-gray-300 p-3'>
                <TouchableOpacity onPress={closeModal}>
                  <Ionicons name="close-outline" size={24} color="gray" />
                </TouchableOpacity>
              </View>

            </View>

            <View>
              <Text className='text-2xl mt-5 mb-5 font-extrabold'>
                Welcome to Soo
              </Text>
              <Text style={tw`text-xl mt-5 mb-10`}>
                Great to have you with us!
              </Text>
            </View>

            <TouchableOpacity
              onPress={closeModal}
              className='flex-row justify-between items-center w-full bg-blue-700 py-3 px-4 rounded-full mb-4'
            >
              <View className="flex-row gap-2">
                <Ionicons name="person-outline" size={24} color="white" className='mr-2' />
                <Text className='text-white text-lg'>Got it</Text>
              </View>
              <Ionicons name="arrow-forward-circle-outline" size={40} color="white" className='ml-2' />
            </TouchableOpacity>

          </View>
        </View>
      </Modal>

    </SafeAreaView>

  );
};

export default SignupScreen;
