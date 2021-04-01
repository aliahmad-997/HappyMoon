import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  hello: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: height * 0.06,
    marginLeft: width * 0.07,
  },
  locationInput: {
    fontSize: 16,
    height: 50,
    width: '87%',
    backgroundColor: '#fff',
    borderRadius: 6,
    alignSelf: 'center',
    paddingLeft: width * 0.035,
    elevation: 2,
    marginTop: height * 0.015,
  },
  mapMarker: {
    position: 'absolute',
    right: width * 0.11,
    top: height * 0.03,
    elevation: 3,
  },
  earningCard: {
    height: 145,
    width: '87%',
    alignSelf: 'center',
    borderRadius: 6,
    marginTop: height * 0.015,
  },
  myEarnings: {
    position: 'absolute',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    top: height * 0.037,
    bottom: 99.5,
  },
  money: {
    position: 'absolute',
    fontSize: 36,
    alignSelf: 'center',
    top: height * 0.075,
    color: '#fff',
    fontWeight: 'bold',
  },
  week: {
    position: 'absolute',
    fontSize: 14,
    color: '#FFCB3B',
    alignSelf: 'center',
    bottom: height * 0.02,
  },
  btnPayout: {
    height: 50,
    backgroundColor: '#fff',
    width: 137,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnPayoutText: {
    color: '#A5A5A5',
    fontSize: 16,
    fontWeight: 'bold',
  },
  payoutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '87%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  payoutFriday: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  services: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  view: {
    fontSize: 16,
    color: '#FD1B1B',
    fontWeight: 'bold',
  },
  viewContainer: {
    flexDirection: 'row',
  },
  angleRight: {
    paddingLeft: 10,
    marginTop: 1,
  },
  viewAndServiceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '87%',
    alignSelf: 'center',
    marginTop: 32,
  },
  serviceContainer: {
    height: 80,
    width: 100,
    backgroundColor: '#fff',
    borderRadius: 6,
    elevation: 5,
    marginBottom: 20,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainServiceContainer: {
    marginTop: 11,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 5,
  },
  iconDogWalking: {
    height: 33,
    width: 33,
  },
  serviceCardText: {
    fontSize: 14,
    textAlign: 'justify',
    marginLeft: 20,
  },
  addIcon: {
    elevation: 5,
    marginBottom: 20,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingRequestCard: {
    height: 137,
    width: 342,
    backgroundColor: 'white',
    borderRadius: 6,
    elevation: 5,
    marginBottom: 12,
  },

  bookingRequestCardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  avatar: {
    height: 39,
    width: 39,
    borderRadius: 19,
  },
  avatarContainer: {
    flexDirection: 'row',
  },
  avatarAndDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    width: '90%',
    alignSelf: 'center',
  },
  bookingName: {
    fontSize: 16,
    color: '#000000',
  },
  bookingService: {
    fontSize: 12,
    color: '#FD1B1B',
    textTransform: 'uppercase',
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  time: {
    fontSize: 12,
    color: '#000000',
    alignSelf: 'center',
  },
  addressContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 16,
  },
  addressText: {
    fontSize: 14,
    marginLeft: 5,
  },
  line: {
    width: 341,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderStyle: 'solid',
    marginTop: 12.5,
  },
  decline: {
    fontSize: 14,
    color: '#BC0808',
  },
  declineCard: {
    width: '50%',
    height: 39,
    borderRightWidth: 1,
    borderColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  acceptCard: {
    width: '50%',
    height: 39,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnsCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  acceptText: {
    fontSize: 14,
    color: '#236C23',
  },
});

export default styles;
