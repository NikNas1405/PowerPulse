// import { createSelector } from 'reselect';

// const selectDiary = (state) => state.diary;

// export const selectDailyCaloryIntake = createSelector(
//   [selectDiary],
//   (diary) => diary.dailyCaloryIntake
// );

// export const selectDailyNormOfSports = createSelector(
//   [selectDiary],
//   (diary) => diary.dailyNormOfSports
// );

// export const selectCaloriesConsumed = createSelector(
//   [selectDiary],
//   (diary) => diary.caloriesConsumed
// );

// export const selectCaloriesBurned = createSelector(
//   [selectDiary],
//   (diary) => diary.caloriesBurned
// );

// export const selectRestOfCalories = createSelector(
//   [selectDiary],
//   (diary) => diary.restOfCalories
// );

// export const selectRestOfSports = createSelector(
//   [selectDiary],
//   (diary) => diary.restOfSports
// );

// export const selectWarningCalories = createSelector(
//   [selectDiary],
//   (diary) => diary.warningCalories
// );

// export const selectEncouragementSports = createSelector(
//   [selectDiary],
//   (diary) => diary.encouragementSports
// );
export const selectDiaryInformation = (state) =>
  state.diary.allDiaryInformation;

export const selectConsumedProducts = (state) =>
  state.diary.consumedProductsArray;

export const selectCompletedExercisesArray = (state) =>
  state.diary.completedExercisesArray;

export const selectDiaryIsLoading = (state) => state.diary.isLoading;

export const selectDiaryError = (state) => state.diary.error;
