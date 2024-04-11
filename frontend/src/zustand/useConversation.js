import { create } from "zustand";

export const useConversation = create((set) => ({
  selectedConversation: null,
  setselectedConversation: (selectedConversation) =>
    set(() => ({
      selectedConversation: selectedConversation,
    })),

  message: [],
  setMessage: (message) =>
    set(() => ({
      message: message,
    })),
}));
