import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Card: {
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 10,
    height: 150,
    width: '90%',
    backgroundColor: 'white',
    elevation: 5,
    borderWidth: 1,
    borderColor: 'grey',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    marginLeft: 20,
  },
  cardView: {
    flexDirection: 'row',
    marginTop: 20,
  },

  name: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  designation: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 10,
  },

  work: {
    fontSize: 18,
  },

  textView: {
    marginLeft: 20,
  },

  CardInfo: {
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 10,
    height: 350,
    width: '90%',
    backgroundColor: 'white',
    elevation: 5,
    borderWidth: 1,
    borderColor: 'grey',
  },
  bar: {
    height: 45,
    width: '100%',
    backgroundColor: 'black',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
  },

  persona: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  quote: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },

  description: {
    marginTop: 15,
    fontSize: 18,
    maxWidth: '90%',
    alignSelf: 'center',
  },
});

export default Styles;
