import { create } from "zustand";

type OmniUiState = {
	commandPaletteOpen: boolean;
	sidebarOpen: boolean;
	toggleCommandPalette: () => void;
	toggleSidebar: () => void;
};

export const useOmniUiStore = create<OmniUiState>((set) => ({
	commandPaletteOpen: false,
	sidebarOpen: true,
	toggleCommandPalette: () =>
		set((state) => ({ commandPaletteOpen: !state.commandPaletteOpen })),
	toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));
