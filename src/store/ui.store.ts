import { create } from 'zustand';

type UIState = {
	sideMenuStatus: boolean;
	cartModalStatus: boolean;
	userModalStatus: boolean;
	lightboxStatus: boolean;
};

type UIActions = {
	setCartStatus: (toggle: boolean | ((s: boolean) => boolean)) => void;
	setMenuStatus: (toggle: boolean | ((s: boolean) => boolean)) => void;
	setProfileStatus: (toggle: boolean | ((s: boolean) => boolean)) => void;
	setLightboxStatus: (toggle: boolean | ((s: boolean) => boolean)) => void;
};

type InitUIStore = UIState & UIActions;

export const useUIStore = create<InitUIStore>((set, get) => ({
	sideMenuStatus: false,
	cartModalStatus: false,
	userModalStatus: false,
	lightboxStatus: false,
	setCartStatus: toggle =>
		set({
			cartModalStatus:
				typeof toggle === 'boolean' ? toggle : toggle(get().cartModalStatus)
		}),
	setMenuStatus: toggle =>
		set({
			sideMenuStatus: typeof toggle === 'boolean' ? toggle : toggle(get().sideMenuStatus)
		}),
	setProfileStatus: toggle =>
		set({
			userModalStatus:
				typeof toggle === 'boolean' ? toggle : toggle(get().userModalStatus)
		}),
	setLightboxStatus: toggle =>
		set({
			lightboxStatus: typeof toggle === 'boolean' ? toggle : toggle(get().lightboxStatus)
		})
}));
