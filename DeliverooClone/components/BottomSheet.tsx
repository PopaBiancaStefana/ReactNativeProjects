import { View, Text, Button, StyleSheet } from "react-native";
import React, { forwardRef, useCallback, useMemo } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import Subheader from "./UI/Subheader";
import LongButton from "./UI/LongButton";
import TabButton from "./UI/TabButton";

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );
  const { dismiss } = useBottomSheetModal();

  return (
    <BottomSheetModal
      handleIndicatorStyle={{ display: "none" }}
      ref={ref}
      snapPoints={snapPoints}
      overDragResistanceFactor={0}
      backdropComponent={renderBackdrop}
    >
      <View style={styles.contentContainer}>
        <View style={styles.toggle}>
          <TabButton title="Delivery" isActive={true} />
          <TabButton title="Pickup" isActive={false} />
        </View>
        <Text style={styles.subheader}>Your Location</Text>
        <Subheader
          title="Your Location"
          icon="location-outline"
          link="/(modal)/location-search"
        />
        <Text style={styles.subheader}>Arrival Time</Text>
        <Subheader title="Now" icon="stopwatch-outline" link="/" />

        <LongButton title="Dismiss" onPress={() => dismiss()} />
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 32,
  },
  subheader: {
    fontSize: 16,
    fontWeight: "600",
    margin: 16,
  },
});

export default BottomSheet;
