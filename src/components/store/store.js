import { create } from "zustand"; // create로 zustand를 불러옵니다.
import { devtools } from "zustand/middleware"; // redux devtools 확인용

// zustand 기본
// const useStore = create((set) => ({
// 	bears: 0,
// 	data: [],
// 	increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
// 	removeAllBears: () => set({ bears: 0 }),

// 	addVideoId: (item) =>
// 		set((state) => ({ ...state.data, data: item.id.videoId })),
// }));

// zustand 기본
const useStore = create((set) => ({
	dropState: false,
	dragState: false,
	data: [],
	addVideo: (item) => set((state) => ({ data: [...state.data, item] })),
	removeVideo: (item) => set((state) => ({ data: item })),
	enableDrop: (item) => set({ dropState: item }),
	enableDrag: (item) => set({ dragState: item }),
}));

// zustand 기본 + redux devtools 확인용
// const store = (set) => ({
// 	data: [],
// 	addVideoId: (item) =>
// 		set((state) => ({ data: [...state.data, item] })),
// });

// const useStore = create(devtools(store));

export default useStore;
