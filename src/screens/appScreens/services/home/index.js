import React from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PlusCircle from 'react-native-vector-icons/Feather';
import {Button} from 'src/components';
import {Images} from 'src/Utils';

const Home = () => {
  const servicesArray = [
    {
      id: 1,
      text: 'Dog walking',
      image: Images.dogWalking,
    },
    {
      id: 2,
      text: 'House Cleaning',
      image: Images.vacuum,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <ScrollView>
        <Text style={styles.hello}>Hello, John!</Text>
        <View>
          <TextInput
            placeholder="Set location"
            placeholderTextColor="#A5A5A5"
            style={styles.locationInput}
          />
          <Icon
            name="map-marker-alt"
            size={21}
            color="#FD1B1B"
            style={styles.mapMarker}
          />
        </View>
        <View>
          <Image source={Images.earningBackground} style={styles.earningCard} />
          <Text style={styles.myEarnings}>My Earnings</Text>
          <Text style={styles.money}>$1,550.10</Text>
          <Text style={styles.week}>This week</Text>
        </View>
        <View style={styles.payoutContainer}>
          <Text style={styles.payoutFriday}>Payout every Friday</Text>
          <Button
            buttonText="Payout"
            buttonStyle={styles.btnPayout}
            buttonTextStyle={styles.btnPayoutText}
          />
        </View>
        <View style={styles.viewAndServiceContainer}>
          <Text style={styles.services}>Services</Text>
          <TouchableOpacity style={styles.viewContainer}>
            <Text style={styles.view}>View All</Text>
            <Icon
              name="angle-right"
              size={16}
              color="#FD1B1B"
              style={styles.angleRight}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.mainServiceContainer}>
          {servicesArray.map(service => (
            <View key={service.id}>
              <TouchableOpacity style={styles.serviceContainer}>
                <Image source={service.image} style={styles.iconDogWalking} />
              </TouchableOpacity>
              <View style={{width: 110}}>
                <Text style={styles.serviceCardText}>{service.text}</Text>
              </View>
            </View>
          ))}
          <TouchableOpacity style={styles.serviceContainer}>
            <PlusCircle name="plus-circle" size={70} color="#FFCB3B" />
          </TouchableOpacity>
        </View>
        <View style={styles.viewAndServiceContainer}>
          <Text style={styles.services}>Booking Request</Text>
          <TouchableOpacity style={styles.viewContainer}>
            <Text style={styles.view}>View All</Text>
            <Icon
              name="angle-right"
              size={16}
              color="#FD1B1B"
              style={styles.angleRight}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bookingRequestCardContainer}>
          <View style={styles.bookingRequestCard}>
            <View style={styles.avatarAndDate}>
              <View style={styles.avatarContainer}>
                <Image source={Images.avatar} style={styles.avatar} />
                <View style={{marginLeft: 8}}>
                  <Text style={styles.bookingName}>Anne Glim</Text>
                  <Text style={styles.bookingService}>DOG WALKING</Text>
                </View>
              </View>
              <View>
                <Text style={styles.date}>Jan 03</Text>
                <Text style={styles.time}>6:30PM</Text>
              </View>
            </View>
            <View style={styles.addressContainer}>
              <Icon name="map-marker-alt" size={16} color="black" />
              <Text style={styles.addressText}>1077 Brown Bear Drive</Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.btnsCard}>
              <TouchableOpacity style={styles.declineCard}>
                <Text style={styles.decline}>Decline</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.acceptCard}>
                <Text style={styles.acceptText}>Accept</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bookingRequestCard}>
            <View style={styles.avatarAndDate}>
              <View style={styles.avatarContainer}>
                <Image source={Images.avatar} style={styles.avatar} />
                <View style={{marginLeft: 8}}>
                  <Text style={styles.bookingName}>Anne Glim</Text>
                  <Text style={styles.bookingService}>DOG WALKING</Text>
                </View>
              </View>
              <View>
                <Text style={styles.date}>Jan 03</Text>
                <Text style={styles.time}>6:30PM</Text>
              </View>
            </View>
            <View style={styles.addressContainer}>
              <Icon name="map-marker-alt" size={16} color="black" />
              <Text style={styles.addressText}>1077 Brown Bear Drive</Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.btnsCard}>
              <TouchableOpacity style={styles.declineCard}>
                <Text style={styles.decline}>Decline</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.acceptCard}>
                <Text style={styles.acceptText}>Accept</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bookingRequestCard}>
            <View style={styles.avatarAndDate}>
              <View style={styles.avatarContainer}>
                <Image source={Images.avatar} style={styles.avatar} />
                <View style={{marginLeft: 8}}>
                  <Text style={styles.bookingName}>Anne Glim</Text>
                  <Text style={styles.bookingService}>DOG WALKING</Text>
                </View>
              </View>
              <View>
                <Text style={styles.date}>Jan 03</Text>
                <Text style={styles.time}>6:30PM</Text>
              </View>
            </View>
            <View style={styles.addressContainer}>
              <Icon name="map-marker-alt" size={16} color="black" />
              <Text style={styles.addressText}>1077 Brown Bear Drive</Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.btnsCard}>
              <TouchableOpacity style={styles.declineCard}>
                <Text style={styles.decline}>Decline</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.acceptCard}>
                <Text style={styles.acceptText}>Accept</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
