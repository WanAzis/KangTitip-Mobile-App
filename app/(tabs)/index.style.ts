import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '@/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: COLORS.offwhite,
  },
  sliderContainer: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: SIZES.medium,
    width: 350,
    height: 150,
    backgroundColor: COLORS.offwhite,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: SIZES.small,
  },
  container1: {
    marginVertical: SIZES.large,
    marginLeft: SIZES.medium,
    backgroundColor: COLORS.offwhite,
  },
  container2: {
    marginLeft: SIZES.medium,
    backgroundColor: COLORS.offwhite,
  },
  title: {
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
    color: COLORS.green,
    backgroundColor: COLORS.offwhite,
  },
  titleRow: {

  },
  productRow: {
    marginVertical: SIZES.medium,
    backgroundColor: COLORS.offwhite,
  }
});

export default styles;