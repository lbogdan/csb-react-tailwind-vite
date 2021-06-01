import { observable, action, makeObservable } from "mobx"
import { Theme, IStore } from "./types"

export class Store implements IStore {
	theme: Theme = {
		sidebar: "red",
		app: "light",
	}
	constructor() {
		makeObservable(this, {
			theme: observable,
			updateTheme: action.bound,
		})
	}

	updateTheme({ sidebar, app }: Partial<Theme>) {
		if (sidebar) this.theme.sidebar = sidebar
		if (app) this.theme.app = app
	}
}

export const store = new Store()
