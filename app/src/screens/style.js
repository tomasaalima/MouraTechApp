import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background : {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#202024',
    padding: 24,
    paddingTop: 80,
    gap: 5
  },
  logo: {
    width: 40,
    height: 30,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 20 ,
  },
  subtitle: {
    color: '#ffffff66',
    fontWeight: 'normal',
    paddingBottom: 15,
  },
  classList: {
    flex: 1,
    width: '95%'
  },
  class: {
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#29292E',
    borderRadius: 5,
    height: 80,
    width: '100%',
    padding: 12
  },
  newClass: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    backgroundColor: '#00875F',
    borderRadius: 5,
    height: 50,
    width: '100%',
    padding: 12 
  },
  paragraph: {
    color: '#fff',
  },
  icon: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  returnBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 150,
  },
  billboard: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    backgroundColor: '#000',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    color: '#ffffff66',
    paddingLeft: 14,
  },
  badge: {
    borderWidth: 2,
    borderColor: '#202024',
    borderRadius: 5,
    width: 'auto',
    height: '100%'
  },
  textBadge: {
    color: '#fff',
    padding: 10,
    fontSize: 10,
    fontWeight: 'bold',
  },
  qtt: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 10,
  },
  remove: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    backgroundColor: '#AA2834',
    borderRadius: 5,
    height: 50,
    width: '100%',
    padding: 12 
  },
  membersList: {
    flex: 1, 
    flexDirection: 'column',
    gap: 10,
  },
  member:{
    flexDirection: 'row',
    width: '95%',
    height: 50,
    backgroundColor: '#29292E',
    borderRadius: 5,
  },
  memberName: {
    color: '#CCC',
  }
});