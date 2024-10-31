import { View, Text } from "react-native";
import CustomButton from "@/components/CustomButton";

const openPaymentSheet = () => {};

const Payment = () => {
  return (
    <>
      <CustomButton
        title="Confirm Ride"
        className="my-10"
        onPress={openPaymentSheet}
      />
    </>
  );
};

export default Payment;
