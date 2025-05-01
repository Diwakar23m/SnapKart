// import React from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   ScrollView,
//   SafeAreaView,
//   TouchableOpacity,
// } from 'react-native';
// import {
//   responsiveHeight as hp,
//   responsiveWidth as wp,
//   responsiveFontSize as rf,
// } from 'react-native-responsive-dimensions';

// const ResponsiveFlexLayout = () => {
//     const handleAdd = async () => {
//         const userData = { name, email, phone, address };
    
//         try {
//           const response = await fetch('http://localhost:4000/add', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(userData),
//           });
    
//           const result = await response.json();
//           if (response.ok) {
//             console.log('User added:', result);
//             // You can reset form fields after success
//             setName('');
//             setEmail('');
//             setPhone('');
//             setAddress('');
//           } else {
//             console.error('Error adding user:', result);
//           }
//         } catch (error) {
//           console.error('Network error:', error);
//         }
//       };
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView contentContainerStyle={styles.container}>
//         <Text style={styles.header}>User Profile</Text>

//         <View style={styles.profileSection}>
//           <Text style={styles.label}>Name</Text>
//           <TextInput placeholder="Enter name" style={styles.input} />

//           <Text style={styles.label}>Email</Text>
//           <TextInput placeholder="Enter email" style={styles.input} />

//           <Text style={styles.label}>Phone</Text>
//           <TextInput placeholder="Enter phone" style={styles.input} />

//           <Text style={styles.label}>Address</Text>
//           <TextInput
//             placeholder="Enter address"
//             multiline
//             numberOfLines={3}
//             style={[styles.input, { height: hp(10) }]}
//           />
//         </View>

//         <View style={styles.buttonRow}>
//           <TouchableOpacity style={styles.customButton} onPress={handleAdd}>
//             <Text style={styles.buttonText}>Add</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.customButton}>
//             <Text style={styles.buttonText}>Update</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.buttonRow}>
//           <TouchableOpacity style={styles.customButton}>
//             <Text style={styles.buttonText}>Delete</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.customButton}>
//             <Text style={styles.buttonText}>Fetch</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default ResponsiveFlexLayout;

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#f2f2f2',
//   },
//   container: {
//     padding: wp(5),
//     alignItems: 'center',
//   },
//   header: {
//     fontSize: rf(3),
//     fontWeight: 'bold',
//     marginBottom: hp(2),
//     color: '#333',
//     marginTop: hp(2),
//   },
//   profileSection: {
//     width: '100%',
//   },
//   label: {
//     fontSize: rf(2.2),
//     marginBottom: hp(0.5),
//     color: '#444',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#999',
//     borderRadius: wp(2),
//     padding: wp(3),
//     marginBottom: hp(2),
//     fontSize: rf(2),
//     backgroundColor: '#fff',
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginTop: hp(1),
//   },
//   customButton: {
//     flex: 1,
//     backgroundColor: '#007bff',
//     paddingVertical: hp(1.5),
//     borderRadius: wp(1.5),    marginHorizontal: wp(1),
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: rf(2.2),
//     fontWeight: 'bold',
//   },
// });


import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';

const ResponsiveFlexLayout = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [users, setUsers] = useState([]);

  const handleAdd = async () => {
    const userData = { name, email, phone, address };

    try {
      const response = await fetch('http://localhost:4000/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      if (response.ok) {
        console.log('User added:', result);
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        fetchUsers(); // Refresh user list
      } else {
        console.error('Error adding user:', result);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:4000/users');
      const result = await response.json();
      if (response.ok) {
        setUsers(result);
      } else {
        console.error('Failed to fetch users:', result);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchUsers(); // Auto-fetch when component mounts
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>User Profile</Text>

        <View style={styles.profileSection}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            placeholder="Enter name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Enter email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />

          <Text style={styles.label}>Phone</Text>
          <TextInput
            placeholder="Enter phone"
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
          />

          <Text style={styles.label}>Address</Text>
          <TextInput
            placeholder="Enter address"
            multiline
            numberOfLines={3}
            value={address}
            onChangeText={setAddress}
            style={[styles.input, { height: hp(10) }]}
          />
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.customButton} onPress={handleAdd}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.customButton} onPress={fetchUsers}>
            <Text style={styles.buttonText}>Fetch</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.header, { marginTop: hp(3) }]}>User List</Text>
        <FlatList
          data={users}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.userItem}>
              <Text style={styles.userText}>
                👤 {item.name} | 📧 {item.email} | 📞 {item.phone}
              </Text>
              <Text style={styles.userText}>🏠 {item.address}</Text>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResponsiveFlexLayout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  container: {
    padding: wp(5),
    alignItems: 'center',
  },
  header: {
    fontSize: rf(3),
    fontWeight: 'bold',
    marginBottom: hp(2),
    color: '#333',
    marginTop: hp(2),
  },
  profileSection: {
    width: '100%',
  },
  label: {
    fontSize: rf(2.2),
    marginBottom: hp(0.5),
    color: '#444',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: wp(2),
    padding: wp(3),
    marginBottom: hp(2),
    fontSize: rf(2),
    backgroundColor: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: hp(1),
  },
  customButton: {
    flex: 1,
    backgroundColor: '#007bff',
    paddingVertical: hp(1.5),
    borderRadius: wp(1.5),
    marginHorizontal: wp(1),
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: rf(2.2),
    fontWeight: 'bold',
  },
  userItem: {
    width: '100%',
    backgroundColor: '#e0f0ff',
    padding: wp(3),
    marginVertical: hp(0.5),
    borderRadius: wp(2),
  },
  userText: {
    fontSize: rf(2),
    color: '#333',
  },
});
