import { create } from "zustand"; // create로 zustand를 불러옵니다.
import { devtools } from "zustand/middleware"; // redux devtools 확인용

// zustand 기본
const useStore = create((set) => ({
	bears: 0,
	increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
	removeAllBears: () => set({ bears: 0 }),
}));

// zustand 기본 + redux devtools 확인용
// const store = (set) => ({
// 	bears: 0,
// 	increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
// 	removeAllBears: () => set({ bears: 0 }),
// });

// const useStore = create(devtools(store));

export default useStore;
