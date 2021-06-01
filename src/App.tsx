import * as React from "react"
import { observer } from "mobx-react"
import clsx from "clsx"

import { useStore } from "./context"

const SidebarTheme = observer(() => {
	const {
		theme: { sidebar },
		updateTheme,
	} = useStore()

	return (
		<>
			<h1 className="pl-4 text-5xl font-semibold text-gray-600">Color</h1>
			<div className="flex justify-around my-2">
				<button
					className={clsx(
						"w-10 h-10 bg-red-600 rounded-full focus:outline-none",
						{
							"ring-4 ring-offset-2 ring-red-500": sidebar === "red",
						},
					)}
					onClick={() => {
						updateTheme({
							sidebar: "red",
						})
					}}
				></button>
				<button
					className={clsx(
						"w-10 h-10 bg-blue-400 rounded-full focus:outline-none",
						{
							"ring-4 ring-offset-2 ring-blue-400": sidebar === "blue",
						},
					)}
					onClick={() => {
						updateTheme({
							sidebar: "blue",
						})
					}}
				></button>
				<button
					className={clsx(
						"w-10 h-10 bg-yellow-400 rounded-full focus:outline-none",
						{
							"ring-4 ring-offset-2 ring-yellow-400": sidebar === "yellow",
						},
					)}
					onClick={() => {
						updateTheme({
							sidebar: "yellow",
						})
					}}
				></button>
				<button
					className={clsx(
						"w-10 h-10 bg-pink-500 rounded-full focus:outline-none",
						{
							"ring-4 ring-offset-2 ring-pink-500": sidebar === "pink",
						},
					)}
					onClick={() => {
						updateTheme({
							sidebar: "pink",
						})
					}}
				></button>
				<button
					className={clsx(
						"w-10 h-10 bg-indigo-600 rounded-full focus:outline-none",
						{
							"ring-4 ring-offset-2 ring-indigo-600": sidebar === "indigo",
						},
					)}
					onClick={() => {
						updateTheme({
							sidebar: "indigo",
						})
					}}
				></button>
				<button
					className={clsx(
						"w-10 h-10 bg-yellow-500 rounded-full focus:outline-none",
						{
							"ring-4 ring-offset-2 ring-yellow-500": sidebar === "orange",
						},
					)}
					onClick={() => {
						updateTheme({
							sidebar: "orange",
						})
					}}
				></button>
				<button
					className={clsx(
						"w-10 h-10 bg-green-500 rounded-full focus:outline-none",
						{
							"ring-4 ring-offset-2 ring-green-500": sidebar === "green",
						},
					)}
					onClick={() => {
						updateTheme({
							sidebar: "green",
						})
					}}
				></button>
			</div>
		</>
	)
})

export default observer(function App() {
	return <SidebarTheme />
})
