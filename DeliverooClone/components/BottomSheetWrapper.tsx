import { View, StyleSheet } from "react-native";
import React, { forwardRef, useCallback, useMemo } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import LongButton from "./Buttons/LongButton";
import Colors from "../constants/Colors";

type BottomSheetWrapperProps = {
  snapPoints?: string[];
  children: React.ReactNode;
};

export type Ref = BottomSheetModal;

const BottomSheetWrapper = forwardRef<Ref, BottomSheetWrapperProps>(
  ({ snapPoints = ["50%"], children }, ref) => {
    const memoizedSnapPoints = useMemo(() => snapPoints, []);

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
        snapPoints={memoizedSnapPoints}
        overDragResistanceFactor={0}
        backdropComponent={renderBackdrop}
      >
        <View style={styles.contentContainer}>
          {children}
          <LongButton title="Dismiss" onPress={() => dismiss()} />
        </View>
      </BottomSheetModal>
    );
  }
);

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
  },
});

export default BottomSheetWrapper;
