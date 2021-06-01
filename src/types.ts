export type SidebarTheme =
	| "red"
	| "blue"
	| "yellow"
	| "pink"
	| "indigo"
	| "orange"
	| "green"
export type AppTheme = "light" | "dark" | "system"

export type Theme = {
	sidebar: SidebarTheme
	app: AppTheme
}

export interface IStore {
	theme: Theme
	updateTheme({ sidebar, app }: Partial<Theme>): void
}
